import { useState } from 'react'
import Nav from './Nav'
import Projects from './Projects'
import Schools from './Schools'
import Certifications from './Certifications'
import Skills from './Skills'

export default function Content() {
  const tabs = ['Projects', 'Skills', 'Education', 'Employment', 'Certifications'];
  const [activeTab, setActiveTab] = useState('Projects');
  function renderContent(activeTab) {
    switch (activeTab) {
      case 'Projects':
        return <Projects />;
      case 'Education':
      case 'Employment':
        return <Schools queryKey={activeTab}/>;
      case 'Certifications':
        return <Certifications />;
      case 'Skills':
        return <Skills />;
      default:
        return <div>Select a tab to see content!</div>;
    }
  };
  return (
    <div>
      <Nav activeTab={activeTab} onSelect={setActiveTab} tabs={tabs}></Nav>
      <div className="mt-4">{renderContent(activeTab)}</div>
    </div>
  )
}
