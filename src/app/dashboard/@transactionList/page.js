"use client";

import Card from "@/components/Card";
import {
    StyledGapBetweenCards,
    StyledTitle,
} from "@/components/StyledComponents";
import Transaction from "@/components/Transaction";
import { transactions } from "@/data/transactions";

export default function TransactionList() {
    return (
        <div>
            <StyledTitle>Recent Transaction</StyledTitle>
            <Card
                height={"235px"}
                width={"350px"}
                padding={"25px 24px 30px 25px"}
            >
                <Transaction
                    title={transactions[0].Title}
                    date={transactions[0].Date}
                    amount={transactions[0].Amount}
                    type={transactions[0].Type}
                    icon={
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.6452 24.6094H5.67984C4.9859 24.6087 4.32059 24.3327 3.8299 23.842C3.33921 23.3513 3.06322 22.686 3.0625 21.992V14.2543C3.06322 13.5604 3.33921 12.8951 3.8299 12.4044C4.32059 11.9137 4.9859 11.6377 5.67984 11.637H18.6452C19.3391 11.6377 20.0044 11.9137 20.4951 12.4044C20.9858 12.8951 21.2618 13.5604 21.2625 14.2543V21.992C21.2618 22.686 20.9858 23.3513 20.4951 23.842C20.0044 24.3327 19.3391 24.6087 18.6452 24.6094ZM5.67984 13.2776C5.42089 13.2779 5.17263 13.3809 4.98952 13.564C4.80641 13.7471 4.70341 13.9954 4.70312 14.2543V21.992C4.70341 22.251 4.80641 22.4993 4.98952 22.6824C5.17263 22.8655 5.42089 22.9685 5.67984 22.9688H18.6452C18.9041 22.9685 19.1524 22.8655 19.3355 22.6824C19.5186 22.4993 19.6216 22.251 19.6219 21.992V14.2543C19.6216 13.9954 19.5186 13.7471 19.3355 13.564C19.1524 13.3809 18.9041 13.2779 18.6452 13.2776H5.67984Z"
                                fill="#FFBB38"
                            />
                            <path
                                d="M22.3212 20.1917H20.4422C20.2246 20.1917 20.016 20.1053 19.8621 19.9515C19.7083 19.7976 19.6219 19.589 19.6219 19.3714C19.6219 19.1538 19.7083 18.9452 19.8621 18.7914C20.016 18.6375 20.2246 18.5511 20.4422 18.5511H22.3212C22.58 18.5505 22.828 18.4474 23.0109 18.2643C23.1937 18.0812 23.2966 17.8331 23.2969 17.5744V9.83664C23.2967 9.57778 23.1939 9.32954 23.0111 9.14635C22.8282 8.96315 22.5801 8.85995 22.3212 8.85938H9.35593C9.09698 8.85966 8.84871 8.96266 8.66561 9.14577C8.4825 9.32888 8.3795 9.57714 8.37921 9.83609V12.4567C8.37921 12.6743 8.29279 12.8829 8.13895 13.0368C7.98511 13.1906 7.77646 13.277 7.5589 13.277C7.34134 13.277 7.13269 13.1906 6.97885 13.0368C6.82501 12.8829 6.73859 12.6743 6.73859 12.4567V9.83664C6.73917 9.1426 7.01509 8.47715 7.5058 7.98635C7.9965 7.49554 8.6619 7.21947 9.35593 7.21875H22.3212C23.0151 7.21976 23.6802 7.49595 24.1707 7.98673C24.6611 8.47751 24.9369 9.14279 24.9375 9.83664V17.5744C24.9368 18.2681 24.6609 18.9333 24.1705 19.4239C23.68 19.9146 23.015 20.1907 22.3212 20.1917Z"
                                fill="#FFBB38"
                            />
                            <path
                                d="M20.4422 18.7464H3.88281C3.66525 18.7464 3.4566 18.6599 3.30276 18.5061C3.14893 18.3523 3.0625 18.1436 3.0625 17.9261V15.1709C3.0625 14.9533 3.14893 14.7447 3.30276 14.5909C3.4566 14.437 3.66525 14.3506 3.88281 14.3506H20.4422C20.6597 14.3506 20.8684 14.437 21.0222 14.5909C21.1761 14.7447 21.2625 14.9533 21.2625 15.1709V17.9261C21.2625 18.1436 21.1761 18.3523 21.0222 18.5061C20.8684 18.6599 20.6597 18.7464 20.4422 18.7464ZM4.70312 17.1057H19.6219V15.9912H4.70312V17.1057Z"
                                fill="#FFBB38"
                            />
                        </svg>
                    }
                />
                <Transaction
                    margin="10px 0 0 0"
                    title={transactions[1].Title}
                    date={transactions[1].Date}
                    amount={transactions[1].Amount}
                    type={transactions[1].Type}
                    icon={
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22.995 8.38245C22.9812 6.85217 22.3642 5.38914 21.278 4.31113C20.1918 3.23312 18.7241 2.62719 17.1938 2.62495H8.75001C8.54028 2.62225 8.33656 2.69498 8.17595 2.82989C8.01535 2.96479 7.90855 3.1529 7.87501 3.35995L4.88251 22.1287C4.86381 22.253 4.87211 22.3798 4.90684 22.5006C4.94156 22.6214 5.00191 22.7333 5.08376 22.8287C5.16508 22.9263 5.2667 23.0051 5.38154 23.0595C5.49638 23.1139 5.62169 23.1426 5.74876 23.1437H9.36251L9.17001 24.3599C9.14956 24.486 9.15696 24.615 9.19168 24.7379C9.2264 24.8608 9.28761 24.9746 9.37099 25.0713C9.45438 25.1681 9.55792 25.2454 9.67436 25.2978C9.7908 25.3503 9.91731 25.3766 10.045 25.375H14.1138C14.3222 25.378 14.5249 25.3065 14.6853 25.1733C14.8457 25.0402 14.9533 24.8541 14.9888 24.6487L15.8638 19.3024H18.62C20.3451 19.2955 21.9974 18.6059 23.2156 17.3844C24.4338 16.1629 25.119 14.5088 25.1213 12.7837V12.5387C25.1204 11.7272 24.9272 10.9275 24.5576 10.205C24.1881 9.4826 23.6525 8.85801 22.995 8.38245ZM9.49376 4.37495H17.1938C18.1118 4.37777 19.0017 4.69162 19.7184 5.26529C20.4351 5.83896 20.9362 6.63859 21.14 7.5337C20.7615 7.44492 20.3738 7.40087 19.985 7.40245H12.6875C12.4778 7.39975 12.2741 7.47248 12.1135 7.60739C11.9528 7.74229 11.8461 7.9304 11.8125 8.13745L11.2963 11.375C11.2591 11.607 11.3157 11.8443 11.4535 12.0347C11.5914 12.225 11.7992 12.3528 12.0313 12.39C12.2633 12.4271 12.5006 12.3705 12.691 12.2327C12.8813 12.0948 13.0091 11.887 13.0463 11.655L13.4488 9.13495H20.0025C20.422 9.13715 20.8373 9.21726 21.2275 9.3712C21.0612 10.741 20.4003 12.0028 19.3691 12.9196C18.3379 13.8365 17.0073 14.3451 15.6275 14.3499H11.5675C11.3591 14.3469 11.1564 14.4184 10.996 14.5516C10.8355 14.6847 10.7279 14.8708 10.6925 15.0762L9.62501 21.3937H6.77251L9.49376 4.37495ZM23.3713 12.7837C23.369 14.0447 22.8682 15.2537 21.9782 16.147C21.0881 17.0403 19.881 17.5455 18.62 17.5524H15.12C14.9116 17.5494 14.7089 17.6209 14.5485 17.7541C14.388 17.8872 14.2804 18.0733 14.245 18.2787L13.37 23.625H11.06L11.2525 22.4087L12.3025 16.1175H15.61C17.2435 16.1126 18.8296 15.5677 20.121 14.5674C21.4125 13.5672 22.3368 12.1678 22.75 10.5875C23.1561 11.1569 23.3734 11.8393 23.3713 12.5387V12.7837Z"
                                fill="#396AFF"
                            />
                        </svg>
                    }
                />
                <Transaction
                    margin="10px 0 0 0"
                    style={{ display: "flex" }}
                    title={transactions[2].Title}
                    date={transactions[2].Date}
                    amount={transactions[2].Amount}
                    type={transactions[2].Type}
                    icon={
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.0001 11.379C14.4962 11.379 14.9014 11.7831 14.9014 12.2792C14.9014 12.7319 15.2693 13.0988 15.722 13.0988C16.1736 13.0988 16.5416 12.7319 16.5416 12.2792C16.5416 11.1671 15.8171 10.2287 14.8197 9.88556V9.42048C14.8197 8.96884 14.4528 8.59987 14.0001 8.59987C13.5464 8.59987 13.1795 8.96884 13.1795 9.42048V9.88556C12.1822 10.2287 11.4598 11.1671 11.4598 12.2792C11.4598 13.6817 12.5987 14.8206 14.0001 14.8206C14.4962 14.8206 14.9014 15.2257 14.9014 15.7218C14.9014 16.2189 14.4962 16.6231 14.0001 16.6231C13.5041 16.6231 13.1 16.2189 13.1 15.7218C13.1 15.2691 12.732 14.9012 12.2793 14.9012C11.8256 14.9012 11.4598 15.2691 11.4598 15.7218C11.4598 16.8339 12.1822 17.7713 13.1795 18.1144V18.5795C13.1795 19.0332 13.5464 19.4011 14.0001 19.4011C14.4528 19.4011 14.8197 19.0332 14.8197 18.5795V18.1144C15.8171 17.7713 16.5416 16.8339 16.5416 15.7218C16.5416 14.3204 15.4016 13.1804 14.0001 13.1804C13.5041 13.1804 13.1 12.7763 13.1 12.2792C13.1 11.7831 13.5041 11.379 14.0001 11.379ZM20.872 18.5547C21.274 18.7666 21.7691 18.6126 21.9799 18.2136C22.662 16.9248 23.0217 15.4676 23.0217 14C23.0217 9.02671 18.9734 4.97947 14.0001 4.97947C9.02583 4.97947 4.97859 9.02671 4.97859 14C4.97859 18.9743 9.02583 23.0215 14.0001 23.0215C15.446 23.0215 16.8826 22.6722 18.1549 22.0097C18.5569 21.802 18.713 21.3049 18.5042 20.9039C18.2954 20.5039 17.8004 20.3447 17.3973 20.5545C16.3442 21.1044 15.2001 21.3824 14.0001 21.3824C9.93016 21.3824 6.61774 18.071 6.61774 14C6.61774 9.93104 9.93016 6.61862 14.0001 6.61862C18.0701 6.61862 21.3825 9.93104 21.3825 14C21.3825 15.202 21.087 16.3936 20.5309 17.4457C20.318 17.8467 20.471 18.3428 20.872 18.5547ZM14.0001 1.69702C11.6241 1.69702 9.31728 2.37707 7.32983 3.66173C6.94847 3.90771 6.83995 4.41517 7.08592 4.7955C7.33293 5.17583 7.83832 5.28332 8.22072 5.03941C9.94049 3.92735 11.9414 3.33824 14.0001 3.33824C19.8798 3.33824 24.6619 8.12135 24.6619 14C24.6619 19.8797 19.8798 24.6628 14.0001 24.6628C8.12047 24.6628 3.33736 19.8797 3.33736 14C3.33736 11.9609 3.9151 9.97755 5.00959 8.26708C5.2535 7.88468 5.14188 7.37722 4.75948 7.13331C4.37811 6.8894 3.87066 7.00102 3.62778 7.38239C2.36482 9.35744 1.69717 11.6477 1.69717 14C1.69717 20.785 7.21511 26.303 14.0001 26.303C20.7841 26.303 26.3031 20.785 26.3031 14C26.3031 7.21703 20.7841 1.69702 14.0001 1.69702Z"
                                fill="#16DBCC"
                            />
                        </svg>
                    }
                />
            </Card>
        </div>
    );
}