import './Card.css'
import { BsDownload, BsFillStarFill } from "react-icons/bs";


const Card = (props) => {
    return (
        <div className="most-popular-item">
            <div className="card-wrapper">
                <img
                    className="most-popular-item-img"
                    src={props.img}
                    alt="img_popular_01"
                />
                <div className="most-popular-item-content">
                    <h4 className="most-popular-item-title">
                        {props.title} <br />
                        <span>{props.category}</span>
                    </h4>
                    <ul>
                        <li>
                            <BsFillStarFill className='most-popular-item-icon star' />  <span>{props.star}</span>
                        </li>
                        <li>
                            <BsDownload className='most-popular-item-icon download' /><span>{props.download}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card