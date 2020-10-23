import React, { Component } from 'react'
import "isomorphic-fetch"
import "es6-promise"
import { Link } from 'react-router-dom';


export default class Films extends Component {
    constructor() {
        super();
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            //new short hand, if theyre the same you can do it like this
            .then(films => this.setState({ films }))
    }

    render() {
        return (
            <div>
                {this.state.films.map((film, id) => {
                    return (
                            <div className="card" key={id}>
                                <div className="card-body">
                                    <h5 className="card-title">{film.title}</h5>
                                    <p className="card-text">
                                        {film.director} || {film.release_date}
                                    </p>
                                    <p className="card-text">
                                        {film.description}
                                    </p>

                                    <Link to={`/films/${film.id}`}>
                                        <button className="btn btn-danger">Shpw more</button>
                                    </Link>

                                </div>
                            </div>
                    )
                })}
            </div>)
    }
}
