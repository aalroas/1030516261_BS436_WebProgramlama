import React from "react";
import ReactDOM, { render } from "react-dom";


class App extends React.Component {
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
            status = "You won !!! Congratulations :)"
        }else{
            if(card[indexA] = "dog1.jpg"){
                if(guess===1){
                    status = "You lost :("
                }
            }
            if(card[indexA] = "dog2.jpg"){
                if(guess===1){
                    status = "You lost :("
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
        <p>
        In this game, it is necessary to find the cat in 3 closed cards. If you cannot find the cat card in the first choice, the second choice will be given.
        </p>
        <img className="card" src={card[0]} onClick={()=>{this.selection(0)}}/>
    <img className="card" src={card[1]} onClick={()=>{this.selection(1)}}/>
    <img className="card" src={card[2]} onClick={()=>{this.selection(2)}}/>
    <div className="message">
        <p>{status?status:"To find the cat card, you have to click on the card."}</p>
        {status && <p>
            If you want to play a new game, you can click <span onClick = {this.newGame} className = 'link'> here </span>.
        </p>}
    </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
