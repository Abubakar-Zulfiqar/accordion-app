import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const AccordionData = () => {

    return (
        <>
            <div className='d-flex justify-content-center mt-5'>
                <Link to='/component/:department'>
                    <Button variant="primary">Departments</Button>
                </Link>
            </div>
        </>
    )
}

export default AccordionData