/* eslint-disable import/no-unresolved */
"use client";

import React, { createContext, useContext } from "react";
import { toast as hotToast } from "react-hot-toast";
import { CustomToast } from "@/components/ui/custom-toast";

type ToastType = "success" | "error";

interface ToastContextValue {
  showToast: (title: string, message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const showToast = (title: string, message: string, type: ToastType) => {
    hotToast.custom(() => (
      <CustomToast title={title} message={message} variant={type} />
    ));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}
