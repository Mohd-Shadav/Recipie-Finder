import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { apiUpdationAction } from '../store';
import FilterDiet from './FilterDiet';

export const TypeNavbar = () => {

    const dispatch = useDispatch();
    const [dietStatus,setDietStatus] = useState('non');
    
  const handleCuisine = (e)=>{
      console.log(e.target.value);
      dispatch(apiUpdationAction.cuisine(e.target.value));
 }

 const handleType = (e)=>{
  dispatch(apiUpdationAction.type(e.target.value));
 }

const handleVeg = ()=>{
  setDietStatus('veg')
  dispatch(apiUpdationAction.diet('vegetarian'));
}

const handleNonVeg = ()=>{
  setDietStatus('non')
  dispatch(apiUpdationAction.diet(''));
}
const handleOvoVeg = ()=>{
  setDietStatus('ovo')
  dispatch(apiUpdationAction.diet('ovo%20vegetarian'));
}

  return (
    <div className='d-flex justify-content-between px-5 py-4 typeNavbar'>
           <div className="navCategory">
        <ul className="navCategoryList">
          <li onClick={handleVeg} style={{color:dietStatus==='veg'?'#ffffff':'#D3D3D3',fontWeight:dietStatus==='veg'? '900':'normal'}}><img src="./broccoli.png" alt="" style={{width:'20px',marginRight:'5px'}} />Veg</li>
          <li onClick={handleOvoVeg} style={{color:dietStatus==='ovo'?'#ffffff':'#D3D3D3',fontWeight:dietStatus==='ovo'? '900':'normal'}}><img src="./boiled-egg.png" alt=""  style={{width:'20px',marginRight:'5px'}} />Ovo</li>
          <li onClick={handleNonVeg} style={{color:dietStatus==='non'?'#ffffff':'#D3D3D3',fontWeight:dietStatus==='non'? '900':'normal'}}><img src="./meat.png" alt=""  style={{width:'20px',marginRight:'5px'}}/>Non-Veg</li>
        </ul>

        <select name="cuisine" id="" className="btn btn-warning cuisineSelection" onChange={handleCuisine} style={{fontWeight:'bolder'}}>
          <option value="" style={{fontWeight:'bolder'}}>Cuisine</option>
          <option value="indian">Indian</option>
          <option value="italian">Italian</option>
          <option value="mexican">Mexican</option>
          <option value="french">French</option>
          <option value="american">American</option>
        </select>
      </div>

      <select name="cuisine" id="" className="btn btn-light cuisineSelection" onChange={handleType} style={{fontWeight:'bolder'}}>
          <option value="default" style={{fontWeight:'bolder'}}>Type</option>
          <option value="maincourse">main course</option>
          <option value="dessert">dessert</option>
          <option value="breads">breads</option>
          <option value="soups">soups</option>
          <option value="beverages">beverages</option>
          <option value="snack">snack</option>
          <option value="breakfast">breakfast</option>
          <option value="appetizer">appetizer</option>
        </select>

       <FilterDiet/>
    </div>

  )
}
