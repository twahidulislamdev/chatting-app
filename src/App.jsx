import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import DashBoard from './components/pages/DashBoard'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashBoard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />   
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
