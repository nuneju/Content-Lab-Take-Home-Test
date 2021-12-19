import React, { useState } from 'react'
import './ArticlesPage.css'
import { fetchArticlesFromAPI } from '../../mockHelpers'
import _ from 'underscore'

function ArticlesPage () {

  const [state] = useState({
    articles: fetchArticlesFromAPI(),
    totalViews: 0,
  })

  for (let i = 0; i < state.articles.length; i++) {
    state.totalViews = parseInt(state.totalViews, 10) + parseInt(state.articles[i].views, 10)
  }

  return(
    <div className="container">
      <header className="siteHeader">
        <h1>Content Lab Editor
        </h1>
        <div className="navigation">
          <a href="/editor">Editor</a>
          <a href="/">Articles</a>
        </div>
      </header>

      <h1>All Articles</h1>
      <h3>Total Article Views: {state.totalViews}</h3>
      <hr/>

      <div className="articles">
        {_.get(state, 'articles', []).map((article, i) => {
          return <div key={i} style={{ marginBottom: '40px' }}>
            <h4 style={{ marginBottom: '5px' }}>{ article.title }</h4>
            <p style={{ marginTop: 0 }}>Written By:{ article.author }</p>
          </div>
        })}
      </div>

      <div id="footer" style={{ backgroundColor: '#BA11ED' }}>
        <img src="/images/leafgroup-logo.png" alt="Leaf Group Logo" style={{ width: '100px', display: 'block' }} />
        Copyright &copy; Content Lab 2021
      </div>
    </div>
  )
}

export default ArticlesPage
