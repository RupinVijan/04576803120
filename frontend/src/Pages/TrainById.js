import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";

function Trains() {
  let { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:8000/train/trains/${id}`);
      const response = await res.json();
      setData(response.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <div class="album py-5 bg-body-tertiary container">
        <h2>Train Name : {data?.trainName}</h2>
        <h2>
          Price - Sleeper : Rs.
          {data?.price.sleeper} || AC : Rs.{data?.price.AC}{" "}
        </h2>
        <h2>
          Time of Arrival - {data?.departureTime.Hours}:
          {data?.departureTime.Minutes}
        </h2>
      </div>
      <Footer />
    </div>
  );
}

export default Trains;
