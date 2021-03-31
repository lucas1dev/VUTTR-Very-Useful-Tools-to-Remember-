import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import services from '../services'
import NewModal from './NewModal'
import ListTool from './ListTool'


const HomeScreen = () => {
    const [tools, setTools] = useState(null)

    const fetchTools = async () => {
        try {
            const resp = await services.getAllTools()
            setTools(resp.data)

        } catch (error) {
            alert('Failed to fetch Tools.')
        }
        
    }

    useEffect(() => {
        fetchTools()
    }, [])


    /* Shows loading when loading data */
    if (!tools) {
        return (
            <Container className="container vuttr-container">
                <Row className="justify-content-md-center">
                    <Col md="8" className="col-md-8">

                        <h1>VUTTR</h1>
                        <p class="subTitle">Very Useful Tools to Remember</p>
                        {/* Seletores */}
                        <Row>
                            <Col sm="4" >
                                <div class="input-group">
                                    <span class="input-group-text" ><i><FontAwesomeIcon icon={faSearch} /></i></span>
                                    <input type="text" class="form-control" placeholder="node" aria-label="tags" aria-describedby="button-addon2" />
                                </div>
                            </Col>
                            <Col>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="only-tag" />
                                    <label class="form-check-label" for="only-tag">seach in tags only</label>
                                </div>
                            </Col>
                            <div class="col col-auto justify-content-md-end">
                                <NewModal />
                            </div>
                        </Row>
                        <Col>
                            <p>Loading tools...</p>
                        </Col>

                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <>
            <Container className="container vuttr-container">
                <Row className="justify-content-md-center">
                    <Col md="8" className="col-md-8">

                        <h1>VUTTR</h1>
                        <p id="subTitle">Very Useful Tools to Remember</p>

                        {/* Seletores */}
                        <Row>
                            <Col sm="4" >
                                <div class="input-group">
                                    <span class="input-group-text" ><i><FontAwesomeIcon icon={faSearch} /></i></span>
                                    <input type="text" class="form-control" placeholder="node" aria-label="tags" aria-describedby="button-addon2" />
                                </div>
                            </Col>
                            <Col>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="only-tag" />
                                    <label class="form-check-label" for="only-tag">seach in tags only</label>
                                </div>
                            </Col>
                            <div class="col col-auto justify-content-md-end">
                                {/* Loading Modal Add New Tool */}
                                <NewModal />
                            </div>
                        </Row>
                        {/* container Tools list */}
                        <Row className="toolList">
                            {tools.map(toolItem => (
                                <ListTool
                                    id={toolItem.id}
                                    title={toolItem.title}
                                    link={toolItem.link}
                                    description={toolItem.description}
                                    tags={toolItem.tags}
                                />
                            ))}
                        </Row>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeScreen