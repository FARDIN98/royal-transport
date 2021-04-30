import {Button} from 'react-bootstrap';
import React from 'react';
import './TransportCard.css'
import {Link, useHistory} from 'react-router-dom';

const TransportCard = (props) => {
    // const history = useHistory()
    // const handleClick = () => {
    //     history.push("/home")
    // }
    const history = useHistory()
    const proceedToDestination = (name) => {
        history.push(`/destination/${name}`);
      };
    const {id,image,name} = props.transport
    return (
        <div onClick={() => {proceedToDestination(props.transport.name)}} className="col-md-3 ">
            <div className="card">
                <img className="img-fluid" src={image} alt=""/>
                <p>{name}</p>
                <Button as={Link} to= "/destination" variant="primary">Book Now</Button>
            </div>
        </div>
    );
};

export default TransportCard;