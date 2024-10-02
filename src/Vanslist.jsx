import React, { useEffect } from "react";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Vanslist(){

// Declare state variable Vanslist and its corresponding updater function setVanslist
const [Vanslist, setVanslist] = useState([]);

// useEffect hook runs side effects in function components
useEffect(() => {
  // Fetch data from the "/api/vans" endpoint
  fetch("/api/vans")
    // Parse the response as JSON
    .then(res => res.json())
    // Set the fetched data to the Vanslist state
    .then(data => setVanslist(data.vans))
    // Handle any errors that occur during the fetch operation
    .catch(error => console.error('Error fetching vans:', error));
}, []); // The empty dependency array ensures this effect runs only once when the component mounts

const vanElements = Vanslist.map((van, index) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`} aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}>
        <img src={van.imageUrl} alt={`Image of ${van.name}`} />
        <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
    </div>
))
// Log the current state of Vanslist to the console
// console.log(Vanslist);
// console.log(typeof(Vanslist));

return (
<>
<Navbar />
<h3>Explore our vans options</h3>
<div className="vanlist-main">
    {vanElements}
  </div>
  <Footer />
</>
);
}