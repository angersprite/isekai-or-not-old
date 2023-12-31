
import './styles/App.css'
import { getMedia } from './services/mediaService'
import { useState, useEffect } from 'react'
import MediaDisplay from './components/MediaDisplay'
import Ballot from './components/Ballot'
import TraversalButtons from './components/Traversal'

export default function App() {
  const [media, setMedia] = useState({})
  const [mediaId, setMediaId] = useState(1)

  useEffect(() => {
    getMedia(mediaId)
      .then(json => { setMedia(json) })
  }, [])
  
  return (
    <>
      <TraversalButtons></TraversalButtons>
      <MediaDisplay media={media}></MediaDisplay>
      <Ballot media={media}></Ballot>
    </>
  )
}