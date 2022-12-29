import React from 'react'
import Post from './Post/Post'
import useStyle from './styles'
import { useSelector } from 'react-redux'
import { Grid,Typography, CircularProgress } from '@material-ui/core'


const Posts = ({ setCurrentId }) => {
  const classes = useStyle();
  

  const posts =  useSelector((state) => state.posts)
  console.log(posts)
  

  return (
    !posts?.length ? <CircularProgress/> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} xs = {12} sm = {12} md = {6} lg={4}item>
            <Post post={post} setCurrentId={setCurrentId}></Post>
          </Grid>
        ))
        }
      </Grid>
    )
  )
}

export default Posts