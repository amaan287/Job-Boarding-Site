import JobRow from "./Job-rows";

export default function Jobs() {
  return (
    <div className=" bg-[#121212] p-8 rounded-t-lg mx-auto">
      <h2 className="font-bold mb-4">Recent jobs</h2>
      <div className="flex flex-col gap-4">
        <JobRow />
        <JobRow />
        <JobRow />
        <JobRow />
      </div>
    </div>
  );
}
