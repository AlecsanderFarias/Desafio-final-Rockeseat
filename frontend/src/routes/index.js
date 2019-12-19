import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Students from '../pages/Students';
import Plans from '../pages/Plans';
import Registers from '../pages/Registers';
import HelpOrders from '../pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/alunos" exact isPrivate component={Students} />
      <Route path="/planos" exact isPrivate component={Plans} />
      <Route path="/matriculas" exact isPrivate component={Registers} />
      <Route path="/pedidos" exact isPrivate component={HelpOrders} />

      <Route path="/" isPrivate component={() => <h1>404</h1>} />
    </Switch>
  );
}
