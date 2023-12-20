import React, { createContext, useContext, useState } from 'react';

interface User {
  username: string;
  password: string;
}

interface AuthContextProps {
  user: User | null;
  login: (userData: User) => Promise<void>; 
  logout: () => void;
  getUser: () => User | null;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => Promise.resolve(), 
  logout: () => {},
  getUser: () => null,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        
        if (userData.username === 'example' && userData.password === 'password') {
          setUser(userData); 
          resolve(); 
        } else {
          reject(new Error('Неправильные учетные данные')); 
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
  };

  const getUser = () => {
    return user;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};
