import React from "react";
import Header from "./Header";
import Fish from "./Fish";
import PropTypes from "prop-types";

class Menu extends React.Component {
  static propTypes = {
    pescados: PropTypes.object.isRequired,
    addToOrder: PropTypes.func.isRequired
  };
  render() {
    return (
      <div className="menu">
        <Header tagline="fresh seafood market" />
        <ul className="fishes">
          {Object.keys(this.props.pescados).map(fishKey => (
            <Fish
              key={fishKey}
              index={fishKey}
              fishDetails={this.props.pescados[fishKey]}
              addToOrder={this.props.addToOrder}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
