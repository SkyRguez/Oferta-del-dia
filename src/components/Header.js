import React from "react";

const Header = ({ tagline }) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{tagline}</span>
    </h3>
  </header>
);

/*class Header extends React.Component {
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
}*/

export default Header;
