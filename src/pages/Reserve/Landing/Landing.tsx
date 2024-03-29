import ActivityStatement from "../../../components/Common/ActivityStatement";
import ReserveFooter from "../../../components/Footers/ReserveFooter";
import Header from "./Header";
import Process from "./Process";
import Carousel from "../../../components/Common/Carousel";
import { useNavigate } from "react-router-dom";
import { reserveCarouselImages } from "../../../data/data";

function Landing() {
  const navigate = useNavigate();
  function clickFn() {
    navigate("/reserve/submitForm");
  }
  return (
    <>
      <div className="fixed right-0 left-0 top-0 bottom-0 bg-secondaryPageBackgroundGray z-[-50]" />
      <main className="md:pt-[144px] max-w-[1100px] mx-auto bg-secondaryPageBackgroundGray px-[10px]">
        <div className="md:flex md:mb-[126px] justify-between flex-wrap">
          <div className="md:order-2 md:w-[572px] mx-auto">
            <Header />
            <Process />
          </div>
          <div className="md:order-1 overflow-hidden md:w-[350px] max-w-[350px] my-5 mx-auto">
            <Carousel images={reserveCarouselImages} />
          </div>
        </div>

        <div className="pb-[100px]">
          <ActivityStatement />
        </div>
      </main>
      <ReserveFooter clickFn={clickFn} functionButtonText="搶先登記" />
    </>
  );
}

export default Landing;
