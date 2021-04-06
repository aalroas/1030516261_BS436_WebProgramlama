import React from "react";
import ReactDOM, { render } from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Game } from "./Game";
import { Home } from "./home";

const notFound = () => {
  return (
      <div>
          <h2>Page Not Found: 404</h2>
          <p>
        Error: The page you are looking for is currently not available.
               Please try again later.
          </p>
      </div>
  )
}

class App extends React.Component {
  render(){
      return(
        <HashRouter>
        <div>
            <Switch>
                <Route exact path='/Game' component={Game}/>
                <Route exact path='/' component={Home}/>
                <Route component={notFound}/>
            </Switch>
        </div>
        </HashRouter>
      );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
