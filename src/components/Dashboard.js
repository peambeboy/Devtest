import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "./Dashboard.css";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  // ฟังก์ชันสำหรับการค้นหา
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  // กรองรายชื่อผู้ใช้ตามคำค้นหา
  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div>
      <h2 className="dashboard-title">User Dashboard</h2>
      <TextField
        fullWidth
        label="Search Users"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={searchText}
        onChange={handleSearch}
        style={{ marginLeft: "5px" }}
        sx={{ width: "99%" }}
      />
      <Grid container spacing={2}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card className="user-card">
              <CardContent>
                <Typography variant="h5" component="div">
                  {user.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {user.email}
                </Typography>
                <Link to={`/users/${user.id}`}>
                  <Button variant="contained" color="primary">
                    View Details
                  </Button>
                </Link>
                <Link className="linkbut" to={`/users/${user.id}/posts`}>
                  <Button variant="contained" color="secondary">
                    View Posts
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Dashboard;
