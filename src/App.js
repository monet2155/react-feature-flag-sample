import { useFeature, useFeatureFlagDetail } from "@hackler/react-sdk"
import FirebaseSample from "./FirebaseSample";

export default function App() {
  const dicision = useFeatureFlagDetail(4);

  const featureOn = dicision.isOn;
  const parameterValue = dicision.get("color", "red")
  return(
    <div>
      {
        featureOn ? <h1>on</h1> : <h1>off</h1>
      }
      <FirebaseSample/>
    </div>
  )
}