import React, { useState, useRef } from 'react'
import './EditorPage.css'
import { sendToAPI, getAvailableCategories } from '../../mockHelpers'
import _ from 'underscore'
import { Editor } from '@tinymce/tinymce-react';

function EditorPage () {

  const [state , setState] = useState({
    title: '',
    author: '',
    authorEmail: '',
    category: '',
    body: '',
  })
  function handleEditorChange (editorValue) {
    const id = 'body'
    setState(prevState => ({
      ...prevState,
      [id]: editorValue
    }))
  }
  console.log('getAvailableCategories', );
  function handleFormFieldChange (e) {
    const id = e.target.id;
    const value = e.target.value;
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleFormSubmit = () => {
    const isRequired = Object.keys(state).every(function(key){
      return state[key] !== ''
    })
    const isEmailValid = validateEmail(state.authorEmail) !== null;
    const isBodyValid = state.body.length > 50;
    let errorMessage = {
      ok: 0,
      message: ''
    }
    if(isRequired === false) {
      errorMessage.message += 'All fields are required.';
    }
    if(isEmailValid === false) {
      errorMessage.message += 'The author email field should be validated to be a proper email format.';
    }
    if(isBodyValid === false) {
      errorMessage.message += 'The "body" field should have a minimum of 50 characters. ';
    }
    
    if(isRequired === false || isEmailValid === false || isBodyValid === false) {
      setState(prevState => ({
        ...prevState,
        ...errorMessage
      }))
      return
    }

    const apiResponse = sendToAPI(state);
    setState(prevState => ({
      ...prevState,
      ...apiResponse
    }))
    return false;
  }

  let message = null;
  if(typeof state.message !== 'undefiend') {
    message = (<div>{state.message}</div>);
  }

  const editorRef = useRef(null);

  const options = getAvailableCategories().map((cat, i)=>{
    return (<option value="cat" key={cat}>{cat}</option>)
  })


  return(
    <div id="page-container">
      <header className="siteHeader">
        <h1>Content Lab Editor
        </h1>
        <div id="navigation">
          <a href="/editor">Editor</a>
          <a href="/">Articles</a>
        </div>
      </header>

      <form className="form" id="article-from">
        <div className="form-row">
          {message}
          <label>Title
          <input
            type="text"
            id="title"
            placeholder="Cool Article Title"
            onChange={handleFormFieldChange}
          />
          </label>
        </div>
        <div className="form-row">
          <label>Author
          <input
            type="text"
            id="author"
            placeholder="William Shakespeare"
            onChange={handleFormFieldChange}
          />
          </label>
        </div>
        <div className="form-row">
          <label>Author Email
          <input
            type="text"
            id="authorEmail"
            placeholder="william.shakespeare@leafgroup.com"
            onChange={handleFormFieldChange}
          />
          </label>
        </div>
        <div className="form-row">
          <label>Category
          <select
            id="category"
            onChange={handleFormFieldChange}
          >
            {options}
          </select>
          </label>
        </div>
        <div className="form-row">
          <label>Body
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue="<p>This is the initial content of the editor.</p>"
            onEditorChange = {handleEditorChange}
            id="editor"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar: 'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
          </label>
        </div>
        <button
          type="button"
          onClick={handleFormSubmit}
        >
          Save
        </button>
      </form>

      <div className="footer" style={{ backgroundColor: '#BA11ED', textAlign: 'center' }}>
        <img src="/leafgroup-logo.png" alt="Leaf Group Logo" style={{ width: '100px' }} />
        <br/>
        <small>Copyright &copy; Content Lab 2021</small>
      </div>
    </div>
  )
}

export default EditorPage
