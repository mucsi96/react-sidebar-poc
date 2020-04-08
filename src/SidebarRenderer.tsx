import React, { FC, useCallback } from "react";
import { useSidebar } from "./SidebarProvider";

export const SidebarRenderer: FC = () => {
  const { title, content, pop } = useSidebar();
  const handleBackClick = useCallback(() => {
    pop();
  }, [pop]);

  if (!content) {
    return null;
  }

  return (
    <div>
      This is a Sidebar.
      <button type="button" onClick={handleBackClick}>
        {"<"}
      </button>
      <h1>title: {title}</h1>
      content: {content}
    </div>
  );
};
