import Navbar from "../Navbar"


function CreateProduct() {

  const [data, setData] = useState({

    name: "",
    quantity : "",
    price : ""
    
      })
    
    const handleChange =(e)=>{
    
      
      const [name, value] = e.target

      setData({

        
      })


    }


    return(

        <>
         <Navbar/>

         <div class="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
  <div class="mt-10 text-center font-bold">Contact Us</div>
  <div class="mt-3 text-center text-4xl font-bold">Make an Appointment</div>
  <div class="p-8">
    <div class="flex gap-4">
      <input type="text" name="name" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="name *"  onChange={handleChange} />
      <input type="text" name="quantity" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="quantity *" />
    </div>
    
    <div class="">
      <textarea name="price" id="text" cols="30" rows="10" class="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300">price</textarea>
    </div>
    <div class="text-center">
      <a class="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Book Appoinment</a>
    </div>
  </div>
</div>
        
        
        </>



        
    )
}

export default CreateProduct