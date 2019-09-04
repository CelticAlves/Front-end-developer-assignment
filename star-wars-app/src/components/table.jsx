import React from 'react'
import { Table } from 'reactstrap';

const TableResults = ({ value: people }) => {

    return (
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
        </Table>)
}

export default TableResults;