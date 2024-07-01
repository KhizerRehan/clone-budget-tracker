import React from "react";
import { PiggyBank } from "lucide-react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 my-2">
      <PiggyBank className="w-10 h-10 stroke stroke-amber-500 stroke-[1.2]" />
      <p className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-2xl leading-tight tracking-tighter text-transparent">
        Budget Tracker
      </p>
    </a>
  );
}

export default Logo;
