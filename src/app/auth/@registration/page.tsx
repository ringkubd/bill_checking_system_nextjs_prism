"use client"
import React from "react";
import {Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import TextInput from "@/components/form/TextInput";
import GreenButton from "@/components/button/green";
import {useRouter} from "next/navigation";
import {signIn} from "@/app/api/auth/[...nextauth]/route";

interface Values {
    email: string;
    password: string;
    name: string;
}
interface TopItem {
    navButton?: React.ReactNode;
}


const RegistrationPage = ({navButton}: TopItem) => {
    const router = useRouter();
    const submit = async (values: Values, props: FormikHelpers<Values>) => {
        try {
            const res = await fetch('/api/v1/auth/registration', {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(r => r.json());
            await signIn(res.data)
            // router.push('/dashboard')
        }catch (error) {
            console.error(error);
            console.log(error)
        }
    }
    const initialValues : Values = {
        email: 'ajr.jahid@gmail.com',
        password: '123456789',
        name: 'Anwar Jahid',
    }

    const validationSchema: Yup.ObjectSchema<Values> = Yup.object().shape({
        email: Yup.string().email().required().label('Email'),
        password: Yup.string().required().min(6).label('Password'),
        name: Yup.string().required().label('Name')
    });
    return (
        <div className={`z-50`}>
            {navButton}
            <div className="bg-white z-50 shadow-2xl rounded-lg">
                <div className={`flex flex-col w-full justify-center rounded mb-4 bg-gradient-to-b from-[#69C791] to-[#FFFFFF] py-8`}>
                    <h2 className={`font-bold text-center text-2xl border-b-2 text-[#008080]`}>Registration</h2>
                </div>
                <div className={`px-6 lg:px-10 pb-8 rounded`}>
                    <Formik initialValues={initialValues} onSubmit={submit} validationSchema={validationSchema}>
                        {
                            ({handleChange, handleSubmit, handleBlur, values, isSubmitting, errors}) => (
                                <form className={`flex flex-col justify-start items-start space-y-4`} onSubmit={handleSubmit}>
                                    <TextInput
                                        label={`Name`}
                                        id={`name`}
                                        name={`name`}
                                        error={errors.name}
                                        placeholder={`Your full name`}
                                        onChange={handleChange}
                                        onBlur={handleChange}
                                        labelClassName={`text-[#008080]`}
                                        value={values.name}
                                    />
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
                                                 className={`!bg-white !text-[#008080]`}
                                    />
                                </form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export default RegistrationPage;
