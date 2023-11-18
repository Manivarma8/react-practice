import {useState,useEffect} from 'react';

const Dish = ()=>{
  const[mani,setmani] = useState(new Date())

  useEffect(()=>{
    const maniverse = setInterval(()=>{
   setmani(new Date())
    },1000)
    return (()=>
    clearInterval(maniverse))
  })
    return(
        <div className='Date'>
            <h1 class = "text-info">Hello World</h1>
        <h2 class = "text-info">I am Manivarman from Thanjavur {mani.toLocaleTimeString()}</h2>
        </div>
    )
}
export default Dish;