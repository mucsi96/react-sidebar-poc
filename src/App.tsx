import React from "react";
import "./styles.css";
import { Main } from "./Main";
import { SidebarProvider } from "./SidebarProvider";
import { TriggerA } from "./TriggerA";
import { TriggerB } from "./TriggerB";

export default function App() {
  return (
    <SidebarProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Main />
        <TriggerA />
        <TriggerB />
      </div>
    </SidebarProvider>
  );
}
