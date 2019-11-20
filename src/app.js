import React from 'react';
import indexRoutes from './routes/';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import './assets/main.css';

const App = () => (
    <Provider store={configureStore()}>
        <Router basename="/">
            
            <Switch>
                {
                    indexRoutes.map((prop, key) => {
                        return <Route path={prop.path} key={key} component={prop.component} />;
                    })
                }

            </Switch>
        </Router>
    </Provider>
);

export default App;