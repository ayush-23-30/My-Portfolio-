import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider , createBrowserRouter} from 'react-router-dom'

import Main from './component/Main.jsx'
import AboutMe from './component/AboutMe.jsx'
import Contact from './component/Contact.jsx'
import Projects from './component/Projects.jsx'
import Skills from './component/Skills.jsx'



const router = createBrowserRouter([
  {
    element:  <App/>, 
    children : [
      {
        path : "/", 
        element : <Main/>
      },
      {
        path : '/about', 
        element : <AboutMe/>
      }, 
      {
        path : '/Contact', 
        element : <Contact/>
      }, 
      {
        path : '/skills', 
        element : <Skills/>
      }, {
        path : '/projects' , 
        element : <Projects/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router}>
<App/>
</RouterProvider>
)
