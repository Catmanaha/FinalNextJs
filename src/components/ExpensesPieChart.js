"use client"

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { expenses } from "@/data/expenses";
import Card from "./Card";

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const ExpensesPieChart = () => {
    const colors = ["#FA00FF", "#FC7900", "#343C6A", "#1814F3"];

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

    return (
        <Card width={"350px"} height={"322px"} padding={"31px 40px 32px 41px"}>
            <Pie data={data} options={options} />
        </Card>
    );
};

export default ExpensesPieChart;
