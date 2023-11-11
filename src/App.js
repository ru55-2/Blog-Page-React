import { useState } from 'react';
import Navbar from './Nav';
import Home from './Home';
import About from './About'
import NewBlog from './NewBlog';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  const [counter, setCounter] = useState(0)

//npm install react-router-dom@5 was used to get what is needed for the import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path = "/">
              <Home/>
            </Route>
            <Route exact path = "/About">
              <About />
            </Route>
            <Route exact path = "/New Blog">
              <NewBlog />
            </Route>
          </Switch>
        </div>
      </div> 
    </Router> 
  );
}

export default App;
