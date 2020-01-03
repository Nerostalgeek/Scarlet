import React, { useState, useEffect } from "react";
import CarItem from "./CarItem/CarItem";

const ListCars = props => {
  const [hasError, setErrors] = useState(false);
  const [fetchedCars, setFetchedCars] = useState({});
  const [query, setQuery] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://localhost:6200/cars/");
      res
        .json()
        .then(res => setFetchedCars(res))
        .then(setQuery("true"))
        .catch(err => setErrors(err));
    }
    fetchData();
  }, []);

  return (
    <div>
    </div>
  );
};

export default ListCars;
