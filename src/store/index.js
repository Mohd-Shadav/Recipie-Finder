import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// const apiKey=process.env.REACT_APP_API_KEY;

const apiKey = "02156650bab7428ba294da5dbc8dc431"



const apiUpdation = createSlice({
    name:'apiUpdation',
    initialState:{pageValue:0,url:'',infoURL:'',q:'',id:'',cuis:'',diety:'',typy:'',healthyFil:{
        minCarbs:0,
        minProtein:0,
        minSugar:0,
        minFat:0,
        minCalories:0,
        minFiber:0
    }},
    reducers:{
        query:(state,action)=>{
              state.q = action.payload;
              state.pageValue = 0;
              state.url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${state.cuis}&query=${state.q}&minCarbs=${state.healthyFil.minCarbs}&minProtein=${state.healthyFil.minProtein}&minFat=${state.healthyFil.minFat}&minFiber=${state.healthyFil.minFiber}&minCalories=${state.healthyFil.minCalories}&minSugar=${state.healthyFil.minSugar}&type=${state.typy}&diet=${state.diety}&offset=${state.pageValue}&apiKey=${apiKey}`;


        },
        offsetIncrement:(state,action)=>{
         state.pageValue = state.pageValue + 1;
         state.url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${state.cuis}&query=${state.q}&type=${state.typy}&diet=${state.diety}&offset=${state.pageValue}&apiKey=${apiKey}`;
         
        },
        
        offsetDecrement:(state,action)=>{
              state.pageValue = state.pageValue - 1;
         
            
        },
        cuisine:(state,action)=>{
            state.cuis = action.payload;
            state.url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${state.cuis}&query=${state.q}&minCarbs=${state.healthyFil.minCarbs}&minProtein=${state.healthyFil.minProtein}&minFat=${state.healthyFil.minFat}&minFiber=${state.healthyFil.minFiber}&minCalories=${state.healthyFil.minCalories}&minSugar=${state.healthyFil.minSugar}&type=${state.typy}&diet=${state.diety}&offset=${state.pageValue}&apiKey=${apiKey}`;
        },
        diet:(state,action)=>{
            state.diety = action.payload;
            if(action.payload==='ovo%20vegetarian')
            {
                state.url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${state.cuis}&query=${state.q}&minCarbs=${state.healthyFil.minCarbs}&minProtein=${state.healthyFil.minProtein}&minFat=${state.healthyFil.minFat}&minFiber=${state.healthyFil.minFiber}&minCalories=${state.healthyFil.minCalories}&minSugar=${state.healthyFil.minSugar}&type=${state.typy}&diet=${state.diety}&offset=${state.pageValue}&apiKey=${apiKey}`;
            }
            else{

           
                state.url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${state.cuis}&query=${state.q}&minCarbs=${state.healthyFil.minCarbs}&minProtein=${state.healthyFil.minProtein}&minFat=${state.healthyFil.minFat}&minFiber=${state.healthyFil.minFiber}&minCalories=${state.healthyFil.minCalories}&minSugar=${state.healthyFil.minSugar}&type=${state.typy}&diet=${state.diety}&offset=${state.pageValue}&apiKey=${apiKey}`;
        }
        
        },
        id:(state,action)=>{
            state.infoURL = `https://api.spoonacular.com/recipes/${action.payload}/information?apiKey=${apiKey}`
        },
        type:(state,action)=>{
            state.typy = action.payload;
            state.url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${state.cuis}&query=${state.q}&type=${state.typy}&diet=${state.diety}&offset=${state.pageValue}&apiKey=${apiKey}`;
        },
        healthFilter:(state,action)=>{
              state.healthyFil = action.payload;
              state.url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${state.cuis}&query=${state.q}&minCarbs=${state.healthyFil.minCarbs}&minProtein=${state.healthyFil.minProtein}&minFat=${state.healthyFil.minFat}&minFiber=${state.healthyFil.minFiber}&minCalories=${state.healthyFil.minCalories}&minSugar=${state.healthyFil.minSugar}&type=${state.typy}&diet=${state.diety}&offset=${state.pageValue}&apiKey=${apiKey}`;

        }
        
    }
})


const store = configureStore({
    reducer:{
        apiUpdation:apiUpdation.reducer
    }
})

export const apiUpdationAction = apiUpdation.actions
export default store;