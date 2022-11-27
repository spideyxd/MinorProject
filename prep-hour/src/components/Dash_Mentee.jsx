import React from 'react'
import Cards from "./Cards";
import { useNavigate,Link } from "react-router-dom";
import { Button } from "@mui/material";

const DashMentee = (props) => {
  return (
    <>
    
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
                 Contained
               </Button>
             </Link>
          </>
  )
}

export default DashMentee