import React from "react";

function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center ">
        <div className="mt12">
            {children}
        </div>
    </div>
  )
}

export default layout;
