import React, { useState } from 'react'
import { CiFilter } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import { TiFilter } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { apiUpdationAction } from '../store';
import { GiBodyHeight } from 'react-icons/gi';

function FilterDiet() {

    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const [filterValues,setFilterValues] = useState({
        minCarbs:0,
        minProtein:0,
        minSugar:0,
        minFat:0,
        minCalories:0,
        minFiber:0
    })

    const handleFilter = () => {
        setIsVisible(!isVisible);
    };
    
    const handleChange = (e,nutrient)=>{
          console.log(e.target.value)
          setFilterValues({...filterValues,[nutrient]:e.target.value})
          console.log(filterValues);

    }

    const handleSubmit = ()=>{
        setIsVisible(!isVisible);
        dispatch(apiUpdationAction.healthFilter(filterValues));
    }

    const handleReset = ()=>{
        setIsVisible(!isVisible);
        const newFilterValues = {
            minCarbs: 0,
            minProtein: 0,
            minSugar: 0,
            minFat: 0,
            minCalories: 0,
            minFiber: 0
        };
        
        // Update the state
        setFilterValues(newFilterValues);
        dispatch(apiUpdationAction.healthFilter(newFilterValues));
      
    }
   
  return (
    <div className='mx-3'>
        {isVisible?(<span className='text-light d-flex align-items-center gap-1 fs-6 fw-bolder' style={{cursor:'pointer'}} onClick={handleFilter}><FaFilter /> Filters</span>): (<span className='text-light d-flex align-items-center gap-1 fs-6' style={{cursor:'pointer'}} onClick={handleFilter}><CiFilter /> Filters</span>)}
   
 

  <div className={`container typeBarCont ${isVisible ? 'show' : 'hide'}`} style={{width:'300px',padding:'30px',zIndex:'-1'}}>
    <h5 className='text-center'>Minimum</h5>
   <label htmlFor="" style={{width:'100%'}} >
     Carbs (<span className='fs-lighter' style={{fontSize:'15px'}}>{filterValues.minCarbs}/100</span>)
       <input type="range" name="minCarbs" id="" style={{width:'100%'}} value={filterValues.minCarbs} className='fw-bold' onChange={(e)=>handleChange(e,'minCarbs')}/>
   </label>
   <label htmlFor="" style={{width:'100%'}}>
     Protein (<span className='fs-lighter' style={{fontSize:'15px'}}>{filterValues.minProtein}/100</span>)
       <input type="range" name="minProtein" id="" style={{width:'100%'}} value={filterValues.minProtein}onChange={(e)=>handleChange(e,'minProtein')} />
   </label>
   <label htmlFor="" style={{width:'100%'}}>
     Sugar (<span className='fs-lighter' style={{fontSize:'15px'}}>{filterValues.minSugar}/100</span>)
       <input type="range" name="minSugar" id="" style={{width:'100%'}} value={filterValues.minSugar}onChange={(e)=>handleChange(e,'minSugar')}/>
   </label>
   <label htmlFor="" style={{width:'100%'}}>
       Fat  (<span className='fs-lighter' style={{fontSize:'15px'}}>{filterValues.minFat}/100</span>) 
       <input type="range" name="minFat" id="" style={{width:'100%'}} value={filterValues.minFat} onChange={(e)=>handleChange(e,'minFat')}/>
   </label>
   <label htmlFor="" style={{width:'100%'}}>
     Fiber (<span className='fs-lighter' style={{fontSize:'15px'}}>{filterValues.minFiber}/100</span>)
       <input type="range" name="minFiber" id="" style={{width:'100%'}} value={filterValues.minFiber} onChange={(e)=>handleChange(e,'minFiber')}/>
   </label>
   <label htmlFor="" style={{width:'100%'}}>
     Calories (<span className='fs-lighter' style={{fontSize:'15px'}}>{filterValues.minCalories}/100</span>)
       <input type="range" name="minCalories" id="" style={{width:'100%'}} value={filterValues.minCalories} onChange={(e)=>handleChange(e,'minCalories')}/>
   </label>
    <div className="contBtns d-flex justify-content-between mx-3 mt-4">
     <button className="btn btn-danger" onClick={handleReset}>Reset</button>
    <button className="btn btn-primary" onClick={handleSubmit}>Set</button>
    </div>
  </div>
  
  </div>
  )
}

export default FilterDiet