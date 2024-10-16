import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Home({}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="mb-10">
        <span className="text-6xl font-bold">Home Page</span>
      </div>
      <div>
        <Button
          onClick={() => {
            navigate("/test");
          }}
        >
          Go to Test Page
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          login
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </>
  );
}
