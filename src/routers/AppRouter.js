import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import LandingPage from '../components/LandingPage';
// import PortfolioPage from './../components/PortfolioPage';
// import PortfolioItemPage from './../components/PortfolioItemPage';
// import ContactPage from './../components/ContactPage';
// import NotFoundPage from './../components/NotFoundPage';
import createHistory from 'history/createBrowserHistory';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div> 
            <Header/>
            <Switch>
                <Route path="/" component={LandingPage} exact={true}/>
                
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