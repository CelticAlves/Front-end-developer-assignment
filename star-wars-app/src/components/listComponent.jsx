import React, { Component } from 'react';
import http from '../services/httpService';
import config from '../config.json';
import { toast } from 'react-toastify';
import Input from './input';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class List extends Component {
    state = {
        isLoading: true,
        people: [],
        search: ""
    }

    async componentDidMount() {
        //first state is always pending then can be resolved or rejected
        //resolved
        const { data: { results } } = await http.get(config.endPoint);
        //Nested destructuring and asigned a variable (people)
        this.setState({ people: results, isLoading: false });

    }

    handleSubmit = async event => {
        event.preventDefault();
        const { search } = this.state;
        try {
            const { data: { results } } = await http.get(config.endPoint + "?search=" + search);
            this.setState({ people: results, isLoading: false });
        } catch (ex) {
            //rejected
            if (ex.response && ex.response.status === 404) {
                //Handeling Response errors 404 specifically.
                toast.error("Data was not filled in correctly");
            }
        }

    };
    handleChange = e => {
        let { search } = this.state;
        search = e.currentTarget.value;
        this.setState({ search, isLoading: true });
    };

    render() {
        const { people, isLoading, search } = this.state;

        return (
            <Container>
                <Row>
                    <Col>
                        <form className="mb-3 mt-3" onSubmit={this.handleSubmit}>
                            <Input value={search} name="search" label="Search here:" onChange={this.handleChange} />
                            <button className="btn btn-primary">Search</button>
                        </form>
                    </Col>
                </Row>
                {!isLoading ? (
                    <Row>
                        <Col>
                            <Table dark responsive>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Eye Color</th>
                                        <th>Hair Color</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {people.slice(0, 5).map((people, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{people.name}</th>
                                                <td >{people.gender}</td>
                                                <td >{people.eye_color}</td>
                                                <td >{people.hair_color}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>{people.length > 5 ? (
                                <div><p>The total results are: {people.length}</p></div>) : (null)
                            }
                        </Col>
                    </Row>) :
                    <Row>
                        <Col>
                            <div className="loading"></div>
                        </Col>
                    </Row>
                }
            </Container>);
    }
}

export default List;