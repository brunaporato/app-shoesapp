import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "Bruna Porato",
    user_email: "brunaporato@gmail.com",
  });
}