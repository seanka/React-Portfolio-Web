import { ImageProperty } from "../../../Common/Interface/ImageProperty";

export interface HomeRunning {
  position?: number;
  categoryPublished?: boolean;
  listData?: RunningData[];
  data?: Record<string, RunningData>;
  accumulation?: RunningAccumulation;
}

export interface RunningAccumulation {
  step?: number;
  distance?: number;
}

export interface RunningData {
  title?: string;
  peak?: number;
  mileage?: number;
  race?: RunningRace[];
}

export interface RunningRace {
  virgin?: boolean;
  position?: number;
  time?: string;
  title?: string;
  location?: string;
  category?: string;
  image?: ImageProperty[];
}
