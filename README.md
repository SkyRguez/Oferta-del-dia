# Oferta del dia

Playing with React, Firebase and friends.

## 👾🤖🚀 Clone, install... GO 🚀🤖👾

```
❯ git clone git@github.com:SkyRguez/oferta-del-dia.git
❯ cd oferta-del-dia
❯ npm install
```

## 0. Installation and First Steps

### How to install Node

Since we are using [fish shell](https://fishshell.com/), we need to:

1. Install [NVM](https://github.com/creationix/nvm)

```
❯ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

2. Install [fish-nvm](https://github.com/FabioAntunes/fish-nvm)

```
❯ fisher add FabioAntunes/fish-nvm
```

3. Install [Node 8](https://nodejs.org/en/) with NVM

```
❯ nvm install 8
❯ node --version
v8.12.0
❯ nvm alias default 8.12.0
```

### How can I sync the project with a remote GitHub repository

```
❯ git remote add origin git@github.com:SkyRguez/oferta-del-dia.git
❯ git push -u origin master
```

### More tools

- [React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) extension for Firefox.
- [CMDer](http://cmder.net/): Command Line Emulator for Windows.
- [Create React App 2](https://github.com/facebook/create-react-app)

### Troubleshooting

Try

```
rm -rf node_modules/
rm -rf package-lock.json
npm install
npm start
```

## 1. Intro to React

- Everything in React is a component! (as a < div > in HTML)
- A component is a reusable piece of code
- Webpack is a bundler
- Hot Reloading comunicates with our pc
- Write :

```r
class "nameClass" extends Component {
  render() {
    return <p>Hi!<p/>;
  }
}
```

Is the same as:

```r
const "nameClass" = () => {
  return <p>Hi!<p/>
}
```

- Always use this words in React:
  - import
  - export
  - export default
- We can write HTML in JS

### Component's structure

- Imports

```r
import React from "react";
import "ComponentsName" from "./ComponentsName";
```

- Component

```r
class ComponentsName extends React.Component{
  render() {
    return ...
  }
}
```

- Export

```r
export default ComponentsName;
```

### To JSX or not JSX...

#### With only one tag

Both are equivalent:

- JSX:

```jsx
return <p>Hi!<p/>;
```

-JS:

```js
return React.createElement("p. {}, "Hi!");
```

#### With nested tags

-JSX:

```jsx
<div>
  <p>Hi!</p>
</div>
```

-JS:

```js
React.createElement(
  "div",
  {},
  React.createElement("p. {}, "Hi!");
)
```

### JSX Gotchas:

#### Use `className` instead of `class`

```jsx
<p className="my-class">Hi!</p>
```

#### Beware ASI (Automatic Semicolon Instertion)

```jsx
return (
  <div>
    <p className="my-class">Hi!</p>
  </div>
);
```

## 2. `Props` and `state`

- `props`: A way to get data (`state`) into a component.
- `state`: where the data lives.
-

### `$r` inside React Dev Tools

## 3. Stateless funcional Components

Five of them are equivalent:

```jsx
class Header extends React.Component {
  render() {
    return (
      <h3 className="tagline">
        <span>{this.props.tagline}</span>
      </h3>
    );
  }
}
```

```jsx
const Header = props => {
  return (
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  );
};
```

```jsx
const Header = ({ tagline }) => {
  return (
    <h3 className="tagline">
      <span>{tagline}</span>
    </h3>
  );
};
```

```jsx
const Header = props => (
  <h3 className="tagline">
    <span>{props.tagline}</span>
  </h3>
);
```

```jsx
const Header = ({ tagline }) => (
  <h3 className="tagline">
    <span>{tagline}</span>
  </h3>
);
```

## 5. Events in React

[Synthetic Events in React](https://react.js.org/docs/events.html)

Hey React! When somebody clicks the button, execute this 👇function, please:

```jsx
<button onClick={this.handleClick}>
```

## 6. Binding `this` inside a Component

Binding our own methods/functions inside a `component`.

### Method 1: Inside the `constructor`

```jsx
class StorePicker extends React.Component {
  constructor(props) {
    super(props);

    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(event) {}
}
```

### Method 2: Declare a `property` instead of `method`/`function` inside the component

```jsx
class StorePicker extends React.Component {
  goToStore = event => {};
}
```

**Remember**: If you must access `this` inside a custom method/function in a component, you need to bind `this` with Method 1 or even better using Method 2.
