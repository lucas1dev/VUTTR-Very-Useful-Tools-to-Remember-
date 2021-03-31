import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Form, ModalBody, ModalFooter } from 'react-bootstrap';
import services from '../services'

const AddTool = () => {
    const [title, setToolName] = useState('');
    const [link, setToolLink] = useState('');
    const [description, setToolDesc] = useState('');
    const [tags, setToolTags] = useState([]);
   
    const removeTag = indexToRemove => {
        setToolTags([...tags.filter((_, index) => index !== indexToRemove )]);  
    };

    const addTag = event => {
        if (event.target.value !== "") {
            setToolTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };



    const handleSubmit =  async () => {
        try{
            if(!title){
                alert('Name is required!');
                return;
            }
            const tool = {
                title,
                link,
                description,
                tags
            };
           await services.addTools(tool);
           window.location.reload(false);
           alert('Tool added successfully!')
        }catch(error){
            console.log(error)
            alert('Add tool failed!')
        }
    }

    return (
        <>
        <ModalBody>
            <Form >
                <Form.Group >
                    <Form.Label>Tool Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Hotel"
                        onChange={e => setToolName(e.target.value)}
                        value={title}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Tool Link</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="www.youtool.com"
                        onChange={e => setToolLink(e.target.value)}
                        value={link}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Tool description</Form.Label>
                    <Form.Control
                        as="textarea"
                        onChange={e => setToolDesc(e.target.value)}
                        value={description}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tags</Form.Label>
                    <div className="tags-input">
                        <ul id="tags">
                            {tags.map((tag, index) =>(
                                <li key={index} className="tag">
                                    <span className='tag-title'>{tag}</span>
                                    <span className='tag-close-icon' onClick={() => removeTag(index)}><FontAwesomeIcon icon={faTimes}/></span>
                                </li>
                            ))}
                        </ul>
                        <input
                            type="text"
                            placeholder="Press enter to add #Hastag" 
                            onKeyUp={event => event.key === "Enter" ? addTag(event) : null }    
                        />
                    </div>
                </Form.Group>
            </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleSubmit} type="submit">
                    Add tool
                </Button>
            </ModalFooter>
        </>
    )
}

export default AddTool;