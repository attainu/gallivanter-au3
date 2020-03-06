import React, { useState } from 'react'
import ImageUploadForm from './ImageUploadFrom';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
// import Editor from 'for-editor';
function BlogEditorForm() {
    const formData = {
        title: "",
        cover: "",
        creatorId:"1"
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
    return (
        <React.Fragment>
            <textarea
          disabled
          value={draftToHtml(convertToRaw(editorData.editorState.getCurrentContent()))}
        />
            <ImageUploadForm name ='cover'></ImageUploadForm>
            <form>
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
            </form>
        </React.Fragment>
    )
}

export default BlogEditorForm
