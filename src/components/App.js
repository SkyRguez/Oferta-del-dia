import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import Menu from "./Menu";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = newFish => {
    //1. Take a copy of existing `State`
    const newFishes = { ...this.state.fishes };
    //2. Add our newFish to newFishes
    newFishes[`fish${Date.now()}`] = newFish;
    //3.Set newFishes as the new `State`
    this.setState({
      fishes: newFishes
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    //1. Take a copy of the existing `State`
    const newOrder = { ...this.state.order };
    //2. Either add our order item to newOrder or update quantity
    if (newOrder[key]) {
      newOrder[key] = newOrder[key] + 1;
    } else {
      newOrder[key] = 1;
    }
    //3.Set newOrder as the new `State`
    this.setState({
      order: newOrder
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <Menu pescados={this.state.fishes} addToOrder={this.addToOrder} />
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
