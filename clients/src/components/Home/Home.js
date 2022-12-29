import React from "react";
import {
  Container,
  Grow,
  Grid,
  AppBar,
  TextField,
  Button,
 
} from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import { useHistory, useLocation } from "react-router-dom";

import useStyles from "./styles";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");

 
  useEffect(()=>{
    dispatch(getPosts())
  },[currentId, dispatch])

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search }));
      history.push(
        `/posts/search?searchQuery=${search || "none"}`
      );
    } else {
      history.push("/");
    }
  };

 

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer} >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid  item xs={12} sm={6} md={3}>
            <AppBar style={{margin:'10px 0', padding:"10px"}} className = {classes.appBarSearch} position = 'static' color = 'inherit'>
              <TextField name = 'search' variant = 'outlined' label = 'search memories' fullWidth value = {search} onChange = {(e) => setSearch(e.target.value)} />
            <Button style={{margin:'10px 60px'}} onClick = {searchPost} className={classes.searchButton} color = 'primary' variant = 'contained'>Search Memories</Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
