import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">
          <span role="img" aria-labelledby="sushi-box">
            🍱
          </span>{" "}
          Visit Store{" "}
          <span role="img" aria-labelledby="sushi-box">
            🍱
          </span>{" "}
        </button>
      </form>
    );
  }
}

export default StorePicker;
