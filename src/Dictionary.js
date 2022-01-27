import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  function search(event) {
    event.preventDefault();
    alert("Searching");
  }
  return (
    <div className="dictionary">
      <h1>DICTIONARY</h1>
      <form onSubmit={search}>
        <input type="search" />
      </form>
    </div>
  );
}
