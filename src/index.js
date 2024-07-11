import React from 'react'
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('root');
 const app = createRoot(container); // createRoot(container!) if you use TypeScript
 app.render(<App tab="home" />);

// ReactDOM.render(
//     <App/>, document.getElementById('root')

//     import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);


    // );