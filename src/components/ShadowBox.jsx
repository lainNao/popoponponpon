import React from "react";
import "twin.macro";

export const ShadowBox = ({ children }) => (
  <div tw="py-3 px-4 bg-white rounded-lg shadow-xl">
    <div tw="flex">
      {children}
    </div>
  </div>
);
