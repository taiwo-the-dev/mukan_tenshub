import About from "@/components/about";
import Achievements from "@/components/achievements";
import Banner from "@/components/banner";
import Collaborator from "@/components/collaborator";
import Infrastructure from "@/components/infra";
import Network from "@/components/network";
import Tokenomic from "@/components/tokenomic";
import Roadmap from "@/components/roadmap";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Banner />
      <Collaborator />
      <About />
      <Network />
      <Infrastructure />
      <Achievements />
      <Roadmap />
      <Tokenomic />
    </main>
  );
}
