import React from "react";
import CountrySearch from "./components/CountrySearch";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";
import "./App.css";
//Mam-Sir i have also added a photos folder-->Do go through it for a reference of application
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Country Info Application</h1>
      </header>
      <h3>
        <u>Enter Full and valid country name only</u>
      </h3>
      <main className="app-main">
        <CountrySearch />
        <CountryList />
        <CountryDetail />
      </main>
    </div>
  );
}

export default App;
