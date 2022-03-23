//to call api
import React from "react";
import api from '../api'

const RetreiveBooks=async()=>{

const response=await api.get("/books");
console.log(response.data)
}
export default RetreiveBooks;