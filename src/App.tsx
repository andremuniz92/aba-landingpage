import './App.css'
import Header from './components/Session1/Header/Header'
import HomePage from './components/Session1/HomePage/HomePage'
import About from './components/Session2/About/About'
import Services from './components/Session3/ABAServices/Services'

function App() {

  return (   
    <>
      <div className='colorSessionWhite'>
        <div className='containerHome'>
          <Header/>
          <HomePage/>
        </div>
      </div>
      <div className='colorSessionBlue'>
        <About/>
      </div>
      <div className='colorSessionWhite'>
        <Services/>
      </div>     
    </>

  )
}

export default App
