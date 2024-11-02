
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import SingleProduct from './components/pages/SingleProduct'
import CreateProduct from './components/pages/CreateProduct'

function App() {
 
  return (
   
 <BrowserRouter>
 <Routes>
  <Route path='/' element = {<Home/>}/>
  <Route path='/product/:id/' element={<SingleProduct />} />
   <Route path='/create/' element={<CreateProduct/>}/>

 </Routes>
 </BrowserRouter>
  
)
}

export default App
