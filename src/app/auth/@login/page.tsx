"use client"
import {Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import TextInput from "@/components/form/TextInput";
import GreenButton from "@/components/button/green";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import {SignIn} from "@/lib/signIn";
import {useSession} from "next-auth/react";

interface Values {
    email: string;
    password: string;
}

interface TopItem {
    navButton?: React.ReactNode;
}

const Login = ({navButton}: TopItem) => {
    const router = useRouter();
    const session = useSession();

    useEffect(() => {
        console.log(session)
    }, [session]);
    const submit = async (values: Values, props: FormikHelpers<Values>) => {
        try {
            const res = await SignIn(values);
        }catch (error) {
            console.log(error)
        }
    }
    const initialValues : Values = {
        email: 'ajr.jahid@gmail.com',
        password: '123456789'
    }

    const validationSchema: Yup.ObjectSchema<Values> = Yup.object().shape({
        email: Yup.string().email().required().label('Email'),
        password: Yup.string().required().min(6).label('Password')
    });

    return (
        <div className={`z-50`}>
            {navButton}
            <div className="bg-white z-50 shadow-2xl rounded-lg">
                <div className={`flex flex-col w-full justify-center mb-4 bg-gradient-to-b from-[#69C791] to-[#FFFFFF] py-8`}>
                    <h2 className={`font-bold text-center text-2xl border-b-2 text-[#008080]`}>Login</h2>
                </div>
                <div className={`px-6 lg:px-8 pb-8`}>
                    <Formik initialValues={initialValues} onSubmit={submit} validationSchema={validationSchema}>
                        {
                            ({handleChange, handleSubmit, handleBlur, values, isSubmitting, errors}) => (
                                <form className={`flex flex-col justify-start items-start space-y-4`}
                                      onSubmit={handleSubmit}>
                                    <TextInput
                                        label={`Email`}
                                        id={`email`}
                                        name={`email`}
                                        error={errors.email}
                                        placeholder={`Email address`}
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                        labelClassName={`text-[#008080]`}
                                        value={values.email}
                                    />
                                    <TextInput
                                        label={`Password`}
                                        type={`password`}
                                        id={`password`}
                                        name={`password`}
                                        error={errors.password}
                                        placeholder={`Password`}
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                        labelClassName={`text-[#008080]`}
                                        value={values.password}
                                    />
                                    <GreenButton text={'Submit'}
                                                 type={`submit`}
                                                 className={`!bg-white !text-[#008080]`}/>
                                </form>
                            )
                        }
                    </Formik>
                </div>

            </div>
        </div>
    );
}

export default Login;
