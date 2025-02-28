import { useState } from 'react'
import Nav from './Nav'
import Projects from './Projects'
import Schools from './Schools'

export default function Content() {
  const tabs = ['Projects', 'Education', 'Employment'];
  const [activeTab, setActiveTab] = useState('Projects');
  function renderContent(activeTab) {
    switch (activeTab) {
      case 'Projects':
        return <Projects />;
      case 'Education':
      case 'Employment':
        return <Schools queryKey={activeTab}/>;
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
