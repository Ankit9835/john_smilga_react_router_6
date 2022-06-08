import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Products'
import Error from './pages/Error'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Sharedlayout from './pages/SharedLayout'
import SingleProduct from './pages/SingleProduct'
import ProtectedRoute from './pages/ProtectedRoute'
import SharedProductLayout from './pages/SharedProductLayout'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sharedlayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Product />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser} />} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
