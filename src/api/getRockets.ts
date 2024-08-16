import { client } from "../utils/fetchClient";
import Rocket from "../types/Rocket";

export const getRockets = async (): Promise<Rocket[]> => {
  return client.get<Rocket[]>("/dragons");
};

export const getRocket = async (id: string): Promise<Rocket | null> => {
  try {
    const response = await client.get<Rocket>(`/dragons/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching rocket:", error);
    return null;
  }
};

