import SasaSideBar from "../../components/Common/SasaSideBar";
import ProductDetailFooter from "../../components/Footers/ProductDetailFooter";
import ProductCard from "./ProductCard";
import RecommendOutfit from "./RecommendOutfit";
import Carousel from "../../components/Common/Carousel";
import {
  productCarouselImages,
  outfitWithClerkImages,
  recommnedOutfitImages,
  productCard,
  breadcrumbs,
} from "../../data/data";

function ProductDetail() {
  return (
    <>
      <main className="max-w-[1170px] mx-auto pb-[320px]">
        <div className="text-primaryBrown flex gap-[5px]">
          {breadcrumbs.map(({ title, next }, index) => {
            return (
              <div key={index}>
                <span className="mr-[5px] hover:cursor-pointer hover:underline">
                  {title}
                </span>
                {next && <span>{">"}</span>}
              </div>
            );
          })}
        </div>
        <div className="flex pt-[14px]">
          <SasaSideBar />
          <div className="max-w-[880px]">
            <div className="flex gap-[17px]">
              <div className="overflow-hidden w-[528px]  mx-auto">
                <Carousel images={productCarouselImages} />
              </div>
              <div>
                <h1 className="text-[20px] font-medium">
                  柏高島屋ステーションモール店
                </h1>
                <p className="text-[14px]">GLOBAL WORK</p>
                <span className="block text-[14px] mb-[30px]">152cm</span>
                <h3 className="text-[16px]">穿著單品</h3>
                <ul className="w-[335px] ml-5">
                  {productCard.map(
                    (
                      {
                        img,
                        status,
                        title,
                        name,
                        originalPrice,
                        afterDiscount,
                      },
                      index
                    ) => {
                      return (
                        <ProductCard
                          image={img}
                          name={name}
                          title={title}
                          originalPrice={originalPrice}
                          afterDiscount={afterDiscount}
                          status={status}
                          borderNone={index === productCard.length - 1}
                          key={index}
                        />
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
            <RecommendOutfit
              title="此店員其他穿搭"
              images={outfitWithClerkImages}
            />
            <RecommendOutfit
              title="其他穿搭推薦"
              images={recommnedOutfitImages}
            />
          </div>
        </div>
      </main>
      <ProductDetailFooter />
    </>
  );
}

export default ProductDetail;
