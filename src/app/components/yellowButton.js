export default function YellowButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-yellowcustom text-black font-medium uppercase py-2 px-6 rounded-full hover:bg-yellowcustom min-w-40"
    >
      {label}
    </button>
  );
}
