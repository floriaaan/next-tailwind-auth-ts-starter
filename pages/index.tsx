import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen p-6 space-y-3 bg-white dark:bg-black">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        {process.env.NEXT_PUBLIC_APP_NAME} - Home
      </h1>

    </div>
  );
};

export default Home;
