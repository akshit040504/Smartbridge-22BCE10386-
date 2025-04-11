export default function Button() {
  return (
    <button
      className="bg-blue-500 text-white rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-blue-700"
      onClick={() => console.log("Button clicked!")}
    >
      Click Me
    </button>
  );
}
