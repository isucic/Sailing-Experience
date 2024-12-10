import YellowButton from "./yellowButton";

const RightNavbar = () => {
  return (
    <div className="flex justify-between">
      <button className="pr-8 font-bold">Log in</button>
      <YellowButton label="book now" />
    </div>
  );
};

export default RightNavbar;
