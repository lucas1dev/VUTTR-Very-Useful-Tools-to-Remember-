import React from 'react'
import { Col, Row } from 'react-bootstrap';
import DeleteTool from './DeleteTool'

const ListTool = ({ id,title, link, description, tags }) => {

    return (
        <>
            <Col sm="12" className="toolItem">
                <Row>
                    <Col><h3><a href={link} rel="noopener noreferrer" target="_blank" class="titleItemTool">{title}</a></h3></Col>
                    <Col md="auto">
                        
                       <DeleteTool/>     

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{description}</p>
                        {!tags ? <span class="font-monospace">no tag</span> : tags.map((tag, j) => <span class="font-monospace" id={j}> #{tag} </span>)}
                    </Col>
                </Row>
            </Col>
        </>
    );
}

export default ListTool;