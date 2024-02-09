import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";




const CartItem = ({item}) => {
  
  const dispatch= useDispatch();

  function removeFromCart(){
          dispatch(remove(item.id))
          toast.success("item removed")
  }

  return (
    <div className="flex flex-col items-center justify-between 
     gap-3 p-3 mt-10 ml-5 rounded-xl outline">

        <div className= "h-[180px]">
          <img src={item.image} className="h-full w-full " alt="" />
        </div>

        <div>
          <h1>{item.title}</h1>
          <h1>{item.discription}</h1>

          <div>
             <p>{item.price}</p>

             <div onClick={removeFromCart}>
                <MdDeleteForever />
             </div>
             

          </div>
        </div>

    </div>
  )
};

export default CartItem;
