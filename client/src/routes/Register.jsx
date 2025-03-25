import React from "react";
import SearchBar from "../components/SearchBar";

const Register = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", {
        username,
        email,
        password,
      });
      console.log(res.data);
    } catch (err) {
      // setError()
      console.log(err);
    }
  };
  
  return (
    <div className="flex flex-col lg:flex-row h-[100%] w-full">
      <div className="flex-[3]">
        <div className="h-full flex flex-col justify-center gap-16 md:gap-12 lg:pr-[44px] w-full items-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold">Create an Account</h1>
            <form action="" className="flex flex-col h-fit w-full gap-5">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="h-14 rounded-lg border border-slate-200 w-full px-5"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="h-14 rounded-lg border border-slate-200 w-full px-5"
              />
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="h-14 rounded-lg border border-slate-200 w-full px-5"
              />
              <button className="w-full bg-[#57c7a0] h-14 rounded-lg">
                Register
              </button>
            </form>
            <a
              href="/"
              className="underline text-slate-500 hover:text-[#57c7a0] text-sm"
            >
              Do you have an account?
            </a>
          </div>
        </div>
      </div>
      <div className="flex-[2] lg:bg-[#fcf5fd] relative items-center hidden lg:flex">
        <img src="/bg.png" alt="background" className="w-full absolute" />
      </div>
    </div>
  );
};

export default Register;
