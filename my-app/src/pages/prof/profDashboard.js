import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Card from '../../components/card';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ProfDashboard = () => {
    const lineData = {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
        datasets: [
            {
                label: 'Masculin',
                data: [23, 38, 15, 21, 44, 17, 29],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'Féminin',
                data: [11, 28, 18, 34, 22, 30, 35],
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }
        ]
    };

    const barData = {
        labels: ['CP1', 'CP2', 'INFO1', 'INFO2', 'INFO3', 'INDUS1'],
        datasets: [
            {
                label: 'Absences par classe',
                data: [28, 48, 40, 19, 62, 27],
                backgroundColor: 'rgb(153, 102, 255)'
            }
        ]
    };

    return (
        <div>
            <div className="m-5 text-2xl font-bold">
                <h1>ProfDashboard</h1>
            </div>
            <div className="flex flex-wrap justify-around p-8">
                <Card number='6' title='Classes' icon='fa-user' />
                <Card number='7' title='Modules' icon='fa-book' />
                <Card number='98' title='Absences' icon='fa-person-walking-arrow-right' />
            </div>
            <div className="flex flex-wrap justify-around p-8 pt-0">
                <div className="w-full md:w-1/2 p-4">
                    <Line data={lineData} />
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <Bar data={barData} />
                </div>
            </div>
        </div>
    )
};

export default ProfDashboard;

