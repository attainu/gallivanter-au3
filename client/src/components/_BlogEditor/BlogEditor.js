import React from 'react'
import BlogEditorForm from '../_Forms/BlogEditorForm'

function BlogEditor() {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-8'>
                    <BlogEditorForm></BlogEditorForm>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BlogEditor
