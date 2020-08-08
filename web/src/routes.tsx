import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'
import TeacherModal from './pages/TeacherModal'
import NotFound from './pages/NotFound'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/study" component={TeacherList} />
                <Route path="/teach" component={TeacherForm} />
                <Route path="/beforeTeach" component={TeacherModal} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes