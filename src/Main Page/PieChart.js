import React from "react";
import { Line } from "react-chartjs-2";
import { FaEllipsisV } from 'react-icons/fa';
import CircularPie from './PieChartData/CircularPie';
import { LineElement } from "chart.js";
import { CategoryScale, LinearScale, PointElement } from "chart.js";
import { Chart as ChartJs } from 'chart.js';

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);


const PieChart = () => {
    const data = {
        labels: CircularPie.map((data) => data.name),
        datasets: [
            {
                data: CircularPie.map((data) => data.money),
                backgroundColor: [
                    "#5074df"
                ],
                borderColor: "#5074df",
                tension: 0.4,
                borderWidth: 2
            }
        ]

    }

    const options = {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 0,
                max: 40000,
                ticks: {
                    stepSize: 10000,
                    callback: (value) => "$" + value
                },
                grid: {
                    borderDash: [100]
                    // display: false
                }
            }
        }

    }

    return (
        <div className="container" >
            <div class="card" style={{ border: 'none', boxShadow: ' 0 0.7rem 1rem 0 rgba(0, 0, 0, 0.1)' }}>
                <div class="card-header">
                    <div className="d-flex ">
                        <div className="w-100" style={{ color: '#4e74df' }}>Earnings Overview</div>
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
                <div class="card-body py-5" >
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    )
}

export default PieChart;