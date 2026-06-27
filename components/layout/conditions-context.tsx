"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  fetchGuestConditions,
  type GuestConditions,
} from "@/lib/weather";

type ConditionsContextValue = {
  conditions: GuestConditions | null;
  loading: boolean;
};

const ConditionsContext = createContext<ConditionsContextValue>({
  conditions: null,
  loading: true,
});

export const ConditionsProvider = ({ children }: { children: ReactNode }) => {
  const [conditions, setConditions] = useState<GuestConditions | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetchGuestConditions();
      setConditions(data);
      setLoading(false);
    };

    void load();
  }, []);

  return (
    <ConditionsContext.Provider value={{ conditions, loading }}>
      {children}
    </ConditionsContext.Provider>
  );
};

export const useConditions = () => useContext(ConditionsContext);
