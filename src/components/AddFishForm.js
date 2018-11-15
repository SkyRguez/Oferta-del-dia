import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  statusRef = React.createRef();
  priceRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    //1. Stop the <form> from submitting
    event.preventDefault();
    //2. Create fish with form data
    const fish = {
      name: this.nameRef.current.value,
      status: this.statusRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    //3.Send fish to App component(where state lives)
    this.props.addFish(fish);
    //4.Refresh the form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="avaliable">Fresh!</option>
          <option value="unavaliable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ Add fish</button>
      </form>
    );
  }
}

export default AddFishForm;
