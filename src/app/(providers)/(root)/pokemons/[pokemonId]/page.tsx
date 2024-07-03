import Page from "@/components/Page/Page";
import PokemonDetail from "../../_components/PokemonDetail";

interface PoketmonDetailPageProps {
  params: { pokemonId: number };
}

function PokemonDetailPage({ params }: PoketmonDetailPageProps) {
  return (
    <Page>
      <PokemonDetail params={params} />
    </Page>
  );
}

export default PokemonDetailPage;
