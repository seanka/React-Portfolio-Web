import { initializeApp } from "firebase/app";
import { Firestore, collection, getDocs, getFirestore } from "firebase/firestore";

import { FirebaseConfig } from "./FirebaseConfig";

interface props {
  col: string;
}

export function BaseRemote() {
  async function requestCollection(props: props) {
    try {
      const { col } = props;

      const db = firestore();
      const data = await getDocs(collection(db, col));

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
