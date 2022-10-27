import React from 'react';

const Blog = () => {
    return (
        <div>
          <div className='p-6 my-6 mx-8 bg-cyan-300 rounded-lg'>
            <h1 className='text-2xl font-bold text-orange-700'>What is Cors?</h1>
            <p className='text-lg mt-4'><span className='font-bold'>Cross-Origin Resource Sharing</span> (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.</p>
          </div>
          <div className='p-6 my-6 mx-8 bg-cyan-300 rounded-lg'>
            <h1 className='text-2xl font-bold text-orange-700'>Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p className='text-lg mt-4'><span className='font-bold'>Firebase</span> is a web app development platform created by Google. It lets you develop the whole app on the front-end without any server-side code. At the same time, it does let you set up some server-side logic via Firebase Functions if you need to react to certain events (creation of data or files, login, https requests) so you can send emails or push notifications or process the data after it is written. It’s easy to start a project with Firebase or add a Firebase to your project. It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don’t have to send requests to get new data, you only need to subscribe once.</p>
            <p className='text-lg font-medium mt-4'>Here is a list of some of the greatest Firebase alternatives; 1. Auth0, 2. MongoDB, 3. Amazon Cognito, 4. Back4App, 5. Parse, 6. AWS Amplify, 7. Backendless etc..</p>
          </div>
          <div className='p-6 my-6 mx-8 bg-cyan-300 rounded-lg'>
            <h1 className='text-2xl font-bold text-orange-700'>How does the private route work?</h1>
            <p className='text-lg mt-4'><span className='font-bold'>Private Routes</span> in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application. Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page.In this tutorial, you are going to learn how you create protected routes in a React application.</p>
          </div>
          <div className='p-6 my-6 mx-8 bg-cyan-300 rounded-lg'>
            <h1 className='text-2xl font-bold text-orange-700'>What is Node? How does Node work?</h1>
            <p className='text-lg mt-4'><span className='font-bold'>Node:</span> Node.js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.Node.js is intended to run on a dedicated HTTP server and to employ a single thread with one process at a time. Node.js applications are event-based and run asynchronously. Code built on the Node platform does not follow the traditional model of receive, process, send, wait, receive. Instead, Node processes incoming requests in a constant event stack and sends small requests one after the other without waiting for responses.</p>
            <p className='text-lg mt-4'><span className='font-bold'>Working of Node.js:</span> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
          </div>
        </div>
    );
};

export default Blog;