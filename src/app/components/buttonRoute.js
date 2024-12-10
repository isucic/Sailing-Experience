export default function ButtonRoute({ label, onClick, bgcolor, fontcolor }) {
  return (
    <button
      onClick={onClick}
      className={`bg-${bgcolor} text-${fontcolor} text-xs font-medium uppercase py-1 px-3 rounded-lg`}
    >
      {label}
    </button>
  );
}
