import { useParams } from "react-router-dom";
import Details from "../components/Details";

export default function DetailPage() {
  const param = useParams();

  return <Details id={param.pokemonId} />;
}
