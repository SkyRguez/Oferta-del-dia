import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    const { name, image, desc, status, price } = this.props.fishDetails;

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button>Add to Cart</button>
        <h5>{status}</h5>
      </li>
    );
  }
}

export default Fish;
