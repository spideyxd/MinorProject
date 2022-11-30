import React from 'react'
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { Button } from "@mui/material"; 
import  sorry from "../DesignAssets/sorry.png"

const DashMentor = (props) => {
  return (
   <>
   {props.arr != undefined &&
          (props.arr.length == 0 ? (
           
             
              // <Button
              //   variant="outlined"
              //   color="error"
              //   style={{
              //     borderRadius: "5px",
              //     marginTop: "10vh",
              //     marginLeft: "auto",
              //     marginRight: "auto",
              //   }}
              // >
              // You Don't Have any Requests .
              // </Button>
              // <div style={{height:"100vh",width:"100vw",display: "flex",alignItems:"center", justifyContent: 'center'}}>
           <img src={sorry} style={{ marginLeft:"25vw", width:"auto" ,maxHeight:"80vh" }}/>
          //  </div>
          ) : (
            props.arr.map((value, idx) => <Cards name={value.name } email={value.email} />)
          ))}</>
  )
}

export default DashMentor