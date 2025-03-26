// {
//     "price": 9.99,
//     "packageName": "Basic",
//     "features": ["1 User", "5GB Storage", "Email Support"]

import { IoCheckmarkDoneCircle } from "react-icons/io5";

//   }
const PriceCard = ({ price, setSelectedPrice }) => {
  return (
    <div className="card  bg-base-100 shadow-sm">
      <div className="card-body justify-between">
        <div className="flex  flex-col justify-between">
          <h2 className="text-3xl font-bold">{price.packageName}</h2>
          <span className="text-xl">$ {price.price}/mo</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {price.features.map((feature, index) => (
            <li key={index} className="flex gap-2 items-center">
              <IoCheckmarkDoneCircle size={24} className="text-green-400" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button
            onClick={() => setSelectedPrice(price.packageName)}
            className="btn btn-primary btn-block"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
