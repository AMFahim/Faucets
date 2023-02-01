import React from 'react';
import UiFaqDropdown from '../../Components/Ui/UiFaqDropdown';
import MainLayout from '../../Layout/MainLayout';
import { FaqData } from '../../Assets/db/Local.Databse';

const Faq = () => {
    return (
        <MainLayout>
            <h2 className='text-center p-4' style={{color: "#9B1FE9"}}>Frequently Asked Questions</h2>
            {
                FaqData.map(faq =>
                    <UiFaqDropdown
                     Key={faq.id} 
                     eventKey={faq.id}
                     ques={faq.ques}
                     ans={faq.ans}
                     />
                )
            }
            {/* <UiFaqDropdown /> */}
        </MainLayout>
    );
};

export default Faq;