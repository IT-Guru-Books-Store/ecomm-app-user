import Slider from "@/components/swiper component/Slider";

export default function Home() {
  return (
    <div className="w-full h-[60vh] md:h-[90vh] flex flex-col">
      {/* <h1 className="md:text-[2rem]">This is home page</h1> */}
      <div className="w-full mt-2 md:mt-4">
        <Slider />
      </div>
      {/* <div className="flex md:flex-row mt-2 md:mt-4">
        <div>
          <h1 className="text-[#073763] text-[20px]">All Books</h1>
        </div>
        <div></div>
        <div></div>
      </div> */}
    </div>
  );
}
