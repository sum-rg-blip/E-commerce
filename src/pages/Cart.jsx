import { useSelector,useDispatch } from "react-redux"
import PriceCard from "./PriceCard"
import { removeItemFromCart,calculatePrice } from "../redux/reducer/Cart"
function Cart(){
  const items=useSelector((state)=>state.cart.cartIteam)
  const dispatch=useDispatch()
  const handleRemove=(id)=>{
    dispatch(removeItemFromCart(id))
    dispatch(calculatePrice())
  }
  return items.length ===0 ? <p>there is no card</p> : <div>
     <h1>this is  Cart</h1>
    {
      items.map((data)=>{
        return <div className="flex justify-between border-4 gap-y-10 sm:ml-[200px] gap-x-5 pt-2 mt-3  w-[600px] p-4">
          <img className="w-[200px]" src={data.images}></img>
        <div className=" pt-20 border-6  p-3 m-4">
          <h1 className="mt-2 font-primaryFont ">{data.title}</h1>
          <p className="font-primaryFont">${data.price}</p>
          <button onClick={()=>handleRemove(data)} className="bg-primaryColor text-thirdColor font-primaryFont  mt-2 w-[270px] h-7">Remove Cart</button> 
          </div>
          </div>
      })
    }
  <PriceCard/>
  </div>
}export default Cart