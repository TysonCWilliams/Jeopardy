// NOTE if multiple API's are used with different base urls we can create multiple axios instances
// @ts-ignore
export const api = axios.create({
  baseURL: "https://jservice.io/api",
  timeout: 3000
})