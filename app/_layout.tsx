import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function RootLayout() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => onAuthStateChanged(auth, setUser), []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="(main)/home" />
      ) : (
        <Stack.Screen name="(auth)/login" />
      )}
    </Stack>
  );
}