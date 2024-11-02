import { Poem } from "../types/types";
import apiFetch from "./apiFetch";

export const fetchPoems = async (): Promise<Poem[]> => {
  return await apiFetch("/poems");
};

export const postEmotion = async (memberId: number, type: string) => {
  try {
    const response = await apiFetch("/emotions", {
      method: "POST",
      body: JSON.stringify({
        member_id: memberId,
        type,
      }),
    });

    return response;
  } catch (error) {
    console.error("Error posting emotion data:", error);
    throw error;
  }
};
