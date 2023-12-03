import React from 'react'
import './App.css'
import Navlink from './Routes/Navlink';
import { Helmet } from "react-helmet";


function App() {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Clínica de Belleza Lily</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Clínica de Belleza Lily" />
            </Helmet>
            <Navlink />
        </>


    )
}

export default App