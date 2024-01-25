"use client";

import { NextUIProvider } from "@nextui-org/react";
import TodoProvider from "./TodoProvider";

const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <TodoProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </TodoProvider>
  );
};

export default Providers;
