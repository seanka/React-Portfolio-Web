import { WhereFilterOp } from "firebase/firestore";

export interface RemoteCollectionRequest {
  col: string;
  docs?: string;
  order?: string;
  sort?: "asc" | "desc";
  whereCondition?: QueryWhereCondition[];
}

interface QueryWhereCondition {
  field: string;
  operator: WhereFilterOp;
  value: any;
}
