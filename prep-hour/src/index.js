import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./components/Form";
import App from "./App";
import NewForm from "./components/NewForm";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <>
    <BrowserRouter>
      <Routes>
        <Route path="DetailForm" element={<NewForm/>}/>
        <Route path="login" element={<Form />} />
        <Route path="/" element={<App/>} />
        <Route path="dashboard" element={<Dashboard/>} />
      </Routes>
      
    </BrowserRouter>
    {/* </GoogleOAuthProvider>; */}
    </>
);
