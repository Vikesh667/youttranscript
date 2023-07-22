import React from 'react'
import "./App.css"
import Header from './componenet/Header'
import MiddleSection from './componenet/MiddleSection'
import Footer from './componenet/Footer'
const App = () => {
  return (
    <div className='App'>
     <Header/>
     <section >
     <MiddleSection/>
     </section>
     <Footer/>
    </div>
  )
}

export default App