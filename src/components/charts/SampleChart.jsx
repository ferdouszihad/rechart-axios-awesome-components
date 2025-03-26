import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
const SampleChart = () => {
  const candidates = [
    {
      name: "Kalam Kora",
      id: 101,
      ssc: 3.6,
      hsc: 3.8,
    },
    {
      name: "Ratul Rakkhosh",
      id: 102,
      ssc: 4.0,
      hsc: 3.9,
    },
    {
      name: "Pinku Panta",
      id: 103,
      ssc: 3.7,
      hsc: 3.6,
    },
    {
      name: "Mohiuddin Mashla",
      id: 104,
      ssc: 3.8,
      hsc: 4.0,
    },
    {
      name: "Babul Biryani",
      id: 105,
      ssc: 2.9,
      hsc: 3.4,
    },
    {
      name: "Tariq Topor",
      id: 106,
      ssc: 3.5,
      hsc: 3.8,
    },
    {
      name: "Shuvo Sushil",
      id: 107,
      ssc: 3.3,
      hsc: 3.5,
    },
    {
      name: "Mitu Macher Jhol",
      id: 108,
      ssc: 3.8,
      hsc: 4.0,
    },
    {
      name: "Rinku Rasgulla",
      id: 109,
      ssc: 3.9,
      hsc: 3.7,
    },
    {
      name: "Fahim Fuchka",
      id: 110,
      ssc: 3.4,
      hsc: 3.6,
    },
  ];

  return (
    <div className="my-10">
      <h2 className="text-center text-4xl font-bold py-5">A Simple Chart</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={candidates}>
            <Line type="monotone" dataKey="ssc" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="id" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SampleChart;
