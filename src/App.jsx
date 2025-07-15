import { useState } from 'react'
import Navbar from './components/Navbar'
import {Routes,Route,useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import Dashboard from './pages/admin/Dashboard'
import AddShow from './pages/admin/AddShow'
import Layout from './pages/admin/Layout'
import ListShow from './pages/admin/ListShow'
import ListBookings from './pages/admin/ListBookings'
import { useAppContext } from './context/AppContext'
import { SignIn } from '@clerk/clerk-react'

function App() {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  const {user} = useAppContext()

  return (
    <>
      <Toaster  position="top-right"
  reverseOrder={false} />
      {!isAdminRoute && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/movies/:id' element={<MovieDetails/>} />
        <Route path='/movies/:id/:date' element={<SeatLayout/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
        <Route path='/favorite' element={<Favorite/>} />
      <Route path='/admin/*' element={user ? <Layout/> :
    <div className='min-h-screen flex justify-center items-center '>
      <SignIn fallbackRedirectUrl={'/admin'} />
    </div>
    }>
        <Route index element={<Dashboard/>} />
        <Route path='add-shows' element={<AddShow/>} />
        <Route path='list-shows' element={<ListShow/>} />
        <Route path='list-bookings' element={<ListBookings/>} />
      </Route>
      </Routes>   
      {!isAdminRoute && <Footer/>}  
    </>
  )
}

export default App
