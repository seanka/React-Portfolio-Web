import { initializeApp, getApps, getApp } from "firebase/app";
import {
  Firestore,
  collection,
  getDocs,
  initializeFirestore,
  orderBy,
  persistentLocalCache,
  query,
  where,
} from "firebase/firestore";

import { FirebaseConfig } from "./FirebaseConfig";

import { RemoteCollectionRequest } from "../../../Domain/Entities/Core/RemoteCollectionRequest";

export function BaseRemote() {
  async function requestCollection(props: RemoteCollectionRequest) {
    try {
      const { col, order, sort, whereCondition } = props;

      const db = firestore();
      const colRef = collection(db, col);

      let q = query(colRef);

      if (order) {
        q = query(q, orderBy(order, sort));
      }

      whereCondition?.forEach((condition) => {
        q = query(
          q,
          where(condition.field, condition.operator, condition.value),
        );
      });

      const data = await getDocs(q);
      return data;
    } catch (error: any) {
      console.error("Firebase fetch error:", error);
      throw new Error(`Unexpected Error While Fetching Data: ${error.message}`);
    }
  }

  return {
    requestCollection,
  };
}

let firestoreInstance: Firestore | null = null;

export function firestore(): Firestore {
  if (firestoreInstance) return firestoreInstance;

  if (!FirebaseConfig || typeof FirebaseConfig !== "object") {
    throw new Error("FirebaseConfig is missing or invalid.");
  }

  const app = getApps().length === 0 ? initializeApp(FirebaseConfig) : getApp();

  firestoreInstance = initializeFirestore(app, {
    localCache: persistentLocalCache(),
  });

  return firestoreInstance;
}
