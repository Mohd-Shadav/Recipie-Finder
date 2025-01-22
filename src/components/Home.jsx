import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
      const navigate =  useNavigate();
  const handleNavigate = ()=>{
     navigate('/recipie');
  }
  return (

    <>
    <div style={{display:'flex',flexDirection:'column'}}>
    <div className='HeroesSection' >
        <div className='HeroesSectionHeadings'> 
        <h2>Your Culinary Adventure Awaits</h2>
        <p>Unleash your inner chef with our curated collection of recipes. 
        <br />
        Simple, tasty, and made just for you!</p>
        <br />
        <button class="button type1" onClick={handleNavigate}>
        </button>
        </div>
        <div>
            <img onClick={handleNavigate} className='HeroesSectionImage' src="/vecteezy_ai-generated-pork-teriyaki-japanese-food-on-a-transparent_36512714.png" alt="" style={{cursor:'pointer'}}/>
        </div>


    </div>
  
    </div>
      

    </>
  )
}

export default Home