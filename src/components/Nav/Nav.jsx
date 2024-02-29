import React, { useState } from 'react'


import navStyles from '../../styles/Nav/Nav.module.css'



import { animate, delay, motion } from "framer-motion"

 


function Nav() {


  const[laz,setlaz]=useState(true)
  const[laz2,setlaz2]=useState(true)
  const[laz3,setlaz3]=useState(true)
  const[laz4,setlaz4]=useState(true)
  const[laz5,setlaz5]=useState(true)


  const[item1,setItem1]=useState('HOME')
  const[item2,setItem2]=useState('BUY')
  const[item3,setItem3]=useState('GET')
  const[item4,setItem4]=useState('CRYPTO')
  const[item5,setItem5]=useState('INFO')






  function a1() {

  
 setlaz(!laz)

setTimeout(() => {

   setlaz(laz)

}, 3000);

}



   function a2() {
  
 setlaz2(!laz2)

setTimeout(() => {

   setlaz2(laz2)

}, 3000);
    
  }



 function a3() {
  
 setlaz3(!laz3)

setTimeout(() => {

   setlaz3(laz3)

}, 3000);
    
  }




  
 function a4() {
  
 setlaz4(!laz4)

setTimeout(() => {

   setlaz4(laz4)

}, 3000);
    
  }



   
 function a5() {
  
 setlaz5(!laz5)

setTimeout(() => {

   setlaz5(laz5)

}, 3000);
    
  }


  return (
    <div>

      <div className={navStyles.main}>
     
      <motion.a

     animate={{
      scale: [1, 1.5, 3, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}

    transition={{ repeat: Infinity, duration: 4 }}


      
      href="#home"
      onClick={a1}
      ></motion.a>


<a   href="#buy"
      onClick={a2}
      >{!laz2 ? <motion.div 
       animate={{
     x:[-300,300,70],
     rotate:[0,20,0],
     scale:[1,9,3],
     opacity:[0,.5,1] }}
    transition={{duration:1.5,delay:.5,ease:'circInOut'}}
      >{item2}</motion.div>  :''} </a>


<a  href="#get"
      onClick={a3}
      >{!laz3 ? <motion.div 
       animate={{
     x:[-300,300,70],
     rotate:[0,20,0],
     scale:[1,9,3],
     opacity:[0,.5,1]}}
    transition={{duration:1.5,delay:.5,ease:'circInOut'}}
      >{item3}</motion.div>  :''} </a>



<a  href="#crypto"
      onClick={a4}
      >{!laz4 ? <motion.div 
       animate={{
     x:[-300,300,70],
     rotate:[0,20,0],
     scale:[1,9,3],
     opacity:[0,.5,1]}}
    transition={{duration:1.5,delay:.5,ease:'circInOut'}}
      >{item4}</motion.div>  :''} </a>




 <a   href="#info"
      onClick={a5}
      >{!laz5 ? <motion.div 
       animate={{
     x:[-300,300,70],
     rotate:[0,20,0],
     scale:[1,9,3],
     opacity:[0,.5,1]}}
    transition={{duration:1.5,delay:.5,ease:'circInOut'}}
      >{item5}</motion.div>  :''} </a>
     



    
      
      </div>



    </div>
  )
}

export default Nav