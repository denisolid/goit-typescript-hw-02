import React from "react";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSubmit }) => {
  return (
    <div>
      <header>
        <form onSubmit={handleSubmit} className={s.search}>
          <input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
