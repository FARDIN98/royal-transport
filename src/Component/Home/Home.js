import React, { useState } from 'react';
import fakeData from '../../fakedata';
import Header from '../Header/Header';
import TransportCard from '../TransportCard/TransportCard';
import './Home.css'

const Home = () => {
    const transportList =  fakeData
    const[transport,setTransport] = useState(transportList)
    return (
        <div>
            {/* <Header></Header> */}
            <div className="d-flex justify-content-center align-items-center home-background">
                <div className="row container">
                    {
                        transport.map((transport)=>(
                            <TransportCard transport={transport} key={transport.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;