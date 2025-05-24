import { React} from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'


import './index.css'
import './App.css'

import Layout from './Layout.jsx'
import App from './App.jsx'


import Main from './components/Main.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ConverterApp from './projects/UnitConverter/ConverterApp.jsx'
import Todo from './projects/Todo/Todo.jsx'
import QuizApp from './projects/Quiz/QuizApp.jsx'
import Weather from './projects/Weather/Weather.jsx'
import QRCodeGenerator from './projects/QRcode/QRCodeGenerator.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* <Route path='' element={<Navbar />}/> */}
      <Route path='' element={<App />}/>
      {/* <Route path='' element={<Footer />}/> */}
      <Route path='projects'>
        <Route path='unit-converter' element={<ConverterApp />} />
        <Route path='todo' element={<Todo />} />
        <Route path='weather' element={<Weather />} />
        <Route path='quiz' element={<QuizApp />} />
        <Route path='qr-code-generator' element={<QRCodeGenerator />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)
