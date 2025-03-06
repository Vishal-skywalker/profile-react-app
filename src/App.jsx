import React from 'react'
import './App.css'
import Content from './Components/Content'
import Profile from './Components/Profile'
import MessageDrop from './Components/MessageDrop'

function App() {

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-3/10 h-auto md:h-screen bg-gray-100 p-4">
        <Profile />
      </div>
      <div className="w-full md:w-7/10 h-auto md:h-screen md:overflow-auto p-4">
        <Content />
      </div>
      <MessageDrop />
    </div>

  )
}

export default App
