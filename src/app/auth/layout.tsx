"use client"

import React from "react";
import GuestLayout from "@/components/layouts/guestLayout";

interface AuthLayoutProps {
    children:  React.ReactNode;
}

export default function AuthLayout({children}: AuthLayoutProps) {

    return (
        <GuestLayout>
            {children}
        </GuestLayout>
    )
}
