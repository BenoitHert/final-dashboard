import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Sidebar from './components/Sidebar'
import { useSelector} from 'react-redux'
import Editor from './pages/Editor'
// import './App.css'
import {FiSettings} from 'react-icons/fi'
import Calendars from './pages/Calendar'
import About from './pages/About'
import UserPage from './pages/UserPage'

function App() {
  const { user } = useSelector((state) => state.auth)
  
  return (
    <>
      <Router>
        <div className='relative flex dark:bg-main-dark-bg'>

        {user &&
        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
          <button className='text-3xl p-3
              hover:drop-shadow-xl
              hover:bg-light-gray text-white'
              style={{ background: 'blue',
              borderRadius: '50%'}}>
            <FiSettings/>
          </button>
        </div>}

          <div className="dark:bg-main-bg  min-h-screen w-full flex-2">
            <div className='fixed  bg-slate-200 dark:bg-main-dark-bg navbar w-full ' style={{ zIndex: '800'}}>
              <Header />
            </div>
          
          



          {user && <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white' style={{ zIndex: '900'}}>
            <Sidebar />
          </div>}
          


          {/* ROUTES */}
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            

            {/* PAGES */}
            <Route path='/about' element={<About />} />
            <Route path='/user' element={<UserPage />} />

            {/* APPS */}
            <Route path='/editor' element={<Editor />} />
            <Route path='/goals' element={<Dashboard />} />
            <Route path='/calendar' element={<Calendars />} />
            {/* <Route path='/calendar' element={<Dashboard />} /> */}
          </Routes>


          </div>
        </div>
      </Router>
      <ToastContainer />
      
    </>
  )
}

export default App
