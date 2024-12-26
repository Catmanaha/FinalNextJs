"use client";

import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import styled from "styled-components";
import Image from "next/image";
import { devices } from "@/styles/breakpoints";

const NavBar = () => {
    const pathname = usePathname();

    return (
        <StyledNav>
            <StyledLogoContainer>
                <Image
                    alt="logo"
                    width="36"
                    height="36"
                    src="data:image/png;base64,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"
                />
                <StyledLogo>BankDash.</StyledLogo>
            </StyledLogoContainer>
            <StyledList>
                <li>
                    <NavLink
                        url="/dashboard"
                        title="Dashboard"
                        isActive={pathname === "/dashboard"}
                    >
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_78_425)">
                                <path
                                    d="M24.3254 10.8738C24.3248 10.8732 24.3243 10.8727 24.3237 10.8721L14.1257 0.674438C13.691 0.239563 13.1131 0 12.4983 0C11.8836 0 11.3057 0.239372 10.8708 0.674248L0.678111 10.8667C0.674678 10.8702 0.671244 10.8738 0.667811 10.8772C-0.224828 11.775 -0.223302 13.2317 0.672198 14.1272C1.08132 14.5365 1.62168 14.7736 2.19941 14.7984C2.22287 14.8006 2.24652 14.8018 2.27037 14.8018H2.67682V22.3066C2.67682 23.7917 3.88513 25 5.37057 25H9.36036C9.76472 25 10.0928 24.6721 10.0928 24.2676V18.3838C10.0928 17.7061 10.644 17.1549 11.3217 17.1549H13.675C14.3527 17.1549 14.9039 17.7061 14.9039 18.3838V24.2676C14.9039 24.6721 15.2318 25 15.6363 25H19.6261C21.1115 25 22.3198 23.7917 22.3198 22.3066V14.8018H22.6967C23.3113 14.8018 23.8892 14.5624 24.3243 14.1275C25.2207 13.2305 25.2211 11.7714 24.3254 10.8738Z"
                                    fill="#2D60FF"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_78_425">
                                    <rect width="25" height="25" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        url="/transactions"
                        title="Transactions"
                        isActive={pathname === "/transactions"}
                    >
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_78_393)">
                                <path
                                    d="M5.20831 22.9167C5.20897 23.469 5.42867 23.9986 5.81923 24.3891C6.20979 24.7797 6.73931 24.9994 7.29165 25H17.7083C18.2606 24.9994 18.7902 24.7797 19.1807 24.3891C19.5713 23.9986 19.791 23.469 19.7916 22.9167V22.0052H5.20831V22.9167Z"
                                    fill="#B1B1B1"
                                />
                                <path
                                    d="M19.7916 2.08333C19.791 1.531 19.5713 1.00148 19.1807 0.610917C18.7902 0.220358 18.2606 0.00065473 17.7083 0L7.29165 0C6.73931 0.00065473 6.20979 0.220358 5.81923 0.610917C5.42867 1.00148 5.20897 1.531 5.20831 2.08333V3.125H19.7916V2.08333Z"
                                    fill="#B1B1B1"
                                />
                                <path
                                    d="M24.7097 6.70052L21.5847 3.44531L20.0819 4.88802L21.3893 6.25H19.7916V8.33333H21.5017L20.1126 9.66459L21.554 11.1688L24.679 8.17396C24.7778 8.07926 24.857 7.96602 24.912 7.8407C24.9671 7.71538 24.9968 7.58045 24.9997 7.44361C25.0026 7.30677 24.9784 7.17071 24.9287 7.04321C24.8789 6.91571 24.8045 6.79926 24.7097 6.70052Z"
                                    fill="#B1B1B1"
                                />
                                <path
                                    d="M16.6666 6.24996H19.7916V4.16663H5.20831V16.6666H8.33331V18.75H5.20831V20.8333H19.7916V8.33329H16.6666V6.24996ZM15.625 10.4166H11.9791C11.841 10.4166 11.7085 10.4715 11.6109 10.5692C11.5132 10.6669 11.4583 10.7993 11.4583 10.9375C11.4583 11.0756 11.5132 11.2081 11.6109 11.3057C11.7085 11.4034 11.841 11.4583 11.9791 11.4583H13.0208C13.6666 11.4576 14.2896 11.697 14.7689 12.1298C15.2482 12.5627 15.5495 13.1582 15.6144 13.8007C15.6793 14.4433 15.5032 15.087 15.1201 15.607C14.7371 16.1269 14.1745 16.486 13.5416 16.6145V17.7083H11.4583V16.6666H9.37498V14.5833H13.0208C13.1589 14.5833 13.2914 14.5284 13.3891 14.4307C13.4868 14.3331 13.5416 14.2006 13.5416 14.0625C13.5416 13.9243 13.4868 13.7919 13.3891 13.6942C13.2914 13.5965 13.1589 13.5416 13.0208 13.5416H11.9791C11.3333 13.5423 10.7103 13.3029 10.2311 12.8701C9.75179 12.4372 9.45045 11.8417 9.38555 11.1992C9.32064 10.5566 9.4968 9.9129 9.87983 9.39294C10.2629 8.87298 10.8254 8.51389 11.4583 8.38538V7.29163H13.5416V8.33329H15.625V10.4166Z"
                                    fill="#B1B1B1"
                                />
                                <path
                                    d="M3.49828 16.6667L4.88734 15.3355L3.44593 13.8313L0.320931 16.8261C0.222115 16.9208 0.142929 17.034 0.0879011 17.1594C0.0328728 17.2847 0.00308028 17.4196 0.000226477 17.5564C-0.00262733 17.6933 0.0215135 17.8293 0.0712692 17.9568C0.121025 18.0843 0.19542 18.2008 0.290202 18.2995L3.4152 21.5547L4.91807 20.112L3.61064 18.75H5.2083V16.6667H3.49828Z"
                                    fill="#B1B1B1"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_78_393">
                                    <rect width="25" height="25" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        url="/accounts"
                        title="Accounts"
                        isActive={pathname === "/accounts"}
                    >
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_78_414)">
                                <path
                                    d="M12.3219 12.0426C13.9763 12.0426 15.4089 11.4492 16.5794 10.2785C17.75 9.10793 18.3434 7.67571 18.3434 6.02109C18.3434 4.36705 17.75 2.93463 16.5792 1.76372C15.4085 0.593374 13.9761 0 12.3219 0C10.6672 0 9.235 0.593374 8.06446 1.76391C6.89392 2.93444 6.30035 4.36686 6.30035 6.02109C6.30035 7.67571 6.89392 9.10813 8.06465 10.2787C9.23538 11.449 10.6678 12.0426 12.3219 12.0426Z"
                                    fill="#B1B1B1"
                                />
                                <path
                                    d="M22.8579 19.2237C22.8241 18.7366 22.7558 18.2052 22.6553 17.644C22.5538 17.0787 22.4232 16.5443 22.2668 16.0558C22.1052 15.5509 21.8855 15.0523 21.6139 14.5745C21.332 14.0786 21.0009 13.6468 20.6293 13.2915C20.2408 12.9197 19.7651 12.6209 19.215 12.4028C18.6668 12.186 18.0593 12.0761 17.4095 12.0761C17.1543 12.0761 16.9075 12.1808 16.4309 12.4912C16.1375 12.6825 15.7944 12.9037 15.4114 13.1484C15.0839 13.3571 14.6402 13.5526 14.0923 13.7296C13.5576 13.9026 13.0148 13.9903 12.479 13.9903C11.9432 13.9903 11.4006 13.9026 10.8654 13.7296C10.318 13.5528 9.87434 13.3573 9.54723 13.1486C9.16786 12.9062 8.82454 12.6849 8.5268 12.491C8.05073 12.1806 7.80373 12.0759 7.54852 12.0759C6.8985 12.0759 6.2912 12.186 5.74322 12.403C5.19352 12.6207 4.71764 12.9195 4.32873 13.2917C3.95737 13.6472 3.62606 14.0788 3.34454 14.5745C3.07312 15.0523 2.85339 15.5507 2.69165 16.056C2.53544 16.5444 2.40479 17.0787 2.30331 17.644C2.2028 18.2044 2.13451 18.736 2.10075 19.2243C2.06757 19.7026 2.05078 20.1991 2.05078 20.7005C2.05078 22.0055 2.46563 23.062 3.28369 23.8412C4.09164 24.61 5.16071 25.0001 6.46076 25.0001H18.4984C19.7985 25.0001 20.8672 24.6102 21.6753 23.8412C22.4936 23.0626 22.9084 22.0059 22.9084 20.7003C22.9082 20.1966 22.8912 19.6998 22.8579 19.2237Z"
                                    fill="#B1B1B1"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_78_414">
                                    <rect width="25" height="25" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </NavLink>
                </li>
            </StyledList>
        </StyledNav>
    );
};

const StyledList = styled.ul`
    margin-top: 33px;
    ${devices.desktop} {
        margin-top: 33px;
    }

    ${devices.tablet} {
        margin-top: 31px;
    }
`;

const StyledLogo = styled.div`
    font-family: Mont;
    font-size: 25px;
    font-weight: 900;
    color: #343c6a;
    margin-left: 9px;
`;

const StyledLogoContainer = styled.div`
    display: flex;
    margin-left: 27px;
    margin-top: 26px;
`;

const StyledNav = styled.nav`
    border-right: 1px solid #e6eff5;
    width: 250px;
    height: 1175px;
    ${devices.desktop} {
        width: 250px;
        height: 1175px;
    }

    ${devices.tablet} {
        width: 231px;
        height: 936px;
    }
`;

export default NavBar;
