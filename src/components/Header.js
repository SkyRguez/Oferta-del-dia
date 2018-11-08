import React from "react";

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <header className="top">
        <h1>
          CATCH
          <span className="ofThe">
            <span className="of">OF</span>
            <span className="the">THE</span>
          </span>
          DAY
        </h1>
        <h3 className="tagline">
          <span>{this.props.tagline}</span>
        </h3>
      </header>
    );
  }
}

export default Header;
