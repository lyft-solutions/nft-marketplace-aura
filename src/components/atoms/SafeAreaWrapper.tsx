import React from "react";

const SafeAreaWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-[60px] md:pt-[40px]">
      {children}
    </div>
  );
};

export default SafeAreaWrapper;
