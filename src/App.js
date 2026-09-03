import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Properties from './components/Properties';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import UserDashboardLayout from './components/UserDashboardLayout';
import UserDashboardOverview from './components/UserDashboardOverview';
import PrivateUserDashboard from './components/PrivateUserDashboard';
import UserLogin from './components/UserLogin';
import UserSignup from './components/UserSignUp';
import UserProfilePage from './components/UserProfilePage';
import PropertyInquiryPage from './components/PropertyInquiryPage';
import AdminInquiriesPage from './components/AdminInquiriesPage';
import GalleryPage from './components/Gallery';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/services' element={<Services />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/usersignup' element={<UserSignup/>}/>
        <Route path='/inquire/:id' element={<PropertyInquiryPage/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
        
        {/* Protected User Dashboard Routes */}
        <Route element={<PrivateUserDashboard />}>
          {/* Layout structural wrapper is applied globally here across sub-routes */}
          <Route path="/userdashboard" element={<UserDashboardLayout />}>
            {/* These children will render dynamically within UserDashboardLayout's <Outlet /> */}
            <Route path="overview" element={<UserDashboardOverview />} />
            <Route path='profile' element={<UserProfilePage/>}/>
            <Route path='manage-properties' element={<UserProfilePage/>}/>
            <Route path='inquiries' element={<AdminInquiriesPage/>}/>
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
