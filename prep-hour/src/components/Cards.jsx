import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../DesignAssets/user.jpg";
import { useNavigate } from "react-router-dom";

export default function Cards() {
    const nav=useNavigate();
    const [user,setUser]=React.useState({});
    const getInfo = async () => {
        try {
          const res = await fetch("http://localhost:8000/getinfo", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
          const data = await res.json();
          setUser(data);
        } catch (err) {
         nav("/login");
        }
      };
      React.useEffect(() => {
        getInfo();
      }, []);
  return (
    <Card sx={{  m:5, width: 240 }}>
      <CardMedia component="img" alt="User" height="180" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name
        </Typography>
      </CardContent>    
      <CardActions>
        <Button size="small"  >{user.role=="Mentor"?"Accept":"Request"}</Button>
        <Button size="small" >{user.role=="Mentor"?"Decline":"Cancel Request"}</Button>
      </CardActions>
    </Card>
  );
}
