import { Router, Route, Routes} from "react-router-dom";
import {Pay} from './Pay'
import {Success} from './Success'
const App = () => {
  return 
  <Router>
    <Routes>
    <Route path="/pay">
        <Pay/>
        </Route>
        <Route path="/success">
  <Success />
      </Route>
    </Routes>
  </Router>
};

export default App;