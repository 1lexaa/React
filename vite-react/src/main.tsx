import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { useFormik } from 'formik';

//import Message from './components/Message.tsx'
//import Film from './components/myFilm.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <>
<BrowserRouter>
<App />
</BrowserRouter>



 </>
);
