import React from 'react';
import styles from './Article.module.css';

const Article = (props) => {
    return (
        <div className={styles.Article}>
            <a href={`https://reddit.com${props.article.permalink}`} target="_blank" rel="noopener noreferrer">
                <h3>{props.article.title}</h3>
            </a>
            <p>
                <span>Video: {props.article.is_video ? 'YES' : '-'}</span>
                &nbsp;
                <span>Media Type: {props.article.media ? props.article.media.type : '-'}</span>
            </p>
        </div>
    )
}

export default Article;