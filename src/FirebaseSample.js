import { initializeApp } from "firebase/app";
import { fetchAndActivate, getRemoteConfig, getString } from "firebase/remote-config";
import { useEffect, useState } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyAH96Jw2m6D2RxHixVuHIjyYf8pgGNbXSc",
  authDomain: "react-feature-flag-sample.firebaseapp.com",
  projectId: "react-feature-flag-sample",
  storageBucket: "react-feature-flag-sample.appspot.com",
  messagingSenderId: "449212100081",
  appId: "1:449212100081:web:e4dcabbbc84d031229e850"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Remote Config and get a reference to the service
const remoteConfig = getRemoteConfig(app);
remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
remoteConfig.defaultConfig = {
  "color": "red"
};
export default function FirebaseSample() {
  const [color, setColor] = useState('');

  useEffect(() => {
    fetchAndActivate(remoteConfig)
    .then(() => {
        setColor(getString(remoteConfig,"color"))
      })
      .catch(() => {

      })
  }, []);
  return(
    <div>
      text color is {color}
    </div>
  )
}