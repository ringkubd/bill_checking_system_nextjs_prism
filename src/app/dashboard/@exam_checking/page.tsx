"use client"
import React from "react";
import AppLayout from "@/components/layouts/appLayout";
import TextInput from "@/components/form/TextInput";
import Select from "@/components/form/Select";
import {Submit} from "@/components/form/button/submit";
import {FormLayout} from "@/components/form/layout";

const ExamChecking= () => {
    return (
        // <AppLayout>
            <FormLayout>
                {/* Header */}
                <FormLayout.Header title={`Exam bill checking`} />
                {/* Body */}
                <FormLayout.Body>
                    <div className={`flex flex-col space-y-2 w-full py-2 px-3 rounded bg-body-header min-h-8 mt-2`}>
                        <div className={`flex flex-row w-full justify-between`}>
                            <div className={``}>
                                <TextInput label={`Date:`} id={'date'} name={`date`}
                                           labelClassName={`text-white !text-sm `}
                                           type={`date`}
                                           containerClassName={`!flex-row items-center justify-center !space-x-1  !w-full`}
                                           inputClassName={`!rounded !w-[150px] !max-h-8`}
                                           onChange={(e) => console.log(e)}
                                />
                            </div>
                            <div className={``}>
                                <TextInput label={`Ref:`} id={'ref'} name={`ref`}
                                           labelClassName={`text-white !text-sm `}
                                           containerClassName={`!flex-row items-center justify-center !space-x-1  !w-full`}
                                           inputClassName={`!rounded !w-[100px] !max-h-8`}
                                           onChange={(e) => console.log(e)}
                                />
                            </div>
                            <div>
                                <TextInput label={'Bill #'} id={`bill_number`} name={`bill_number`}
                                           type={`number`}
                                           labelClassName={`text-white !text-sm `}
                                           containerClassName={`!flex-row items-center justify-end !space-x-1 !w-full`}
                                           inputClassName={`!rounded !w-[70px] !max-h-8`}
                                           value={0}
                                />
                            </div>
                            <div>
                                <Select id={`exam_type`} name={`exam_type`}
                                        label={`Exam Type:`}
                                        labelClassName={`!text-sm text-white`}
                                        containerClassName={`!flex-row items-center justify-center !space-x-1 !w-full`}
                                        className={`!max-w-[150px] !max-h-8`}
                                        placeholder={`Select an option`}
                                        options={[
                                            {
                                                label: `Mid Monthly`,
                                                value: 1
                                            },
                                            {
                                                label: `Monthly`,
                                                value: 2
                                            }
                                        ]}
                                        onSelect={(op) => console.log(op)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col space-y-2 w-full py-2 px-3 rounded bg-header min-h-8 mt-2`}>
                        <div className={`flex flex-row w-full justify-between`}>
                            <div>
                                <Select id={`round`} name={`round`}
                                        label={`Round:`}
                                        labelClassName={`!text-sm`}
                                        containerClassName={`!flex-row !items-center justify-center !space-x-1 !w-full`}
                                        className={`!max-w-[150px] !max-h-8 !items-center`}
                                        placeholder={`Select a Round`}
                                        options={[
                                            {
                                                label: `10`,
                                                value: 1
                                            },
                                            {
                                                label: `30`,
                                                value: 2
                                            }
                                        ]}
                                        onSelect={(op) => console.log(op)}
                                />
                            </div>
                            <div>
                                <Select id={`batch`} name={`batch`}
                                        label={`Batch:`}
                                        labelClassName={`!text-sm`}
                                        containerClassName={`!flex-row !items-center justify-center !space-x-1 !w-full`}
                                        className={`!max-w-[150px] !max-h-8 !items-center`}
                                        placeholder={`Select a Batch`}
                                        options={[
                                            {
                                                label: `10`,
                                                value: 1
                                            },
                                            {
                                                label: `30`,
                                                value: 2
                                            }
                                        ]}
                                        onSelect={(op) => console.log(op)}
                                />
                            </div>
                            <div>
                                <TextInput
                                    label={`Exam#`}
                                    name={"exam"}
                                    id={"exam"}
                                    type={`number`}
                                    containerClassName={`!flex-row items-center justify-end !space-x-1 !w-full`}
                                    inputClassName={`!rounded !w-[70px] !max-h-8`}
                                    defaultValue={0}
                                />
                            </div>
                        </div>
                    </div>
                </FormLayout.Body>
                {/* Footer */}
                <FormLayout.Footer>
                    <Submit label={'Verify'} id={'verify'}
                            className={`!bg-body-header-deep text-white border-2 max-h-8 !rounded`}
                            containerClassName={`!justify-center !items-center`}/>
                </FormLayout.Footer>
            </FormLayout>
        // </AppLayout>
    )
}
export default ExamChecking;
