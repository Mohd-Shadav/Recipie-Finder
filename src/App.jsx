import React,{Suspense,lazy} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Loader } from './components/Loader'
const Home = lazy(()=>import('./components/Home'));
const Recipie = lazy(()=>import('./components/Recipie'));
const Ingredients = lazy(()=>import('./components/Ingredients'));






function App() {
  return (
      <>
        <Suspense fallback={<Loader/>}>
      <Router>
        <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/recipie' element={<Recipie/>}/>
          <Route path='/ingredients' element={<Ingredients/>}/>
        </Routes>
     
        </Router>
        </Suspense>
      </>
  )
}

export default App