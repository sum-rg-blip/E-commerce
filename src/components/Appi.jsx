import axios from "axios"
import {useEffect,useState} from "react"
import Product from "./Product"
import Header from "./Header"
import  PacmanLoader  from "react-spinners/PacmanLoader"
function Appi() {


  const[products,setProduct]=useState([])
  const[loading,setLoading]=useState(false)
 

  const[search,setSearch]=useState("")
  const searchHandle =(events)=>{
    setSearch(events.target.value)
  }
  
  const handleget =()=>{
    setLoading(true)
    axios.get("https://api.escuelajs.co/api/v1/products").then((respons) =>{
      setProduct(respons.data)
      setLoading(false)
  }).catch((error) =>{
    console.log(error)
   })

  }

  useEffect(()=>{
    handleget()
  },[])


 return<div>
  <Header search={searchHandle}/>
 <div className="sm:grid gap-y-10 gap-x-5 pt-20 sm:grid-cols-[300px_300px_300px_300px] p-4">
  {
    loading==true ?<PacmanLoader loading={loading}/>:
   products.filter((item)=>{
    return search.toLowerCase()=="" ? item : item.title.toLowerCase().includes(search.toLowerCase())
   }).map((data)=>{
    return<Product items={data}/>
   })
  }
 </div>
 </div>
}
export default Appi