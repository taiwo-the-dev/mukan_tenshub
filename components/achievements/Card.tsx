import { cn } from "@/lib/utils";

function Card({
  tag,
  title,
  link,
  className
}: {
  tag: string;
  title: string;
  link: string;
  className?: string;
}) {
  return (
    <div className={cn(`font-segoe p-6 flex flex-col justify-between`, className ?? '')} style={{
      border: "1px solid rgba(253, 253, 253, 0.30)",
      borderRadius: "32px",
      background: "rgba(255, 255, 255, 0.10)",
      backdropFilter: "blur(10px)",
    }}>
      <div>
        <div style={{
          background: "linear-gradient(90deg, #FCA36E 0%, #FB61C1 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>{tag}</div>
        <div className="text-2xl font-bold">{title}</div>
      </div>
      {/* <a className="flex items-center justify-end md:justify-start gap-x-3" href={link}>
        <span>Read more</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <g opacity="0.5">
            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#FDFDFD"/>
            <path d="M11.1147 20.8851L20.8856 11.1143" stroke="#FDFDFD" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.1147 11.1143H20.8856V20.8852" stroke="#FDFDFD" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      </a> */}
    </div>
  );
}

export default Card;