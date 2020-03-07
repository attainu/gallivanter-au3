import React, { useState } from 'react'
// import ImageUploadForm from './ImageUploadFrom';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import {stateMapper} from '../../redux/store/store'
import {connect} from 'react-redux'
// import Editor from 'for-editor';
function BlogEditorForm(props) {
    const formData = {
        title: "",
        cover: "",
        creatorId:props.getUser.id
    }
    const [inputData, setInput] = useState(formData);
    const [editorData, setEditorData] = useState({editorState: EditorState.createEmpty()})
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInput({...inputData, [name]:value});
        console.log(inputData)
    }
    const onEditorStateChange =(editorState) =>{
        console.log(editorData.editorState)
        setEditorData({...editorData, editorState})
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.dispatch({
            type: "ADD_BLOG",
            data: {
                creatorId: inputData.creatorId,
                title: inputData.title,
                body: inputData.body
            }
        })
        console.log(` -- SUBMITTED--
        creatorId: ${formData.creatorId}
        title: ${formData.title}
        body: ${formData.body}
        `)
    }
    return (
        <React.Fragment>
            <textarea
          disabled
          value={draftToHtml(convertToRaw(editorData.editorState.getCurrentContent()))}
        />
            
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input 
                            
                            type='text' 
                            name='title' 
                            placeholder='e.g Sightseeing in Europe'
                            onChange={handleChange}
                            required
                            ></input>
                </div>
                
               <div className='form-group'>
                   <label htmlFor ='body'>Blog </label>
                   <Editor
                     editorState={editorData.editorState}
                     wrapperClassName="demo-wrapper"
                     editorClassName="demo-editor"
                     onEditorStateChange={onEditorStateChange}
                   />
                  
               </div>
               <button className='btn'>Submit</button>
            </form>
            {
                   (props.createBlog.title) ? (
                    <div className='alert alert-success'>Blog Created</div>
                   ): ""
               }
        </React.Fragment>
    )
}

export default connect(stateMapper)(BlogEditorForm)
