export default function VerificationBadge({ size = "small" }: { size?: "small" | "medium" }) {
    const dimensions = size === "small" ? "w-4 h-4" : "w-5 h-5";
    return (
      <div className={`${dimensions} bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
          strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    );
  }
  