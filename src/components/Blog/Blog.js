import React from 'react';

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
                    <p className='pt-4 font-bold'>React router allows us to create a single page web-app with multiple routes with different content and data. With normal HTML, CSS and JavaScript, we can create multi page websites, but everytime we change pages, the new page is loaded from scratch. Here React router comes to the rescue. With react router, we can decide which part of the page stays static and which part's content is gonna change and load new data. It also allows us to load data and create routes dynamically. React router makes navigation and loading data easier in a dynamic way. </p>
                </div>
            </div>
            <div className="collapse w-3/4 rounded-md mx-auto my-10">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium bg-secondary-focus">
                    <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                </div>
                <div className="collapse-content bg-accent"> 
                    <p className='pt-4 font-bold'>Context API in react is a way for data to be passed around like a global variable. Normally in React, we can pass data from parent prop to child prop. However, if there are a lot of children and grandchildren components, we have to pass the prop a lot of times and the code becomes repeating. This is also called prop drilling. In order to avoid this prop drilling, we can use this context API to pass data to the exact children component we want to. At first we have to use createContext to create a context. Then we have to use context provider. After that, in the children component we want our data to be in, we can use the useContext hook to get the data from the context. </p>
                </div>
            </div>
            <div className="collapse w-3/4 rounded-md mx-auto my-10">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium bg-secondary-focus">
                    <h2>How does the private route work?</h2>
                </div>
                <div className="collapse-content bg-accent"> 
                    <p className='pt-4 font-bold'>useRef is a similar hook like useState. But useRef does not cause any rerender. For example, if we want to keep track of how many times the page is rerendered using useState, we will face an infinite loop as useState itself makes the page rerender. We can use useRef hook to avoid this incident. useRef only returns an object called current. Which later can be accessed by using (objectname).current .</p>
                </div>
            </div>
            <div className="collapse w-3/4 rounded-md mx-auto my-10">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium bg-secondary-focus">
                    <h2>What is Node? How does Node work?</h2>
                </div>
                <div className="collapse-content bg-accent"> 
                    <p className='pt-4 font-bold'>useRef is a similar hook like useState. But useRef does not cause any rerender. For example, if we want to keep track of how many times the page is rerendered using useState, we will face an infinite loop as useState itself makes the page rerender. We can use useRef hook to avoid this incident. useRef only returns an object called current. Which later can be accessed by using (objectname).current .</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;