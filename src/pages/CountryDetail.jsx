import React, { useEffect, useState } from "react";
import EachCountry from "../components/EachCountry";
import { useLocation, useParams } from "react-router-dom";

import countriesData from "../data.json";

const CountryDetail = () => {
  const { countryName } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    const found = countriesData.find((country) => {
      return country.name.toLowerCase() === countryName.toLowerCase();
    });

    setCountry(found || null);
  });

  // const { state } = useLocation();
  // console.log(useLocation);

  // const findCountry =
  //   state.country ||
  //   detailsByCountry.find((country) => {
  //     return country.name === decodeURIComponent(countryName);
  //   });

  // console.log(findCountry);

  return (
    <div>
      <EachCountry perCountry={country} />
    </div>
  );
};

export default CountryDetail;
