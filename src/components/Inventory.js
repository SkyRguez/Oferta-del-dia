import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import PropTypes from "prop-types";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object.isRequired,
    deleteFish: PropTypes.func.isRequired,
    updateFish: PropTypes.func.isRequired,
    addFish: PropTypes.func.isRequired,
    loadSampleFishes: PropTypes.func.isRequired
  };
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(fishKey => (
          <EditFishForm
            deleteFish={this.props.deleteFish}
            fishKey={fishKey}
            updateFish={this.props.updateFish}
            key={fishKey}
            fish={this.props.fishes[fishKey]}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Add Fish Samples</button>
      </div>
    );
  }
}

export default Inventory;
