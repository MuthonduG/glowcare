import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// dashboard imports
import DashboardIndexPage from './pages/dashboard/DashboardIndexPage.jsx'
import UserDashboardPage from './pages/dashboard/user/UserDashboardPage.jsx'
import AdminDashboardPage from './pages/dashboard/admin/AdminDashboardPage.jsx'
import VendorDashboardPage from './pages/dashboard/vendor/VendorDashboardPage.jsx'

// products imports
import ProductsIndexPage from './pages/products/ProductsIndexPage.jsx'
import WishListProductsPage from './pages/product_pages/wish_list/WishListProductsPage.jsx'
import FavouriteProducts from './pages/product_pages/favourite/FavouriteProducts.jsx'
import ProductsPage from './pages/product_pages/products/ProductsPage.jsx'

// ouath import
import OauthIndexPage from './pages/oauth/OauthIndexPage.jsx'
import LoginPage from './pages/oauth/login/LoginPage.jsx'
import RegisterIndexPage from './pages/oauth/register/RegisterIndexPage.jsx'
import UserRegisterPage from './pages/oauth/register/user/UserRegisterPage.jsx'
import AdminRegisterPage from './pages/oauth/register/admin/AdminRegisterPage.jsx'
import VendorRegisterPage from './pages/oauth/register/vendor/VendorRegisterPage.jsx'

// cart imports
import CartIndexPage from './pages/cart_pages/CartIndexPage.jsx'
import CartPage from './pages/cart_pages/cart/CartPage.jsx'
import CheckoutPage from './pages/cart_pages/checkout/CheckoutPage.jsx'

// landing page
import LandingPage from './pages/landing_page/LandingPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          {/* index route */}
          <Route index path='/' element={ <LandingPage/> }/>
          <Route path='product-page' element={ <ProductsPage/> } />

          {/* oauth */}
          <Route path='/oauth' element={<OauthIndexPage/>}>
            <Route path='/login' element={ <LoginPage/> }/>

            {/* register */}
            <Route path='/register' element={ <RegisterIndexPage/> }>
              <Route path='/register-user' element={ <UserRegisterPage/> }/>
              <Route path='/register-admin' element={ <AdminRegisterPage/> }/>
              <Route path='/vendor-vendor' element={ <VendorRegisterPage/> }/>
            </Route>

          </Route>

          {/* dashboard */}
          <Route path='/dashboard' element={ <DashboardIndexPage/> }>
            <Route index path='product-page' element={ <ProductsPage/> } />

            {/* dashboards */}
            <Route path='/user-dashboard' element={ <UserDashboardPage/> }/>
            <Route path='/admin-dashboard' element={<AdminDashboardPage/>}/>
            <Route path='/vendor-dashboard' element={<VendorDashboardPage/>}/>

            {/* products */}
            <Route path='/products' element={<ProductsIndexPage/>}>
              <Route path='/favourites' element={ <FavouriteProducts/> }/>
              <Route path='/wish-list' element={ <WishListProductsPage/> }/>
            </Route>
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
