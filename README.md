# mosaic-next

## tCredex Admin Console

A modern, responsive admin console built with Next.js 16, TypeScript, and Tailwind CSS for managing the tCredex platform.

## Features

### 🔐 Authentication
- Secure login page with form validation
- Session management
- Protected admin routes

### 📊 Dashboard
- Key performance metrics (Users, Transactions, Revenue)
- Real-time activity feed
- Growth indicators and analytics

### 👥 User Management
- Complete user listing with search
- Filter by user status (Active/Inactive)
- User role management
- Quick actions (Edit, Activate/Deactivate, Delete)

### ⚙️ Settings
- General configuration (Site Name, Admin Email)
- Security settings (2FA, Login Attempts, Session Timeout)
- Notification preferences
- System maintenance mode

### 🎨 Modern UI/UX
- Fully responsive design
- Mobile-friendly navigation
- Clean, professional interface
- Tailwind CSS styling

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Library**: React 19
- **Build Tool**: Turbopack

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mikequalizza-tech/mosaic-next.git
cd mosaic-next
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Demo Credentials

- **Username**: `admin`
- **Password**: `admin123`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
mosaic-next/
├── app/
│   ├── admin/
│   │   ├── dashboard/      # Dashboard page
│   │   ├── users/          # User management
│   │   ├── settings/       # Settings page
│   │   └── layout.tsx      # Admin layout with navigation
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Login page
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Development Notes

### Authentication
The current implementation uses localStorage for session management. In production, this should be replaced with secure token-based authentication (JWT, OAuth, etc.).

### API Integration
The demo uses static data. Replace with actual API calls to your backend:
- User management endpoints
- Dashboard metrics API
- Settings configuration API

### Environment Variables
Create a `.env.local` file for environment-specific configuration:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## Building for Production

```bash
npm run build
npm start
```

The application will be optimized and ready for deployment.

## Deployment

Deploy to Vercel, Netlify, or any hosting platform that supports Next.js:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mikequalizza-tech/mosaic-next)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC

## Support

For issues or questions, please open an issue in the GitHub repository.

