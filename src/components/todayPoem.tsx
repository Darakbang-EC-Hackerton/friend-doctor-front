export default function TodayPoem() {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-lg font-bold text-green-600 text-center mb-2 ">
        Today's Poem
      </h2>
      <div className="bg-white rounded-xl p-4 shadow-md">
        <h3 className="text-xl font-semibold text-gray-800">Title</h3>
        <p className="text-right text-gray-500 mb-4">author</p>
        <p className="text-gray-700">content</p>
      </div>
    </div>
  );
}
