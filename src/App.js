import React, { Component } from 'react';
import App1 from './example/App1';
import ParamsExample from './example/ParamsExample';
import AuthExample from './example/AuthExample';
import CustomLinkExample from './example/CustomLinkExample';
import PreventingTransitionsExample from './example/PreventingTransitionsExample';
import NoMatchExample from './example/NoMatchExample';
import RecursiveExample from './example/RecursiveExample';
import SidebarExample from './example/SidebarExample';
import AnimationExample from './example/AnimationExample';
import AmbiguousExample from './example/AmbiguousExample';
import RouteConfigExample from './example/RouteWithSubRoutes';

class App extends Component {
  render() {
    return (
      <div>
        <App1></App1>
        <hr/>
        <hr/>
        <ParamsExample></ParamsExample>
        <hr/>
        <hr/>
        <AuthExample></AuthExample>
        <hr/>
        <hr/>
        <CustomLinkExample></CustomLinkExample>
        <hr/>
        <hr/>
        <PreventingTransitionsExample></PreventingTransitionsExample>
        <hr/>
        <hr/>
        <NoMatchExample></NoMatchExample>
        <hr/>
        <hr/>
        {/* <RecursiveExample></RecursiveExample> */}
        <SidebarExample></SidebarExample>
        <hr/>
        <hr/>
        <AnimationExample></AnimationExample>
        <hr/>
        <hr/>
        <AmbiguousExample></AmbiguousExample>
        <hr/>
        <hr/>
        <RouteConfigExample></RouteConfigExample>
      </div>
    );
  }
}

export default App;
