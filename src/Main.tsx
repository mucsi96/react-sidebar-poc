import React, { FC } from "react";
import { SidebarRenderer } from "./SidebarRenderer";

export const Main: FC = () => {
  console.log("Main::render");

  return (
    <div>
      <SidebarRenderer />
    </div>
  );
};
