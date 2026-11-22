import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {

  const userInfo = {
    email: "text@emal.com",
    name: "ASIF",
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
