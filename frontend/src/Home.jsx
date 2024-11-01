import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import axios from "axios";


function Home() {

const[products, setProducts] = useState([])
  
const fetchProducts = async()=>{

  const response = await axios.get("http://localhost:3000/api/products")
 
  setProducts(response.data);

}

useEffect(()=>{

fetchProducts()

}, [])


    return (
    
    <>
     <Navbar/>
     <div className="flex flex-wrap">
     {

       products.map(function (product) {
        
        return(
    
          <Cards product= {product}  />
        )
       })
     }
 
       
     
     </div>
     
    </>
   
    
    )
}

export default Home;