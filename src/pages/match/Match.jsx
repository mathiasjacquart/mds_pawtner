import MatchCard from "./MatchCard";
import { useParams } from "react-router-dom";
import animals from "../../../data/animals.json";
export default function Match() {
  const { userId } = useParams();
  const currentUser = animals.find((animal) => animal.id === parseInt(userId));
  const user = currentUser || animals[0];
  console.log("User ID from URL:", userId);
  console.log("Current user:", user);
  return (
    <div className="py-10">
      <MatchCard />
    </div>
  );
}
