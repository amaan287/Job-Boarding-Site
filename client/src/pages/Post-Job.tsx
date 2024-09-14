import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function PostJob() {
  return (
    <div className="px-4 py-4">
      <form
        action=""
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto bg-[#1C1C1C] py-6 px-8 rounded-lg  "
      >
        <div className=" flex flex-col gap-2 bg-[#161616] pt-2 mt-2 rounded-lg mx-2">
          <label className="px-2" htmlFor="">
            Brand
          </label>
          <input
            className="py-2 px-2 bg-[#191919] border-t border-gray-600 focus:outline-none focus:border focus:border-gray-500 rounded-md placeholder:text-neutral-400 placeholder:text-sm "
            type="text"
            placeholder="spotify"
          />
        </div>
        <div className=" flex flex-col gap-2 bg-[#161616] pt-2 mt-2 rounded-lg mx-2">
          <label className="px-2" htmlFor="">
            Position
          </label>
          <input
            className="py-2 px-2 bg-[#191919] border-t border-gray-600 focus:outline-none focus:border focus:border-gray-500 rounded-md placeholder:text-neutral-400 placeholder:text-sm "
            type="text"
            placeholder="product designer"
            name=""
            id=""
          />
        </div>
        <div className=" flex flex-col gap-2 bg-[#161616] pt-2 mt-2 rounded-lg mx-2">
          <label className="px-2" htmlFor="">
            Location
          </label>
          <Select>
            <SelectTrigger className="w-full outline-none border-none">
              <SelectValue placeholder="Select" className="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="remote">Remote</SelectItem>
              <SelectItem value="on-site">On-site</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className=" flex flex-col gap-2 bg-[#161616] pt-2 mt-2 rounded-lg mx-2">
          <label className="px-2" htmlFor="">
            Companies location
          </label>
          <input
            className="py-2 px-2 bg-[#191919] border-t border-gray-600 focus:outline-none focus:border focus:border-gray-500 rounded-md placeholder:text-neutral-400 placeholder:text-sm "
            type="text"
            placeholder="New York"
            name=""
            id=""
          />
        </div>
        <div className=" flex flex-col gap-2 bg-[#161616] pt-2 mt-2 rounded-lg mx-2">
          <label htmlFor="" className="px-2">
            hours
          </label>
          <Select>
            <SelectTrigger className="w-full outline-none border-none">
              <SelectValue placeholder="Select" className="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full time">Full time</SelectItem>
              <SelectItem value="part time">Part Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className=" flex flex-col gap-2 bg-[#161616] pt-2 mt-2 rounded-lg mx-2">
          <Label className="px-2">Logo</Label>
          <Input className="text-white" id="logo" type="file" />
        </div>
        <button className="bg-[#5f48b4] mx-auto rounded-lg px-4 py-2">
          Post
        </button>
      </form>
    </div>
  );
}
