import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import Display from './components/Display'
import './styles/App.css'

function App() {
  const [cvData, setCvData] = useState({
    generalInfo: { name: "", email: "", phone: "" },
    education: { school: "", title: "", date: "" },
    experience: { company: "", position: "", responsibilities: "", from: "", until: "" },
  });

  return (
    <div className='container'>
      <h1>CV Generator</h1>
      <GeneralInfo cvData={cvData} setCvData={setCvData} />
      <Education cvData={cvData} setCvData={setCvData} />
      <Experience cvData={cvData} setCvData={setCvData} />
      <Display cvData={cvData} />
    </div>
  );
}

export default App;
