import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h1>Please Enter a Store</h1>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">🍱 Visit Store 🍱</button>
      </form>
    );
  }
}

export default StorePicker;
