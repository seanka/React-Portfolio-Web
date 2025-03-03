import { initializeApp } from "firebase/app";
import {
  Firestore,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { AppCheckKey, FirebaseConfig } from "./FirebaseConfig";
import { ReCaptchaV3Provider, initializeAppCheck } from "firebase/app-check";

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

      whereCondition?.forEach(
        (condition) =>
          (q = query(
            q,
            where(condition.field, condition.operator, condition.value),
          )),
      );

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

  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(AppCheckKey),
    isTokenAutoRefreshEnabled: true,
  });

  const fs = getFirestore(app);

  return fs;
}
