import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './components/Article/Article';


function App() {

  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('react');

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/${subreddit}.json`)
      .then(res => {
        if (res.status !== 200) { return; }

        if (res.data !== null) {
          setArticles(res.data.data.children)
        }
      })
      .catch(error => {
        console.log('date get error ', error);
      })

    return () => {

    }
  }, [subreddit]);

  return (
    <div className="App">
      <header className="App-header">
        <input type='text' className='input' value={subreddit} onChange={e => setSubreddit(e.target.value.trim())} />
      </header>
      <div className='articles'>
        {
          (articles !== null)
            ? articles.map((article, index) => <Article key={index} article={article.data} />)
            : ''
        }
      </div>
    </div>
  );
}

export default App;
