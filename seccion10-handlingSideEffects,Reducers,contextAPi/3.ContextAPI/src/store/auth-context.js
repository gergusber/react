import React from 'react'


const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { } //initiealize context
});

export default AuthContext;