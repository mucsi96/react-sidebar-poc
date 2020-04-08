import React, { FC, useCallback } from "react";
import { useSidebar } from "./SidebarProvider";

export const TriggerB: FC = () => {
  const { push } = useSidebar();

  const handleClick = useCallback(() => {
    push(<span>B content</span>, "test B title");
  }, [push]);

  return (
    <button type="button" onClick={handleClick}>
      Open B sidebar
    </button>
  );
};
