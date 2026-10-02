import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("jrp-user");

      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const login = (email, password) => {
    try {
      const storedAccount = localStorage.getItem("jrp-account");

      if (!storedAccount) {
        return {
          success: false,
          message:
            "No account found with this email. Please create an account first.",
        };
      }

      const account = JSON.parse(storedAccount);

      if (
        account.email.toLowerCase() !== email.toLowerCase() ||
        account.password !== password
      ) {
        return {
          success: false,
          message: "Invalid email or password.",
        };
      }

      const loggedInUser = {
        id: account.id,
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.email,
        location: account.location,
        experienceLevel: account.experienceLevel,
        desiredRole: account.desiredRole,
      };

      localStorage.setItem(
        "jrp-user",
        JSON.stringify(loggedInUser)
      );

      setUser(loggedInUser);

      return {
        success: true,
        user: loggedInUser,
      };
    } catch {
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }
  };

  const signup = (userData) => {
    try {
      const existingAccount = localStorage.getItem("jrp-account");

      if (existingAccount) {
        const account = JSON.parse(existingAccount);

        if (
          account.email.toLowerCase() ===
          userData.email.toLowerCase()
        ) {
          return {
            success: false,
            message:
              "An account already exists with this email.",
          };
        }
      }

      const account = {
        id: `candidate-${Date.now()}`,
        ...userData,
      };

      const loggedInUser = {
        id: account.id,
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.email,
        location: account.location,
        experienceLevel: account.experienceLevel,
        desiredRole: account.desiredRole,
      };

      localStorage.setItem(
        "jrp-account",
        JSON.stringify(account)
      );

      localStorage.setItem(
        "jrp-user",
        JSON.stringify(loggedInUser)
      );

      setUser(loggedInUser);

      return {
        success: true,
        user: loggedInUser,
      };
    } catch {
      return {
        success: false,
        message: "Unable to create account. Please try again.",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("jrp-user");
    setUser(null);
  };

  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;