import React,{useEffect} from 'react'
import FilterSection from './FilterSection';
import Cards from './Cards';
const Home = ({setProgress}) => {
 
  useEffect((() =>{
    setProgress(40);
    setTimeout(()=>{
      setProgress(100)
    },200)
    
  }),[setProgress])
  return (
    <>
      <section className='home'>
          <FilterSection/>
          <Cards/>
        
      </section>
    </>
  )
}

export default Home