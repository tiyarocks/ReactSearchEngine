import axios from "axios"
export default axios.create({

    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:"Client-ID J1OJ3fQlRKFezu-1e_yXiIBpZ3QgX5vMXo5iQUAFM8w"
    }
})