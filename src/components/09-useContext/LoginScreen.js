import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    
    // 1. obtener referencia al userContext
    const { setUser} = useContext(UserContext)
    // 2. setUser
    // 3. {id:1234, name: 'jorge'}
    const user = {
        id: 1234,
        name: 'Jorge'
    }
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={() => setUser(user)}
            >Login</button>
        </div>
    )
}
