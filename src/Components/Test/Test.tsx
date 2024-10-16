import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Test({}) {
  const navigate = useNavigate();

  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="m-auto w-[70%]">
        <div className="mb-10">
          <span className="text-6xl font-bold">Test Page</span>
        </div>
        <div>
          <Button
            onClick={() => {
              navigate("/home");
            }}
          >
            Go to Home Page
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
