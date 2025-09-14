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
import DomainTransferCheckout from './components/DomainTransferCheckout';
import AppUpdate from './components/AppUpdate';
import CPanelUnderstandingPage from './components/KnowledgeBaseArticles/CPanelUnderstandingPage';
import EmailSetupTutorial from './components/KnowledgeBaseArticles/EmailSetupTutorial';
import NameserverConfigurationPage from './components/KnowledgeBaseArticles/NameserverConfiguration';
import RegistryCodesPage from './components/KnowledgeBaseArticles/RegistryCodes';
import ResetPasswordPage from './components/ResetPasswordPage';
import InvoiceRenewal from './components/InvoiceRenewal';
import Partners from './components/Partners';
import Partners2 from './components/Partners2';
import ServicesPage from './components/ServicesPage';

import CourseRegistrationPage from './components/CourseRegistrationPage';
import WebDevelopmentCourse from './components/Courses/WebDevelopmentCourse';
import MobileAppDevelopmentCoursePage from './components/Courses/MobileAppDevelopmentCoursePage';
import ComputerRepairsMaintenancePage from './components/Courses/ComputerRepairsMaintenancePage';
import DigitalMarketingCoursePage from './components/Courses/DigitalMarketingCoursePage';
import GeographicInformationSystemPage from './components/Courses/GeographicInformationSystemPage';
import SoftwareDevelopmentPage from './components/Courses/SoftwareDevelopmentPage';
import AutoCADArchiCADPage from './components/Courses/AutoCADArchiCADPage';
import ComputerAnimationPage from './components/Courses/ComputerAnimationPage';
import MicrosoftCertifiedProfessionalPage from './components/Courses/MicrosoftCertifiedProfessionalPage';
import ComputerNetworkingPage from './components/Courses/ComputerNetworkingPage';
import AccountingSoftwarePage from './components/Courses/AccountingSoftwarePage';
import DesktopPublishingPage from './components/Courses/DesktopPublishingPage';
import GraphicsDesignPage from './components/Courses/GraphicsDesignPage';
import Header2 from './components/landingPage2/Header2';
import CoWorkingSpace from './components/CoWorkingSpace';
import EAcademy from './components/EAcademy';
import ElexdonProducts from './components/ElexdonProducts';
import InsightsPage from './components/InsightsPage';
import CareersPage from './components/CareersPage';
import RequestQuotePopup from './components/RequestQuotePopup';

function App() {
  return (
    <BrowserRouter>
    <AppUpdate/>
    <ScrollToTop/>
    <Header2/>
      
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<LandingPage/>}/>
          <Route path ='/domainspage' element={<DomainsPage/>}/>
          <Route path='/sharedhosting' element={<Sharedhostingpage/>}/>
          <Route path='/dedicatedhosting' element={<DedicatedHostingPage/>}/>
          <Route path='/aboutus' element={<AboutPage/>}/>
          <Route path='/coworkingspace' element={<CoWorkingSpace/>}/>
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
          <Route path='/hostingcheckout' element={<HostingCheckoutForm/>}/>
        <Route path='/invoice/:invoiceId' element={<InvoicePage/>}/>
        <Route path='/invoicerenewal/:invoiceId' element={<InvoiceRenewal/>}/>
        <Route path='/dashboard' element={<UserDashboard/>}/>
        <Route path='/domainregistercheckout/:domainname/:domain/:tld' element={<DomainRegisterCheckout/>}/>
        <Route path='/domaintransfercheckout/:domainname/:eppcode/:domain/:tld' element={<DomainTransferCheckout/>}/>
<Route path='/eacademy' element={<EAcademy/>}/>
<Route path='/products' element={<ElexdonProducts/>}/>
<Route path='/insights' element={<InsightsPage/>}/>
<Route path='/careers' element={<CareersPage/>}/>




        {/* knowlegdbase articles */}
        <Route path='/cpanelunderstanding' element={<CPanelUnderstandingPage/>}/>
        <Route path='/emailsetuptutorial' element={<EmailSetupTutorial/>}/>
        <Route path='/nameserverconfiguration' element={<NameserverConfigurationPage/>}/>
        <Route path='/registrycodes' element={<RegistryCodesPage/>}/>
        <Route path="/reset-password" element={<ResetPasswordPage />} />


        {/*  */}

        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/courses/web-design-development' element={<WebDevelopmentCourse/>}/>
        <Route path='/courseregistration' element={<CourseRegistrationPage/>}/>
        <Route path='/courses/mobile-app-development' element={<MobileAppDevelopmentCoursePage/>}/>
        <Route path='/courses/computer-repair-maintenance' element={<ComputerRepairsMaintenancePage/>}/>
        <Route path='/courses/digital-marketing' element={<DigitalMarketingCoursePage/>}/>
        <Route path='/courses/geographic-information-system-gis' element={<GeographicInformationSystemPage/>}/>
        <Route path='/courses/software-development' element={<SoftwareDevelopmentPage/>}/>
        <Route path='/courses/autocad-2d-3d' element={<AutoCADArchiCADPage/>}/>
        <Route path='/courses/computer-animation' element={<ComputerAnimationPage/>}/>
        <Route path='/courses/microsoft-certified-it-professional' element={<MicrosoftCertifiedProfessionalPage/>}/>
        <Route path='/courses/computer-networking' element={<ComputerNetworkingPage/>}/>
        <Route path='/courses/accounting-software' element={<AccountingSoftwarePage/>}/>
        <Route path='/courses/desktop-publishing' element={<DesktopPublishingPage/>}/>
        <Route path='/courses/graphics-design' element={<GraphicsDesignPage/>}/>


        </Routes>
        <RequestQuotePopup/>
        {/* <Hero2/> */}
        {/* <Partners2/> */}
        <Footer/>
       
        
    </BrowserRouter>
    
  );
}

export default App;
