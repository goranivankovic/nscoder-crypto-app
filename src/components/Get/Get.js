import React from 'react'


import { AiOutlineArrowRight } from 'react-icons/ai'


import getStyles from '../../styles/Get/Get.module.css'

import chart from '../../video/chart.mp4'



function transform90(a){
    a.target.style.transform='scale(0.9)'
    a.target.style.transition='1200ms'
  }
  function transform100(b){
    b.target.style.transform='scale(1)'
    b.target.style.transition='500ms'
  }


function Get() {
  return (
          <div className={getStyles.container} id="get" >

    <div className={getStyles.fristDiv}  onMouseOver={transform90} onMouseLeave={transform100}>
    Get started in few moments
    
              </div>

          
             
                 <video className={getStyles.video}  type="video/mp4" src={chart}  autoPlay loop muted ></video> 
             
    
             
    
              <div className={getStyles.fourDiv}>
                  <div className={getStyles.threeDivs} >
                   
                   <div > {'$327B'}</div>
                   <div> Quarterly volume</div>

           </div>

                  <div className={getStyles.threeDivs} >
                      <div>{'100+'}</div>
                      <div> Countries supported</div>
    
          </div>

                  <div className={getStyles.threeDivs} >
                      <div >{'73+M'}</div>
                      <div> Verified users </div>
           
           </div>
    



     </div>
              
           <button className={getStyles.button} id='button'>Contact us <AiOutlineArrowRight /> </button>
    
    
        </div>
     

  )
}

export default Get