import React, { useState } from 'react';
import {Form} from 'react-bootstrap'
import { useParams } from 'react-router';
import fakeData from '../../fakedata';
import Map from '../Map/Map';
import {ListGroup} from 'react-bootstrap'
import './Destination.css'
const Destination = () => {
    const { name } = useParams();
    // console.log(name);
    const transport = fakeData
    const [state, setState] = useState(false);
    const handleSearch = () => {
      return setState(true);
    };
    const found = transport.find((t) => t.name === name);
    console.log(found);
    return (
        <div className="container">
        {found === undefined && (
        <div className="text-center error-txt">
          <h1>
            Hey!! There is a bug.That will fix sooon.Til than do this:
          </h1>
          <h3>
            Problem is you didn't select any vehicle ! so if you put any
            destination and click search the whole website will crash so{" "}
            <span>
              go to home page and click any vehicle as your wish than put your
              destination and Click Search!
            </span>
          </h3>
        </div>
      )}
            <div className="row">
            <div className="col-md-3">
            <Form>
              <div className="form-group">
                <label>Where</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="where"
                  required
                />
              </div>
              <div className="form-group">
                <label>To</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="to"
                  required
                />
              </div>
            </Form>
            <button
              onClick={handleSearch}
              className="btn btn-primary btn-block"
            >
              Search
            </button>
            {state && (
              <ListGroup className=" py-3">
                <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                  <img className="img mr-3" src={found.image} alt="" />{" "}
                  <h3 className="mr-2">{found.name}</h3> <h3>67tk</h3>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                  <img className="img mr-3" src={found.image} alt="" />{" "}
                  <h3 className="mr-2">{found.name}</h3> <h3>67tk</h3>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex p-2 my-3" variant="primary">
                  <img className="img mr-3" src={found.image} alt="" />{" "}
                  <h3 className="mr-2">{found.name}</h3> <h3>87tk</h3>
                </ListGroup.Item>
              </ListGroup>
            )}
            </div>
            <div className="col-md-9">
                <Map></Map>
            </div>
        </div>
        </div>
    );
};

export default Destination;