import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://127.0.0.1:8000'
    baseURL: 'https://alyssariah-clothing-store.herokuapp.com/'
})

export const loginUser = async (user) => {
    try {const resp = await api.post('/auth/users/login/', user)
    return resp}
    catch (err){
        console.log(err)
        return err
    }
}
export const registerNewUser = async (user) => {
    try{const resp = await api.post('/auth/users/register/', user)
    return resp}
    catch (err){
        console.log(err)
        return err
    }
}

export const getProducts = async () => {
    try{const resp = await api.get('/api/products/')
    return resp}
    catch (err){
        console.log(err)
        return err
    }
}
export const searchData = async(term) => {
    try{const resp = await api.get('/api/search/',{
        params: {
            q: term
        }
    })
    return resp
    }
    catch (err){
        console.log(err)
        return err
    }
}
export const makeCartItem = async (input, token) => {
    try{const resp = await api.post('/api/items/', input, {
        headers: {
            authorization: 'JWT ' + token
        }
    })
    return resp
    }
    catch (err){
        console.log(err)
        return err
    }
}
export const getCartItems = async (token) => {
    try{const resp = await api.get('/api/items-json/', {
        headers: {
            authorization: 'JWT ' + token
        }
    })
    return resp
    }
    catch (err){
        console.log(err)
        return err
    }
}
export const deleteCartItem = async (id, token) => {
    try{const resp = await api.delete(`/api/items/${id}/`, {
        headers: {
            authorization: 'JWT ' + token
        }
    })
    return resp}
    catch (err){
        console.log(err)
        return err
    }
}
export const updateCartItem = async (id, body, token) => {
    try{const resp = await api.patch(`/api/items/${id}/`, body, {
        headers: {
            authorization: 'JWT ' + token
        }
    })
    return resp}
    catch (err){
        console.log(err)
        return err
    }
}