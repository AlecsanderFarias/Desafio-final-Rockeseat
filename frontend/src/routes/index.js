import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Students from '../pages/Students';
import Plans from '../pages/Plans';
import Registers from '../pages/Registers';
import HelpOrders from '../pages/HelpOrders';

import UpdateStudent from '../pages/UpdateStudent';
import CreateStudent from '../pages/CreateStudent';

import UpdatePlan from '../pages/UpdatePlan';
import CreatePLan from '../pages/CreatePlan';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" exact isPrivate component={Students} />
      <Route
        path="/students/create"
        exact
        isPrivate
        component={CreateStudent}
      />
      <Route path="/students/:id" exact isPrivate component={UpdateStudent} />

      <Route path="/plans" exact isPrivate component={Plans} />
      <Route path="/plans/create" exact isPrivate component={CreatePLan} />
      <Route path="/plans/:id" exact isPrivate component={UpdatePlan} />

      <Route path="/registers" exact isPrivate component={Registers} />
      <Route path="/orders" exact isPrivate component={HelpOrders} />

      <Route path="/" isPrivate component={() => <h1>404</h1>} />
    </Switch>
  );
}
