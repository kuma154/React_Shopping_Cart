import React,{createContext,useEffect,useContext,useReducer} from 'react'
import CardItems from '../data'
import reducer from '../reducer/reducer'
export const AppContext =createContext();
const initialState={
    loading:false,
    cart:[],
    total:0,
    amount:0
}

const AppProvider = (props) => {
    const [state,dispatch]=useReducer(reducer,initialState);
    const clearCart=()=>{
        dispatch({type:'CLEAR_CART'})
    }
    const removeCart=(id)=>{
        dispatch({type:'REMOVE_CART',payload:id})
    }
    const increase = (id)=>{
        dispatch({type:'INCREASE_CART',payload:id})
    }
    const decrease = (id)=>{
        dispatch({type:'DECREASE_CART',payload:id})
    }
    useEffect(()=>{
        dispatch({type:'GET_TOTAL'})
    },[state.cart])

    const fetchData =async ()=>{
        dispatch({type:'Loading'})
        const respone = await fetch('')
    }
    useEffect(()=>{
        
    })
    return (
        <AppContext.Provider value={{...state,clearCart,removeCart,increase,decrease}}>
            {props.children}
        </AppContext.Provider>
    )
}
export const useGlobalContext=()=>{
    return useContext(AppContext)
}
export default AppProvider
