import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "90fad0f8-bb47-44c1-948e-53c2fcead87c"},
})

export const usersAPI = {
    getUsers  (currentPage, pageSize)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    followRequest  (u)  {
        return  instance.post( `follow/${u}`)
    },
    unFollowRequest  (u)  {
        return  instance.delete(`follow/${u}`)
    },
    
}


export  const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
}

export const authMe = {
    logRequest() {
        
        return instance.get(`auth/me`).then(response => {
                return response.data
            
        })
    },
    logIn(email, password, rememberMe)  {
        return instance.post(`auth/login`, { email, password, rememberMe }).then(response => {
               return response.data
       })
    },
    logOut() {
        return instance.delete(`auth/login`).then(response => {
            return response.data
        })
    }
} 