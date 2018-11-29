import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    console.log(event.currentTarget.value);
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.fishKey, updatedFish);
  };

  handleDelete = event => {
    const deletedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.deleteFish(this.props.fishKey, deletedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          value={this.props.fish.name}
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="price"
          value={this.props.fish.price}
        />
        <select
          onChange={this.handleChange}
          name="status"
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          onChange={this.handleChange}
          type="text"
          name="desc"
          value={this.props.fish.desc}
        />
        <input
          onChange={this.handleChange}
          type="text"
          name="image"
          value={this.props.fish.image}
        />
        <button onClick={this.handleDelete}>Delete Me</button>
      </div>
    );
  }
}

export default EditFishForm;
