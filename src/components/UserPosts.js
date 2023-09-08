import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./UserPosts.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function UserPosts() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user's posts:", error);
      });
  }, [userId]);

  return (
    <Container>
      <div className="user-posts-container">
        <Typography variant="h4" color="primary" gutterBottom>
          User's Posts for User ID : {userId}
        </Typography>
        <TransitionGroup>
          {posts.map((post) => (
            <CSSTransition key={post.id} classNames="post" timeout={500}>
              <Paper className="post" elevation={3}>
                <Box p={2}>
                  <Typography variant="h6" className="post-title">
                    {post.title}
                  </Typography>
                  <Typography variant="body1" className="post-body">
                    {post.body}
                  </Typography>
                </Box>
              </Paper>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </Container>
  );
}

export default UserPosts;
