import { use, useState } from "react";
import PriceCard from "./PriceCard";

//always have to put / when use data in public
//doing this outside . because data is loading only once
const fetchPrice = async () => (await fetch("/price.json")).json();
const pricePromise = fetchPrice();

const Pricing = () => {
  const prices = use(pricePromise);
  const [selectedPrice, setSelectedPrice] = useState("");
  return (
    <div className="my-10 w-11/12 mx-auto">
      <h2 className="text-center text-4xl font-bold">Our Pricing</h2>
      <p className="text-center text-stone-400 mt-3 py-5">
        {selectedPrice
          ? `Thank you 🥰 for choosing our ${selectedPrice} package`
          : "please select a package to continue"}
      </p>
      <div className="grid lg:grid-cols-4  gap-5">
        {prices.map((price) => (
          <PriceCard
            key={price.packageName}
            setSelectedPrice={setSelectedPrice}
            price={price}
          ></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
