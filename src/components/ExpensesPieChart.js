"use client";

import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Card from "./Card";
import { StyledTitle } from "./StyledComponents";

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const ExpensesPieChart = () => {
    const colors = ["#FA00FF", "#FC7900", "#343C6A", "#1814F3"];

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await fetch("/api/expenses");
                const data = await response.json();
                setExpenses(data.expenses);
            } catch (error) {
                console.error("Failed to fetch expenses:", error);
            }
        };

        fetchExpenses();
    }, []);
    

    const data = {
        labels: expenses.map((expense) => expense.Title),
        datasets: [
            {
                data: expenses.map((expense) => expense.Percent),
                backgroundColor: colors,
                borderWidth: 0,
                offset: 15,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
            datalabels: {
                color: "#FFFFFF",
                formatter: (value, context) => {
                    const title = context.chart.data.labels[context.dataIndex];
                    return `          ${value}% \n      ${title}`;
                },
                font: {
                    weight: "700",
                    size: 13,
                },
            },
        },
    };
    
    if (!(expenses.length > 0)) {
        return (
            <Card width={"350px"} height={"322px"} padding={"31px 40px 32px 41px"}>
                <StyledTitle>Loading...</StyledTitle>
            </Card>
        );
    }

    return (
        <Card width={"350px"} height={"322px"} padding={"31px 40px 32px 41px"}>
            <Pie data={data} options={options} />
        </Card>
    );
};

export default ExpensesPieChart;
