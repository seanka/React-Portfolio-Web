import { useEffect, useState } from "react";

export function usePageRefresh() {
  const [isRefreshed, setIsRefreshed] = useState(false);

  useEffect(() => {
    const entries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    if (entries.length > 0) {
      const navEntry = entries[0];
      if (navEntry.type === "reload") {
        setIsRefreshed(true);
      } else {
        setIsRefreshed(false);
      }
    }
  }, []);

  return isRefreshed;
}
