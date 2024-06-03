import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "./search.module.css";

function Search({ foodData, setFood }) {
  const [query, setQuery] = useState("pizza");
  const url = "http://localhost:3001/customers/list";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(url);
      const data = await res.json();
      setFood(data.results);
    }

    fetchFood();
  }, [query]);

  return (
    <div className={style.searchContainer}>
      <input
        type="text"
        placeholder="Search for food item..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className={style.inputFiled}
      />
    </div>
  );
}

export default Search;
