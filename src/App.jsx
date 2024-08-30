
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './routes/Navigation'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Login from './pages/Login'
import './App.css'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Landing/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
