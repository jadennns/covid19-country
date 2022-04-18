import { useState } from "react";
import ReactTooltip from "react-tooltip";
import Map from "../components/Map";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const rounded = (num: number) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

export default function Main() {
  const [country, setTooltip] = useState<DiseaseSHCountry>();

  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <div className="flex justify-center mx-8">
          <div className="max-w-7xl relative w-full">
            <Map setTooltip={setTooltip} />
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
          </div>
        </div>
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
