import React from 'react'
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const DashMentor = (props) => {
  return (
   <>
   {props.arr != undefined &&
          (props.arr.length == 0 ? (
            <Link
              to="/detailsform"
              style={{ textAlign: "right", textDecoration: "none" }}
            >
             
              <Button
                variant="outlined"
                color="error"
                style={{
                  borderRadius: "5px",
                  marginTop: "10vh",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
              hey
              </Button>
            </Link>
          ) : (
            props.arr.map((value, idx) => <Cards name={value.name }/>)
          ))}</>
  )
}

export default DashMentor