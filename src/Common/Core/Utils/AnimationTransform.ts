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

  reshape: (
    startWidth: string,
    endWidth: string,
    startMargin: string,
    endMargin: string,
  ) => keyframes`
    from {
      width: ${startWidth};
      margin-left: ${startMargin};
    }
    to {
      width: ${endWidth};
      margin-left: ${endMargin};
    }
  `,
} as const;

export default AnimationTransform;
