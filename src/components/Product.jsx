import {useDispatch} from 'react-redux'
import{toast,Toaster} from "react-hot-toast"
import {addItemToCart, calculatePrice} from "../redux/reducer/Cart"
function Product ({items}){
  const dispatch = useDispatch()
  const handlecart= () => {
    dispatch(addItemToCart(items))
    dispatch(calculatePrice())
    toast.success("add to cart")
  }

  return<div className=" pt-20 border-6 w-[300px] h-[400px] p-3 m-4">
   <img src={items.images}></img>
   <h1 className="mt-2 font-primaryFont ">{items.title.substring(0,40)}</h1>
   <p className="font-primaryFont">${items.price}</p>
  <button onClick={handlecart} className="bg-primaryColor text-thirdColor font-primaryFont  mt-2 w-[270px] h-7">Add Cart</button> 
  <Toaster/>
  </div>
  
}export default Product