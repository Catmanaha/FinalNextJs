"use client";

import { useState } from "react";
import styled from "styled-components";
import { transactions } from "@/data/transactions";
import Card from "@/components/Card";
import { StyledTitle } from "./StyledComponents";
import useSWR from "swr";
import { fetcher } from "@/fetcher";

const WithdrawalIcon = () => (
    <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="15" cy="15" r="14" stroke="#718EBF" strokeWidth="2" />
        <path
            d="M15.5303 9.96967C15.2374 9.67678 14.7626 9.67678 14.4697 9.96967L9.6967 14.7426C9.40381 15.0355 9.40381 15.5104 9.6967 15.8033C9.98959 16.0962 10.4645 16.0962 10.7574 15.8033L15 11.5607L19.2426 15.8033C19.5355 16.0962 20.0104 16.0962 20.3033 15.8033C20.5962 15.5104 20.5962 15.0355 20.3033 14.7426L15.5303 9.96967ZM15.75 21L15.75 10.5L14.25 10.5L14.25 21L15.75 21Z"
            fill="#718EBF"
        />
    </svg>
);

const DepositIcon = () => (
    <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="15" cy="15" r="14" stroke="#718EBF" strokeWidth="2" />
        <path
            d="M14.4697 21.5303C14.7626 21.8232 15.2374 21.8232 15.5303 21.5303L20.3033 16.7574C20.5962 16.4645 20.5962 15.9896 20.3033 15.6967C20.0104 15.4038 19.5355 15.4038 19.2426 15.6967L15 19.9393L10.7574 15.6967C10.4645 15.4038 9.98959 15.4038 9.6967 15.6967C9.40381 15.9896 9.40381 16.4645 9.6967 16.7574L14.4697 21.5303ZM14.25 10.5L14.25 21L15.75 21L15.75 10.5L14.25 10.5Z"
            fill="#718EBF"
        />
    </svg>
);

const TransactionsTable = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const { data, isLoading } = useSWR("/api/transactions", fetcher);

    if (isLoading) {
        return (
            <Card height="412px" width="635px">
                <StyledTitle>Loading...</StyledTitle>
            </Card>
        );
    }

    const transactions = data.transactions;

    const filteredTransactions = transactions.filter((transaction) => {
        if (activeFilter === "All") return true;
        if (activeFilter === "Income") return transaction.Type === "Deposit";
        if (activeFilter === "Expense")
            return transaction.Type === "Withdrawal";
        return true;
    });

    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredTransactions.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <FilterContainer>
                <FilterButton
                    active={(activeFilter === "All").toString()}
                    onClick={() => {
                        setActiveFilter("All");
                        setCurrentPage(1);
                    }}
                >
                    All Transactions
                </FilterButton>
                <FilterButton
                    active={(activeFilter === "Income").toString()}
                    onClick={() => {
                        setActiveFilter("Income");
                        setCurrentPage(1);
                    }}
                >
                    Income
                </FilterButton>
                <FilterButton
                    active={(activeFilter === "Expense").toString()}
                    onClick={() => {
                        setActiveFilter("Expense");
                        setCurrentPage(1);
                    }}
                >
                    Expense
                </FilterButton>
            </FilterContainer>
            <Card width="1110px" height="auto" padding={"22px 30px 30px 30px"}>
                <TableHeader>
                    <HeaderRow>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Transaction ID</HeaderCell>
                        <HeaderCell>Type</HeaderCell>
                        <HeaderCell>Card</HeaderCell>
                        <HeaderCell>Date</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Receipt</HeaderCell>
                    </HeaderRow>
                </TableHeader>
                <TableBody>
                    {currentItems.map((transaction, index) => (
                        <BodyRow key={index}>
                            <Cell>
                                <TitleContainer>
                                    {transaction.Type === "Withdrawal" ? (
                                        <WithdrawalIcon />
                                    ) : (
                                        <DepositIcon />
                                    )}
                                    <span style={{ marginLeft: "14px" }}>
                                        {transaction.Title}
                                    </span>
                                </TitleContainer>
                            </Cell>
                            <Cell>{transaction.Id}</Cell>
                            <Cell>{transaction.Type}</Cell>
                            <Cell>{transaction.Card}</Cell>
                            <Cell>{transaction.Date}</Cell>
                            <Cell>
                                <Amount type={transaction.Type}>
                                    {transaction.Type === "Withdrawal"
                                        ? "-"
                                        : "+"}
                                    ${transaction.Amount.toLocaleString()}
                                </Amount>
                            </Cell>
                            <Cell>
                                <DownloadButton>Download</DownloadButton>
                            </Cell>
                        </BodyRow>
                    ))}
                </TableBody>
            </Card>
            <PaginationContainer>
                <PaginationButton
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    {"<"} Previous
                </PaginationButton>
                {Array.from({ length: totalPages }, (_, i) => (
                    <PageNumber
                        key={i + 1}
                        active={(currentPage === i + 1).toString()}
                        onClick={() => handlePageChange(i + 1)}
                    >
                        {i + 1}
                    </PageNumber>
                ))}
                <PaginationButton
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next {">"}
                </PaginationButton>
            </PaginationContainer>
        </div>
    );
};
const FilterContainer = styled.div`
    display: flex;
    margin-bottom: 25px;
    gap: 82px;
    border-bottom: 1px solid #ebeef2;
    width: 1110px;
`;

const FilterButton = styled.button`
    padding: 7px 8px 16px;
    border-bottom: ${(props) =>
        props.active === "true" ? "1px solid #1814F3" : "none"};
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    cursor: default;
    color: ${(props) => (props.active === "true" ? "#1814F3" : "#718EBF")};
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
`;

const TableHeader = styled.div`
    margin-bottom: 20px;
`;

const TableBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const HeaderRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 1.5fr 1fr 1fr 1.5fr 1fr 1fr;
    padding: 10px 0;
    border-bottom: 1px solid #e4e4e4;
`;

const BodyRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 1.5fr 1fr 1fr 1.5fr 1fr 1fr;
    padding: 15px 0;
    align-items: center;
    border-bottom: 1px solid #f5f5f5;
`;

const HeaderCell = styled.div`
    color: #718ebf;
    font-size: 16px;
    font-weight: 500;
    font-family: Inter;
`;

const Cell = styled.div`
    color: #232323;
    font-size: 16px;
    font-weight: 400;
    font-family: Inter;
`;

const Amount = styled.span`
    color: ${(props) => (props.type === "Withdrawal" ? "#FE5C73" : "#16DBAA")};
    font-weight: 500;
    font-size: 16px;
    font-family: Inter;
`;

const DownloadButton = styled.button`
    color: #123288;
    border: 1px solid #123288;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 400;
    font-family: Inter;
    cursor: default;
    width: 100px;
    height: 35px;
    text-align: center;
`;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    width: 1110px;
`;

const PaginationButton = styled.button`
    padding: 8px 16px;
    color: #1814f3;
    cursor: default;
    font-family: Inter;
    font-size: 15px;
    font-weight: 500;
`;

const PageNumber = styled.button`
    border: none;
    border-radius: 10px;
    background-color: ${(props) =>
        props.active === "true" ? "#1814F3" : "transparent"};
    color: ${(props) => (props.active === "true" ? "#FFFFFF" : "#1814F3")};
    cursor: default;
    font-family: Inter;
    font-size: 15px;
    font-weight: 500;
    width: 40px;
    height: 40px;
`;

export default TransactionsTable;
