"use client"
import CheckingPage from "@/app/dashboard/@checking/page";
import ExamChecking from "@/app/dashboard/@exam_checking/page";
import PCVerification from "@/app/dashboard/@pc_verification/page";
import {useState} from "react";
import Menu from "@/components/menu";

const DashboardPage = () => {
    const [activePage, setActivePage] = useState<string>('checking');
    return (
        <div className="flex flex-row">
            <div className={`h-screen w-80 drop-shadow-2xl flex flex-col items-center justify-center`}>
                <Menu
                    links={[
                        {
                            title: 'Checking',
                            link: "#",
                            onPress: () => setActivePage("checking"),
                        },
                        {
                            title: "Exam Bill",
                            link: "#",
                            onPress: () => setActivePage("exam_bill"),
                        },
                        {
                            title: "PC Bill",
                            link: "#",
                            onPress: () => setActivePage("pc_bill"),
                        }
                    ]}
                />
            </div>
            <div className={`flex flex-col w-full border-4 border-white space-y-2 shadow-2xl`}>
                <div className={`flex flex-col justify-center items-center min-h-screen transition-all ease-in-out duration-150 delay-100 ${activePage == 'checking' ? '' : 'hidden'}`}>
                    <CheckingPage/>
                </div>
                <div className={`flex flex-col justify-center items-center min-h-screen transition-all ease-in-out duration-150 delay-100 ${activePage == 'exam_bill' ? '' : 'hidden'}`}>
                    <ExamChecking/>
                </div>
                <div className={`flex flex-col justify-center items-center min-h-screen transition-all ease-in-out duration-150 delay-100 ${activePage == 'pc_bill' ? '' : 'hidden'}`}>
                    <PCVerification/>
                </div>
            </div>
        </div>
    )
}
export default DashboardPage;
