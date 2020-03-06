import React, { useState } from 'react'

function ImageUploadForm(props) {
    const [imgUpload, setImage] = useState({selectedFile: null})
    const fileHandler = (e) => {
        setImage({
            selectedFile: e.target.files[0]
        })
    }
    const fileUploadHandler = () => {
        // const fd = new FormData();
        // fd.append('image', imgUpload.selectedFile, imgUpload.selectedFile.name)
        // axios.post(url, fd,{
        //     onUploadProgress: processEvent => {
        //         console.log(processEvent.loaded / processEvent.total)
        //     }
        // })
        // .then(res => {
        //     console.log(res)
        // })
    }
    return (
        <React.Fragment>
            
                <div className = 'form-group' >
                    <label htmlFor='img'>Upload feature image</label>
                    <div style={{display: "flex"}}>
                    <input className='btn m-2' 
                    type='file'
                    name = {props.name}
                    onChange = {fileHandler}
                    required
                    />
                    <button className='btn m-2' onClick={fileUploadHandler}>Upload</button>
                    </div>
                </div>
           
        </React.Fragment>
    )
}

export default ImageUploadForm
