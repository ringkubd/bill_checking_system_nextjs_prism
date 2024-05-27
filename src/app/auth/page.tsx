"use client"
import React from "react";
import Login from "@/app/auth/@login/page";
import RegistrationPage from "@/app/auth/@registration/page";
import GreenButton from "@/components/button/green";
import {IoArrowRedo} from "react-icons/io5";

const Auth = () => {
    const [activePage, setActivePage] = React.useState<string>("login");
    const changePage = (navigation: string) => {
        navigation === 'login' ? setActivePage("login") : setActivePage("registration");
    }

    return (
        <div className={`flex flex-row items-center justify-center relative`}>
            <div className="relative flex flex-col">
                <div
                    className={`absolute left-0 top-0 right-0 bottom-0 w-full flex items-center justify-center  transition-all delay-0 duration-500 ease-in-out ${activePage === "registration" ? "origin-center rotate-45 opacity-50 invisible" : ''}`}>
                    <Login navButton={<GreenButton
                        text={`Registration`}
                        onPress={() => changePage('registration')}
                        className={`!bg-[#7fe8a4] !shadow-2xl mb-1 !text-[#008080]`}
                        rightIcon={<IoArrowRedo />} />
                    }
                    />
                </div>
                <div
                    className={`absolute left-0 top-0 right-0 bottom-0 w-full flex items-center justify-center transition-all delay-0 duration-500 ease-in-out ${activePage === "login" ? "origin-center rotate-45 opacity-50 invisible" : ''}`}>
                    <RegistrationPage navButton={<GreenButton
                        text={`Login`}
                        rightIcon={<IoArrowRedo />}
                        onPress={() => changePage('login')}
                        className={`!bg-[#7fe8a4] !shadow-2xl shadow-green-900 mb-1`} />} />
                </div>
            </div>
        </div>
    )
}

export default Auth;
