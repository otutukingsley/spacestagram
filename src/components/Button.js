import React from 'react'

const Button = ({ post }) => {
  const [liked, setLiked] = React.useState(false)
  // const [wasLiked, setWasLiked] = React.useState()

  React.useEffect(() => {
    const isLiked = window.localStorage.getItem(`${post.url}`)
    if (isLiked === null || isLiked === 'false') {
      setLiked(false)
    } else {
      setLiked(true)
    }
  }, [liked, post.url])

  const handleLike = (e) => {
    e.preventDefault()
    setLiked((like) => !like)
    window.localStorage.setItem(`${post.url}`, !liked)
  }

  return (
    <>
      <button
        className={`like-btn ${liked ? 'like' : 'unliked'}`}
        onClick={handleLike}
      >
        {liked ? 'Liked' : 'Like'}
      </button>
    </>
  )
}

export default Button
