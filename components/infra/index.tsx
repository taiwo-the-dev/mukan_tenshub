import Card from "./Card";
import Tag from "../Tag";
import { fadeIn } from "@/lib/motion";
import Layout from "@/app/template";

function Mission() {
  const cards = [
    {
      title: "CPU/GPU Rental",
      description: "TensorPro provides a GPU rental marketplace for high performance computing needs. Users can securely access rented NVIDIA and AMD GPUs through SSH or notebooks, and cluster them for distributed computing like ML model training.",
      index: "01",
      color: "#FCA36E"
    },
    {
      title: "Decentralized VPN",
      description: "TensorPro's decentralized, incentivized mixnet obscures all metadata, including IP addresses, making it impossible to tell anything about who is communicating and what data they’re sending.",
      index: "02",
      color: "#4DCAFF"
    },
    {
      title: "Bot Utility",
      description: "TensorPro integrates an advanced bot utility that greatly streamlines and optimizes the process of accessing and administrating computing resources on the platform, providing users with a powerful tool to easily harness and control available infrastructure.",
      index: "03",
      color: "#0DFC6C"
    },
    {
      title: "Nodes",
      description: "By offering cost-effective private RPC access, it ensures reliable and efficient engagement with the blockchain, catering to individual needs while benefiting from TensorPro's ultra-fast and robust technology.",
      index: "04",
      color: "#FCFF74"
    }
  ]

  return ( 
    <div
      id="infrastructure" className="px-12 flex justify-center">
      <div className="max-w-[1440px]">
        <div className="border-y-2 border-[#353539] md:flex md:justify-between py-8 space-y-4">
          <div className="space-y-4">
            <div className="flex justify-center flex-col items-center gap-y-2 md:items-start">
              <Tag text={`TensorPro`} />
              <div className="text-3xl md:text-4xl lg:text-5xl font-segoe font-bold">
                Our <span className="gradient-text">Infrastructure</span>
              </div>
            </div>
          </div>
          <div className="max-w-[429px] mx-auto md:mx-0">
            TensorPro <span className="text-[var(--Subtext,_#918DA4)] ">offers easy access to distributed computing and secure cloud storage, abstracting complexity for all users. Harness global CPU/GPU power to run demanding workloads and store files reliably. Browse privately, become a hosting node to earn rewards, and tap the full potential of distributed systems through one intuitive platform.</span>
          </div>
        </div>
        <Layout variant={
          fadeIn('down', 'spring', 0.5, 1)
        }>
        <div className="xl:flex xl:justify-center md:gap-x-9 md:grid md:grid-cols-2 xl:py-28 pb-8 space-y-8" style={{
        }}>
          {cards.map(({title, description, color, index: cardIndex}, index) => (
            <Card title={title} key={index} description={description} index={cardIndex} color={color} />
          ))}
        </div>
        </Layout>
      </div>
    </div>
  );
}

export default Mission;