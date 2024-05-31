import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import Card from '../../components/card';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);


const Dashboard = () => {
    const lineData = {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
        datasets: [
            {
                label: 'Masculin',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'Féminin',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }
        ]
    };

    const doughnutData = {
        labels: ['Masculin', 'Féminin'],
        datasets: [
            {
                label: 'Répartition selon le sexe',
                data: [62, 38],
                backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'],
                hoverOffset: 4
            }
        ]
    };

    return (
        <div>
            <div className="m-5 text-2xl font-bold">
                <h1>Dashboard</h1>
            </div>
            <div className="flex flex-wrap justify-around p-8">
                <Card number='1242' title='Etudiants' icon='fa-user' />
                <Card number='53' title='Professeurs' icon='fa-user-tie' />
                <Card number='18' title='Classes' icon='fa-building' />
                <Card number='124' title='Absences' icon='fa-person-walking-arrow-right' />
            </div>
            <div className="flex flex-wrap justify-around p-8 pt-0">
                <div className="w-full md:w-chart p-4 shadow-tab rounded-tab flex justify-center ">
                    <Line data={lineData} />
                </div>
                <div className="p-4 shadow-tab rounded-tab">
                    <Doughnut data={doughnutData} />
                </div>
            </div>
        </div>
    )
};

export default Dashboard;

