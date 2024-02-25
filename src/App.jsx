import { useState } from "react";
import "./App.css";
import Password from "./components/Password";
import Empty from "./components/Empty";

function App() {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [passwords, setPasswords] = useState([]);

  const handleAddPassword = (event) => {
    event.preventDefault();
    if (website && username && password) {
      setPasswords((prevPasswords) => [
        ...prevPasswords,
        {
          website: website,
          username: username,
          password: password,
        },
      ]);
    }
    setWebsite("");
    setUsername("");
    SetPassword("");
  };

  return (
    <>
      <section className="flex flex-col min-h-screen w-full bg-yellow-200 items-center justify-center py-8 sm:py-12 lg:py-24 px-4 sm:px-6 lg:px-12 mx-auto">
        <div className="container mx-auto flex flex-wrap justify-center items-center px-5 py-8 sm:pb-12 lg:pb-20">
          <div className="flex flex-col items-center text-center w-full mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold title-font mb-4 text-gray-900">
              Password Manager
            </h1>
            <p className="w-full lg:w-2/3 xl:w-1/2 mb-4 lg:text-lg text-slate-500 leading-relaxed tracking-wide text-base">
              A password manager app securely stores and manages user
              credentials for various online accounts, offering convenience,
              enhanced security, and peace of mind.
            </p>
          </div>
          <div className="md:flex md:flex-row-reverse md:justify-evenly items-center w-full">
            <div className="flex justify-center">
              <img
                className="h-auto w-64 sm:w-80 lg:w-96 mt-8 sm:mt-0"
                src="/authentication.svg"
                alt="Password SVG"
              />
            </div>
            <form
              onSubmit={handleAddPassword}
              className="mt-8 sm:mt-12 lg:mt-0 flex flex-col rounded-2xl bg-yellow-100 p-6 md:p-8 lg:w-1/2 xl:w-1/3"
            >
              <h2 className="title-font mb-4 text-lg lg:text-xl font-medium text-gray-900">
                Add Password
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="web-site"
                  className="text-sm leading-7 text-gray-600"
                >
                  Website
                </label>
                <input
                  onChange={(e) => setWebsite(e.target.value)}
                  value={website}
                  type="text"
                  id="web-site"
                  name="full-name"
                  required
                  className="w-full rounded border border-gray-400 bg-yellow-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="text-sm leading-7 text-gray-600"
                >
                  Username
                </label>
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  id="full-name"
                  required
                  name="full-name"
                  className="w-full rounded border border-gray-400 bg-yellow-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="text-sm leading-7 text-gray-600"
                >
                  Password
                </label>
                <input
                  onChange={(e) => SetPassword(e.target.value)}
                  value={password}
                  type="password"
                  id="password"
                  required
                  name="password"
                  className="w-full rounded border border-gray-400 bg-yellow-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <button
                type="submit"
                className="rounded-3xl border-0 bg-yellow-400 font-semibold text-gray-700 px-6 py-2 text-lg lg:text-xl hover:bg-yellow-300 focus:outline-none"
              >
                Add
              </button>
            </form>
          </div>
        </div>
        <section className="text-gray-600 w-full bg-yellow-100 rounded-2xl body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Manage your passwords
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Check your saved passwords
              </p>
            </div>
            <div className="flex flex-wrap -m-2">
              {!passwords.length && <Empty />}
              {passwords.map((password, index) => {
                return <Password key={index} data={password} />;
              })}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
