import { React,useEffect,useRef,useState } from 'react'
import { motion } from 'framer-motion'
import images  from './images'
import './App.css'

function App() {
  const carouselRef=useRef();
  const [width,setWidth]=useState(0);
  useEffect(()=>{
   
setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
  },[]);
  return (
    <>
   <div>
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <motion.div ref={carouselRef} className="carousel"whileTap={{cursor:"grabbing"}}>
    <motion.div drag="x" dragConstraints={{right:0, left:-400}}  className='inner-carousel'>
      {images.map((image)=> (
        <motion.div className='item' key={image}>
          <img src={image} />
        </motion.div>
      ))}
      </motion.div>
    </motion.div>
   </div>
    </>
  );
};

export default App
