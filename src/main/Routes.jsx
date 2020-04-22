import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Question1 from '../components/questions/Question1'
import Question2 from '../components/questions/Question2'
import Question3 from '../components/questions/Question3'
import Question4 from '../components/questions/Question4'

export default props =>
    <Switch>
        <Route exact path ='/q1' component = {Question1}/>
        <Route exact path ='/q2' component = {Question2}/>
        <Route exact path ='/q3' component = {Question3}/>
        <Route exact path ='/q4' component = {Question4}/>
        <Redirect from = '*' to='/q1'/>
    </Switch>