import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { apiUpdationAction } from "../store";
import FilterDiet from "./FilterDiet";

export const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false); // State for toggling navbar
  const [dietStatus, setDietStatus] = useState("non");
  const [locValue,setLocValue] = useState('/')
  const dispatch = useDispatch();
  const location = useLocation();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(apiUpdationAction.query(inputValue));
  };

  const handleCuisine = (e) => {
    dispatch(apiUpdationAction.cuisine(e.target.value));
  };

  const handleType = (e) => {
    dispatch(apiUpdationAction.type(e.target.value));
  };

  const handleVeg = () => {
    setDietStatus("veg");
    dispatch(apiUpdationAction.diet("vegetarian"));
  };

  const handleNonVeg = () => {
    setDietStatus("non");
    dispatch(apiUpdationAction.diet(""));
  };

  const handleOvoVeg = () => {
    setDietStatus("ovo");
    dispatch(apiUpdationAction.diet("ovo%20vegetarian"));
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(()=>{
        setLocValue(location.pathname);
  },[location])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <img
          style={{ width: "80px" }}
          className="mx-3"
          src="./generative-ai-fruits-vegetables-arranged-heart-shape-healthy-food-nutrition-concept-isolated-busines-removebg-preview.png"
          alt="Logo"
        />
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isCollapsed ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/recipie" ? "active" : ""
                }`}
                aria-current="page"
                to="/recipie"
              >
                Recipe
              </Link>
            </li>
          </ul>
         {locValue==='/recipie' &&  <div className="d-flex flex-wrap align-items-center justify-content-between gap-5 NavBar-Category">
            <ul className="navCategoryList">
              <li
                onClick={handleVeg}
                style={{
                  color: dietStatus === "veg" ? "#ffffff" : "#D3D3D3",
                  fontWeight: dietStatus === "veg" ? "900" : "normal",
                }}
              >
                <img
                  src="./broccoli.png"
                  alt="veg_img"
                  style={{ width: "20px", marginRight: "5px" }}
                />
                Veg
              </li>
              <li
                onClick={handleOvoVeg}
                style={{
                  color: dietStatus === "ovo" ? "#ffffff" : "#D3D3D3",
                  fontWeight: dietStatus === "ovo" ? "900" : "normal",
                }}
              >
                <img
                  src="./boiled-egg.png"
                  alt="ovo_img"
                  style={{ width: "20px", marginRight: "5px" }}
                />
                Ovo
              </li>
              <li
                onClick={handleNonVeg}
                style={{
                  color: dietStatus === "non" ? "#ffffff" : "#D3D3D3",
                  fontWeight: dietStatus === "non" ? "900" : "normal",
                }}
              >
                <img
                  src="./meat.png"
                  alt="non_img"
                  style={{ width: "20px", marginRight: "5px" }}
                />
                Non-Veg
              </li>
            </ul>

            <select
              name="cuisine"
              className="btn btn-warning cuisineSelection"
              onChange={handleCuisine}
              style={{ fontWeight: "bolder" }}
            >
              <option value="">Cuisine</option>
              <option value="indian">Indian</option>
              <option value="italian">Italian</option>
              <option value="mexican">Mexican</option>
              <option value="french">French</option>
              <option value="american">American</option>
            </select>

            <select
              name="type"
              className="btn btn-light cuisineSelection"
              onChange={handleType}
              style={{ fontWeight: "bolder" }}
            >
              <option value="default">Type</option>
              <option value="maincourse">Main Course</option>
              <option value="dessert">Dessert</option>
              <option value="breads">Breads</option>
              <option value="soups">Soups</option>
              <option value="beverages">Beverages</option>
              <option value="snack">Snack</option>
              <option value="breakfast">Breakfast</option>
              <option value="appetizer">Appetizer</option>
            </select>
            <FilterDiet />
          </div>}
          <form className="d-flex mx-5" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
