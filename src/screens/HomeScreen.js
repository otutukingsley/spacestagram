import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNasaImages } from '../actions/postActions'
import Post from '../components/Post'
import { SpaceSection } from './screenStyles/HomeScreenStyles'
import Loader from '../components/Loader'
import Message from '../components/Message'

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
        <Loader />
      ) : !loading && error ? (
        <Message message={error} />
      ) : (
        images.map((image) => <Post post={image} key={image.url} />)
      )}
    </SpaceSection>
  )
}

export default HomeScreen
