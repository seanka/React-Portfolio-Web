import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { LocalStorageKey } from "../../Common/Enum/LocalStorage";
import { RouteNavigation } from "../../Common/Enum/RouteNavigation";

const firebaseConfig = {
  apiKey: "AIzaSyDcF-ndGgwId7ZGXTB2zskOzzjUs2e5egM",
  authDomain: "react-portofolio-web.firebaseapp.com",
  databaseURL: "https://react-portofolio-web-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-portofolio-web",
  storageBucket: "react-portofolio-web.appspot.com",
  messagingSenderId: "353163840392",
  appId: "1:353163840392:web:e7dd909baa58003d13c83d",
};

function Root() {
  // useEffect(() => {
  //   const app = initializeApp(firebaseConfig);
  //   const db = getFirestore(app);

  //   console.log(db);

  //   localStorage.setItem(LocalStorageKey.database, JSON.stringify(db));
  // }, []);

  return (
    <>
      <Navigate to={RouteNavigation.portfolio} />
      <Outlet />;
    </>
  );
}

export default Root;
