import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from '../components';
import Layout from '../components/Layout';
import { supabase } from '../lib/supabase';
import { adminAuthService } from '../services/adminAuthService';

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('patients'); // 'patients', 'dentists', or 'inquiries'
  const [patientLeads, setPatientLeads] = useState([]);
  const [dentistLeads, setDentistLeads] = useState([]);
  const [generalInquiries, setGeneralInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedDentist, setSelectedDentist] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'dentist', 'patient', 'inquiry'
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is authenticated
    const checkAuth = async () => {
      const isAuthenticated = await adminAuthService.isAuthenticated();
      if (!isAuthenticated) {
        navigate('/admin/login');
        return;
      }
      fetchLeads();
    };
    
    checkAuth();
  }, [navigate]);

  const fetchLeads = async () => {
    try {
      setIsLoading(true);
      
      // Test database connection first
      console.log('Testing database connection...');
      
      // Fetch patient leads (contact form submissions)
      const { data: patientData, error: patientError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (patientError) {
        console.error('Patient leads fetch error:', patientError);
        throw patientError;
      }
      
      console.log('Patient leads fetched:', patientData?.length || 0);
      setPatientLeads(patientData || []);

      // Fetch dentist leads (clinic registrations)
      const { data: dentistData, error: dentistError } = await supabase
        .from('dentist_clinics')
        .select('*')
        .order('created_at', { ascending: false });

      if (dentistError) {
        console.error('Dentist leads fetch error:', dentistError);
        throw dentistError;
      }
      
      console.log('Dentist leads fetched:', dentistData?.length || 0);
      setDentistLeads(dentistData || []);

      // Fetch general inquiries
      const { data: inquiryData, error: inquiryError } = await supabase
        .from('general_inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (inquiryError) {
        console.error('General inquiries fetch error:', inquiryError);
        throw inquiryError;
      }
      
      console.log('General inquiries fetched:', inquiryData?.length || 0);
      setGeneralInquiries(inquiryData || []);
      
      setError(''); // Clear any previous errors
    } catch (err) {
      console.error('Error fetching leads:', err);
      setError(`Failed to fetch leads: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await adminAuthService.logout();
    navigate('/admin/login');
  };

  const openDetailsModal = (item, type) => {
    if (type === 'dentist') {
      setSelectedDentist(item);
      setSelectedPatient(null);
      setSelectedInquiry(null);
      setModalType('dentist');
    } else if (type === 'patient') {
      setSelectedPatient(item);
      setSelectedDentist(null);
      setSelectedInquiry(null);
      setModalType('patient');
    } else if (type === 'inquiry') {
      setSelectedInquiry(item);
      setSelectedDentist(null);
      setSelectedPatient(null);
      setModalType('inquiry');
    }
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setSelectedDentist(null);
    setSelectedPatient(null);
    setSelectedInquiry(null);
    setModalType('');
    setShowDetailsModal(false);
  };

  const updatePatientLeadStatus = async (id, status) => {
    try {
      console.log('Updating patient lead:', { id, status });
      
      const { data, error } = await supabase
        .from('contact_submissions')
        .update({ status })
        .eq('id', id)
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      console.log('Update successful:', data);
      
      // Update local state
      setPatientLeads(prev => prev.map(lead => 
        lead.id === id ? { ...lead, status } : lead
      ));
      
      setError(''); // Clear any previous errors
    } catch (err) {
      console.error('Error updating patient lead:', err);
      setError(`Failed to update patient lead status: ${err.message}`);
    }
  };

  const deletePatientLead = async (id) => {
    if (!window.confirm('Are you sure you want to delete this patient lead?')) return;

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      // Update local state
      setPatientLeads(prev => prev.filter(lead => lead.id !== id));
    } catch (err) {
      setError('Failed to delete patient lead');
      console.error('Error deleting patient lead:', err);
    }
  };

  const updateDentistLeadStatus = async (id, status) => {
    try {
      const { error } = await supabase
        .from('dentist_clinics')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      
      // Update local state
      setDentistLeads(prev => prev.map(lead => 
        lead.id === id ? { ...lead, status } : lead
      ));
    } catch (err) {
      setError('Failed to update dentist lead status');
      console.error('Error updating dentist lead:', err);
    }
  };

  const deleteDentistLead = async (id) => {
    if (!window.confirm('Are you sure you want to delete this dentist lead?')) return;

    try {
      const { error } = await supabase
        .from('dentist_clinics')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      // Update local state
      setDentistLeads(prev => prev.filter(lead => lead.id !== id));
    } catch (err) {
      setError('Failed to delete dentist lead');
      console.error('Error deleting dentist lead:', err);
    }
  };

  const updateGeneralInquiryStatus = async (id, status) => {
    try {
      console.log('Updating general inquiry:', { id, status });
      
      const { data, error } = await supabase
        .from('general_inquiries')
        .update({ status })
        .eq('id', id)
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      console.log('Update successful:', data);
      
      // Update local state
      setGeneralInquiries(prev => prev.map(inquiry => 
        inquiry.id === id ? { ...inquiry, status } : inquiry
      ));
      
      setError(''); // Clear any previous errors
    } catch (err) {
      console.error('Error updating general inquiry:', err);
      setError(`Failed to update general inquiry status: ${err.message}`);
    }
  };

  const deleteGeneralInquiry = async (id) => {
    if (!window.confirm('Are you sure you want to delete this general inquiry?')) return;

    try {
      const { error } = await supabase
        .from('general_inquiries')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      // Update local state
      setGeneralInquiries(prev => prev.filter(inquiry => inquiry.id !== id));
    } catch (err) {
      setError('Failed to delete general inquiry');
      console.error('Error deleting general inquiry:', err);
    }
  };

  const filteredPatientLeads = patientLeads.filter(lead => {
    const matchesSearch = 
      lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.message?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.treatment_type?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || lead.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const filteredDentistLeads = dentistLeads.filter(lead => {
    const matchesSearch = 
      lead.dentist_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.clinic_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.city?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || lead.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const filteredGeneralInquiries = generalInquiries.filter(inquiry => {
    const matchesSearch = 
      inquiry.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.message?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || inquiry.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  // Get current active tab's filtered leads for status filter options
  const getCurrentFilterOptions = () => {
    if (activeTab === 'patients') {
      const statuses = [...new Set(patientLeads.map(lead => lead.status || 'new'))];
      return statuses;
    } else {
      const statuses = [...new Set(dentistLeads.map(lead => lead.status || 'pending'))];
      return statuses;
    }
  };

  // Format treatment type for display
  const formatTreatmentType = (treatmentType) => {
    if (!treatmentType) return 'Not specified';
    
    const typeMap = {
      'dental-implant': 'Dental Implant',
      'basal-implant': 'Basal Implant',
      'all-on-4': 'All-on-4 Implants',
      'zygoma-implant': 'Zygoma Implant',
      'consultation': 'General Consultation',
      'other': 'Other'
    };
    
    return typeMap[treatmentType] || treatmentType.replace('-', ' ');
  };

  const getStatusBadge = (status, type = 'patient') => {
    if (type === 'patient') {
      const statusConfig = {
        new: { color: 'bg-blue-100 text-blue-800', text: 'New' },
        contacted: { color: 'bg-yellow-100 text-yellow-800', text: 'Contacted' },
        converted: { color: 'bg-green-100 text-green-800', text: 'Converted' },
        lost: { color: 'bg-red-100 text-red-800', text: 'Lost' }
      };

      const config = statusConfig[status] || statusConfig.new;
      return (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.color}`}>
          {config.text}
        </span>
      );
    } else {
      // Dentist status values
      const statusConfig = {
        pending: { color: 'bg-yellow-100 text-yellow-800', text: 'Pending' },
        approved: { color: 'bg-green-100 text-green-800', text: 'Approved' },
        rejected: { color: 'bg-red-100 text-red-800', text: 'Rejected' },
        active: { color: 'bg-blue-100 text-blue-800', text: 'Active' },
        inactive: { color: 'bg-gray-100 text-gray-800', text: 'Inactive' }
      };

      const config = statusConfig[status] || statusConfig.pending;
      return (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.color}`}>
          {config.text}
        </span>
      );
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading leads...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="mt-2 text-sm sm:text-base text-gray-600">Manage contact form leads</p>
              </div>
              <button
                onClick={handleLogout}
                className="mt-4 sm:mt-0 bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base"
              >
                Logout
              </button>
            </div>

            {/* Stats */}
                         <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-6 mb-8">
               <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
                 <h3 className="text-sm sm:text-lg font-semibold text-gray-900">Patient Leads</h3>
                 <p className="text-xl sm:text-3xl font-bold text-cyan-600">{patientLeads.length}</p>
               </div>
               <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
                 <h3 className="text-sm sm:text-lg font-semibold text-gray-900">Dentist Leads</h3>
                 <p className="text-xl sm:text-3xl font-bold text-teal-600">{dentistLeads.length}</p>
               </div>
               <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
                 <h3 className="text-sm sm:text-lg font-semibold text-gray-900">General Inquiries</h3>
                 <p className="text-xl sm:text-3xl font-bold text-purple-600">{generalInquiries.length}</p>
               </div>
               <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
                 <h3 className="text-sm sm:text-lg font-semibold text-gray-900">New Leads</h3>
                 <p className="text-xl sm:text-3xl font-bold text-blue-600">
                   {patientLeads.filter(lead => lead.status === 'new').length + 
                    dentistLeads.filter(lead => lead.status === 'pending').length +
                    generalInquiries.filter(inquiry => inquiry.status === 'new').length}
                 </p>
               </div>
               <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
                 <h3 className="text-sm sm:text-lg font-semibold text-gray-900">Converted</h3>
                 <p className="text-xl sm:text-3xl font-bold text-green-600">
                   {patientLeads.filter(lead => lead.status === 'converted').length + 
                    dentistLeads.filter(lead => lead.status === 'approved').length +
                    generalInquiries.filter(inquiry => inquiry.status === 'converted').length}
                 </p>
               </div>
             </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex flex-wrap sm:flex-nowrap space-x-2 sm:space-x-8 px-4 sm:px-6 overflow-x-auto" aria-label="Tabs">
                                     <button
                     onClick={() => {
                       setActiveTab('patients');
                       setFilterStatus('all');
                     }}
                     className={`py-3 sm:py-4 px-2 sm:px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap ${
                       activeTab === 'patients'
                         ? 'border-cyan-500 text-cyan-600'
                         : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                     }`}
                   >
                     Patient Leads ({patientLeads.length})
                   </button>
                   <button
                     onClick={() => {
                       setActiveTab('dentists');
                       setFilterStatus('all');
                     }}
                     className={`py-3 sm:py-4 px-2 sm:px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap ${
                       activeTab === 'dentists'
                         ? 'border-cyan-500 text-cyan-600'
                         : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                     }`}
                   >
                     Dentist Leads ({dentistLeads.length})
                   </button>
                   <button
                     onClick={() => {
                       setActiveTab('inquiries');
                       setFilterStatus('all');
                     }}
                     className={`py-3 sm:py-4 px-2 sm:px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap ${
                       activeTab === 'inquiries'
                         ? 'border-cyan-500 text-cyan-600'
                         : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                     }`}
                   >
                     General Inquiries ({generalInquiries.length})
                   </button>
                </nav>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search leads..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                                 <div>
                   <select
                     value={filterStatus}
                     onChange={(e) => setFilterStatus(e.target.value)}
                     className="w-full sm:w-auto px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base"
                   >
                     <option value="all">All Status</option>
                     {activeTab === 'patients' ? (
                       <>
                         <option value="new">New</option>
                         <option value="contacted">Contacted</option>
                         <option value="converted">Converted</option>
                         <option value="lost">Lost</option>
                       </>
                     ) : activeTab === 'dentists' ? (
                       <>
                         <option value="pending">Pending</option>
                         <option value="approved">Approved</option>
                         <option value="rejected">Rejected</option>
                         <option value="active">Active</option>
                         <option value="inactive">Inactive</option>
                       </>
                     ) : (
                       <>
                         <option value="new">New</option>
                         <option value="contacted">Contacted</option>
                         <option value="converted">Converted</option>
                         <option value="lost">Lost</option>
                       </>
                     )}
                   </select>
                 </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            {/* Patient Leads Table */}
            {activeTab === 'patients' && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Patient Name
                        </th>
                        <th className="hidden sm:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="hidden md:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Treatment Type
                        </th>
                        <th className="hidden lg:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Message
                        </th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="hidden md:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredPatientLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-gray-50">
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {lead.name}
                            </div>
                            <div className="sm:hidden text-xs text-gray-500 mt-1">
                              {lead.email}
                            </div>
                          </td>
                          <td className="hidden sm:table-cell px-3 sm:px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{lead.email}</div>
                            {lead.phone && (
                              <div className="text-sm text-gray-500">{lead.phone}</div>
                            )}
                          </td>
                                                     <td className="hidden md:table-cell px-3 sm:px-6 py-4 whitespace-nowrap">
                             <div className="text-sm text-gray-900">
                               {formatTreatmentType(lead.treatment_type)}
                             </div>
                           </td>
                          <td className="hidden lg:table-cell px-3 sm:px-6 py-4">
                            <div className="text-sm text-gray-900 max-w-xs truncate">
                              {lead.message}
                            </div>
                          </td>
                                                     <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                             {getStatusBadge(lead.status || 'new', 'patient')}
                           </td>
                           <td className="hidden md:table-cell px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                             {new Date(lead.created_at).toLocaleDateString()}
                           </td>
                           <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                             <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
                               <select
                                 value={lead.status || 'new'}
                                 onChange={(e) => updatePatientLeadStatus(lead.id, e.target.value)}
                                 className="text-xs border border-gray-300 rounded px-1 sm:px-2 py-1 w-full sm:w-auto"
                               >
                                 <option value="new">New</option>
                                 <option value="contacted">Contacted</option>
                                 <option value="converted">Converted</option>
                                 <option value="lost">Lost</option>
                               </select>
                              <div className="flex space-x-1 sm:space-x-2">
                                <button
                                  onClick={() => openDetailsModal(lead, 'patient')}
                                  className="text-blue-600 hover:text-blue-900 text-xs p-1 rounded hover:bg-blue-50 flex-1 sm:flex-none"
                                  title="View Details"
                                >
                                  <i className="fas fa-eye"></i>
                                </button>
                                <button
                                  onClick={() => deletePatientLead(lead.id)}
                                  className="text-red-600 hover:text-red-900 text-xs p-1 rounded hover:bg-red-50 flex-1 sm:flex-none"
                                  title="Delete"
                                >
                                  <i className="fas fa-trash"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {filteredPatientLeads.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No patient leads found</p>
                  </div>
                )}
              </div>
            )}

            {/* Dentist Leads Table */}
            {activeTab === 'dentists' && (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Dentist/Clinic
                        </th>
                        <th className="hidden sm:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="hidden md:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                        <th className="hidden lg:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Specialization
                        </th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="hidden md:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredDentistLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-gray-50">
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {lead.dentist_name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {lead.clinic_name}
                            </div>
                            <div className="sm:hidden text-xs text-gray-500 mt-1">
                              {lead.email}
                            </div>
                          </td>
                          <td className="hidden sm:table-cell px-3 sm:px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{lead.email}</div>
                            {lead.phone && (
                              <div className="text-sm text-gray-500">{lead.phone}</div>
                            )}
                          </td>
                          <td className="hidden md:table-cell px-3 sm:px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{lead.city}, {lead.state}</div>
                          </td>
                          <td className="hidden lg:table-cell px-3 sm:px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {lead.specialization}
                            </div>
                            <div className="text-sm text-gray-500">
                              {lead.experience} experience
                            </div>
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                            {getStatusBadge(lead.status || 'pending', 'dentist')}
                          </td>
                          <td className="hidden md:table-cell px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(lead.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
                              <select
                                value={lead.status || 'pending'}
                                onChange={(e) => updateDentistLeadStatus(lead.id, e.target.value)}
                                className="text-xs border border-gray-300 rounded px-1 sm:px-2 py-1 w-full sm:w-auto"
                              >
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                              </select>
                              <div className="flex space-x-1 sm:space-x-2">
                                <button
                                  onClick={() => openDetailsModal(lead, 'dentist')}
                                  className="text-blue-600 hover:text-blue-900 text-xs p-1 rounded hover:bg-blue-50 flex-1 sm:flex-none"
                                  title="View Details"
                                >
                                  <i className="fas fa-eye"></i>
                                </button>
                                <button
                                  onClick={() => deleteDentistLead(lead.id)}
                                  className="text-red-600 hover:text-red-900 text-xs p-1 rounded hover:bg-red-50 flex-1 sm:flex-none"
                                  title="Delete"
                                >
                                  <i className="fas fa-trash"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {filteredDentistLeads.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No dentist leads found</p>
                  </div>
                                 )}
               </div>
             )}

             {/* General Inquiries Table */}
             {activeTab === 'inquiries' && (
               <div className="bg-white rounded-lg shadow overflow-hidden">
                 <div className="overflow-x-auto">
                   <table className="min-w-full divide-y divide-gray-200">
                     <thead className="bg-gray-50">
                       <tr>
                         <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Contact Info
                         </th>
                         <th className="hidden md:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Subject
                         </th>
                         <th className="hidden lg:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Message
                         </th>
                         <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Status
                         </th>
                         <th className="hidden md:table-cell px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Date
                         </th>
                         <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Actions
                         </th>
                       </tr>
                     </thead>
                     <tbody className="bg-white divide-y divide-gray-200">
                       {filteredGeneralInquiries.map((inquiry) => (
                         <tr key={inquiry.id} className="hover:bg-gray-50">
                           <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                             <div className="text-sm font-medium text-gray-900">
                               {inquiry.name}
                             </div>
                             <div className="text-sm text-gray-900">{inquiry.email}</div>
                             {inquiry.phone && (
                               <div className="text-sm text-gray-500">{inquiry.phone}</div>
                             )}
                           </td>
                           <td className="hidden md:table-cell px-3 sm:px-6 py-4 whitespace-nowrap">
                             <div className="text-sm text-gray-900">
                               {inquiry.subject}
                             </div>
                           </td>
                           <td className="hidden lg:table-cell px-3 sm:px-6 py-4">
                             <div className="text-sm text-gray-900 max-w-xs truncate">
                               {inquiry.message}
                             </div>
                           </td>
                           <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                             {getStatusBadge(inquiry.status || 'new', 'patient')}
                           </td>
                           <td className="hidden md:table-cell px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                             {new Date(inquiry.created_at).toLocaleDateString()}
                           </td>
                           <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                            <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
                                 <select
                                   value={inquiry.status || 'new'}
                                   onChange={(e) => updateGeneralInquiryStatus(inquiry.id, e.target.value)}
                                   className="text-xs border border-gray-300 rounded px-1 sm:px-2 py-1 w-full sm:w-auto"
                                 >
                                   <option value="new">New</option>
                                   <option value="contacted">Contacted</option>
                                   <option value="converted">Converted</option>
                                   <option value="lost">Lost</option>
                                 </select>
                                <div className="flex space-x-1 sm:space-x-2">
                                  <button
                                    onClick={() => openDetailsModal(inquiry, 'inquiry')}
                                    className="text-blue-600 hover:text-blue-900 text-xs p-1 rounded hover:bg-blue-50 flex-1 sm:flex-none"
                                    title="View Details"
                                  >
                                    <i className="fas fa-eye"></i>
                                  </button>
                                   <button
                                     onClick={() => deleteGeneralInquiry(inquiry.id)}
                                     className="text-red-600 hover:text-red-900 text-xs p-1 rounded hover:bg-red-50 flex-1 sm:flex-none"
                                     title="Delete"
                                   >
                                     <i className="fas fa-trash"></i>
                                   </button>
                                 </div>
                               </div>
                           </td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
                 
                 {filteredGeneralInquiries.length === 0 && (
                   <div className="text-center py-12">
                     <p className="text-gray-500">No general inquiries found</p>
                   </div>
                 )}
               </div>
             )}
           </div>
         </main>

         {/* Details Modal */}
         {showDetailsModal && (
           <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
             <div className="relative top-10 sm:top-20 mx-auto p-3 sm:p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
                                <div className="mt-3">
                   <div className="flex justify-between items-center mb-4">
                     <h3 className="text-base sm:text-lg font-medium text-gray-900">
                       {modalType === 'dentist' && 'Dentist Registration Details'}
                       {modalType === 'patient' && 'Patient Contact Details'}
                       {modalType === 'inquiry' && 'General Inquiry Details'}
                     </h3>
                   <button
                     onClick={closeDetailsModal}
                     className="text-gray-400 hover:text-gray-600"
                   >
                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                   </button>
                 </div>
                 
                 <div className="space-y-3 sm:space-y-4 max-h-64 sm:max-h-96 overflow-y-auto">
                   {/* Dentist Details */}
                   {modalType === 'dentist' && selectedDentist && (
                     <>
                       {/* Personal Information */}
                       <div className="bg-gray-50 p-4 rounded-lg">
                         <h4 className="font-semibold text-gray-800 mb-3">Personal Information</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Dentist Name</label>
                             <p className="text-sm text-gray-900">{selectedDentist.dentist_name}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Email</label>
                             <p className="text-sm text-gray-900">{selectedDentist.email}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Phone</label>
                             <p className="text-sm text-gray-900">{selectedDentist.phone || 'Not provided'}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Registration Date</label>
                             <p className="text-sm text-gray-900">
                               {new Date(selectedDentist.created_at).toLocaleDateString()} at{' '}
                               {new Date(selectedDentist.created_at).toLocaleTimeString()}
                             </p>
                           </div>
                         </div>
                       </div>

                       {/* Clinic Information */}
                       <div className="bg-gray-50 p-4 rounded-lg">
                         <h4 className="font-semibold text-gray-800 mb-3">Clinic Information</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Clinic Name</label>
                             <p className="text-sm text-gray-900">{selectedDentist.clinic_name}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Location</label>
                             <p className="text-sm text-gray-900">{selectedDentist.city}, {selectedDentist.state}</p>
                           </div>
                           <div className="md:col-span-2">
                             <label className="block text-sm font-medium text-gray-600">Full Address</label>
                             <p className="text-sm text-gray-900">{selectedDentist.address}</p>
                           </div>
                         </div>
                       </div>

                       {/* Professional Information */}
                       <div className="bg-gray-50 p-4 rounded-lg">
                         <h4 className="font-semibold text-gray-800 mb-3">Professional Information</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Specialization</label>
                             <p className="text-sm text-gray-900">{selectedDentist.specialization}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Experience</label>
                             <p className="text-sm text-gray-900">{selectedDentist.experience}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Consultation Fee</label>
                             <p className="text-sm text-gray-900">
                               {selectedDentist.consultation_fee ? `₹${selectedDentist.consultation_fee}` : 'Not specified'}
                             </p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Current Status</label>
                             <div className="mt-1">
                               {getStatusBadge(selectedDentist.status || 'pending', 'dentist')}
                             </div>
                           </div>
                         </div>
                       </div>

                       {/* Additional Information */}
                       {selectedDentist.additional_info && (
                         <div className="bg-gray-50 p-4 rounded-lg">
                           <h4 className="font-semibold text-gray-800 mb-3">Additional Information</h4>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Message/Notes</label>
                             <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedDentist.additional_info}</p>
                           </div>
                         </div>
                       )}
                     </>
                   )}

                   {/* Patient Details */}
                   {modalType === 'patient' && selectedPatient && (
                     <>
                       {/* Contact Information */}
                       <div className="bg-gray-50 p-4 rounded-lg">
                         <h4 className="font-semibold text-gray-800 mb-3">Contact Information</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Patient Name</label>
                             <p className="text-sm text-gray-900">{selectedPatient.name}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Email</label>
                             <p className="text-sm text-gray-900">{selectedPatient.email}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Phone</label>
                             <p className="text-sm text-gray-900">{selectedPatient.phone || 'Not provided'}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Submission Date</label>
                             <p className="text-sm text-gray-900">
                               {new Date(selectedPatient.created_at).toLocaleDateString()} at{' '}
                               {new Date(selectedPatient.created_at).toLocaleTimeString()}
                             </p>
                           </div>
                         </div>
                       </div>

                       {/* Treatment Information */}
                       <div className="bg-gray-50 p-4 rounded-lg">
                         <h4 className="font-semibold text-gray-800 mb-3">Treatment Information</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Treatment Type</label>
                             <p className="text-sm text-gray-900">{formatTreatmentType(selectedPatient.treatment_type)}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Preferred Date</label>
                             <p className="text-sm text-gray-900">{selectedPatient.preferred_date || 'Not specified'}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Preferred Time</label>
                             <p className="text-sm text-gray-900">{selectedPatient.preferred_time || 'Not specified'}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Current Status</label>
                             <div className="mt-1">
                               {getStatusBadge(selectedPatient.status || 'new', 'patient')}
                             </div>
                           </div>
                         </div>
                       </div>

                       {/* Clinic Information */}
                       {selectedPatient.clinic_name && (
                         <div className="bg-gray-50 p-4 rounded-lg">
                           <h4 className="font-semibold text-gray-800 mb-3">Clinic Information</h4>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Clinic Name</label>
                             <p className="text-sm text-gray-900">{selectedPatient.clinic_name}</p>
                           </div>
                         </div>
                       )}

                       {/* Message */}
                       <div className="bg-gray-50 p-4 rounded-lg">
                         <h4 className="font-semibold text-gray-800 mb-3">Patient Message</h4>
                         <div>
                           <label className="block text-sm font-medium text-gray-600">Message</label>
                           <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedPatient.message}</p>
                         </div>
                       </div>
                     </>
                   )}

                   {/* General Inquiry Details */}
                   {modalType === 'inquiry' && selectedInquiry && (
                     <>
                       {/* Contact Information */}
                       <div className="bg-gray-50 p-4 rounded-lg">
                         <h4 className="font-semibold text-gray-800 mb-3">Contact Information</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Name</label>
                             <p className="text-sm text-gray-900">{selectedInquiry.name}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Email</label>
                             <p className="text-sm text-gray-900">{selectedInquiry.email}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Phone</label>
                             <p className="text-sm text-gray-900">{selectedInquiry.phone || 'Not provided'}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Submission Date</label>
                             <p className="text-sm text-gray-900">
                               {new Date(selectedInquiry.created_at).toLocaleDateString()} at{' '}
                               {new Date(selectedInquiry.created_at).toLocaleTimeString()}
                             </p>
                           </div>
                         </div>
                       </div>

                       {/* Inquiry Information */}
                       <div className="bg-gray-50 p-4 rounded-lg">
                         <h4 className="font-semibold text-gray-800 mb-3">Inquiry Information</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Subject</label>
                             <p className="text-sm text-gray-900">{selectedInquiry.subject}</p>
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-gray-600">Current Status</label>
                             <div className="mt-1">
                               {getStatusBadge(selectedInquiry.status || 'new', 'patient')}
                             </div>
                           </div>
                         </div>
                       </div>

                       {/* Message */}
                       <div className="bg-gray-50 p-4 rounded-lg">
                         <h4 className="font-semibold text-gray-800 mb-3">Inquiry Message</h4>
                         <div>
                           <label className="block text-sm font-medium text-gray-600">Message</label>
                           <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedInquiry.message}</p>
                         </div>
                       </div>
                     </>
                   )}

                   {/* System Information */}
                   <div className="bg-gray-50 p-4 rounded-lg">
                     <h4 className="font-semibold text-gray-800 mb-3">System Information</h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div>
                         <label className="block text-sm font-medium text-gray-600">Record ID</label>
                         <p className="text-sm text-gray-900 font-mono">
                           {modalType === 'dentist' && selectedDentist?.id}
                           {modalType === 'patient' && selectedPatient?.id}
                           {modalType === 'inquiry' && selectedInquiry?.id}
                         </p>
                       </div>
                       <div>
                         <label className="block text-sm font-medium text-gray-600">Last Updated</label>
                         <p className="text-sm text-gray-900">
                           {(() => {
                             const item = modalType === 'dentist' ? selectedDentist : 
                                        modalType === 'patient' ? selectedPatient : selectedInquiry;
                             return item?.updated_at ? 
                               `${new Date(item.updated_at).toLocaleDateString()} at ${new Date(item.updated_at).toLocaleTimeString()}` : 
                               'Not updated yet';
                           })()}
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="flex justify-end space-x-3 mt-6">
                   <button
                     onClick={closeDetailsModal}
                     className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                   >
                     Close
                   </button>
                 </div>
               </div>
             </div>
           </div>
         )}

         <Footer />
       </div>
     </Layout>
   );
 };

export default AdminDashboardPage;
