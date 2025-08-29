# MindTracker

A comprehensive mindfulness and wellness tracking platform designed for educational institutions. Built with React, Vite, and featuring multi-language support.

## Features

- 🧘 **Mindfulness Exercises**: Guided meditations, breathing exercises, and reflection prompts
- 📝 **Digital Journaling**: Personal wellness tracking and reflection
- 👥 **Mentor System**: Student-mentor matching and session management
- 📊 **Analytics Dashboard**: Comprehensive insights for institutions
- 🌍 **Multi-language Support**: English and Hindi translations
- 🎨 **Responsive Design**: Works seamlessly across all devices
- 🔐 **Role-based Access**: Student, Mentor, and Admin roles

## Navigation Flow
1. **Welcome Screen**: Intro and role-based sign up options + log in
2. **Profile Setup**: Role selection, basic info, preferences → navigates to Home
3. **Login**: Email/password → navigates to Home
4. **Home (Dashboard)**: Wellness check-in, progress summary, navigation to all features
5. From Home: Access Book Mentor, Exercises, Journal, Growth Reports, Notifications, Settings

## Tech Stack

- **Frontend**: React 19, React Router DOM
- **Build Tool**: Vite
- **Styling**: CSS with CSS Variables for theming
- **Deployment**: Vercel

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Local Development

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd mindtracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to configure your deployment

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect the settings from `vercel.json`
5. Deploy!

### Environment Variables

If you need to set environment variables:

1. Copy `.env.example` to `.env.local`
2. Fill in your values
3. In Vercel dashboard, go to Settings > Environment Variables
4. Add your environment variables there

## Project Structure

```
src/
├── components/          # Reusable UI components
├── context/            # React Context providers (Auth, Language, Theme)
├── pages/              # Page components
├── routes/             # Route configuration
├── styles/             # Global styles
└── assets/             # Static assets
```

## User Roles

- **Student**: Access exercises, journaling, mentor booking, progress tracking
- **Mentor**: Session management, student progress monitoring, guidance tools
- **Admin**: Full platform access, analytics dashboard, user management

## Languages Supported

- English (default)
- Hindi (हिंदी)
- Tamil (தமிழ்) - Partial support

## Demo Credentials

- **Student**: `student@demo.com` / `password`
- **Mentor**: `mentor@demo.com` / `password`
- **Admin**: `admin@demo.com` / `password`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary.
