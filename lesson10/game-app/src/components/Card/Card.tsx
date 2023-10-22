import './styles.scss';
interface CardProps {
    card: Card;
}
export default function Card({card}: CardProps){
    return (
        <div className="card">
            <div className="">
                <img className="front" alt="Card Front" />
                <img className="back" src="" alt="Card Back" />
            </div>
        </div>
    )
}