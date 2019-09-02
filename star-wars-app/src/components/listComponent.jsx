import React, { Component } from 'react';
import http from '../services/httpService';
import config from '../config.json';
import { toast } from 'react-toastify';
import Input from './input';
import { Table } from 'reactstrap';

class List extends Component {
    state = {
        isLoading: true,
        people: [],
        search: ""
    }

    async componentDidMount() {
        //first state is always pending then can be resolved or rejected
        try {
            //resolved
            const { data: { results } } = await http.get(config.endPoint);
            //Nested destructuring and asigned a variable (people)
            this.setState({ people: results, isLoading: false });
        } catch (ex) {
            //rejected
            if (ex.response && ex.response.status === 404) {
                //Handeling Response errors 404 specifically.
                toast.error("Data was not filled in correctly");
            }
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { search } = this.state;
        const { data: { results } } = await http.get(config.endPoint + "?search=" + search);
        this.setState({ people: results, isLoading: false });

    };
    handleChange = e => {
        let { search } = this.state;
        search = e.currentTarget.value;
        this.setState({ search });
    };

    render() {
        const { people, isLoading, search } = this.state;

        return (
            <div className="container">
                <form className="m-5" onSubmit={this.handleSubmit}>
                    <Input value={search} name="search" label="Search here:" onChange={this.handleChange} />
                    <button className="btn btn-primary">Search</button>
                </form>
                {!isLoading ? (
                    <Table dark>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Eye Color</th>
                                <th>Hair Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {people.map((people, index) => {
                                return (<tr key={index}>
                                    <th scope="row">{people.name}</th>
                                    <td >{people.gender}</td>
                                    <td >{people.eye_color}</td>
                                    <td >{people.hair_color}</td>
                                    {/* {console.log(Object(people).length)} */}
                                </tr>
                                )
                            })}
                        </tbody>
                    </Table>) :
                    <div>loading..</div>}
            </div>);
    }
}

export default List;