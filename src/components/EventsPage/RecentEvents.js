import React from 'react'
import Title from '../Title';
import {Context} from '../Context/Context';
export default function RecentEvents() {
    const {Events}=React.useContext(Context);
    return (
                    <section className="recentEvents">
                        <div className="inside-container">
                            <Title title="recent events" color="lightgrey" />
            <div className="recentEvents-center">
                <table className="table">
                    <tr>
                        <th>Interiors</th>
                        <th>Date</th>
                        <th>Place</th>
                    </tr>
                    {Events.map(event=>{
                            return(
                                <tr key={event.id}>
                                  <td>{event.name}</td>
                                 <td>{event.date}</td>
                                 <td>{event.area}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
                        </div>
                    </section>
    )
}
