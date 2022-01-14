import React from 'react'
import { Card, CardImageCont } from './componentStyles/PostStyle'
import Moment from 'react-moment'
import Button from '../components/Button'

const Post = ({ post, id}) => {
  return (
    <Card>
      <CardImageCont>
        <img src={post.url} alt={post.title} className="post-img" loading="lazy" />
      </CardImageCont>
      <h4 className="post-title">
        {post.title} - <Moment format="MMMM Do YYYY">{post.date}</Moment>
      </h4>
      <p className="post-text">{post.explanation}</p>
      <Button post={post} id={id}/>
    </Card>
  )
}

export default Post
