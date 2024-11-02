import { useEffect, useState } from "react";
import { Poem } from "../types/types";
import apiFetch from "../api/apiFetch";

export default function TodayPoem() {
  const [poem, setPoem] = useState<Poem | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadPoems = async () => {
      try {
        const response = await apiFetch("/poems");
        const data = await response.result;
        setPoem(data);
      } catch (error) {
        console.error("Failed to load poems:", error);
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };

    loadPoems();
  }, []);

  return (
    <div className="w-full max-w-md">
      <h2 className="text-lg font-bold text-green-600 text-center mb-2 ">
        Today's Poem
      </h2>
      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="w-full h-64 bg-gray-300 rounded-xl"></div>
        </div>
      ) : (
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="text-xl text-center font-semibold text-gray-800">
            {poem?.title}
          </h3>
          <p className="text-right text-gray-500 mb-4">{poem?.author}</p>
          <p className="text-gray-700 whitespace-pre-line">{poem?.content}</p>
        </div>
      )}
    </div>
  );
}
