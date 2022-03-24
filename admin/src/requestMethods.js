import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2IyMjBhZDQxZDJjOTQyYTBkZTA5OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODEzNTI4NSwiZXhwIjoxNjQ4Mzk0NDg1fQ.Lw5n5iXJdVUtyeIhHFy9-_LwNUdmUvMzOl8gpdgpjiU"
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
