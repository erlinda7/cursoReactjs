import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';

//componente sin state
function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;