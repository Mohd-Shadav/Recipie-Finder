import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { apiUpdationAction } from '../store';

function CardRecipes(props) {


    const dispatch = useDispatch();

    const handleIndex = (idx)=>{
          console.log(idx,props.id)
          dispatch(apiUpdationAction.id(props.id));
          
    }
  return (
    <div className='d-flex'>
     <div className='recipieCards'>
       <div className="card" style={{width: "15rem"}}>
     <img src={props.src} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <Link to="/ingredients" className="btn btn-primary" onClick={()=>handleIndex(props.index)}>Explore it</Link>
      </div>
      </div>
      </div>
    </div>
  )
}

export default CardRecipes