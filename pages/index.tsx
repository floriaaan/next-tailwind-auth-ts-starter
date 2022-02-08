import type { NextPage } from "next";
import { useAuth } from "../hooks/useAuth";

const Home: NextPage = () => {
  const { user, signIn, signOut, register } = useAuth();

  return (
    <div className="flex flex-col p-6 space-y-3">
      <h1 className="text-2xl font-bold">
        {process.env.NEXT_PUBLIC_APP_NAME} - Home
      </h1>

      <div className="inline-flex items-center space-x-3">
        {!user && (
          <>
            <button
              onClick={() =>
                signIn("email@email.com", "MyPasswordIsDefinitelyNotPassword")
              }
              className="px-4 py-2 text-blue-100 duration-150 bg-blue-700 rounded-md hover:bg-blue-800"
            >
              Sign in
            </button>
            <button
              onClick={() =>
                register(
                  "email@email.com",
                  "MyPasswordIsDefinitelyNotPassword",
                  "John Doe",
                  "https://placeimg.com/64/64/any"
                )
              }
              className="px-4 py-2 text-blue-700 duration-150 bg-blue-100 rounded-md hover:bg-blue-200"
            >
              Register
            </button>
          </>
        )}
        {user && (
          <button
            onClick={() => signOut()}
            className="px-4 py-2 text-red-700 duration-150 bg-red-100 rounded-md hover:bg-red-200"
          >
            Sign out
          </button>
        )}
      </div>

      <pre className="text-sm">{JSON.stringify(user, undefined, 2)}</pre>
    </div>
  );
};

export default Home;
