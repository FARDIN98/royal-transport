import React, { useContext } from 'react';
import {Navbar,Form,Button, FormControl,Nav} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    // const history = useHistory()
    // const handleClick = () => {
    //     history.push("/home")
    // }
    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to= "/home">
                Royal Transport
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to= "/home">Home</Nav.Link>
                <Nav.Link as={Link} to= "/destination/:name">Destination</Nav.Link>
            </Nav>
            <Form inline>
                <Button variant="outline-info" as={Link} to= "/login">{loggedInUser.displayName ? loggedInUser.displayName : "Login"}</Button>
            </Form>
        </Navbar>
        </div>
    );
};

export default Header;