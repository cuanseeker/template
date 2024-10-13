import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Home({}) {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="m-auto w-[70%]">
        <div className="mb-10">
          <span className="text-6xl font-bold">Home Page</span>
        </div>
        <div>
          <Button>
            <Link to={"/test"}>Go to Test Page</Link>
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
