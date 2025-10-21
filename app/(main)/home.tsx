import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { router } from "expo-router";
import Screen from "../../components/Screen";
import Button from "../../components/Button";
import { colors, spacing, radius, type } from "../../lib/theme";

export default function Home() {
  async function doSignOut() {
    await signOut(auth);
    router.replace("/(auth)/login");
  }

  return (
    <Screen>
      <View style={styles.card}>
        <Text style={[type.h1, styles.title]}>Welcome</Text>
        <Text style={[type.small, styles.subtitle]}>
          Lockers and reservations will show here soon.
        </Text>

        <View style={{ height: spacing.lg }} />
        <Button title="Sign Out" onPress={doSignOut} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.xl,
  },
  title: { color: colors.text, textAlign: "center" },
  subtitle: { color: colors.subtext, textAlign: "center", marginTop: spacing.xs },
});