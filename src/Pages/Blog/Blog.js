import React from 'react';

const Blog = () => {
    return (
        <div className='pt-36 max-w-[1500px] m-auto mb-16'>
            <h1 className=' text-center text-4xl font-bold mb-16'>Welcome to the Blog</h1>
            <div className='border-2 border-secondary rounded-lg p-10'>
                <h3 className='text-xl font-bold text-secondary'>What are the different ways to manage a state in a React application?</h3>
                <div className='font-semibold text-gray-500 mt-3 text-justify'>
                    <p>There are four main types of state you need to properly manage in your React apps.</p>
                    <li><span className='font-bold'>Local state: </span><p className='inline'>Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p></li>
                    <li className='my-2'><span className='font-bold'>Global state: </span><p className='inline'>Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global.</p></li>
                    <li className='my-2'><span className='font-bold'>Server state : </span><p className='inline'>Data that comes from an external server that must be integrated with our UI state.

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p></li>
                    <li className='my-2'><span className='font-bold'>URL state: </span><p className='inline'>GData that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p></li>
                </div>
            </div>
            <div className='border-2 border-secondary rounded-lg p-10 my-10'>
                <h3 className='text-xl font-bold text-secondary'>How does prototypical inheritance work?</h3>
                <div className='font-semibold text-gray-500 mt-3 text-justify'>
                    <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

                        Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).

                        JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

                        Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities. <br />
                        <br />
                        Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. <br />
                        <br />
                        Let’s walk through an example of prototypical inheritance you’re likely familiar with from grade school: all squares are rectangles, but not all rectangles are squares. If we think of this as a JS program, we could say that the rectangle is a prototype to the square: the square inherits all properties of a rectangle (i.e. four-sides and closed), while also adding a new feature (i.e. all sides are the same length).

                        We could not, however, construct this same concept using the square as a prototype, because there are properties of a square that do not apply to rectangles (i.e. all sides are the same length).

                        We can see how prototypal inheritance works on the basis of specifying categories within a group from least specific to most – from rectangle to square. In code, this concept can sometimes be lost in the syntax. If you find this happens, speak the relations between objects and listen to where you draw distinctions. If you hear, “all ___ are , but…not all ___ are”, that is where a new prototypical relationship should be added. <br />
                        <br />
                        Prototypal inheritance uses the concept of prototype chaining. Let’s explore that concept. Every object created contains [[Prototype]], which points either to another object or null. Envision an object C with a [[Prototype]] property that points to object B. Object B’s [[Prototype]] property points to prototype object A. This continues onward, forming a kind of chain called the prototype chain.

                        This concept is used when searching our code. When we need to find a property in an object, it is first searched for in the object, and if not found, it is searched for on that object’s prototype, and so on. Thus, the entire prototype chain is traversed until the property is found or null is reached.

                        In the following sections, we’ll take a look at some implementations using the handling of accounts in a streaming service.</p>

                </div>
            </div>
            <div className='border-2 border-secondary rounded-lg p-10 my-10'>
                <h3 className='text-xl font-bold text-secondary'>What is a unit test? Why should we write unit tests?</h3>
                <div className='font-semibold text-gray-500 mt-3 text-justify'>
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                        Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                        Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated. <br />
                        <br />
                        To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:
                        <li>Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.</li>
                        <li>Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.</li>
                        <li>It simplifies the debugging process.</li>
                        <li>Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.</li>
                        <li>Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.</li>
                        <li>Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.</li>
                        <li>In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback.</li>
                    </p>
                </div>
            </div>
            <div className='border-2 border-secondary rounded-lg p-10 my-10'>
                <h3 className='text-xl font-bold text-secondary'>React vs. Angular vs. Vue?</h3>
                <div className='font-semibold text-gray-500 mt-3 text-justify'>
                    <p className='text-lg font-bold'>React</p>
                    <p>Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages.

                        One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course.

                        With React.js, you handle the markup and the logic in the same file, which means you can output variables in a view component (JSX). React offers a type of mobile solutions for applications called React-Native.</p>
                    <p>
                        <span className='font-bold'>Pros: </span>

                        <li>Fast loading of new data.</li>
                        <li>One file contains both markup and logic (JSX).</li>
                        <li>Enables the separation of data and presentation.</li>
                        <li>It’s simple to get started and doesn’t take much practice.</li>
                        <li>As a library, it doesn’t have that many presets, so it’s easy to learn.</li>
                        <li>Smooth work of the app, even with complex underlying operations or database queries.</li>
                    </p>
                    <p>
                        <span className='font-bold'>Cons: </span>

                        <li>It is just a JavaScript library, not a framework.</li>
                        <li>No possibility to implement MVC architecture.</li>
                        <li>Frequently insufficient for developing a web app and necessitating the use of other libraries.</li>
                        <li>Only worth using if web applications need to be highly interactive.</li>
                    </p>
                </div>
                <div className='font-semibold text-gray-500 mt-3 text-justify'>
                    <p className='text-lg font-bold'>Angular</p>
                    <p>AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular.

                        Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.</p>
                    <p>
                        <span className='font-bold'>Pros: </span>

                        <li>Allows MVC architecture.</li>
                        <li>Good maintainability.</li>
                        <li>Web applications built with Angular perform very well.</li>
                        <li>Angular lets you manage microfrontend architecture</li>
                        <li>Projects may now be developed, expanded, and generated more quickly thanks to technologies like the Angular-CLI command-line tool.</li>
                        <li>Angular provides a basic framework for developing web applications and manages them without additional libraries.</li>
                        <li>Easy unit and end-to-end testing.</li>
                    </p>
                    <p>
                        <span className='font-bold'>Cons: </span>

                        <li>Reloads the complete HTML tags tree structure.</li>
                        <li>Slow loading time due to the Ionic app.</li>
                        <li>Because of the given framework, Angular is relatively stiff and inflexible.</li>
                        <li>To work with Angular.js, you need a certain training period.</li>
                        <li>If a user has deactivated JavaScript in the browser, using a JavaScript-based SPA is not possible. Furthermore, it does not always support outdated or unfamiliar browsers.</li>
                    </p>
                </div>
                <div className='font-semibold text-gray-500 mt-3 text-justify'>
                    <p className='text-lg font-bold'>Vue</p>
                    <p>Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.

                        Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.

                        Vue.js combines the useful principles of the Angular and React frameworks and presents them in a minimalistic modern style. Web developers use Vue.js to create frontend user interfaces for web-based and hybrid mobile applications.</p>
                    <p>
                        <span className='font-bold'>Pros: </span>

                        <li>A list of tools and libraries (Vue.js official CLI, Development Tools, Vue Loader, Vue Router).</li>
                        <li>Flexibility and simplicity in the utilization.</li>
                        <li>Thorough documentation.</li>
                        <li>Reusable in the terms of adding numerous reactive components to the existing code.</li>
                        <li>The possibility of Component-Based Architecture (CBA)</li>
                    </p>
                    <p>
                        <span className='font-bold'>Cons: </span>

                        <li>Limited community comparing to Angular and React.</li>
                        <li>The number of available plugins.</li>
                        <li>Language handicap because a large number of users are non-English speakers.</li>
                        <li>Overcomplications with flexibility.</li>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Blog;