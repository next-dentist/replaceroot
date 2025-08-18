// Central clinic registry and helpers. City content is split into separate files under ./clinics.

import shared from './clinics/shared';
import amaravati from './clinics/amaravati';
import bahraich from './clinics/bahraich';
import belgaum from './clinics/belgaum';
import berhampore from './clinics/berhampore';
import bhagalpur from './clinics/bhagalpur';
import guwahati from './clinics/guwahati';
import nagercoil from './clinics/nagercoil';
import aizawl from './clinics/aizawl';
import thrissur from './clinics/thrissur';
import tiruchirappalli from './clinics/tiruchirappalli';
import dehradun from './clinics/dehradun';
import shimla from './clinics/shimla';
import guntur from './clinics/guntur';
import akola from './clinics/akola';
import ahmedabad from './clinics/ahmedabad';
import bhopal from './clinics/bhopal';
import amritsar from './clinics/amritsar';
import coimbatore from './clinics/coimbatore';
import siliguri from './clinics/siliguri';
import mangalore from './clinics/mangalore';
import gorakhpur from './clinics/gorakhpur';
import patiala from './clinics/patiala';

export const clinics = { amaravati, bahraich, belgaum, berhampore, bhagalpur, guwahati, nagercoil, aizawl, thrissur, tiruchirappalli, dehradun, shimla, guntur, akola, ahmedabad, bhopal, amritsar, coimbatore, siliguri, mangalore, gorakhpur, patiala };

const aliases = {
  belgum: 'belgaum'
};

export const getClinic = (slug = 'guwahati') => {
  return clinics[slug] || clinics['guwahati'];
};

export const getDisplayName = (slug = 'guwahati') => {
  const names = {
    amaravati: 'Amaravati',
    bahraich: 'Bahraich',
    belgaum: 'Belgaum',
    berhampore: 'Berhampore',
    bhagalpur: 'Bhagalpur',
    guwahati: 'Guwahati',
    shimla: 'Shimla',
    guntur: 'Guntur',
    akola: 'Akola',
    ahmedabad: 'Ahmedabad',
    bhopal: 'Bhopal',
    amritsar: 'Amritsar',
    coimbatore: 'Coimbatore',
    siliguri: 'Siliguri',
    mangalore: 'Mangalore',
    gorakhpur: 'Gorakhpur',
    patiala: 'Patiala',
    nagercoil: 'Nagercoil',
    aizawl: 'Aizawl',
    thrissur: 'Thrissur',
    tiruchirappalli: 'Tiruchirappalli',
    dehradun: 'Dehradun',
  };
  return names[slug] || 'Guwahati';
};
