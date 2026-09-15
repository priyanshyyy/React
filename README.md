# 🎬 StreamFlix

A Netflix-inspired movie browser built with React — created as a learning project to practice modern frontend development, authentication, and cloud data storage.

**[Live Demo](https://react-q6cjswk1j-priyanshi-feb0.vercel.app)**

## Features

- 🎞️ Browse trending movies with a Netflix-style hero banner and scrollable rows
- 🎭 Movies categorized by genre (Action, Comedy, Horror, Romance, Animation)
- 🔍 Live search with debounced input (no wasted API calls while typing)
- ▶️ Click any movie to watch its trailer in a modal popup
- 🔐 Google Sign-In with Firebase Authentication
- 👤 Persistent login with profile photo displayed in navbar
- ❤️ Add/remove movies to a personal watchlist ("My List") saved per-user in the cloud
- 📱 Fully responsive — works on desktop, tablet, and mobile
- ⚡ Fast loading states with skeleton placeholders
- 🎨 Custom warm gold/navy color theme

## Tech Stack

- **React** (Vite) — component-based UI
- **React Router** — client-side routing
- **Context API** — global state for auth and watchlist
- **Firebase Authentication** — Google sign-in
- **Firebase Firestore** — per-user cloud watchlist storage
- **TMDB API** — real movie data, posters, and trailers
- **CSS** — custom styling, Flexbox layout, responsive media queries

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/priyanshyyy/React.git
   cd React/streamflix
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Get a free API key from [TMDB](https://www.themoviedb.org/settings/api) and create a Firebase project at [Firebase Console](https://console.firebase.google.com), enabling Authentication (Google provider) and Firestore Database.

4. Create a `.env` file in the project root with:
   ```
   VITE_TMDB_API_KEY=your_tmdb_key_here
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

5. Run the dev server:
   ```bash
   npm run dev
   ```

6. Open `http://localhost:5173` in your browser.

## What I Learned

This project was built phase-by-phase to practice:
- React hooks (`useState`, `useEffect`, custom hooks like `useDebounce`)
- Component composition and prop drilling vs. Context API
- Working with a real third-party REST API
- Client-side routing with React Router
- Firebase Authentication (Google sign-in) and session persistence
- Cloud data storage with Firestore, including per-user security rules
- Responsive, mobile-first CSS design
- Git version control (including recovering from an accidentally committed API key!)

## Screenshots

*(Add a screenshot or two of your app here once deployed — drag and drop images directly into the GitHub README editor)*

---

Built by [Priyanshi Srivastava](https://github.com/priyanshyyy) as a learning project. Not affiliated with Netflix — just inspired by its design.