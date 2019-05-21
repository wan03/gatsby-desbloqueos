import React from "react";
import { Router, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

//public pages

import Toolbar from "../Toolbar/Toolbar";
import Home from "../Pages/HomePage/HomePage";
import Celulares from "../Pages/Celulares/celulares";
import About from "../Pages/About/about";
import Contact from "../Pages/Contact/contact";
import SearchProductPage from "../Pages/SearchProductPage/SearchProductPage";
// import Account from "./pageComponents/Account";

//auth pages
// import requireAuth from "./authComponents/common/requireAuth";

// misc
// import NoMatch from "./components/NoMatch";

const routerHistory = createBrowserHistory();

const Routes = () => {
    return (
        <Router history={routerHistory}>
            <div>
                <Toolbar />
                <Route exact path="/" component={Home} />
                <Route path="/celulares" component={Celulares} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/search" component={SearchProductPage} />
            </div>
            {/* <Route path="/Account" component={requireAuth(Account)} /> */}
        </Router>
    );
};

export default Routes;
