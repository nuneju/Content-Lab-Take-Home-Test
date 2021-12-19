import React, { useState } from 'react'
import './EditorPage.css'
import { sendToAPI } from '../../mockHelpers'
import _ from 'underscore'

function EditorPage () {

  const [state , setState] = useState({
    title: '',
    author: '',
    authorEmail: '',
    category: '',
    body: '',
  })

  function handleFormFieldChange (e) {
    const id = e.target.id
    const value = e.target.value

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
      errorMessage.message += 'The author email field should be validated to be a proper email format. /n';
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
          <p>Title</p>
          <input
            type="text"
            id="title"
            placeholder="Cool Article Title"
            onChange={handleFormFieldChange}
          />
        </div>
        <div className="form-row">
          <p>Author</p>
          <input
            type="text"
            id="author"
            placeholder="William Shakespeare"
            onChange={handleFormFieldChange}
          />
        </div>
        <div className="form-row">
          <p>Author Email</p>
          <input
            type="text"
            id="authorEmail"
            placeholder="william.shakespeare@leafgroup.com"
            onChange={handleFormFieldChange}
          />
        </div>
        <div className="form-row">
          <p>Category</p>
          <select
            id="category"
            onChange={handleFormFieldChange}
          >
            <option value="">-</option>
            <option value="Planes">Planes</option>
            <option value="Trains">Trains</option>
            <option value="Automobiles">Automobiles</option>
          </select>
        </div>
        <div className="form-row">
          <p>Body</p>
          <textarea
            type="text"
            id="body"
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque."
            onChange={handleFormFieldChange}
          />
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
