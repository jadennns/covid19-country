import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import Map from "../components/Map";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FiThumbsUp } from "react-icons/fi";
import { IoMdThumbsUp } from "react-icons/io";
import clsx from "clsx";

const rounded = (num: number) => {
  const symbols = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "Q" },
    { value: 1e18, symbol: "QT" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var find = symbols
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return find
    ? (num / find.value).toFixed(2).replace(rx, "$1") + find.symbol
    : "0";
};

export default function Main() {
  const [country, setTooltip] = useState<DiseaseSHCountry>();
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetch("/api/like", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setCount(data.likes));

    if (localStorage.getItem(`liked-${window.origin}`)) setLiked(true);
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <div className="flex justify-center mx-8">
          <div className="max-w-7xl relative w-full">
            <div className="flex flex-col items-center justify-center">
              <Map setTooltip={setTooltip} />
              <div className="flex items-center space-x-2">
                <h1 className="text-rose-500 underline text-2xl font-semibold">
                  {count}
                </h1>
                <h1 className="text-gray-600 text-2xl font-semibold">
                  people has liked this project!
                </h1>
              </div>
              {country?.countryInfo?.flag && (
                <ReactTooltip className="bg-yellow-200">
                  <div className="flex flex-col items-center text-gray-100">
                    <div className="flex items-center space-x-2">
                      <img
                        src={country.countryInfo.flag}
                        alt={`${country.country} Flag`}
                        width={32}
                        height={32}
                      />
                      <p className="text-white text-lg font-semibold">
                        {country.country}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <ul className="flex flex-col items-center">
                        <CountryStat
                          name="Cases"
                          value={rounded(country.cases)}
                        />
                        <CountryStat
                          name="Active Cases"
                          value={rounded(country.active)}
                        />
                        <CountryStat
                          name="Deaths"
                          value={rounded(country.deaths)}
                        />
                        <CountryStat
                          name="Recovered"
                          value={rounded(country.recovered)}
                        />
                      </ul>
                    </div>
                  </div>
                </ReactTooltip>
              )}
              <div className="flex flex-col items-center space-y-2">
                <h1 className="text-gray-600 font-semibold text-2xl">
                  Do you like the project? If you do, press the thumbs up
                  button!
                </h1>
                {liked ? (
                  <IoMdThumbsUp className="text-rose-600" size={42} />
                ) : (
                  <FiThumbsUp
                    size={42}
                    onClick={() => {
                      localStorage.setItem(`liked-${window.origin}`, "true");
                      setLiked(true);
                      fetch(`/api/like`, { method: "POST" });
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </div>{" "}
    </>
  );
}

interface CountryStatProps {
  name: string;
  value: string | number;
}

function CountryStat({ name, value }: CountryStatProps) {
  return (
    <li className="flex items-center space-x-1">
      <p className="font-semibold">{name} :</p>
      <p className="text-gray-300 underline">{value}</p>
    </li>
  );
}
