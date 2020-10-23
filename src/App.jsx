import React, { Fragment } from "react"
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"
import "isomorphic-fetch"
import "es6-promise"
import Films from "./components/Films"
import FilmInfo from "./components/FilmInfo"
import People from "./components/People"
import PeopleInfo from "./components/PeopleInfo"

const App = () => {
    return (
        <Fragment>
            <h1 className="">Lab</h1>
            <Router>
                <Link to="/films">
                    <button className="btn btn-danger">Films</button>
                </Link>
                <Link to="/people">
                    <button className="btn btn-danger">People</button>
                </Link>
                <Switch>
                    <Route path="/films/:id" component={FilmInfo} />
                    <Route path="/people/:id" component={PeopleInfo} />
                    <Route path="/films" component={Films} />
                    <Route path="/people" component={People} />
                </Switch>
            </Router>
        </Fragment>
    )
}

export default App