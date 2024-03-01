import BookCard from "@/components/book card/BookCard";
import DropDown from "@/components/dropDown/DropDown";
import Slider from "@/components/swiper component/Slider";

export default function Home() {
  const language = ["Sinhala", "English"];
  const Subject = ["ICT", "SFT", "ET"];
  const Grade = ["Grade 10", "Grade 11", "Grade 12"];

  return (
    <div className="w-full flex flex-col mb-[30px]">
      {/* <h1 className="md:text-[2rem]">This is home page</h1> */}
      <div className="w-full mt-2 md:mt-4">
        <Slider />
      </div>
      <div className="w-full flex flex-row px-5 py-2 items-center">
        <h1 className="text-[#073763] text-[20px] ">All Books</h1>
        <div className="flex flex-row items-center gap-3 ml-[10%]">
          <h3 className="text-[#073763] text-[15px] ">Sort by</h3>
          <div>
            <DropDown values={language} title={"language"} />
          </div>
          <div>
            <DropDown values={Subject} title={"subject"} />
          </div>
          <div>
            <DropDown values={Grade} title={"Grade"} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:max-xl:grid-cols-4 xl:grid-cols-5 mt-[10px] w-full justify-items-center gap-y-4">
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
