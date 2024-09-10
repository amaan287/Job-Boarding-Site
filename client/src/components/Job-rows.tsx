export default function JobRow() {
  return (
    <div className="bg-[#161616] p-6  rounded-lg relative  ">
      <div className="absolute top-6 right-6">
        <button className="bg-[#644ac0] px-2 rounded content-center">
          apply
        </button>
      </div>
      <div className="flex grow gap-4">
        <div className="content-center">
          <img
            width={1}
            height={1}
            className="size-12"
            src={
              "https://cdn.freebiesupply.com/logos/large/2x/spotify-2-logo-png-transparent.png"
            }
            alt="image"
          />
        </div>
        <div className="grow sm:flex">
          <div className="grow ">
            <div className="text-gray-300 text-sm  ">Spotify</div>
            <div className="font-semibold mb-1 text-lg">Product designer</div>
            <div className="text-gray-300 text-xs">
              Remote | New York, US | Full-time
            </div>
          </div>
          <div className="content-end text-xs font-light text-gray-300">
            2 weeks ago
          </div>
        </div>
      </div>
    </div>
  );
}
