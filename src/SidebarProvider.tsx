import React, {
  createContext,
  ReactNode,
  FC,
  useState,
  useMemo,
  useContext
} from "react";

type SidebarContext = {
  push: (content: ReactNode, title: string) => void;
  replace: (content: ReactNode, title: string) => void;
  pop: () => void;
  empty: () => void;
  title?: string;
  content?: ReactNode;
};

type SidebarHistory = { content: ReactNode; title: string }[];

const SidebarContext = createContext<SidebarContext | undefined>(undefined);

export const SidebarProvider: FC = ({ children }) => {
  const [history, setHistory] = useState<SidebarHistory>([]);

  const value = useMemo<SidebarContext>(
    () => ({
      push(content: ReactNode, title: string) {
        setHistory(history => [...history, { content, title }]);
      },
      replace(content: ReactNode, title: string) {
        setHistory(history => [...history.slice(0, -1), { content, title }]);
      },
      pop() {
        setHistory(history => history.slice(0, -1));
      },
      empty() {
        setHistory([]);
      },
      title: history.length ? history[history.length - 1].title : undefined,
      content: history.length ? history[history.length - 1].content : undefined
    }),
    [history]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContext => {
  const context = useContext(SidebarContext);

  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return context;
};
