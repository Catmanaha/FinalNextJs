"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import HorizontalNav from "@/components/HorizontalNav";
import StyledComponentsRegistry from "./registry";
import styled from "styled-components";
import { devices } from "@/styles/breakpoints";
import { SessionProvider } from "next-auth/react";

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
                        <div>
                            <HorizontalNav />
                            {children}
                        </div>
                    </StyledMain>
                </SessionProvider>
            </body>
        </html>
    );
}

const StyledMain = styled.main`
    display: flex;
    flex-direction: row;
`;
