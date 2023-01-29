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

function App() {
  const { user } = useSelector((state) => state.auth)
  
  return (
    <>
      <Router>
        <div className='container'>
        <Header />
        {user && <div className='sidebar'>
          <Sidebar />
          </div>}
          


          {/* ROUTES */}
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            {/* PAGES */}

            {/* APPS */}
            <Route path='/editor' element={<Editor />} />
            <Route path='/goals' element={<Dashboard />} />
            {/* <Route path='/calendar' element={<Dashboard />} /> */}
          </Routes>



        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
