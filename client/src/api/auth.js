import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});

/* ================= USER AUTH ================= */

// User Register
export const registerUser = (data) => API.post("/user/register", data);

// User Login
export const loginUser = (data) => API.post("/user/login", data);

// User Delete
export const deleteUser = () => API.delete("/user/delete");


/* ================= ADMIN AUTH ================= */

// Admin Register
export const adminRegister = (data) => API.post("/user/admin/register", data);

// Admin Login
export const adminLogin = (data) => API.post("/user/admin/login", data);

// Admin Delete
export const adminDelete = () => API.delete("/user/admin/delete");

export default API;
