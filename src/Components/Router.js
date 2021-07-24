import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from 'Routes/Home';
import Search from 'Routes/Search';
import TV from 'Routes/TV';
import Header from "Components/Header";
import Detail from "Routes/Detail/DetailContainer";


const CustomRouter = () => (
  <Router>
    <>
    <Header/>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/search"  component={Search} />
    <Route path="/tv" exact component={TV} />
    <Route path="/movie/:id" component={Detail} />
    <Route path="/show/:id" component={Detail} />
    <Redirect from="*" to="/" /> 
    </Switch>
    </>
  </Router>
)

export default CustomRouter;

