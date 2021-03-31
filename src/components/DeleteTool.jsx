import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import services from '../services'

const DeleteTool = ({ id }) => {
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
         <button onClick={deleteTool} type="button" class="btn buttonDelete" ><FontAwesomeIcon icon={faTimes} /> remove</button>
        </>
    )
}

export default DeleteTool;