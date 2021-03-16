import React, { useState } from "react";

const SearchBar = ({ callOnSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    callOnSubmit(term);
  };

  return (
    <div className="search-bar ui inverted segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="filed  ">
          <input
            className=""
            placeholder="Buscar Videos..."
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
