export interface AspectRatio {
  small: { width: number; height: number };
  med: { width: number; height: number };
  big: { width: number; height: number };
}

export interface BoxAspectRatio {
  small: { size: number; borderRad?: number };
  med: { size: number; borderRad?: number };
  big: { size: number; borderRad?: number };
}
