
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NoPage from "./pages/NoPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./component/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./pages/category/CategoryPage";
import NewHome from "./pages/Home/NewHome";

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<NewHome/>} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:categoryname" element={<CategoryPage/>} />
          <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />
          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
}

export default App;


// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
// import { Button } from '@material-tailwind/react'
// import './App.css'
// import Homepage from "./pages/Home/Homepage";
// import NoPage from "./pages/NoPage/NoPage";
// import ProductInfo from "./pages/productInfo/ProductInfo";
// import ScrollTop from "./component/scrollTop/ScrollTop";
// import CartPage from "./pages/cart/CartPage";
// import AllProduct from "./pages/allProduct/AllProduct";
// import Signup from "./pages/registration/Signup";
// import Login from "./pages/registration/Login";
// import UserDashboard from "./pages/user/UserDashboard";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import AddProductPage from "./pages/admin/AddProductPage";
// import UpdateProductPage from "./pages/admin/UpdateProductPage";
// import MyState from "./context/myState";
// import { Toaster } from "react-hot-toast";
// import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
// import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";

// function App() {
  
//   return (
//    <>
//    <MyState>
//     <Router>
//       <ScrollTop/>
//       <Routes>
//         <Route path="/" element={<Homepage/>} />
//         <Route path="/*" element={<NoPage/>} />
//         <Route path="/productinfo" element={<ProductInfo/>} />
//         <Route path="/cart" element={<CartPage/>} />
//         <Route path="/allProduct" element={<AllProduct/>} />
//         <Route path="/signup" element={<Signup/>} />
//         <Route path="/login" element={<Login/>} />
//         <Route path="/user-dashboard" element={
//           <ProtectedRouteForUser>

//             <UserDashboard/>
//           </ProtectedRouteForUser>
//             } />
//         <Route path="/admin-dashboard" element={
//           <ProtectedRouteForAdmin>

//             <AdminDashboard/>
//           </ProtectedRouteForAdmin>
//       } />
//         <Route path="/addproduct" element={
//           <ProtectedRouteForAdmin>

//             <AddProductPage/>
//           </ProtectedRouteForAdmin>
//       } />
//         <Route path="/updateproduct/:id" element={
//           <ProtectedRouteForAdmin>

//             <UpdateProductPage/>
//           </ProtectedRouteForAdmin>
//           } />
//       </Routes>
//         <Toaster/>
//     </Router>
//    </MyState>
//    </>
//   )
// }

// export default App
