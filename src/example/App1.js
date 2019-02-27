import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Comp1 = (props) => {
  return (
    <div>
      <h1>App1</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/inbox">Inbox</Link></li>
      </ul>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h2>about</h2>
    </div>
  )
};

const Inbox = () => {
  return (
    <div>
      <h2>inbox</h2>
    </div>
  )
};

const Home = (props) => {
  return (
    <div>
      <h2>home</h2>
      {props.children}
    </div>
  )
};

const App1 = () => {
  return (
    <Router>
      <div>
        <Comp1></Comp1>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} />
      </div>
    </Router>
  );
}

export default App1;
