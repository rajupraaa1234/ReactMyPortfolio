import Achievements from "./components/Achievements/achievements";
import CodingProfiles from "./components/CodingProfiles/codingProfiles";
import ContactMe from "./components/ContactMe/contactMe";
import Experience from "./components/Experience/experience";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import Skills from "./components/Skills/skills";
import Resume from "./components/Resume/resume";
import Education from "./components/Education/education";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Education/>
      <CodingProfiles />
      <Achievements />
      <ContactMe />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
