import type { NextPage } from "next";
import { useAuth } from "../hooks/useAuth";
import { UserIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { classes } from "../utils/classes";
import { emailValidator } from "../utils/validators";

const Home: NextPage = () => {
  const { user, signIn, signOut, register } = useAuth();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (email !== "") setEmailError(emailValidator(email));
  }, [email]);

  return (
    <div className="flex flex-col p-6 space-y-3">
      <h1 className="text-2xl font-bold">
        {process.env.NEXT_PUBLIC_APP_NAME} - Home
      </h1>

      {!user && (
        <div className="flex flex-col space-y-3">
          <label className="relative w-full md:w-3/5">
            <UserIcon className="absolute w-4 h-4 text-gray-400 duration-300 transform -translate-y-1/2 pointer-events-none focus-within:text-gray-600 top-1/2 left-3" />
            <input
              id="search"
              name="search"
              type="text"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={classes(
                "input pr-5 py-2 pl-[2.25rem] placeholder-gray-500 w-full text-ellipsis",
                emailError !== "" && email !== "" && "invalid"
              )}
              placeholder="Enter your email"
            />
          </label>
          {emailError !== "" && (
            <p className="text-xs italic text-red-500">{emailError}</p>
          )}
        </div>
      )}

      <div className="inline-flex items-center space-x-3">
        {!user && (
          <>
            <button
              onClick={() => signIn(email, "MyPasswordIsDefinitelyNotPassword")}
              className="btn-blue"
            >
              Sign in
            </button>
            <button
              onClick={() =>
                register(
                  email,
                  "MyPasswordIsDefinitelyNotPassword",
                  "John Doe",
                  "https://placeimg.com/64/64/any"
                )
              }
              className="btn-text-blue"
            >
              Register
            </button>
          </>
        )}
        {user && (
          <button onClick={() => signOut()} className="btn-red">
            Sign out
          </button>
        )}
      </div>

      <pre className="text-sm">{JSON.stringify(user, undefined, 2)}</pre>
    </div>
  );
};

export default Home;
