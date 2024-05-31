import './card.css';

function Card(props) {
    return (
        <div className="card w-card h-card m-2">
            <div>
                <div className="numbers">{props.number}</div>
                <div className="cardName">{props.title}</div>
            </div>
            <div className="icon">
                <i className={`fa-solid ${props.icon}`}></i>
            </div>
        </div>
    )
};

export default Card;