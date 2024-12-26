import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";
import { activities } from "@/data/activities";
import Card from "./Card";
import styled from "styled-components";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ActivityBarChart = () => {
    const labels = activities.map((activity) => activity.Date);
    const deposits = activities.map((activity) => activity.Deposit);
    const withdraws = activities.map((activity) => activity.Withdraw);

    const data = {
        labels,
        datasets: [
            {
                label: "Deposit",
                data: deposits,
                backgroundColor: "#16DBCC",
                borderRadius: 100,
                borderSkipped: false,
                barThickness: 15,
            },
            {
                label: "Withdraw",
                data: withdraws,
                backgroundColor: "#1814F3",
                borderRadius: 50,
                borderSkipped: false,
                barThickness: 15,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                align: "end",
                labels: {
                    usePointStyle: true,
                },
            },
            tooltip: {
                enabled: false,
            },
            datalabels: {
                display: false,
            },
        },
        scales: {
            x: {
                title: {
                    display: false,
                    text: "Days of the Week",
                },
                grid: {
                    display: false,
                },
            },
            y: {
                title: {
                    display: false,
                    text: "Amount ($)",
                },
                beginAtZero: true,
                ticks: {
                    stepSize: 100,
                },
            },
        }
    };

    return (
        <Card height={"322px"} width={"730px"} padding={"28px 30px 28px 33px"}>
            <StyledMain>
                <Bar
                    data={data}
                    options={{
                        ...options,
                    }}
                />
            </StyledMain>
        </Card>
    );
};

const StyledMain = styled.div`
    height: 266px;
    overflow: hidden;
`;

export default ActivityBarChart;
