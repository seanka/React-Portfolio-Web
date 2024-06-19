import { useState, useEffect, useRef, RefObject } from "react";

import { Dimension } from "../Interface/Dimension";

export function useElementDimension(): [RefObject<HTMLDivElement>, Dimension] {
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<Dimension>({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, [ref.current]);

  return [ref, dimensions];
}
