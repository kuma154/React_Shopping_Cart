import React,{useContext} from 'react'
import {useGlobalContext} from '../context/AppProvider'
import CardItem from './CardItem';
const CardContainer = () => {
    const {cart,total,clearCart}=useGlobalContext();
    console.log(cart)
    if(cart.length===0){
        return <section className='cart'>
            <header>
                <h2>购物车</h2>
                <h4 className='empty-cart'>没有添加的商品</h4>
            </header>
        </section>
    }
    return (
       <section className='cart'>
           <header>
               <h2>我的购物车</h2>
           </header>
           <div className=''>
                {cart.map((item,index)=>{
                    return <CardItem key={index} {...item}></CardItem>
                })}
           </div>
           <footer>
               <hr></hr>
               <div className='cart-total'>
                   <h4>总价<span>{total}元</span></h4>
                    <button onClick={clearCart} className='btn clear-btn'>清空购物车</button>
               </div>
           </footer>
       </section>
    )
}

export default CardContainer
