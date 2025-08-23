import { supabase } from '../lib/supabase';
import bcrypt from 'bcryptjs';

// Admin Authentication Service
export const adminAuthService = {
  // Login admin user
  async login(email, password) {
    try {
      console.log('Attempting admin login for:', email);
      
      // Get admin user from database
      const { data: adminUser, error: fetchError } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .eq('is_active', true)
        .single();

      if (fetchError) {
        console.error('Error fetching admin user:', fetchError);
        throw new Error('Invalid credentials');
      }

      if (!adminUser) {
        throw new Error('Invalid credentials');
      }

      // Verify password (in production, use proper bcrypt comparison)
      // For now, we'll use a simple comparison for the demo
      const isValidPassword = await this.verifyPassword(password, adminUser.password_hash);
      
      if (!isValidPassword) {
        throw new Error('Invalid credentials');
      }

      // Create session token
      const sessionToken = this.generateSessionToken();
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 24); // 24 hour session

      // Store session in database (optional for demo)
      try {
        const { error: sessionError } = await supabase
          .from('admin_sessions')
          .insert({
            admin_user_id: adminUser.id,
            session_token: sessionToken,
            expires_at: expiresAt.toISOString(),
            ip_address: '127.0.0.1', // In production, get from request
            user_agent: navigator.userAgent
          });

        if (sessionError) {
          console.warn('Session storage failed (continuing anyway):', sessionError);
        }
      } catch (sessionError) {
        console.warn('Session storage failed (continuing anyway):', sessionError);
      }

      // Update last login (optional for demo)
      try {
        await supabase
          .from('admin_users')
          .update({ last_login: new Date().toISOString() })
          .eq('id', adminUser.id);
      } catch (updateError) {
        console.warn('Last login update failed (continuing anyway):', updateError);
      }

      // Store session in localStorage
      const sessionData = {
        token: sessionToken,
        adminUser: {
          id: adminUser.id,
          email: adminUser.email,
          name: adminUser.name,
          role: adminUser.role
        },
        expiresAt: expiresAt.toISOString()
      };

      localStorage.setItem('adminSession', JSON.stringify(sessionData));

      console.log('Admin login successful for:', email);
      return {
        success: true,
        adminUser: sessionData.adminUser,
        sessionToken
      };

    } catch (error) {
      console.error('Admin login failed:', error);
      throw error;
    }
  },

  // Verify password (simplified for demo - in production use proper bcrypt)
  async verifyPassword(password, hash) {
    // For demo purposes, we'll use a simple comparison
    // In production, use: return await bcrypt.compare(password, hash);
    
    // Demo password: admin123
    const demoHash = '$2a$10$rQZ8K9vX2mN3pL4qR5sT6uV7wX8yZ9aA0bB1cC2dE3fF4gG5hH6iI7jJ8kK9lL0mM1nN2oO3pP4qQ5rR6sS7tT8uU9vV0wW1xX2yY3zZ';
    
    if (password === 'admin123' && hash === demoHash) {
      return true;
    }
    
    return false;
  },

  // Generate session token
  generateSessionToken() {
    return 'admin_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  },

  // Check if admin is authenticated
  async isAuthenticated() {
    try {
      const sessionData = localStorage.getItem('adminSession');
      if (!sessionData) {
        return false;
      }

      const session = JSON.parse(sessionData);
      
      // Check if session is expired
      if (new Date(session.expiresAt) < new Date()) {
        this.logout();
        return false;
      }

      // For demo purposes, we'll skip database verification
      // In production, you should verify the session in the database
      return true;
    } catch (error) {
      console.error('Error checking authentication:', error);
      this.logout();
      return false;
    }
  },

  // Get current admin user
  getCurrentAdmin() {
    try {
      const sessionData = localStorage.getItem('adminSession');
      if (!sessionData) {
        return null;
      }

      const session = JSON.parse(sessionData);
      
      // Check if session is expired
      if (new Date(session.expiresAt) < new Date()) {
        this.logout();
        return null;
      }

      return session.adminUser;
    } catch (error) {
      console.error('Error getting current admin:', error);
      return null;
    }
  },

  // Logout admin
  async logout() {
    try {
      const sessionData = localStorage.getItem('adminSession');
      if (sessionData) {
        const session = JSON.parse(sessionData);
        
        // Remove session from database (optional for demo)
        try {
          await supabase
            .from('admin_sessions')
            .delete()
            .eq('session_token', session.token);
        } catch (dbError) {
          console.warn('Session cleanup failed (continuing anyway):', dbError);
        }
      }
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      // Clear localStorage
      localStorage.removeItem('adminSession');
      localStorage.removeItem('adminAuthenticated');
      localStorage.removeItem('adminEmail');
    }
  },

  // Create new admin user (for super admins)
  async createAdmin(email, password, name, role = 'admin') {
    try {
      // Hash password
      const passwordHash = await bcrypt.hash(password, 10);
      
      const { data, error } = await supabase
        .from('admin_users')
        .insert({
          email,
          password_hash: passwordHash,
          name,
          role
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      return { success: true, adminUser: data };
    } catch (error) {
      console.error('Error creating admin user:', error);
      throw error;
    }
  },

  // Get all admin users (for super admins)
  async getAdminUsers() {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('id, email, name, role, is_active, last_login, created_at')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error fetching admin users:', error);
      throw error;
    }
  },

  // Update admin user
  async updateAdmin(id, updates) {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        throw error;
      }

      return { success: true, adminUser: data };
    } catch (error) {
      console.error('Error updating admin user:', error);
      throw error;
    }
  },

  // Delete admin user
  async deleteAdmin(id) {
    try {
      const { error } = await supabase
        .from('admin_users')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      return { success: true };
    } catch (error) {
      console.error('Error deleting admin user:', error);
      throw error;
    }
  }
};
