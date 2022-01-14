import React from 'react'

const Button = ({ post, id }) => {
  const [liked, setLiked] = React.useState(false)
  const [wasLiked, setWasLiked] = React.useState('')

  React.useEffect(() => {
    const isLiked = window.localStorage.getItem(`like+${id}`)
    setWasLiked(isLiked)
  }, [id, liked])

  const handleLike = (e) => {
    e.preventDefault()
    setLiked((like) => !like)
    window.localStorage.setItem(`like+${id}`, liked)
  }

  return (
    <>
      <button
        className={`like-btn ${wasLiked === 'true' ? 'like' : 'unliked'}`}
        onClick={handleLike}
      >
        {wasLiked === 'true' ? 'Liked' : 'Like'}
      </button>
    </>
  )
}

export default Button
