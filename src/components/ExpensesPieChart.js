"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Card from "./Card";
import { StyledTitle } from "./StyledComponents";
import useSWR from "swr";
import { fetcher } from "@/fetcher";

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const ExpensesPieChart = () => {
    const colors = ["#FA00FF", "#FC7900", "#343C6A", "#1814F3"];
    const { data, isLoading } = useSWR("/api/expenses", fetcher);

    if (isLoading) {
        return (
            <Card
                width={"350px"}
                height={"322px"}
                padding={"31px 40px 32px 41px"}
            >
                <StyledTitle>Loading...</StyledTitle>
            </Card>
        );
    }

    const expenses = data.expenses;

    const data2 = {
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
            <Pie data={data2} options={options} />
        </Card>
    );
};

export default ExpensesPieChart;
