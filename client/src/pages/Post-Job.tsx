export default function PostJob() {
  return (
    <div className="">
      <form
        action=""
        className="grid grid-cols-2 gap-2 max-w-5xl mx-auto bg-[#262626] py-2 px-4 rounded-lg"
      >
        <div className=" flex flex-col gap-2  mt-2">
          <label htmlFor="">Logo</label>
          <input
            className="  p-2 rounded-md placeholder:text-neutral-400 "
            type="text"
            placeholder="logo"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <label htmlFor="">Brand</label>
          <input
            className="  p-2 rounded-md placeholder:text-neutral-400 "
            type="text"
            placeholder="spotify"
          />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <label htmlFor="">Position</label>
          <input
            className="bg-[#121212]  p-2 rounded-md placeholder:text-neutral-400 "
            type="text"
            placeholder="product designer"
            name=""
            id=""
          />
        </div>
        <div className=" flex flex-col gap-2 mt-2">
          <label htmlFor="">Location</label>
          <input
            className=" p-2 rounded-md placeholder:text-neutral-400 "
            type="text"
            placeholder="Remote"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <label htmlFor=""> Companies location</label>
          <input
            className=" p-2 rounded-md placeholder:text-neutral-400 "
            type="text"
            placeholder="New York"
            name=""
            id=""
          />
        </div>
        <div className="flex bg-[#1c1c1c] rounded-lg p-2 flex-col gap-2 mt-2">
          <label htmlFor="" className="px-2">
            hours
          </label>
          <input
            className=" p-2 bg-[#1c1c1c]  rounded-md placeholder:text-neutral-400 "
            type="text"
            placeholder="full time"
          />
        </div>
      </form>
    </div>
  );
}
