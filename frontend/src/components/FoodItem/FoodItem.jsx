import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id, name, price, description, image }) => {
  
  // const [itemCount, setItemcount] = useState(0)
  
  const { cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);


  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={url+"/images/"+image} alt="" />
        {!cartItems[_id]
            ? <img className='add' onClick={()=> addToCart(_id)} src={assets.add_icon_white} /> : <div className="food-item-counter">
            <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[_id]}</p>
            <img onClick={()=> addToCart(_id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p> {name} </p>
          <img src= {assets.rating_starts} alt="" />
        </div>
        <p className="food-tem-description">{description}</p>
        <p className="food-tem-price">₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem
