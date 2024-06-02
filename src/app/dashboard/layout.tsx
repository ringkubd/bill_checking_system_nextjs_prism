"use client"

import React, {useEffect} from "react";
import AppLayout from "@/components/layouts/appLayout";
import {auth} from "@/app/api/auth/[...nextauth]/route";

interface DashboardLayoutProps {
    children:  React.ReactNode;
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
    const auth1 = auth();
    useEffect(() => {
        console.log(auth1, 7777)
    }, [auth1]);
    return (
        <AppLayout>
            {children}
        </AppLayout>
    )
}
