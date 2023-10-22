import { cardText } from "../../constants";
import './styles.scss';
import Card from "../Card/Card";
import useGame from "../../hooks/useGame";
export default function Game() {
    const {
        shuffleCards,
        cards,
        handleChoice,
        choiceOne,
        choiceTwo,
        disabled,
        winner
    } = useGame();

    return (
        <div className="game">
            <h1>{cardText.title}</h1>
            <button onClick={shuffleCards}>{cardText.btnText}</button>
            <div className="cardBoard">
                {cards.length &&
                    (cards.map((card: Card) => (
                        <Card
                            key={card.id}
                            card={card}
                            handleChoice={handleChoice}
                            disabled={disabled}
                            flipped ={card === choiceOne || card === choiceTwo || card.matched}
                        />
                    ))
                    )
                }
            </div>
            {winner && <p className="result">{cardText.winner}</p>}
        </div>
    );
}