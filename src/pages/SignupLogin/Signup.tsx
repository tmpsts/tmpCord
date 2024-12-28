function Signup() {
  return (
    <div className="flex justify-center items-center">
      <form className="border border-white/80 rounded-xl p-5 mt-24 flex flex-col">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Create an account
        </h1>
        <input
          type="text"
          placeholder="username"
          className="rounded-md py-1.5 mt-6 pl-2 bg-black/40 text-white placeholder:text-white/20"
        />
        <input
          type="text"
          placeholder="password"
          className="rounded-md py-1.5 mt-2 pl-2 bg-black/40 text-white placeholder:text-white/20"
        />
        <input
          type="text"
          placeholder="confirm password"
          className="rounded-md py-1.5 mt-2 pl-2 bg-black/40 text-white placeholder:text-white/20"
        />
        <input
          type="submit"
          name="Continue"
          id=""
          className="py-1.5 w-full bg-white rounded-md mt-6"
        />
      </form>
    </div>
  );
}

export default Signup;
