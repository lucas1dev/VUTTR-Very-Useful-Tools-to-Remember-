import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import services from '../services'

const ListTool = ({ id,title, link, description, tags }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteTool = async () => {
        try {
            await services.deleteTool(id);
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
                        
                    <button onClick={handleShow} type="button" className="btn buttonDelete" ><FontAwesomeIcon icon={faTimes} /> remove</button>  

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{description}</p>
                        {!tags ? <span className="tagsItem">no tag</span> : tags.map((tag, j) => <span className="tagsItem" key={j}> #{tag} </span>)}
                    </Col>
                </Row>
            </Col>


            <Modal className="modalDelete"centered
                show={show} 
                onHide={handleClose} 
                animation={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Remove Tool</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to remove { title }?</Modal.Body>
                <Modal.Footer>
                <Button  className="btnDangerSecundary" onClick={handleClose}>
                    Close
                </Button>
                <Button className="btnDanger" onClick={deleteTool}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ListTool;