import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import services from '../services'

const ListTool = ({ id,title, link, description, tags }) => {

    const deleteTool = async () => {
        try {
            await services.deleteTool(id);
            alert('Tool deleted!')
            window.location.reload(false);
        }catch(error){
            console.log(error)
            alert('Delete Photo failed!')
        }
    }

    return (
        <>
            <Col sm="12" className="toolItem">
                <Row>
                    <Col><h3><a href={link} rel="noopener noreferrer" target="_blank" className="titleItemTool">{title}</a></h3></Col>
                    <Col md="auto">
                        
                    <button onClick={deleteTool} type="button" className="btn buttonDelete" ><FontAwesomeIcon icon={faTimes} /> remove</button>  

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{description}</p>
                        {!tags ? <span className="font-monospace">no tag</span> : tags.map((tag, j) => <span className="font-monospace" key={j}> #{tag} </span>)}
                    </Col>
                </Row>
            </Col>
        </>
    );
}

export default ListTool;