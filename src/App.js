import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar/Navbar';
import AboutPage from './Components/AboutMe/AboutMe';
import MyProject from './Components/MyProject/MyProject';
import MyTeam from './Components/MyTeams/MyTeam';
import ContactForm from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminDashboard from './Components/Admin/adminDashboard';
import ManageProject from './Components/Admin/ManageProject';
import Settings from './Components/Admin/Setting';

function App() {  
  return (
    <div className="App">
      <Router>
        {/* Common Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <Routes>
          {/* Main Page: HomePage with About and Footer */}
          <Route 
            path="*" 
            element={
              <>
                <HomePage />
                <AboutPage />
                <MyProject/>
                <ContactForm/>
                <Footer />
              </>
            } 
          />

          {/* Other Routes */}
          <Route path="/projects" element={<MyProject />} />
          <Route path="/about" element={<AboutPage   />} />
          <Route path="/team" element={<MyTeam />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/manage-project" element={<ManageProject />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
