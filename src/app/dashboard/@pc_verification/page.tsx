"use client"
import React from "react";
import AppLayout from "@/components/layouts/appLayout";
import TextInput from "@/components/form/TextInput";
import Select from "@/components/form/Select";
import {Submit} from "@/components/form/button/submit";
import {FormLayout} from "@/components/form/layout";
import Checkbox from "@/components/form/Checkbox";
import ProgressBar from "@/components/progressbar";

const PCVerification= () => {
    return (
        // <AppLayout>
            <FormLayout>
                {/* Header */}
                <FormLayout.Header title={`PC Verification`} />
                {/* Body */}
                <FormLayout.Body>
                    <div className={`flex flex-col space-y-2 w-full py-2 px-3 rounded bg-body-header min-h-8 mt-2`}>
                        <div className={`flex flex-row w-full justify-between`}>
                            <div className={`flex items-center`}>
                                <h2 className={`text-xl font-bold`}>TSP & PC BILL</h2>
                            </div>
                            <div>
                                <Select id={`verification`} name={`verification`}
                                        label={`Verification:`}
                                        labelClassName={``}
                                        containerClassName={`!flex-row items-center justify-center !space-x-1 !w-full`}
                                        className={`!max-w-[150px] !max-h-8`}
                                        placeholder={`Select a bill`}
                                        options={[
                                            {
                                                label: `845455`,
                                                value: 1
                                            },
                                            {
                                                label: `445754`,
                                                value: 2
                                            }
                                        ]}
                                        onSelect={(op) => console.log(op)}
                                />
                            </div>
                            <div className={`flex items-center justify-center`}>
                                <Checkbox label={'Checked'}
                                          type={`checkbox`}
                                          name={"verified"}
                                          id={"verified"}
                                          containerClassName={`!flex-row items-center justify-center !space-x-2 !space-y-0 !w-full`}
                                          inputClassName={`!p-0 text-green !accent-zinc-500`}
                                          labelFirst={false}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col space-y-2 w-full py-2 px-3 rounded bg-header min-h-8 mt-2`}>
                        <div className={`flex flex-col w-full justify-between space-y-4`}>
                            <ProgressBar label={'Progress:'} value={80}/>
                            <div className={`flex flex-row justify-between`}>
                                <TextInput label={`Round:`} id={`round`}
                                           name={`round`} type={`number`}
                                           containerClassName={`!flex-row items-center justify-start !space-x-2 !space-y-0 !w-full`}
                                           inputClassName={`!p-0 !rounded border-2 bg-black !text-white text-center max-w-[50px]`}
                                           defaultValue={0}
                                />
                                <TextInput label={`Course Duration:`} id={`course_duration`}
                                           name={`course_duration`} type={`number`}
                                           containerClassName={`!flex-row items-center justify-end !space-x-2 !space-y-0 !w-full`}
                                           inputClassName={`!p-0 !rounded border-2 bg-black !text-white text-center max-w-[50px]`}
                                           defaultValue={0}
                                />
                            </div>
                            <div className={`flex flex-row justify-between`}>
                                <TextInput label={`Bill No:`} id={`bill_no`}
                                           name={`bill_no`} type={`number`}
                                           containerClassName={`!flex-row items-center justify-start !space-x-2 !space-y-0 !w-full`}
                                           inputClassName={`!p-0 !rounded border-2 bg-black !text-white text-center max-w-[50px]`}
                                           defaultValue={0}
                                />
                                <TextInput label={`Cumulative Invoice Hour:`} id={`cumulative_invoice_hour`}
                                           name={`cumulative_invoice_hour`} type={`number`}
                                           containerClassName={`!flex-row items-center justify-end !space-x-2 !space-y-0 !w-full`}
                                           inputClassName={`!p-0 !rounded border-2 bg-black !text-white text-center max-w-[50px]`}
                                           defaultValue={0}
                                />
                            </div>
                            <div className={`flex flex-row`}>
                                <Select name={`batch_id`}
                                        label={`Batch ID:`}
                                        options={[{label: 'Batch ID', value: 1}]}
                                        containerClassName={`!flex-row items-center justify-start !space-x-2 !space-y-0 !w-full`}
                                        className={`!p-0 !rounded border-2 bg-black !text-white text-center`}
                                />
                                <TextInput label={`Total Invoice Hour:`} id={`total_invoice_hour`}
                                           name={`total_invoice_hour`} type={`number`}
                                           containerClassName={`!flex-row items-center justify-end !space-x-2 !space-y-0 !w-full`}
                                           inputClassName={`!p-0 !rounded border-2 bg-black !text-white text-center max-w-[50px]`}
                                           defaultValue={0}
                                />
                            </div>
                        </div>
                        <div className={`flex flex-col items-center justify-center min-w-max contain-content border`}>
                            <div className={`flex flex-col space-y-2`}>
                                <div className={`flex flex-row space-x-4 border-2 p-2 border-gray-300`}>
                                    <TextInput label={'Amount (TSP):'} id={`amount_tsp`}
                                               name={`amount_tsp`} type={`number`}
                                               containerClassName={`!flex-row items-center justify-between !space-x-2 !space-y-0 !w-full`}
                                               inputClassName={`!p-0 !rounded border-2 bg-black !text-white text-center max-w-[100px]`}
                                               defaultValue={0}
                                    />
                                    <TextInput label={'Amount (PC):'} id={`amount_pc`}
                                               name={`amount_pc`} type={`number`}
                                               containerClassName={`!flex-row items-center justify-between !space-x-2 !space-y-0 !w-full`}
                                               inputClassName={`!p-0 !rounded border-2 bg-black !text-white text-center max-w-[100px]`}
                                               defaultValue={0}
                                    />
                                </div>
                                <div className={`flex flex-row space-x-4`}>
                                    <TextInput label={'Verified Date:'} id={`verified-date`}
                                               name={`verified-date`} type={`date`}
                                               containerClassName={`!flex-row items-center justify-between !space-x-2 !space-y-0 !w-full`}
                                               inputClassName={`!p-0 !rounded border-2 bg-black !text-white text-center`}
                                               defaultValue={0}
                                    />
                                    <TextInput label={'Verified By:'} id={`amount_tsp`}
                                               name={`amount_tsp`} type={`text`}
                                               readOnly
                                               containerClassName={`!flex-row items-center justify-between !space-x-2 !space-y-0 !w-full`}
                                               inputClassName={`!p-0 !rounded border-2 bg-black !text-white text-center max-w-[150px]`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </FormLayout.Body>
                {/* Footer */}
                <FormLayout.Footer>
                    <Submit label={'Verify'} id={'verify'}
                            className={`!bg-white text-black font-bold border-2 max-h-8 !rounded`}
                            containerClassName={`!justify-center !items-center`}/>
                    <Submit label={'Close'} id={'close'}
                            className={`!bg-white text-black font-bold border-2 max-h-8 !rounded`}
                            containerClassName={`!justify-center !items-center`}/>
                </FormLayout.Footer>
            </FormLayout>
        // </AppLayout>
    )
}

export default PCVerification;
