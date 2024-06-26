import React from 'react';
import {data} from "../restApi.json";
const Team = () => {
  return <section className="team" id="team">
    <div className="container">
        <div className="heading_section">
            <h1 className="heading">OUR TEAM</h1>
            <p>Meet our team – a group of passionate individuals dedicated to creating delicious meals and providing exceptional service. Together, we're here to make your dining experience unforgettable.
            </p>
        </div>
        <div className="team_container">
            {
                data[0].team.map(element=>{
                    return(
                        <div className="card" key={element.id}>
                           
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt={element.name} />
                                    <h3>{element.name}</h3>
                                    <p>{element.designation}</p>

                                </div>
                           
                         </div>   
                    )
                })
            }
        </div>
    </div>
  </section>;
};

export default Team;