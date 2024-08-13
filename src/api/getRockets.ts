import { client } from "../utils/fetchClient";
import Rocket from "../types/Rocket";

export const getRockets = () => {
  return client.get<Rocket[]>("/dragons");
};

