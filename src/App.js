
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom' 
import Education from "./components/Education/Education";
import Personal from "./components/Personal/Personal"
import Landing from "./components/Landing/Landing"
import Experience from "./components/Experience/Experience"
import Projects from "./components/Projects/Projects"
import Achievements from "./components/Achievements/Achievements";
import Resume from "./components/Resume/Resume";




let App = () => {
  


  

    return (
        <Router>
        
        <Switch>
           <Route exact path="/">
               <Landing/>
          </Route>
        
         <Route exact path="/personal">
               <Personal/>
          </Route>

          <Route exact path="/experience">
              <Experience/>
          </Route>


          <Route exact path="/education">
              <Education/>
          </Route>


          <Route exact path="/projects">
              <Projects/>
          </Route>



          <Route exact path="/achievements">
              <Achievements/>
          </Route>

          
          <Route exact path="/resume">
            <Resume/>
          </Route>


        </Switch>

      </Router> 
    )
}
export default App;
