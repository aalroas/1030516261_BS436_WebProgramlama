import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
    render(){
        return(
            <div>
                <h2>Card Game</h2>
                <p className="welcome-text">   In this game, it is necessary to find the cat in 3 closed cards. If you cannot find the cat card in the first choice, the second choice will be given.
            </p>
                <div className="action">
                    <Link to={"/Game"} className="play">Play</Link>
                </div>
            </div>
        );
    }

}