import { createContext, useContext, useState, ReactNode } from "react";

// Define sorting state type
interface SortContextType {
  sortField: string;
  sortDirection: "asc" | "desc";
  setSortField: (field: string) => void;
  toggleSortDirection: () => void;
}

// Create context with default values
const SortContext = createContext<SortContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const SortProvider = ({ children }: Props) => {
  const [sortField, setSortField] = useState<string>(""); // Default empty
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Function to toggle sorting direction
  const toggleSortDirection = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <SortContext.Provider
      value={{ sortField, sortDirection, setSortField, toggleSortDirection }}
    >
      {children}
    </SortContext.Provider>
  );
};

// Custom hook to use sorting context
export const useSort = () => {
  const context = useContext(SortContext);
  if (!context) {
    throw new Error("useSort must be used within a SortProvider");
  }
  return context;
};
