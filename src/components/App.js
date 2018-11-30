import React from "react";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Menu from "./Menu";
import base from "../base";
import PropTypes from "prop-types";

class App extends React.Component {
  static propTypes = {
    storeId: PropTypes.string
  };

  state = {
    fishes: {},
    order: {}
  };

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  componentDidMount() {
    //Read from localStorage
    const localStorageRef = localStorage.getItem(this.props.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    //Read/Write from Firebase
    const config = {
      context: this,
      state: "fishes"
    };
    this.ref = base.syncState(`${this.props.storeId}/fishes`, config);
  }

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  componentDidUpdate() {
    //save to localStorage
    localStorage.setItem(this.props.storeId, JSON.stringify(this.state.order));
  }

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

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

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  updateFish = (fishKey, updatedFish) => {
    console.log(fishKey, updatedFish);
    const updatedFishes = { ...this.state.fishes };
    updatedFishes[fishKey] = updatedFish;
    this.setState({
      fishes: updatedFishes
    });
  };

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  deleteFish = fishKey => {
    const deletedFishes = { ...this.state.fishes };
    deletedFishes[fishKey] = null;
    this.setState({
      fishes: deletedFishes
    });
  };

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  deleteOrder = orderKey => {
    const deletedOrder = { ...this.state.order };
    delete deletedOrder[orderKey];
    this.setState({
      order: deletedOrder
    });
  };

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  addToOrder = orderKey => {
    //1. Take a copy of the existing `State`
    const newOrder = { ...this.state.order };
    //2. Either add our order item to newOrder or update quantity
    if (newOrder[orderKey]) {
      newOrder[orderKey] = newOrder[orderKey] + 1;
    } else {
      newOrder[orderKey] = 1;
    }
    //3.Set newOrder as the new `State`
    this.setState({
      order: newOrder
    });
  };

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  render() {
    return (
      <div className="catch-of-the-day">
        <Menu pescados={this.state.fishes} addToOrder={this.addToOrder} />
        <Order
          deleteOrder={this.deleteOrder}
          fishes={this.state.fishes}
          order={this.state.order}
        />
        <Inventory
          deleteFish={this.deleteFish}
          updateFish={this.updateFish}
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
