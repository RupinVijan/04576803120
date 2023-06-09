import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TrainCard() {
  let navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000/train/trains");
      const response = await res.json();
      setData(response.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {data?.map((e) => (
              <div class="col">
                <div class="card shadow-sm">
                  <div class="card-body">
                    <p class="card-text">
                      {e.trainName} <br /> Price - Sleeper : Rs.
                      {e.price.sleeper} || AC : Rs.{e.price.AC} <br /> Time of
                      Arrival - {e.departureTime.Hours}:
                      {e.departureTime.Minutes}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          onClick={() => navigate(`/${e.trainNumber}`)}>
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default TrainCard;
