export default function Hero() {
  return (
    <section className="my-16">
      <h1 className="poppins-semibold text-3xl md:text-4xl text-center  font-bold">
        Find your <br /> dream job{" "}
      </h1>

      <form className="flex gap-2 mt-4 max-w-lg mx-auto items-center">
        <input
          type="search"
          className="outline-none focus:outline-0  w-full bg-[#1d1d1d] py-2 px-3 rounded-lg placeholder:text-sm placeholder:text-gray-500"
          placeholder="Search job"
          id=""
        />
        <button className="bg-[#644ac0] text-white py-2 px-4 rounded-md">
          Search{" "}
        </button>
      </form>
    </section>
  );
}
