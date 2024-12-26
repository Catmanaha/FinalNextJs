"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
} from "chart.js";
import { expensesMonthly } from "@/data/expensesMonthly";
import Card from "./Card";
import styled from "styled-components";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const MonthlyExpensesBarChart = () => {
    const labels = expensesMonthly.map((expense) => expense.Month);
    const [selectedBar, setSelectedBar] = useState(null);
    const [labelPosition, setLabelPosition] = useState({ x: 0, y: 0 });

    const data = {
        labels,
        datasets: [
            {
                data: expensesMonthly.map((expense) => expense.Amount),
                backgroundColor: (context) => {
                    const index = context.dataIndex;
                    return index === selectedBar ? "#16DBCC" : "#EDF0F7";
                },
                borderRadius: 8,
                borderSkipped: false,
                barThickness: 30,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
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
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
                display: false,
            },
        },
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const index = elements[0].index;
                if (selectedBar === index) {
                    setSelectedBar(null);
                    setLabelPosition({ x: 0, y: 0 });
                } else {
                    setSelectedBar(index);
                    const rect = elements[0].element;
                    setLabelPosition({
                        x: rect.x,
                        y: rect.y - 13,
                    });
                }
            } else {
                setSelectedBar(null);
                setLabelPosition({ x: 0, y: 0 });
            }
        },
    };

    return (
        <ChartContainer>
            <Card width="350px" height="225px" padding={"33px 28px 25px 25px"}>
                <Bar
                    style={{
                        marginTop: "20px",
                    }}
                    data={data}
                    options={options}
                />
            </Card>
            {selectedBar !== null && (
                <AmountLabel
                    style={{
                        left: `${labelPosition.x}px`,
                        top: `${labelPosition.y}px`,
                    }}
                >
                    ${expensesMonthly[selectedBar].Amount.toLocaleString()}
                </AmountLabel>
            )}
        </ChartContainer>
    );
};

const ChartContainer = styled.div`
    position: relative;
    width: 350px;
    height: 225px;
`;

const AmountLabel = styled.div`
    position: absolute;
    transform: translate(13%, 150%);
    color: #343c6a;
    font-weight: 600;
    font-size: 12px;
    font-family: Lato;
    pointer-events: none;
    white-space: nowrap;
`;

export default MonthlyExpensesBarChart;
