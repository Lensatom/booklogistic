import { Navigate, redirect, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components'
import { Book, Home, Routes as AppRoutes } from './features'

function App() {

  return (
    <BrowserRouter>
      <div className='overflox-x-hidden'>
        <div className='fixed w-full z-10'>
          <Header />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/routes' element={<AppRoutes />} />
          <Route path='/book' element={<Book />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
