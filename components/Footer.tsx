import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-100">
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-72 space-y-4 lg:space-y-0 p-14 items-center">
            <div className="flex items-center space-x-4">
              <Link href={"/"} passHref>
                <Image
                  src={"/cv-d.png"}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              </Link>
              <div className="flex flex-col space-y-1">
                <h1 className="text-gray-600 text-2xl font-bold font-mono">
                  Covid-19 Country Stats
                </h1>
                <p className="text-md text-gray-700">
                  Copyright © {new Date().getFullYear()} Jadennns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
