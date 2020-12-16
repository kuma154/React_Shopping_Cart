import React from 'react'
import CardContainer from './components/CardContainer'
import NavBar from './components/NavBar'

// import { AppContext } from './context/Context';
import {useGlobalContext} from './context/AppProvider'

function App() {
  const {loading} = useGlobalContext();
  if(loading){
  return <div><h1>...Loading</h1></div>
  }
  return (
  <main>
      <NavBar></NavBar>
      <CardContainer></CardContainer>  
  </main>
  );
}

export default App;
