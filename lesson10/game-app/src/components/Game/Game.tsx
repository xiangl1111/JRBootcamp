import {cardText} from "../../constants";
import './styles.scss';
import Card from "../Card/Card";
import useGame from "../../hooks/useGame";
export default function Game() {
    const {shuffleCards, cards} = useGame();
    console.log(cards)
    return (
        <div className="game">
            <h1>{cardText.title}</h1>
            <button onClick={shuffleCards}>{cardText.btnText}</button>
            <div className="cardBoard">
                {
                   cards.length && 
                   (cards.map((card: Card)=>(
                   <Card 
                   key={card.id}
                   card={card}
                   />
                   ))
                   )
                }
            </div>
            <p className="result">{cardText.winner}</p>
        </div>
    );
}