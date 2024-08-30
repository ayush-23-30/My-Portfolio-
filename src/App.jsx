
import {Outlet} from 'react-router-dom'; 
import Headers from './component/Header'
import Footer from './component/Footer'


function App() {

  return (
    <>
    <Headers/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
