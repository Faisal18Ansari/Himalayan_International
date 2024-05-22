import './App.css'
import Footer from './component/Footer'
import Home from './component/Home'
import Navbar from './component/Navbar'
import { Outlet } from 'react-router-dom'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ContactForm from './component/ContactFrom'
import Contact from './component/Contact'


const Main=()=>{
return(
  <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
)
}

const route= createBrowserRouter([{
  path:'/',
  element:<Main/>,
  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'contact/',
      element:<Contact/>
    }
  ]
}])

function App() {

  return (
    <>
    <RouterProvider router={route}>
    </RouterProvider>
    </>
  )
}

export default App
