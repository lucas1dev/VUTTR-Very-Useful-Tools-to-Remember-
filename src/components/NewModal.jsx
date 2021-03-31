import React from 'react'
import { Modal} from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import AddTool from './AddTool'

export default class NewModal extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            show:false,
        }
    }

    handleModal(){
        this.setState({show:!this.state.show})
    }

    render(){
        return(
        <>
            <button className="btn buttonNew" type="button" onClick={()=>{this.handleModal()}}><FontAwesomeIcon icon={faPlus} /> Add</button>
            <Modal className="modalNewTool" show={this.state.show}
            onHide={()=>this.handleModal()}
            centered
            >
                <ModalHeader closeButton> Add new tool</ModalHeader>
                
                <AddTool />
            </Modal>
        </>
        )
    }

};
