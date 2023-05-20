import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Accordion, Table } from 'react-bootstrap'
import axios from 'axios'

import './index.css'

const Component = () => {
    const [userData, setUserData] = useState([])
    const { department } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`http://localhost:3333/users`)
            .then((res) => {
                setUserData(res.data)
            })
            .catch((err) => {
                alert('something wrong in get method', err)
            })
    }, [])

    const uniqueData = []
    userData.map((items) => {
        if (uniqueData.indexOf(items.company.department) === -1) {
            uniqueData.push(items.company.department)
        }
    })

    return (
        <>
            <h1 id='pawa'>{department}</h1>
            {uniqueData.map((value, index) => (
                <Accordion key={index}>
                    <Accordion.Item eventKey='0' className='m-3'>
                        <Accordion.Header
                            onClick={() => navigate(`/component/${value}`)}
                        >
                            {value}
                        </Accordion.Header>
                        <Accordion.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Email</th>
                                        <th>Date of Birth</th>
                                        <th>Department</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData.map((item, i) =>
                                        item.company.department == value ?
                                            (
                                                <tr key={i}>
                                                    <td>{item.id}</td>
                                                    <td>{item.firstName} {item.lastname}</td>
                                                    <td>{item.age}</td>
                                                    <td>{item.gender}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.birthDate}</td>
                                                    <td>{item.company.department}</td>
                                                </tr>
                                            ) : null
                                    )}
                                </tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            ))}
        </>
    )
}

export default Component
