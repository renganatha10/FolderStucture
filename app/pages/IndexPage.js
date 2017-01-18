import React,{Component} from 'react';
import { Link } from 'react-router'
import './../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import * as fonts from 'bootstrap/fonts'
import './../styles/main.scss';


export default class IndexPage extends Component {

    render() {
        return (
            <div>
                <div className="header">
                    <h1 className="text-muted text-center">AVL அடகு கடை</h1>
                </div>

                  <div className="mainbox" >
                    <div className ="flex-container" >
                        <Link className="btn btn-lg btn-success"  to = "/enauma"> E நமுனா</Link>
                        <Link className="btn btn-lg btn-success" to="/fnamuna">F நமுனா</Link>
                        <Link className="btn btn-lg btn-success" to="/interestreceipt">வட்டி ரசிது</Link>
                    </div>
                    <div className ="flex-container" >
                      <Link className="btn btn-lg btn-success" to="/pawnregister">அடகு Register</Link>
                      <Link className="btn btn-lg btn-success" to="/wholeregister">மொத்த Register</Link>
                    </div>
                    <div className ="flex-container" >
                      <Link className="btn btn-lg btn-success balance-sheet" to="/depositform">Depositor கணக்கு</Link>
                      <Link className="btn btn-lg btn-success" to="/daybook">தினசரி கணக்கு விபரம்</Link>
                    </div>
                    <div className ="flex-container" >
                      <Link className="btn btn-lg btn-success depositor" to="/depositordetail">Depositor விபரம்</Link>
                      <Link className="btn btn-lg btn-success" to="/pawndetail">அடகு விபரம்</Link>
                    </div>
                  </div>
            </div>
        );
    }
}
