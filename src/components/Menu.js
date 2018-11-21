import React from "react";
import Header from "./Header";
import Fish from "./Fish";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <Header tagline="fresh seafood market" />
        <ul className="fishes">
          {Object.keys(this.props.pescados).map(fish => (
            <Fish
              key={fish}
              index={fish}
              fishDetails={this.props.pescados[fish]}
              addToOrder={this.props.addToOrder}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
