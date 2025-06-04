import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero2 from './components/Hero2';
import DomainsPage from './components/DomainsPage';
import Sharedhostingpage from './components/Sharedhostingpage';
import DedicatedHostingPage from './components/DedicatedHostingPage';
import AboutPage from './components/AboutUs';
import ContactUs from './components/ContactUs';
import BlogPage from './components/BlogPage';
import TermsPage from './components/TermsAndConditions';
import PrivacyPolicyPage from './components/PrivacyPolicy';
import RefundPolicyPage from './components/RefundPolicy';
import logo2 from './Images/logo2.jpeg';
import ScrollToTop from './components/ScrollToTop';
import WordPressHosting from './components/WordPressHosting';
import DomainTransferPage from './components/DomainTransferPage';
import ResellerHostingPage from './components/ResellerHostingPage';
import VPSPage from './components/VPSPage';
import SSLPage from './components/SSLPage';
import FreeSSL from './components/FreeSSL';
// import ContactUs from './components/ContactUs';
import SupportPage from './components/SupportPage';
import SignupPage from './components/SignUp';
import LoginPage from './components/Login';
import ForgotPasswordPage from './components/ForgotPassword';
import AffiliatePage from './components/AffiliatePage';
import Announcement from './components/Announcement';
import KnowledgeBasePage from './components/KnowledgeBasePage';
import HostingCheckoutForm from './components/HostingCheckoutForm';
import InvoicePage from './components/InvoicePage';
import UserDashboard from './components/UserDashboard';
import DomainRegisterCheckout from './components/DomainRegisterCheckout';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Header/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path ='/domainspage' element={<DomainsPage/>}/>
          <Route path='/sharedhosting' element={<Sharedhostingpage/>}/>
          <Route path='/dedicatedhosting' element={<DedicatedHostingPage/>}/>
          <Route path='/aboutus' element={<AboutPage/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path ='/blogs' element={<BlogPage/>}/>
          <Route path='/termsandconditions' element={<TermsPage/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicyPage/>}/>
          <Route path='/refundpolicy' element={<RefundPolicyPage/>}/>
          <Route path = '/wordpresshosting' element={<WordPressHosting/>}/>
          <Route path='/domaintransfer' element={<DomainTransferPage/>}/>
          <Route path='/resellerhosting' element={<ResellerHostingPage/>}/>
          <Route path='/vps' element={<VPSPage/>}/>
          <Route path='/sslpage' element={<SSLPage/>}/>
          <Route path='/freessl' element ={<FreeSSL/>}/>
          <Route path='/support' element={<SupportPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
          <Route path='/affiliate' element={<AffiliatePage/>}/>
          <Route path='/announcement' element={<Announcement/>}/>
          <Route path='knowledgebase' element={<KnowledgeBasePage/>}/>
          <Route path='/hostingcheckout/:pid' element={<HostingCheckoutForm/>}/>
        <Route path='/invoice/:invoiceId' element={<InvoicePage/>}/>
        <Route path='/dashboard' element={<UserDashboard/>}/>
        <Route path='/domainregistercheckout/:domainname' element={<DomainRegisterCheckout/>}/>
        </Routes>
        <Hero2/>
        <Footer/>
       
        
    </BrowserRouter>
    
  );
}

export default App;
