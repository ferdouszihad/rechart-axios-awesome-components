import axios from "axios";
import Tooltip from "daisyui/components/tooltip";
// eslint-disable-next-line no-unused-vars
import { use, useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import Loading from "../other/Loading";
// const phonePromise = axios.get(
//   "https://openapi.programming-hero.com/api/phones?search=samsung"
// );

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    // phonePromise.then((data) => console.log(data)); // এভাবে ও করা যাবে । এভাবে করলে আমরা ও যদি component render না ও করি  তা ও কিন্তু ডাটা সার্ভার থেকে ফেচ হবে।
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=samsung")
      .then((data) => {
        console.log(data.data.data);
        const phones = data.data.data.map((phone) => {
          return {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
            id: phone.slug.split("-")[0],
          };
        });
        setPhones(phones);
        setLoading(false);
      });

    //   }, [count]); /এভাবে করলে ডাটা স্টেটের সাথে আবার রি-ফেচ হবে।
  }, []);

  //   const { data } = use(phonePromise);
  //   const [count, setCount] = useState(0);
  //   //   console.log(data.data);
  //   const phones = data.data.map((phone) => {
  //     return {
  //       name: phone.phone_name,
  //       price: parseInt(phone.slug.split("-")[1]),
  //       id: phone.slug.split("-")[0],
  //     };
  //   });
  //   console.log(phones);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-10">
      <h2 className="text-center text-4xl py-5 font-bold">
        Our Best Mobiles {count}
      </h2>

      <div onClick={() => setCount(count + 1)} className="btn">
        Counter
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={phones}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar width={"30px"} dataKey="price" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Phones;
