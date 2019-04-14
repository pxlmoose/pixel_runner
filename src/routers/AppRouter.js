import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Navigation from '../components/Navigation';
import LandingPage from '../components/LandingPage';
import WorkPage from './../components/WorkPage';
import AboutPage from './../components/AboutPage';
import ContactPage from './../components/ContactPage';
import NotFoundPage from './../components/NotFoundPage';
import createHistory from 'history/createBrowserHistory';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div> 
            <Navigation />
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
                <Route path="/work" component={WorkPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;

//include below in switch
// <Route path="/portfolio" component={PortfolioPage} exact={true}/>
//                 <Route path="/portfolio/:id" component={PortfolioItemPage} />
//                 <Route path="/contact" component={ContactPage} />
//                 <Route component={NotFoundPage} />