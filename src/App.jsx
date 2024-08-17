import './App.css'
import Footer from './component/Footer'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import { Outlet } from 'react-router-dom'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Contact from './pages/Contact'
import Product from './pages/Product'


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
    },
    {
      path:'product/',
      element:<Product/>
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
