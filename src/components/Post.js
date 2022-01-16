import React from 'react'
import { Card, CardImageCont } from './componentStyles/PostStyle'
import Moment from 'react-moment'
import Button from '../components/Button'

const Post = ({ post }) => {
  return (
    <Card>
      <CardImageCont>
        <img
          src={post.url}
          alt={post.title}
          className="post-img"
          loading="lazy"
        />
      </CardImageCont>
      <article className="post-article">
        <h4 className="post-title">{post.title}</h4>
        <Moment format="MM/DD/yyyy">{post.date}</Moment>
        <p className="post-text">{post.explanation}</p>
        <Button post={post} />
      </article>
    </Card>
  )
}

export default Post
