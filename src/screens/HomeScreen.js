import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNasaImages } from '../actions/postActions'
import Post from '../components/Post'
import { SpaceSection } from './screenStyles/HomeScreenStyles'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const imageList = useSelector((state) => state.imageList)
  const { loading, error, images } = imageList

  React.useEffect(() => {
    dispatch(getNasaImages())
  }, [dispatch])

  return (
    <SpaceSection>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        images.map((image, index) => <Post post={image} key={image.url} id={index} />)
      )}
    </SpaceSection>
  )
}

export default HomeScreen