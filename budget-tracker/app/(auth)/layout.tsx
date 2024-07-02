import React from "react";
import Logo from "@/components/Logo";

function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center ">
      <Logo />
        <div className="mt12">
            {children}
        </div>
    </div>
  )
}

export default layout;
