import Layout from "@/app/template";
import Card from "./Card";
import { fadeIn } from "@/lib/motion";

function Achievements() {
  return (
    <Layout variant={
      fadeIn('up', 'spring', 0.5, 1)
    }>
      <div style={{
        backgroundImage: "url('/images/achievementsBackground.png')",
        backgroundSize: "cover",
      }} className="flex justify-center pb-16 pt-4 md:pt-0">
        <div className="md:flex md:items-center md:gap-x-4 space-y-8 md:space-y-4 md:p-24">
          <div className="space-y-8 md:space-y-4 md:w-96 w-80">
            <Card tag="Anonymity" title="Register anonymously without KYC" link="/" />
            <Card tag="Anti-DDoS" title="Robust firewall protection for enhanced security" link="/" />
            <Card tag="Automatic installation" title="Instant server deployment in seconds" link="/" />
          </div>
          <div className="space-y-8 md:space-y-4 md:w-96 w-80">
            <Card tag="Security" title="Your data will be always remain confidential" link="/" />
            <Card tag="Cheap" title="Cost-effective plans to suit for every budget" link="/" />
            <Card tag="Intuitive Panel" title="User-friendly control panel with all necessary options" link="/" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Achievements;