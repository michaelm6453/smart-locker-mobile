import "dotenv/config";

export default {
  expo: {
    name: "smart-locker-mobile",
    slug: "smart-locker-mobile",
    scheme: "smartlocker",
    extra: {
      FIREBASE_API_KEY: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
      // will add other Firebase config values here as needed
    },
  },
};