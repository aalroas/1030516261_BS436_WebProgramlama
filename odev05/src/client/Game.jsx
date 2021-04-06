import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: Math.floor(Math.random()*3),
            status: undefined,
            card: ["blank.png","blank.png","blank.png"],
            guess: 0,
            game:false
        };
      }
    
      selection = (indexA) => {
        const { card, index, guess, game } = this.state;
        const secondImages = [
            "cat.jpg",
            "dog1.jpg",
            "dog2.jpg",
        ];
    
        if(!game){
            const card = [...card];
            let status;
    
            if(index===indexA){
                card[indexA] = "cat.jpg";
                status = "You won !!! Congratulations"
            }else{
                if(card[indexA] = "dog1.jpg"){
                    if(guess===1){
                        status = "You lose"
                    }
                }
                if(card[indexA] = "dog2.jpg"){
                    if(guess===1){
                        status = "You lose"
                    }
                }
            }
            this.setState({
                card:card,
                guess: this.state.guess+1,
                status
            });
    
            if(status){
                this.setState({
                    game: true
                })
            }
        }
           
      }
    
        newGame = () =>{
            this.setState({
                index: Math.floor(Math.random()*3),
                status: undefined,
                card: ["blank.png","blank.png","blank.png"],
                guess: 0,
                game:undefined
            })
        }
    
      render() {
        const { card, status } = this.state;
        return (
          <div>
            <p>{status?status:"You have 2 rights left."}</p>
            <img className="card" src={card[0]} onClick={()=>{this.selection(0)}}/>
            <img className="card" src={card[1]} onClick={()=>{this.selection(1)}}/>
            <img className="card" src={card[2]} onClick={()=>{this.selection(2)}}/>
            <div className="message">
            {status && <button onClick={this.newGame} className="new-game-button">New Game</button>}
            </div>
          </div>
        );
      }
}