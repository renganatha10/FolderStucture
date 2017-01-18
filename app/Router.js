import React,{Component} from 'react';

import { Router, Route, browserHistory } from 'react-router'
import IndexPage from './pages/IndexPage';


import DayBook from './containers/DayBookContainer'
import DepositForm from './containers/DepositFormContainer'
import DepositorDetail from './containers/DepositorDetailContainer'
import Enamuna from './containers/EnamunaContainer'
import Fnauma from './containers/FnamunaCOntainer'
import PawnRegister from './containers/PawnRegisterContainer'
import PawnDetail from './containers/PawnDetailContainer'
import WholeRegister from './containers/WholeRegisterContainer'
import IntrestReceipt from './containers/InterestReceiptContainer'

export function routes(){
  return(
    <Route path="/" component={IndexPage}>
      <Route path="/daybook" component={DayBook}/>
      <Route path="/depositform" component={DepositForm}/>
      <Route path="/depositordetail" component={DepositorDetail}/>
      <Route path="/enauma" component={Enamuna}/>
      <Route path="/fnamuna" component={Fnauma}/>
      <Route path="/pawnregister" component={PawnRegister}/>
      <Route path="/pawndetail" component={PawnDetail}/>
      <Route path="/wholeregister" component={WholeRegister}/>
      <Route path="/interestreceipt" component={IntrestReceipt}/>
  </Route>
  )
}

export default class MainRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
              {routes()}
             </Router>
        );
    }
}
