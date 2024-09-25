import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  Company: string;
  Location: string;
  Position: string;
  Opening: string;
  CompaniesLocation: string;
  Description: string;
}

export default function PostJob() {
  const [formData, setFormData] = useState<FormData>({
    Company: "",
    Location: "",
    Position: "",
    Opening: "",
    CompaniesLocation: "",
    Description: "",
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (
      !formData.Company ||
      !formData.CompaniesLocation ||
      !formData.Description ||
      !formData.Location ||
      !formData.Opening ||
      !formData.Position
    ) {
      console.log("Please fill in all fields");
      return;
    }
    try {
      const res = await fetch("/api/job/postJob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
        return;
      }
      if (res.ok) {
        console.log("job created");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value.trim() }));
  };

  return (
    <div className="px-4 py-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-[#1C1C1C] py-6 px-8 rounded-lg  "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6   ">
          <div className="flex flex-col gap-2 bg-[#161616] pt-2 mt-2 rounded-lg mx-2">
            <label className="px-2" htmlFor="">
              Company
            </label>
            <input
              id="Company"
              onChange={handleChange}
              value={formData?.Company}
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
              onChange={handleChange}
              className="py-2 px-2 bg-[#191919] border-t border-gray-600 focus:outline-none focus:border focus:border-gray-500 rounded-md placeholder:text-neutral-400 placeholder:text-sm "
              type="text"
              placeholder="product designer"
              name=""
              id="Position"
            />
          </div>
          <div className=" flex flex-col gap-2 bg-[#161616] pt-2 mt-2 rounded-lg mx-2">
            <label className="px-2" htmlFor="">
              Location
            </label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, Location: value })
              }
              value={formData.Location}
            >
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
              Companie's location
            </label>
            <input
              onChange={handleChange}
              className="py-2 px-2 bg-[#191919] border-t border-gray-600 focus:outline-none focus:border focus:border-gray-500 rounded-md placeholder:text-neutral-400 placeholder:text-sm "
              type="text"
              placeholder="New York"
              name=""
              id="CompaniesLocation"
            />
          </div>
          <div className=" flex flex-col gap-2 bg-[#161616] pt-2 mt-2 rounded-lg mx-2">
            <label htmlFor="" className="px-2">
              Opening for
            </label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, Opening: value })
              }
              value={formData.Opening}
            >
              <SelectTrigger className="w-full outline-none border-none">
                <SelectValue
                  placeholder="Select"
                  className="border-t border-gray-600"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full time">Full time</SelectItem>
                <SelectItem value="part time">Part Time</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className=" flex flex-col gap-2 bg-[#161616] pt-2 mt-2 rounded-lg mx-2">
            <Label className="px-2">Co. Logo</Label>
            <Input className="text-white " id="logo" type="file" />
          </div>
          <div className="md:col-span-2 flex flex-col  mx-2  py-4 px-4 bg-[#161616]  rounded-lg">
            <Label className="px-2">Description</Label>
            <Textarea
              className="w-full h-52 md:h-72 mt-2"
              placeholder="Type your requirements, hiring process, qualifications, if internship then timeperiod of internship, mention no. of hours   "
              name=""
              onChange={handleChange}
              id="Description"
            ></Textarea>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-4">
          <button className="bg-[#5f48b4] w-1/4 rounded-lg px-4 py-2">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
