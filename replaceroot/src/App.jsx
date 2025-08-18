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
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;