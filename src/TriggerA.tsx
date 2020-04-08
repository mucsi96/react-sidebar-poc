import React, { FC, useCallback } from "react";
import { useSidebar } from "./SidebarProvider";

export const TriggerA: FC = () => {
  const { push } = useSidebar();

  const handleClick = useCallback(() => {
    push(<h2>A content</h2>, "test A title");
  }, [push]);

  console.log("TriggerA::render");

  return (
    <button type="button" onClick={handleClick}>
      Open A sidebar
    </button>
  );
};
