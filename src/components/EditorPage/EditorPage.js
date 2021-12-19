import React, { useState } from 'react'
import './EditorPage.css'
import { sendToAPI } from '../../mockHelpers'

function EditorPage () {

  const [state , setState] = useState({
    title: '',
    author: '',
    authorEmail: '',
    category: '',
    body: '',
  })
  console.log('state', state);

  function handleFormFieldChange (e) {
    const id = e.target.id
    const value = e.target.value

    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleFormSubmit = () => {
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

      <form className="form">
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
