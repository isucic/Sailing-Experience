import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";

export default function Steps() {
  return (
    <div className="flex flex-col text-bluecustom items-center justify-center mt-56 mx-10 sm:mx-56 mb-36">
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
  );
}
