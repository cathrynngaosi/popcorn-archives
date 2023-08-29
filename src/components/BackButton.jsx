import { BiArrowBack } from "react-icons/bi";
import { Navigate, useNavigate } from "react-router-dom";

function BackButton({ page }) {
  const navigate = useNavigate();

  function moveBack() {
    navigate(-1);
  }

  return (
    <div>
      <h1
        className="flex cursor-pointer items-center text-white duration-100 hover:text-red-500"
        onClick={moveBack}
      >
        <BiArrowBack className="mr-2" /> Back
      </h1>
    </div>
  );
}

export default BackButton;
