# Mindfulness App

A modern React frontend for a Mindfulness App supporting onboarding, dashboard, mentor booking, mindfulness exercises, journal, growth reports, notifications, and settings/profile.

## Features
- **Onboarding**: Welcome Screen → Profile Setup → Home (Dashboard)
- **Home Dashboard**: Daily wellness check-in, progress summary, main navigation
- **Book Mentor Session**: Directory, scheduling, pre-session questionnaire
- **Mindfulness Exercises**: Guided stories, breathing, reflection, psychometric tests
- **Personal Journal**: Daily reflections, prompted questions
- **Growth Reports**: Student & institution views with analytics
- **Notifications**: Reminders, suggestions, check-ins
- **Settings/Profile**: Edit profile, preferences, privacy

## Navigation Flow
1. **Welcome Screen**: Intro and role-based sign up options + log in
2. **Profile Setup**: Role selection, basic info, preferences → navigates to Home
3. **Login**: Email/password → navigates to Home
4. **Home (Dashboard)**: Wellness check-in, progress summary, navigation to all features
5. From Home: Access Book Mentor, Exercises, Journal, Growth Reports, Notifications, Settings

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

## Folder Structure
- `src/pages/` — Main app pages (Welcome, ProfileSetup, Home, etc.)
- `src/components/` — Shared UI components
- `src/routes/` — App routing
- `src/styles/` — App styles

## Notes
- Follows the specified user navigation summary exactly
- Simple, clear flow with page separation
- Placeholder components for all features
- Ready for expansion with real data and styling
