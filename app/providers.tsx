"use client";

import { ThemeProvider } from "@/app/context/theme-context";
import { ModalProvider } from "@/app/context/modal-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  );
}
