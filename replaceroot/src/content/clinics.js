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
import sangliMirajKupwad from './clinics/sangli-miraj-kupwad';
import kozhikode from './clinics/kozhikode';
import yamunanagar from './clinics/yamunanagar';
import bellary from './clinics/bellary';
import anantapur from './clinics/anantapur';
import dindigul from './clinics/dindigul';
import bhusawal from './clinics/bhusawal';
import bettiah from './clinics/bettiah';
import hyderabad from './clinics/hyderabad';
import indore from './clinics/indore';
import kottayam from './clinics/kottayam';
import patna from './clinics/patna';
import pondicherry from './clinics/pondicherry';
import varanasi from './clinics/varanasi';
import kota from './clinics/kota';
import muzaffarpur from './clinics/muzaffarpur';
import solapur from './clinics/solapur';
import ambala from './clinics/ambala';
import thoothukudi from './clinics/thoothukudi';
import bathinda from './clinics/bathinda';
import gulbarga from './clinics/gulbarga';
import satara from './clinics/satara';
import ongole from './clinics/ongole';
import howrah from './clinics/howrah';
import bhavnagar from './clinics/bhavnagar';
import dhule from './clinics/dhule';
import parbhani from './clinics/parbhani';
import udaipur from './clinics/udaipur';

export const clinics = { amaravati, bahraich, belgaum, berhampore, bhagalpur, guwahati, nagercoil, aizawl, thrissur, tiruchirappalli, dehradun, shimla, guntur, akola, ahmedabad, bhopal, amritsar, coimbatore, siliguri, mangalore, gorakhpur, patiala, sangliMirajKupwad, kozhikode, yamunanagar, bellary, anantapur, dindigul, bhusawal, bettiah, hyderabad, indore, kottayam, patna, pondicherry, varanasi, kota, muzaffarpur, solapur, ambala, thoothukudi, bathinda, gulbarga, satara, ongole, howrah, bhavnagar, dhule, parbhani, udaipur };

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
    sangliMirajKupwad: 'Sangli-Miraj & Kupwad',
    kozhikode: 'Kozhikode',
    yamunanagar: 'Yamunanagar',
    bellary: 'Bellary',
    anantapur: 'Anantapur',
    dindigul: 'Dindigul',
    bhusawal: 'Bhusawal',
    bettiah: 'Bettiah',
    hyderabad: 'Hyderabad',
    indore: 'Indore',
    kottayam: 'Kottayam',
    patna: 'Patna',
    pondicherry: 'Pondicherry',
    varanasi: 'Varanasi',
    kota: 'Kota',
    muzaffarpur: 'Muzaffarpur',
    solapur: 'Solapur',
    ambala: 'Ambala',
    thoothukudi: 'Thoothukudi',
    bathinda: 'Bathinda',
    gulbarga: 'Gulbarga',
    satara: 'Satara',
    ongole: 'Ongole',
    howrah: 'Howrah',
    bhavnagar: 'Bhavnagar',
    dhule: 'Dhule',
    parbhani: 'Parbhani',
    udaipur: 'Udaipur',
    nagercoil: 'Nagercoil',
    aizawl: 'Aizawl',
    thrissur: 'Thrissur',
    tiruchirappalli: 'Tiruchirappalli',
    dehradun: 'Dehradun',
  };
  return names[slug] || 'Guwahati';
};
