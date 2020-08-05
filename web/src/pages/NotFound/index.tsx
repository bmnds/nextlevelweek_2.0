import React from 'react'
import {useLocation} from 'react-router-dom'

import './styles.css'

function NotFound() {
    let location = useLocation();

    return (
        <div id="page-notfound">
            <h1>Página não encontrada :/</h1>
            <h3><code>{location.pathname}</code></h3>
        </div>
    )
}

export default NotFound