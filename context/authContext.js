
import React from 'react';
 
// Creating the context object and passing the default values.
const AuthContext = React.createContext({status:null,user:null, login:()=>{}});
 
export default AuthContext;