import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaChartPie ,FaCalendarCheck ,FaMobile ,FaCheck } from 'react-icons/fa'



import moreStyle from '../../styles/More/More.module.css'


import apple from '../../images/apple.png'
import store from '../../images/store.png'


import {motion}  from 'framer-motion'





function More() {
  return (
 
      
           
          <div className={moreStyle.main} id='home'>

          <div className={moreStyle.firstDiv}>
             <motion.div animate={{x:[-600,100,0],rotate:[-5,0],opacity:[0,1]}} transition={{delay:1.2,duration:2}}>Crypto Trading Platform</motion.div>    

                <div>Create your portfolio</div> 

          </div>



             <div className={moreStyle.secondDiv}>
        
                <div> <FaCheck  style={{marginRight:".5em",color:"#1199FA"}}/> The industry’s most comprehensive <span style={{color:"#1199FA"}}>insurance</span> coverage </div>

                 <div> <FaCheck  style={{marginRight:".5em",color:"#1199FA"}} /> Leader in <span style={{color:"#1199FA"}}>security</span> certifications and Buying cripto</div>

                   <div> <FaCheck  style={{marginRight:".5em",color:"#1199FA"}}/> Trusted by more than <span style={{color:"#1199FA"}}> 40M users</span> world-wide</div>

                <div className={moreStyle.secondDivImages}><img src={apple} alt="app store" /> <img src={store} alt="google store" /> </div>

                

            </div>




               <div className={moreStyle.threedDiv}>

                    <button  className={moreStyle.button} id='button'>Learn More  <AiOutlineArrowRight /> </button>
              </div>



              
   
        


    </div>
  )
}

export default More