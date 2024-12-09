import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Signup } from './Pages/Singup'
import { Profile } from './Pages/Profile'
import { Messages } from './Pages/Messages'
import { Addpost } from './Pages/Addpost'
function App() {
  return <div className='h-full w-full'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Messages' element={<Messages />} />
        <Route path='/:Profile' element={<Profile />} />
        <Route path='/Create' element={<Addpost />} />
        <Route path='/Create' element={<Addpost />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
