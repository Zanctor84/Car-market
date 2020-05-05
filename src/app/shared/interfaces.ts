export interface User {
    email: string
    password: string
    returnSecureToken?: boolean
}

export interface FbAuthResponse {
    idToken: string
    expiresIn: string
}

export interface Post {
    id?: string
    title: string
    sale: string
    text: string
    author: string
    image: string
    price: number
    year: number
    motor: string
    run: number
    date: Date
}


export interface FbCreateResponse {
    name: string
}