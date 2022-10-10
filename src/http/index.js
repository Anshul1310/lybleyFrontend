import axios from "axios";
import React from "react";

const api = axios.create({
    baseURL: "http://134.209.122.55",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})



export default api;