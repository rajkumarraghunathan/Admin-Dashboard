import React from 'react'
import data from './Cards.json'
import { BsCalendarFill } from "react-icons/bs"
import { FaDollarSign } from "react-icons/fa"
import { FaClipboardList } from "react-icons/fa"
import { FaComments } from "react-icons/fa"


const Cards = () => {

    const renderIcon = (iconName) => {
        switch (iconName) {
            case "BsCalendarFill":
                return <BsCalendarFill />;
            case "FaDollarSign":
                return <FaDollarSign />;
            case "FaClipboardList":
                return <FaClipboardList />;
            case "FaComments":
                return <FaComments />;
            default:
                return "";
        }
    };


    return (
        data.map((value) => (

            <div className="card cardGap" style={{ width: "14rem", borderLeft: `5px solid ${value.color}`, borderTop: 'none', borderBottom: 'none', borderRight: 'none', boxShadow: ' 0 0.7rem 1rem 0 rgba(0, 0, 0, 0.1)' }}>
                <div className="card-body d-flex">
                    <div style={{ width: "80%" }}>
                        <p style={{ fontSize: "12px", marginBottom: '0', color: value.color }}>{value.title}</p>
                        <div className=''>
                            <p className='me-5' style={{ fontSize: '150%', fontWeight: '500', color: '#625c69' }}>{value.money}</p>
                            {
                                value.progress === 50 ?
                                    (<div className="progress progress-sm ">
                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: "150%", height: '250%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>) : (console.log(value.progress))
                            }
                        </div>
                    </div>
                    <p className='d-flex align-items-center' style={{ width: "20%", fontSize: '200%', color: '#dddfeb' }}>{renderIcon(value.icons)}</p>
                </div>
            </div>

        ))

    )
}

export default Cards