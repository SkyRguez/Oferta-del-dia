import React from "react";
import { getFunName } from "../helpers";
import { navigate } from "@reach/router";

class StorePicker extends React.Component {
  inputStore = React.createRef();

  goToStore = event => {
    //1. Stop the <form> from submitting
    event.preventDefault();
    //2. Get the `name-of-the-store` from that input
    const storeName = this.inputStore.current.value;
    navigate(`/store/${storeName}`);
  };
  //3. Change the page to /store/name-of-the-store
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          required
          ref={this.inputStore}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
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
