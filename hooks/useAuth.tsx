import { useRouter } from "next/router";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { User } from "../types/User";
const AuthContext = createContext({});

let USER_COOKIE_NAME = process.env
  .NEXT_PUBLIC_USER_COOKIE_NAME as unknown as string;

/**
 * Provider that handles authentication with Gardian
 *
 * Returns children if logged in, otherwise returns NotLogged
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [cookie, setCookie, removeCookie] = useCookies([USER_COOKIE_NAME]);
  const [user, setUser] = useState<User | null>(
    cookie[USER_COOKIE_NAME] || null
  );
  const [history, setHistory] = useState<string[]>([]);
  const router = useRouter();

  const getLastUrl = (): string => {
    const lastUrl: string =
      history.length > 1 ? history[history.length - 1] : "/";
    return lastUrl;
  };

  /**
   * TODO:
   * - Implement sign in
   * - Set user
   * - Set cookie
   * - Redirect to last url
   */
  const signIn = async (email: string, password: string) => {
    let userDataFromApi: User = {
      _id: "randomId",
      uid: "randomId",
      email,
      password,
      fullName: "John Doe",
      photoURL: "https://placeimg.com/64/64/any",
      createdAt: new Date("2000-04-28"),
    };

    setUser(userDataFromApi);

    setCookie(USER_COOKIE_NAME, userDataFromApi, { path: "/" });

    router.push(getLastUrl());
  };

  /**
   * TODO:
   * - Implement sign out
   * - Remove user
   * - Remove cookie
   * - Redirect to index
   */
  const signOut = async () => {
    setUser(null);

    removeCookie(USER_COOKIE_NAME);

    router.push("/");
  };

  /**
   * TODO:
   * - Implement register
   * - Set user
   * - Set cookie
   * - Redirect to index
   */
  const register = async (
    email: string,
    password: string,
    fullName: string,
    photoURL?: string
  ) => {
    let userDataFromApi: User = {
      _id: "randomId",
      uid: "randomId",
      email,
      password,
      fullName,
      photoURL: "https://placeimg.com/64/64/any",
      createdAt: new Date("2000-04-28"),
    };

    setUser(userDataFromApi);

    setCookie(USER_COOKIE_NAME, userDataFromApi, { path: "/" });

    router.push("/");
  };

  useEffect(() => {
    setHistory((oldHistory) => [...oldHistory, window.location.pathname]);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, register }}>
      {children}
    </AuthContext.Provider>
  );
}

interface AuthContextType {
  user: any;
  signIn: (email: string, password: string) => Promise<any | boolean>;
  signOut: () => Promise<any | boolean>;
  register: (
    email: string,
    password: string,
    fullName: string,
    photoURL?: string
  ) => Promise<any | boolean>;
}

/**
 * Get auth credentials with the use of the react context
 *
 * @returns context
 */
const useAuth = () => useContext(AuthContext) as AuthContextType;

export { AuthProvider, useAuth };
