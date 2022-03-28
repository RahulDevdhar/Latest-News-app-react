
import './App.css';

import React, {useState, Fragment } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=> {
  const pageSize = 5;
  const apikey = "c4070104235c421fabd466c0d08ce75e"
  
  const [progress, setProgress] = useState(0)
  
  
    return (
      <div>
        <Router>
          <Fragment>
            <NavBar />
            <LoadingBar
              color='#f11946'
              height={3}
              progress={progress}
            />
            <Switch>
              <Route exact path="/"><News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" /></Route>
              <Route exact path="/business"><News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" /></Route>
              <Route exact path="/entertainment"><News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
              <Route exact path="/general"><News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" /></Route>
              <Route exact path="/health"><News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health" /></Route>
              <Route exact path="/science"><News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" /></Route>
              <Route exact path="/sports"><News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
              <Route exact path="/technology"><News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
            </Switch>
          </Fragment>
        </Router>
      </div>
    )
  
}
export default App;
