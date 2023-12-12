import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Search_Country from "./Components/Search_Country";
import Cards from "./Components/cards";

import "./index.scss";
function App() {
  const [CountryData, SetCountryData] = useState([]);
  const [CountryName, SetCountryName] = useState("");

  // function for calling api country
  const FetchingData = async () => {
    fetch(`https://restcountries.com/v3.1/name/${CountryName}`)
      .then((res) => res.json())
      .then((data) => SetCountryData(data));
  };

  useEffect(() => {
    FetchingData();
  }, [CountryName]);
  return (
    <>
      <Header />
      <Search_Country Search={SetCountryName} />
      <Cards Data={CountryData} />
    </>
  );
}

export default App;
