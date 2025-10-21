# Smart Locker Mobile

Mobile application for the Smart Locker Management System. It is being built with Expo, React Native, and TypeScript. Uses Firebase for authentication. This repository is an early skeleton and will evolve in the coming weeks.

## Stack
- Expo (React Native tooling and dev runtime)
- React Native (mobile UI framework)
- TypeScript (type safety)
- Firebase Auth (email/password)
- Firestore and Cloud Functions (planned)
- Stripe (planned)

## Local setup

1. npm install

2. Create `.env` from Firebase Web app config

3. Start the app with 'npx expo start'

4. Open with Expo Go on a phone on the same network.

## Development Progress
- [x] Expo + TypeScript project initialized
- [x] File-based routing with (`expo-router`)
- [x] Firebase Auth wired
- [ ] Firestore collections and security rules
- [ ] Cloud Functions for reservations and unlock tokens
- [ ] Stripe payments
- [ ] Locker list UI and real-time availability

## Design Progress
- [x] Login/Sign Up UI implemented (simple but great starting point)
- [ ] Mock UI designed
- [ ] Mock UI implemented