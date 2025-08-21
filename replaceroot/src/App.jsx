import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ClinicPage from './pages/ClinicPage.jsx';
import AmaravatiPage from './pages/AmaravatiPage.jsx';
import BahraichPage from './pages/BahraichPage.jsx';
import BelgaumPage from './pages/BelgaumPage.jsx';
import NotFound from './pages/NotFound.jsx';
import BerhamporePage from './pages/BerhamporePage.jsx';
import BhagalpurPage from './pages/BhagalpurPage.jsx';
import BiharPage from './pages/BiharPage.jsx';
import CoimbatorePage from './pages/CoimbatorePage.jsx';
import DanapurPage from './pages/DanapurPage.jsx';
import GuwahatiPage from './pages/GuwahatiPage.jsx';
import ThrissurPage from './pages/ThrissurPage.jsx';
import TiruchirappalliPage from './pages/TiruchirappalliPage.jsx';
import DehradunPage from './pages/DehradunPage.jsx';
import AizawlPage from './pages/AizawlPage.jsx';
import NagercoilPage from './pages/NagercoilPage.jsx';
import ShimlaPage from './pages/ShimlaPage.jsx';
import GunturPage from './pages/GunturPage.jsx';
import AkolaPage from './pages/AkolaPage.jsx';
import AhmedabadPage from './pages/AhmedabadPage.jsx';
import BhopalPage from './pages/BhopalPage.jsx';
import AmritsarPage from './pages/AmritsarPage.jsx';
import SiliguriPage from './pages/SiliguriPage.jsx';
import MangalorePage from './pages/MangalorePage.jsx';
import GorakhpurPage from './pages/GorakhpurPage.jsx';
import PatialaPage from './pages/PatialaPage.jsx';
import SangliMirajKupwadPage from './pages/Sangli-Miraj & KupwadPage.jsx';
import KozhikodePage from './pages/KozhikodePage.jsx';
import YamunanagarPage from './pages/YamunanagarPage.jsx';
import BellaryPage from './pages/BellaryPage.jsx';
import AnantapurPage from './pages/AnantapurPage.jsx';
import DindigulPage from './pages/DindigulPage.jsx';
import BhusawalPage from './pages/BhusawalPage.jsx';
import BettiahPage from './pages/BettiahPage.jsx';
import HyderabadPage from './pages/HyderabadPage.jsx';
import IndorePage from './pages/IndorePage.jsx';
import KottayamPage from './pages/KottayamPage.jsx';
import PatnaPage from './pages/PatnaPage.jsx';
import PondicherryPage from './pages/PondicherryPage.jsx';
import VaranasiPage from './pages/VaranasiPage.jsx';
import KotaPage from './pages/KotaPage.jsx';
import MuzaffarpurPage from './pages/MuzaffarpurPage.jsx';
import SolapurPage from './pages/SolapurPage.jsx';
import AmbalaPage from './pages/AmbalaPage.jsx';
import ThoothukudiPage from './pages/ThoothukudiPage.jsx';
import BathindaPage from './pages/BathindaPage.jsx';
import GulbargaPage from './pages/GulbargaPage.jsx';
import SataraPage from './pages/SataraPage.jsx';
import OngolePage from './pages/OngolePage.jsx';
import HowrahPage from './pages/HowrahPage.jsx';
import BhavnagarPage from './pages/BhavnagarPage.jsx';
import DhulePage from './pages/DhulePage.jsx';
import ParbhaniPage from './pages/ParbhaniPage.jsx';
import UdaipurPage from './pages/UdaipurPage.jsx';
import NashikPage from './pages/NashikPage.jsx';
import BhubaneswarPage from './pages/BhubaneswarPage.jsx';
import MysorePage from './pages/MysorePage.jsx';
import PimpriChinchwadPage from './pages/Pimpri-ChinchwadPage.jsx';
import KanpurPage from './pages/KanpurPage.jsx';
import AjmerPage from './pages/AjmerPage.jsx';
import LudhianaPage from './pages/LudhianaPage.jsx';
import FaridabadPage from './pages/FaridabadPage.jsx';
import AsansolPage from './pages/AsansolPage.jsx';
import AnandPage from './pages/AnandPage.jsx';
import NellorePage from './pages/NellorePage.jsx';
import AligarhPage from './pages/AligarhPage.jsx';
import DurgapurPage from './pages/DurgapurPage.jsx';
import SaharanpurPage from './pages/SaharanpurPage.jsx';
import LaturPage from './pages/LaturPage.jsx';
import BareillyPage from './pages/BareillyPage.jsx';
import VellorePage from './pages/VellorePage.jsx';
import TirupatiPage from './pages/TirupatiPage.jsx';
import SriGanganagarPage from './pages/Sri GanganagarPage.jsx';
import MehsanaPage from './pages/MehsanaPage.jsx';
import IchalkaranjiPage from './pages/IchalkaranjiPage.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clinic" element={<ClinicPage />} />
          <Route path="/clinic/:clinicName" element={<ClinicPage />} />
          <Route path="/amaravati" element={<AmaravatiPage />} />
          <Route path="/dental-implants-amaravati" element={<AmaravatiPage />} />
          <Route path="/bahraich" element={<BahraichPage />} />
          <Route path="/dental-implants-bahraich" element={<BahraichPage />} />
          <Route path="/dental-implants-belgaum" element={<BelgaumPage />} />
          <Route path="/berhampore" element={<BerhamporePage />} />
          <Route path="/dental-implants-berhampore" element={<BerhamporePage />} />
          <Route path="/bhagalpur" element={<BhagalpurPage />} />
          <Route path="/dental-implants-bhagalpur" element={<BhagalpurPage />} />
          <Route path="/bihar-sharif" element={<BiharPage />} />
          <Route path="/dental-implants-bihar-sharif" element={<BiharPage />} />
          <Route path="/coimbatore" element={<CoimbatorePage />} />
          <Route path="/dental-implants-coimbatore" element={<CoimbatorePage />} />
          <Route path="/danapur" element={<DanapurPage />} />
          <Route path="/dental-implants-danapur" element={<DanapurPage />} />
          <Route path="/dental-implants-guwahati" element={<GuwahatiPage />} />
          <Route path="/dental-implants-siliguri" element={<SiliguriPage />} />
          <Route path="/dental-implants-mangalore" element={<MangalorePage />} />
          <Route path="/dental-implants-gorakhpur" element={<GorakhpurPage />} />
          <Route path="/dental-implants-patiala" element={<PatialaPage />} />
          <Route path="/dental-implants-amritsar" element={<AmritsarPage />} />
          <Route path="/dental-implants-thrissur" element={<ThrissurPage />} />
          <Route path="/dental-implants-tiruchirappalli" element={<TiruchirappalliPage />} />
          <Route path="/dental-implants-dehradun" element={<DehradunPage />} />
          <Route path="/dental-implants-aizawl" element={<AizawlPage />} />
          <Route path="/dental-implants-nagercoil" element={<NagercoilPage />} />
          <Route path="/dental-implants-shimla" element={<ShimlaPage />} />
          <Route path="/dental-implants-guntur" element={<GunturPage />} />
          <Route path="/dental-implants-akola" element={<AkolaPage />} />
          <Route path="/dental-implants-ahmedabad" element={<AhmedabadPage />} />
          <Route path="/dental-implants-bhopal" element={<BhopalPage />} />
          <Route path="/dental-implants-sangli-miraj-kupwad" element={<SangliMirajKupwadPage />} />
          <Route path="/dental-implants-kozhikode" element={<KozhikodePage />} />
          <Route path="/dental-implants-yamunanagar" element={<YamunanagarPage />} />
          <Route path="/dental-implants-bellary" element={<BellaryPage />} />
          <Route path="/dental-implants-anantapur" element={<AnantapurPage />} />
          <Route path="/dental-implants-dindigul" element={<DindigulPage />} />
          <Route path="/dental-implants-bhusawal" element={<BhusawalPage />} />
          <Route path="/dental-implants-bettiah" element={<BettiahPage />} />
          <Route path="/dental-implants-hyderabad" element={<HyderabadPage />} />
          <Route path="/dental-implants-indore" element={<IndorePage />} />
          <Route path="/dental-implants-kottayam" element={<KottayamPage />} />
          <Route path="/dental-implants-patna" element={<PatnaPage />} />
          <Route path="/dental-implants-pondicherry" element={<PondicherryPage />} />
          <Route path="/dental-implants-varanasi" element={<VaranasiPage />} />
          <Route path="/dental-implants-kota" element={<KotaPage />} />
          <Route path="/dental-implants-muzaffarpur" element={<MuzaffarpurPage />} />
          <Route path="/dental-implants-solapur" element={<SolapurPage />} />
          <Route path="/dental-implants-ambala" element={<AmbalaPage />} />
          <Route path="/dental-implants-thoothukudi" element={<ThoothukudiPage />} />
          <Route path="/dental-implants-bathinda" element={<BathindaPage />} />
          <Route path="/dental-implants-gulbarga" element={<GulbargaPage />} />
          <Route path="/dental-implants-satara" element={<SataraPage />} />
          <Route path="/dental-implants-ongole" element={<OngolePage />} />
          <Route path="/dental-implants-howrah" element={<HowrahPage />} />
          <Route path="/dental-implants-bhavnagar" element={<BhavnagarPage />} />
          <Route path="/dental-implants-dhule" element={<DhulePage />} />
          <Route path="/dental-implants-parbhani" element={<ParbhaniPage />} />
          <Route path="/dental-implants-udaipur" element={<UdaipurPage />} />
          <Route path="/dental-implants-nashik" element={<NashikPage />} />
          <Route path="/dental-implants-bhubaneswar" element={<BhubaneswarPage />} />
          <Route path="/dental-implants-mysore" element={<MysorePage />} />
          <Route path="/dental-implants-pimpri-chinchwad" element={<PimpriChinchwadPage />} />
          <Route path="/dental-implants-kanpur" element={<KanpurPage />} />
          <Route path="/dental-implants-ajmer" element={<AjmerPage />} />
          <Route path="/dental-implants-ludhiana" element={<LudhianaPage />} />
          <Route path="/dental-implants-faridabad" element={<FaridabadPage />} />
          <Route path="/dental-implants-asansol" element={<AsansolPage />} />
          <Route path="/dental-implants-anand" element={<AnandPage />} />
          <Route path="/dental-implants-nellore" element={<NellorePage />} />
          <Route path="/dental-implants-aligarh" element={<AligarhPage />} />
          <Route path="/dental-implants-durgapur" element={<DurgapurPage />} />
          <Route path="/dental-implants-saharanpur" element={<SaharanpurPage />} />
          <Route path="/dental-implants-latur" element={<LaturPage />} />
          <Route path="/dental-implants-bareilly" element={<BareillyPage />} />
          <Route path="/dental-implants-vellore" element={<VellorePage />} />
          <Route path="/dental-implants-tirupati" element={<TirupatiPage />} />
          <Route path="/dental-implants-sri-ganganagar" element={<SriGanganagarPage />} />
          <Route path="/dental-implants-mehsana" element={<MehsanaPage />} />
          <Route path="/dental-implants-ichalkaranji" element={<IchalkaranjiPage />} />
          <Route path="/dental-implants-berhampore" element={<BerhamporePage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;