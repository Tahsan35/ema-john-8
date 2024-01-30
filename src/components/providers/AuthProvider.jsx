import {createContext} from "react";

const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({Children}) => {
  const authInfo = {};
  return <AuthContext.Provider value={authInfo}>{Children}</AuthContext.Provider>;
};

export default AuthProvider;
