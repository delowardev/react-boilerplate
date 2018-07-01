import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/scss/bootstrap-grid.scss'


const dashboard = () => {
    return (
        <h1>Welcome to dashboard</h1>
    )
}

const about_us = () => {
    return (
        <h2>Welcome to about page</h2>
    )
}

const rtx = (
    <BrowserRouter>
        <div>
            <Route exact={true} path="/" component={dashboard} />
            <Route path="/about" component={about_us} />
        </div>
    </BrowserRouter>
)


ReactDOM.render(rtx, document.getElementById('root'))