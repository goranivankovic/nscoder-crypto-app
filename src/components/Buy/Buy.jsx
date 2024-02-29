import React from 'react'


import buyStyle from '../../styles/Buy/Buy.module.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import axios from 'axios';
import { useEffect,useState } from 'react';



 function Buy() {
 

const[all,setAll]=useState([])

  useEffect(() => {

 async function fetchData() {

    try{
 
      let proba ='https://api.coinlore.net/api/tickers/'
      let proba2='https://api.coinpaprika.com/v1/tickers'
    
 
 const res = await  axios.get(proba)



   setAll(res.data.data.slice(0,8))


    }catch(err){
      console.log(err);
    }
   

 
}

    fetchData() 

    return () => {


    }

  }, [])
  
 


    return (
        <div className={buyStyle.container} id='buy'>

<div className={buyStyle.firstDiv}>
            Bitcoin, Ethereum, at true cost

          </div>
          <div className={buyStyle.secondDiv}>
         <div> Enjoy up to 8% back on all spending with your sleek,</div>
               <div>pure metal card.</div>
           <div>No annual fees. Top-up with fiat or crypto.</div>  

          </div>


                 <div className={buyStyle.emptyDiv}></div>


           <div className={buyStyle.threedDiv}>


          {all.map((a)=>(

              <div key={a.id}   className={buyStyle.threedDivItems}>
                    <div>{a.rank}.  {a.name}</div>
                    <div>{a.price_usd+' $'}</div> 
                    <div style={{color:"#1199FA"}}>{a.percent_change_1h+'%'}</div> 
                    <div> {a.market_cap_usd +' $'}</div> 
                    <button>Trade</button>
           </div>

           ) )}     

 
           </div>



           
                 <div className={buyStyle.emptyDiv}></div>


       
         
        
         <button  className={buyStyle.button} id='button'>Buy now <AiOutlineArrowRight /> </button>


       
            
        </div>
    )
}




export default  Buy;