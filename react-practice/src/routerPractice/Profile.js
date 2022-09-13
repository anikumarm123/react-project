import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { product } from './Context'


const Profile = () => {
   
   const cartNav = useNavigate()

  const { state,dispatch } = useContext(product)
  const listItem = state.CartItems
  
  
  const CartFun =(data)=>{
  
  // dispatch({type:'AddToCart',payload:[{name:'aaa',age:24}]})
 }
const fav =(data)=>{

}
  return (
    
    <div className='view' >
      {/* <button className='viewbtn' onClick={()=>viewFun()}>View Cart Items</button> */}
      <div className='mainflx'>
         {listItem.map((data,index)=>
            <div className='eachdata' key={index}> 
            <h1>{data.name}</h1>
             <img src={data.image}></img><br></br>
             <button onClick={()=>CartFun(data)}><i class="fa fa-shopping-cart" ></i></button>
             <button onClick={()=>fav(data)}><i class="fa fa-heart"></i></button>  
            </div>
         )
         }
         </div>
    </div>
  )
}

export default Profile