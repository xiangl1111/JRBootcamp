import { cardImages } from "../constants";
import { useState } from "react";

export default function useGame() {
    const [cards, setCards] = useState<Card[]>([]);
    const [choiceOne, setChoiceOne] = useState<Card | null>(null);
    const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);

    const shuffleCards = () => {
        const shuffleCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card)=> ({...card, id: Math.random()}));
        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffleCards);
    }
}