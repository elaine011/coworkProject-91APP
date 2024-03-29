import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReserveFooter from "../../../components/Footers/ReserveFooter";
import { products } from "../../../data/data";
import { Context } from "../../../utils/context";
import AlertBox from "./AlertBox";
import Content from "./Content";

function Product() {
  const [selectedProducts, setSelectedProducts] = useState({
    model: "iphone 13",
    color: "",
    capacity: "",
    price: 0,
    id: 6,
  });
  const [showAlertBox, setShowAlertBox] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const registerInfo = JSON.parse(
      sessionStorage.getItem("registerInfo") as string
    );
    !registerInfo && navigate("/reserve/submitForm");
  }, []);

  useEffect(() => {
    const product = products.filter(
      (item) =>
        item.model === selectedProducts.model &&
        item.capacity === selectedProducts.capacity
    );
    const productId = products.filter(
      (item) => item.model === selectedProducts.model
    );
    setSelectedProducts({
      ...selectedProducts,
      price: product.length !== 0 ? product[0].price : 0,
      id:
        productId.length !== 0 && selectedProducts.color === ""
          ? productId[0].id
          : selectedProducts.color !== ""
          ? productId.filter(
              (item) => item.color.name === selectedProducts.color
            )[0].id
          : 6,
    });
  }, [
    selectedProducts.model,
    selectedProducts.color,
    selectedProducts.capacity,
  ]);

  function handleShowAlertBox() {
    setShowAlertBox(
      selectedProducts.color === "" || selectedProducts.capacity === ""
    );
    if (!(selectedProducts.color === "" || selectedProducts.capacity === "")) {
      const registerInfo = JSON.parse(
        sessionStorage.getItem("registerInfo") as string
      );
      sessionStorage.setItem(
        "registerInfo",
        JSON.stringify({
          ...registerInfo,
          product: {
            model: selectedProducts.model,
            color: selectedProducts.color,
            capacity: selectedProducts.capacity,
            price: selectedProducts.price,
          },
        })
      );
    }
    return !(selectedProducts.color === "" || selectedProducts.capacity === "");
  }

  function clickFn() {
    handleShowAlertBox() && navigate("/reserve/verified");
  }

  return (
    <Context.Provider
      value={{ selectedProducts: [selectedProducts, setSelectedProducts] }}>
      <div className="fixed bottom-0 left-0 top-0 right-0 -z-50 md:bg-primaryPageBackgroundGray" />
      <div className="md:px-5 relative grid place-items-center">
        <h1 className="hidden md:flex text-[64px]  justify-center leading-[80px] mb-[43px] md:mt-[53px]">
          選擇商品
        </h1>
        <Content />
        <AlertBox
          showAlertBox={showAlertBox}
          setShowAlertBox={setShowAlertBox}
        />
      </div>
      <ReserveFooter
        clickFn={clickFn}
        functionButtonText="送出"
        price={selectedProducts.price}
        wrapperContext="space-between"
        hint="一經送出商品選項，不得修改"
      />
    </Context.Provider>
  );
}

export default Product;
