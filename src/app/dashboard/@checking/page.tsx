"use client"
import TextInput from "@/components/form/TextInput";
import Select from "@/components/form/Select";
import GreenButton from "@/components/button/green";
import {FormLayout} from "@/components/form/layout";
import ProgressBar from "@/components/progressbar";

const CheckingPage = () => {
    return (
        // <AppLayout>
        <div className={`flex flex-col justify-center items-center !w-full !min-w-screen`}>
            <FormLayout containerClass={`flex flex-col w-full min-w-screen`}>
                {/* Header */}
                <FormLayout.Header title={`Bill Checking`} />
                {/* Body  */}
                <FormLayout.Body>
                    {/* Filter */}
                    <div className={`flex flex-col space-y-2 w-full bg-body-header py-2 px-3 rounded`}>
                        <div className={`flex flex-col sm:flex-row px-3 py-2 bg-white w-full rounded justify-start sm:justify-between`}>
                            <TextInput label={`Course Duration:`} id={`course_duration`} name={`course_duration`}
                                       containerClassName={`!flex-row items-center justify-between sm:justify-center !space-x-1`}
                                       inputClassName={`max-w-[80px] bg-black !rounded text-white`} type={`number`}/>
                            <TextInput label={`Cumulative Invoice Hour:`} id={`cumulative_invoice_hour`}
                                       name={`cumulative_invoice_hour`}
                                       containerClassName={`!flex-row items-center justify-between sm:justify-center !space-x-1`}
                                       inputClassName={`max-w-[80px] bg-black !rounded text-white`} type={`number`}/>
                            <TextInput label={`Total Invoice Hour:`} id={`total_invoice_hour`} name={`total_invoice_hour`}
                                       containerClassName={`!flex-row items-center justify-between sm:justify-center !space-x-1`}
                                       inputClassName={`max-w-[80px] bg-black !rounded text-white`} type={`number`}/>
                        </div>
                        <ProgressBar label={'Progress'} value={45} />
                    </div>
                    <div className={`flex flex-col space-y-2 w-full py-2 px-3 rounded bg-header min-h-8 mt-2`}>
                        <div className={`flex flex-row w-full justify-between`}>
                            <div className={`w-1/5 flex items-center`}>
                                <a href="#" className={`text-center font-bold text-[#198080]`}>New Bundle</a>
                            </div>
                            <div className={`w-2/5`}>
                                <TextInput label={`Date:`} id={'date'} name={`date`}
                                           type={`date`}
                                           containerClassName={`!flex-row items-center justify-center !space-x-1  !w-full`}
                                           inputClassName={`!rounded !w-1/2`}/>
                            </div>
                            <div className={`w-2/5 flex`}>
                                <TextInput label={`Ref:`} id={'ref'} name={`ref`}
                                           containerClassName={`!flex-row items-center justify-center !space-x-1 !w-full sm:ml-4`}
                                           inputClassName={`!rounded !w-1/2`}/>
                            </div>
                        </div>
                        <div className={`flex flex-row w-full justify-between`}>
                            <div className={`w-1/5 flex items-center`}>
                                <a href="#" className={`text-center font-bold text-[#198080]`}>Bill Period</a>
                            </div>
                            <div className={`w-2/5`}>
                                <TextInput label={`From:`} id={'from'} name={`from`}
                                           type={`date`}
                                           containerClassName={`!flex-row items-center justify-center !space-x-1 !w-full`}
                                           inputClassName={`!rounded !w-1/2`}/>
                            </div>
                            <div className={`w-2/5 flex`}>
                                <TextInput label={`To:`} id={'to'} name={`to`}
                                           type={`date`}
                                           containerClassName={`!flex-row items-center justify-center !space-x-1 !w-full sm:ml-4`}
                                           inputClassName={`!rounded !w-1/2`}/>
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col space-y-2 w-full py-2 px-3 rounded min-h-8 mt-2`}>
                        <div className={`flex flex-col sm:flex-row w-full justify-between`}>
                            <div className={`flex items-center`}>
                                <TextInput label={'Round:'} id={`round`} name={`round`}
                                           type={`number`}
                                           containerClassName={`!flex-row items-center !space-x-1 !w-full`}
                                           inputClassName={`!rounded !w-1/2`}
                                />

                            </div>
                            <div className={`flex items-center`}>
                                <Select id={`batch`} name={`batch`}
                                        label={`Batch:`}
                                        containerClassName={`!flex-row items-center justify-center !space-x-1 !w-full`}
                                        placeholder={`Select an option`}
                                        options={[
                                            {
                                                label: `One`,
                                                value: 1
                                            },
                                            {
                                                label: `Two`,
                                                value: 2
                                            }
                                        ]}
                                        onSelect={(op) => console.log(op)}
                                />
                            </div>
                            <div className={`w-2/5 flex items-center`}>
                                <TextInput label={'Bill Number:'} id={`bill_number`} name={`bill_number`}
                                           type={`number`}
                                           containerClassName={`!flex-row items-center justify-end !space-x-1 !w-full`}
                                           inputClassName={`!rounded !w-[50px]`}
                                           value={0}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col md:flex-row space-y-2 w-full py-2 px-3 rounded min-h-8 mt-2 justify-between`}>
                        <TextInput label={`Cumulative Invoice Hour:`}
                                   id={`cumulative_invoice_hour`}
                                   name={`cumulative_invoice_hour`}
                                   type={`number`}
                                   containerClassName={`!flex-row items-center !space-x-1 !w-full`}
                                   inputClassName={`!rounded !w-[50px]`}
                                   value={0}
                        />
                        <TextInput label={`Invoice Hour:`}
                                   id={`invoice_hour`}
                                   name={`Invoice Hour:`}
                                   type={`number`}
                                   containerClassName={`!flex-row items-center justify-end !space-x-1 !w-full`}
                                   inputClassName={`!rounded !w-[50px]`}
                                   value={0}
                        />
                    </div>
                    <GreenButton text={`Check`} className={`!bg-white !border-gray-400 !border-2 shadow-2xl text-[#2268BA] font-bold`} />
                </FormLayout.Body>
                {/* Footer*/}
                <FormLayout.Footer>
                    <a href={`#`} className={`font-bold`}>Print Log Sheet</a>
                    <a href={`#`} className={`font-bold`}>Print Log Sheet by Batch</a>
                </FormLayout.Footer>
            </FormLayout>
        </div>
        // </AppLayout>
    )
}
export default CheckingPage;
