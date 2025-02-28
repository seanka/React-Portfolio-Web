import { keyframes } from "@emotion/react";

const AnimationTransform = {
  slide: (start: string | undefined, end: string | undefined) =>
    keyframes`
       from {
        transform: translateX(${start});
      }
      to {
        transform: translateX(${end});
      }
    `,
} as const;

export default AnimationTransform;
