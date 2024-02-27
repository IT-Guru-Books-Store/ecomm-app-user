import BookCard from "@/components/book card/BookCard";
import Slider from "@/components/swiper component/Slider";

export default function Home() {
  return (
    <div className="w-full flex flex-col mb-[30px]">
      {/* <h1 className="md:text-[2rem]">This is home page</h1> */}
      <div className="w-full mt-2 md:mt-4">
        <Slider />
      </div>
      <div className="bg-blue-500 w-full">
        <h1 className="text-[#073763] text-[20px]">All Books</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-[10px] w-full justify-items-center gap-y-4">
        {/* row1 */}
        <div>
          <BookCard />
        </div>
        <div>
          <BookCard />
        </div>
        <div>
          <BookCard />
        </div>
        <div>
          <BookCard />
        </div>
        {/* row2 */}
        <div>
          <BookCard />
        </div>
        <div>
          <BookCard />
        </div>
        <div>
          <BookCard />
        </div>
        <div>
          <BookCard />
        </div>
        {/* row3 */}
        <div>
          <BookCard />
        </div>
        <div>
          <BookCard />
        </div>
        <div>
          <BookCard />
        </div>
        <div>
          <BookCard />
        </div>
      </div>
    </div>
  );
}
