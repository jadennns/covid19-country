import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaDisease } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className="absolute inset-x-0 top-0">
        <div className="flex justify-center items-center text-lg">
          <nav className="max-w-7xl bg-gray-100 lg:rounded-md flex justify-between p-4 mt-0 lg:mt-5 w-full lg:w-11/12 z-[1]">
            <div className="flex items-center space-x-2">
              <img src={"/cv-d.png"} alt="Logo" width={42} height={42} />
              <p className="text-lg font-bold text-gray-600">
                Covid-19 Country Stats
              </p>
            </div>
            <div className="items-center relative hidden lg:flex space-x-3">
              <Link href={"https://github.com/jadennns/covid19-country"}>
                <button className="flex items-center space-x-1 bg-gray-800 hover:bg-gray-900 text-white rounded-md px-3 py-2">
                  <AiFillGithub size={25} />
                  <p className="font-semibold">Github</p>
                </button>
              </Link>
              <Link href={"https://disease.sh/"}>
                <button className="flex items-center space-x-1 bg-rose-600 hover:bg-rose-700 text-white rounded-md px-3 py-2">
                  <FaDisease size={25} />
                  <p className="font-semibold">Disease.sh</p>
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
