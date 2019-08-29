import React, { Component } from 'react';
import axios from 'axios';
const endPoint = 'https://swapi.co/api/people/?search=';
class Data extends Component {
    state = {
        isLoading: true,
        people: [],
        error: null
    }
    async componentDidMount() {
        const { data: { results } } = await axios.get(endPoint);
        console.log(results);
        this.setState({ people: results });
    }

    render() {

        return (<div className="container">
            {this.state.people.map(people => (<ul key={people.name}><li>{people.name}</li></ul>))}
        </div>);
    }
}

export default Data;