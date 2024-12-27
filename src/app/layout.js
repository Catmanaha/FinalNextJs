"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import HorizontalNav from "@/components/HorizontalNav";
import styled from "styled-components";
import { SessionProvider } from "next-auth/react";
import {devices} from "@/styles/breakpoints";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <SessionProvider>
                    <StyledMain>
                        <div>
                            <NavBar></NavBar>
                        </div>
                        <ContentWrapper>
                            <HorizontalNav />
                            {children}
                        </ContentWrapper>
                    </StyledMain>
                </SessionProvider>
            </body>
        </html>
    );
}

const StyledMain = styled.main`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;

    ${devices.tablet} {
        width: 1124px;
    }
`;
