import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Routes and Route
import HomePage from './Components/HomePage';
import BasicExample from './Components/Navbar/Navbar';
import AboutPage from './Components/AboutMe/AboutMe';
import MyProject from './Components/MyProject/MyProject';
import MyTeam from './Components/MyTeams/MyTeam';
import ContactForm from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Your Navbar */}
        <BasicExample />

        {/* Define your Routes here */}
        <Routes>
          {/* Define a route for HomePage */}
          <Route path="/" element={<HomePage />} />

          {/* Define routes for other pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<MyProject />} />
          <Route path="/team" element={<MyTeam />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>

        {/* Footer will always be at the bottom */}
        <HomePage/>
        <AboutPage/>
        <MyTeam/>
        <MyProject/>
        <ContactForm/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
