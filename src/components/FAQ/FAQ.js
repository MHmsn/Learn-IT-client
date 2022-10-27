import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className=' mt-24 text-primary-focus font-extrabold'>
            <div className='mb-16'>
                Frequently Asked Questions
            </div>

            <div className="collapse w-3/4 rounded-md mx-auto">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium bg-secondary-focus">
                    <h2>What can I expect from these courses?</h2>
                </div>
                <div className="collapse-content bg-accent"> 
                    <p className='pt-4 font-bold'>Here the courses contain basic fundamental knowledge that you need to know to start learning in that field.  </p>
                </div>
            </div>
            <div className="collapse w-3/4 rounded-md mx-auto my-10">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium bg-secondary-focus">
                    <h2>How does this work?</h2>
                </div>
                <div className="collapse-content bg-accent"> 
                    <p className='pt-4 font-bold'>You just have to login to get premium access to the courses. So if you do not have an account, Register and get started! </p>
                </div>
            </div>
            <div className="collapse w-3/4 rounded-md mx-auto my-10">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium bg-secondary-focus">
                    <h2>I am facing some bugs....</h2>
                </div>
                <div className="collapse-content bg-accent"> 
                    <p className='pt-4 font-bold'>Send an email at moinulh.msn@gmail.com with the details of the bug you are facing and I will try my best to fix it!</p>
                </div>
            </div>
            <div className="collapse w-3/4 rounded-md mx-auto my-10">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium bg-secondary-focus">
                    <h2>How safe is the user's data?</h2>
                </div>
                <div className="collapse-content bg-accent"> 
                    <p className='pt-4 font-bold'>Login feature is used just to track how many users are actively using these site, no misuse of data will happen. Also not to mention the authentication is provided by Firebase backed by google. </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FAQ;