import "./App.css";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductState from "./Context/Product/ProductState";
import CategoryProductState from "./Context/CategoryProduct/CategoryProductState";
import ProductDetail from "./pages/ProductDetail";
import CategoryState from "./Context/Category/CategoryState";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact/",
        element: <Contact />,
      },
      {
        path: "product/",
        element: <Product />,
      }, 
      {
        path:"productDetail/:productStyle",
        element: <ProductDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <>
    <CategoryState>
      <CategoryProductState>
        <ProductState>
          <RouterProvider router={route}></RouterProvider>
        </ProductState>
      </CategoryProductState>
    </CategoryState>
    </>
  );
}

export default App;
