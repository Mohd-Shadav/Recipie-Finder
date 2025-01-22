import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { apiUpdationAction } from '../store'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Ingredients(){
  const id = useSelector((state)=>state.apiUpdation)
  const [ingredients,setIngredients] = useState([]);
  const [stepsCooking,setStepsCooking] = useState([]);
  const[metaIngredients,setMetaIngredients] = useState([]);
  const [count,setCount] = useState(false);
  const navigate = useNavigate();



  

  const fetchData = async ()=>{


    const response = await fetch(id.infoURL);
    const data = await response.json();
    setIngredients(data.extendedIngredients);
    setMetaIngredients(data);
    console.log(data)
    setStepsCooking(data.analyzedInstructions[0].steps);
    localStorage.setItem('ingredients',JSON.stringify(data.extendedIngredients));
    localStorage.setItem('metaIngredients',JSON.stringify(data));
    localStorage.setItem('stepsCooking',JSON.stringify(data.analyzedInstructions[0].steps));
    setCount(true);
    

  }
  const handleBack = ()=>{
      navigate('/recipie');
  }

  useEffect(()=>{
 
 
    const storedIngredients = JSON.parse(localStorage.getItem('ingredients')) || [];
    const storedStepsCooking = JSON.parse(localStorage.getItem('stepsCooking')) || [];
    const storedMetaIngredients = JSON.parse(localStorage.getItem('metaIngredients')) || {};
  
    setIngredients(storedIngredients);
    setStepsCooking(storedStepsCooking);
    setMetaIngredients(storedMetaIngredients);
      
      
     fetchData();
  },[id])
  return (
    <div className='container my-5'>
      <div className="btnDiv d-flex justify-content-between">
      <button className="btn btn-primary" onClick={handleBack}>back</button>
      <div className="dropdown">
  <button
    className="btn btn-primary dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    More Info
  </button>
  <ul className="dropdown-menu p-2" aria-labelledby="dropdownMenuButton" style={{ width: '200px' }}>
    <li className="fw-bolder">
      Gluten free: {metaIngredients.glutenFree ? <span className="fw-normal">True</span> : <span className="fw-normal">False</span>}
    </li>
    <li className="fw-bolder">
      Health Score: <span className="fw-normal">{metaIngredients.healthScore}</span>
    </li>
    <li className="fw-bolder">
      isVegetarian: {metaIngredients.vegetarian ? <span className="fw-normal">True</span> : <span className="fw-normal">False</span>}
    </li>
    <li className="fw-bolder">
      isVeryHealthy: {metaIngredients.veryHealthy ? <span className="fw-normal">True</span> : <span className="fw-normal">False</span>}
    </li>
    <li className="fw-bolder">
      Servings: <span className="fw-normal">{metaIngredients.servings}</span>
    </li>
    <li className="fw-bolder">
      ReadyInMinutes: <span className="fw-normal">{metaIngredients.readyInMinutes}</span>
    </li>
  </ul>
</div>

</div>
      <h1 className='text-center my-4'>Ingredient Table</h1>
         <div className="table-responsive overflow-x-hidden">
  <table class="table mx-5">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Ingredient Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Consistency</th>
    </tr>
  </thead>
  <tbody>
  

        {ingredients.map((item,idx)=>{
        return <tr key={idx}>
               <th scope="row">{idx+1}</th>
               <td>{item.name}</td>
               <td>{item.original}</td>
               <td>{item.consistency}</td>
               </tr>
 
        })}
    
    
  </tbody>
</table>

<h1 className='text-center my-5'>Instruction : How to Cook</h1>
         </div>

         <div className="instructions container">
            
         <div class="row">
  <div class="col-4">
    <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center instructionsLinks">
      {stepsCooking.map((item,idx)=>{
         return <a key={idx} class="p-1 rounded" href={`#simple-list-item-${idx+1} `}>Step {item.number}</a>
      })}
      
   
    </div>
  </div>
  <div class="col-3">
    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example instructionsStepsdetails" tabIndex="0">
          
          {stepsCooking.map((item,idx)=>{
          return <><h4 id={`simple-list-item-${idx+1}`}>Step {item.number}</h4>
                 <p>{item.step}</p>
                 </>
          })}
    </div>
  </div>
</div>
         </div>
    </div>
  )
}

export default Ingredients;
