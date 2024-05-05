import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'



const App = () => {
  const [progress, setProgress] = useState(50)
  
  return (
    <div >
    
  
      <BrowserRouter >
        <LoadingBar
          color='#1778F2'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
          <Navbar />
        <Routes>
          <Route path="/" element={<Home setProgress={setProgress} />} />
        </Routes>
        
          <Footer />

      </BrowserRouter>

    </div>
  )
}
export default App;
