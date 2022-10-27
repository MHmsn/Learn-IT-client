import React from 'react';

//blog page

const Blog = () => {
    return (
        <div>
            <div className=' mt-24 text-primary-focus font-extrabold'>
            <div className="collapse w-3/4 rounded-md mx-auto">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium bg-secondary-focus">
                    <h2>What is cors?</h2>
                </div>
                <div className="collapse-content bg-accent"> 
                    <p className='pt-4 font-bold'>cors is cross-origin-resource-sharing. Usually when we deploy API with data from database, we cannot get the data from another device or platform because of security measures for that data. cors allows us to relax this security and get the data through fetch API. As a result, any origins can get access to that data. we can use it by npm install cors in the command line and then using require function and use function in the index.js file. </p>
                </div>
            </div>
            <div className="collapse w-3/4 rounded-md mx-auto my-10">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium bg-secondary-focus">
                    <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                </div>
                <div className="collapse-content bg-accent"> 
                    <p className='pt-4 font-bold'>firebase is a tool which we can use for implementing different types of authentication systems in a website. We can also use it for deploying our web-app. It also has various other features to add to our web-app. It helps us to manage our project well. It also has a cloud database. We can use Parse as alternative to Firebase. </p>
                </div>
            </div>
            <div className="collapse w-3/4 rounded-md mx-auto my-10">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium bg-secondary-focus">
                    <h2>How does the private route work?</h2>
                </div>
                <div className="collapse-content bg-accent"> 
                    <p className='pt-4 font-bold'>Private route is basically just a route which is designed to check the authentication of user before displaying the content of a route. If we have any route inside the privateRoute as children we can check inside the privateRoute if there is any user logged in. if there is a user the child component will be shown, otherwise will be navigated to the login page.</p>
                </div>
            </div>
            <div className="collapse w-3/4 rounded-md mx-auto my-10">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium bg-secondary-focus">
                    <h2>What is Node? How does Node work?</h2>
                </div>
                <div className="collapse-content bg-accent"> 
                    <p className='pt-4 font-bold'>Node is a JavaScript Runtime software that allows us to directly run JavaScript code in the terminal, without the need of a browser. Node.JS is used to build server side fully functional applications. It also has access to files and system which is required to build those applications. This is written with JavaScript but it works as a server-side language. It uses chrome v8 engine to convert javascript code into machine code.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;