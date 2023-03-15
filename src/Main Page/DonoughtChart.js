import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaEllipsisV } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonoughtChart = () => {

    const data = {
        datasets: [
            {
                // label: ['Direct', 'Referral', 'Social'],
                data: [55, 30, 15],
                backgroundColor: [
                    '#4e73df',
                    '#1cc88a',
                    '#36b9cc',
                ],
                borderWidth: 1,
            }
        ],
        labels: ['Direct', 'Referral', 'Social'],
    }



    return (
        <div className='container'>
            <div className='card' style={{ border: 'none', boxShadow: ' 0 0.7rem 1rem 0 rgba(0, 0, 0, 0.1)' }}>
                <div class="card-header">
                    <div className="d-flex ">
                        <div className="w-100" style={{ color: '#4e74df' }}>Revenue Sources</div>
                        <div className="flex-shrink-1" >
                            <FaEllipsisV className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#e2e2e9' }} />
                            <ul class="dropdown-menu" style={{ border: 'none', boxShadow: ' 0 0.7rem 1rem 0 rgba(0, 0, 0, 0.1)' }}>
                                <p className="mb-0 " style={{ fontSize: '70%', color: '#babcce', textAlign: 'center' }}>DROWPDOWN HEADER:</p>
                                <li><a class="dropdown-item opacity-50" href="#">Action</a></li>
                                <li><a class="dropdown-item opacity-50" href="#">Another action</a></li>
                                <hr className="mt-0 mb-0"></hr>
                                <li><a class="dropdown-item opacity-50" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                    <Doughnut data={data} />
                </div>
            </div>
        </div>
    )
}

export default DonoughtChart