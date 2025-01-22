import React, { useEffect, useState } from "react";
import CardRecipes from "./CardRecipes";
import { useDispatch, useSelector } from "react-redux";
import { apiUpdationAction } from "../store";
import { TypeNavbar } from "./TypeNavbar";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "./Loader";


function Recipie(){
  
  
  const query = useSelector((state) => state.apiUpdation);
  const dispatch = useDispatch();
  const[offset,setOffSet] = useState(0);
  const [apiResult, setApiResult] = useState([]);
  const[allData,setAllData] = useState(0);
  const [loading,setLoading] = useState(true)
  // const [randomRecipie,setRandomRecipie] = useState([]);
  let lengthApi = 0;


  const handleNext = ()=>{
    setOffSet((prevOffset)=> prevOffset + 1);
    console.log(offset);
    dispatch(apiUpdationAction.offsetIncrement());
  }
  

    
    const fetchData = async () => {
      try {
        // https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey
        const response = await fetch(query.url);
        
        const data = await response.json();
      
        setApiResult((prevResults) => prevResults.concat(data.results)
        );
        setLoading(false);

        // setApiResult(apiResult.concat(data.results));
        
        
        setAllData(data);

        console.log(data);
        lengthApi += apiResult.length;
        
      } catch (error) {
      // console.log("Error fetching data:", error);
    }
  };
  
    
    useEffect(() => {
    
        fetchData();        
     
    }, [query.url]); // Empty dependency array means this runs once after the initial render

    useEffect(()=>{
        setApiResult([])
    },[query.q,query.cuis,query.diety,query.typy,query.healthyFil])
        


    useEffect(()=>{

 
        const fetchSingleData = async () => {
          const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query.q}&offset=${query.pageValue}&apiKey=02156650bab7428ba294da5dbc8dc431`)
          const data = await response.json();
         
          setApiResult((prevResults)=>prevResults.concat(data.results));
          setLoading(false);
          localStorage.setItem('api',apiResult);
          setAllData(data);
  
          
          lengthApi += apiResult.length;

        } 
        if(query.q=='')
          {
        fetchSingleData();
      }
        
    

    },[])
    


    return (
      <div>  
      {/* <TypeNavbar/> */}

      {loading && <Loader/>}
     <InfiniteScroll 
     dataLength={apiResult.length} 
     next={handleNext}
     hasMore={lengthApi<allData.totalResults}
     loader={<Loader/>}>
      <div className="container d-flex flex-wrap">
       {allData.totalResults>0 || apiResult.length>0 ? (apiResult.map((item,idx) => {
              return (
                <div key={idx}>
                  <CardRecipes
                    src={item.image}
                    title={item.title}
                    description={""}
                    id={item.id}
                    index={idx}
                    />
                </div>
              );
            })):
             (<div className="container my-5">
              <h1 className="text-center my-5 mt-5">No Results Found</h1>
            </div>)}
      </div>

      </InfiniteScroll>
    </div>
  );
};

export default Recipie





