import { initializeApp } from "firebase/app";
import { Firestore, collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";

import { FirebaseConfig } from "./FirebaseConfig";

interface props {
  col: string;
  order?: string;
  sort?: "asc" | "desc";
}

export function BaseRemote() {
  async function requestCollection(props: props) {
    try {
      const { col, order = "", sort } = props;

      const db = firestore();

      const colRef = collection(db, col);
      const q = query(colRef, orderBy(order, sort));

      const data = await getDocs(q);

      return data;
    } catch (error) {
      throw new Error(`Unexpected Error While Fetching Data ${error}`);
    }
  }

  return {
    requestCollection,
  };
}

function firestore(): Firestore {
  const app = initializeApp(FirebaseConfig);
  const fs = getFirestore(app);

  return fs;
}
