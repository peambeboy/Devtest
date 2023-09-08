import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./UserDetails.css";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import PublicIcon from "@mui/icons-material/Public";
import BusinessIcon from "@mui/icons-material/Business";

function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, [userId]);

  return (
    <div className="user-details-container">
      <Container>
        {user ? (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3} className="user-details-paper">
                <Box p={3}>
                  <Typography variant="h4" className="user-details-title">
                    User Details for User ID: {userId}
                  </Typography>
                  <Typography variant="h6" className="user-info">
                    <strong>Name:</strong> {user.name}
                  </Typography>
                  <Typography variant="h6" className="user-info">
                    <strong>Username:</strong> {user.username}
                  </Typography>
                  <Typography variant="h6" className="user-info">
                    <strong>Email:</strong> {user.email}
                  </Typography>
                  <Typography variant="h6" className="user-info">
                    <strong>Address:</strong> <RoomIcon fontSize="small" />{" "}
                    {user.address.street}, {user.address.suite},{" "}
                    {user.address.city}, {user.address.zipcode}
                  </Typography>
                  <Typography variant="h6" className="user-info">
                    <strong>Geo:</strong>
                  </Typography>
                  <ul className="user-address-list">
                    <li className="user-address-list-item">
                      <strong>Lat:</strong> {user.address.geo.lat}
                    </li>
                    <li className="user-address-list-item">
                      <strong>Lng:</strong> {user.address.geo.lng}
                    </li>
                  </ul>
                  <Typography variant="h6" className="user-info">
                    <PhoneIcon fontSize="small" /> <strong>Phone:</strong>{" "}
                    {user.phone}
                  </Typography>
                  <Typography variant="h6" className="user-info">
                    <PublicIcon fontSize="small" /> <strong>Website:</strong>{" "}
                    {user.website}
                  </Typography>
                  <Typography variant="h6" className="user-info">
                    <BusinessIcon fontSize="small" /> <strong>Company:</strong>
                  </Typography>
                  <ul className="user-address-list">
                    <li className="user-address-list-item">
                      <strong>Name:</strong> {user.company.name}
                    </li>
                    <li className="user-address-list-item">
                      <strong>CatchPhrase:</strong> {user.company.catchPhrase}
                    </li>
                    <li className="user-address-list-item">
                      <strong>bs:</strong> {user.company.bs}
                    </li>
                  </ul>
                  <Link
                    to={`/users/${user.id}/posts`}
                    className="user-posts-link"
                  >
                    View Posts
                  </Link>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        ) : (
          <p>Loading user details...</p>
        )}
      </Container>
    </div>
  );
}

export default UserDetails;
