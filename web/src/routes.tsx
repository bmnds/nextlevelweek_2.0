import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'
import NotFound from './pages/NotFound'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/study" component={TeacherList} />
                <Route path="/teach" component={TeacherForm} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes