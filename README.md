# The Active Sloth

A personal travel blog built with Next.js, TypeScript, and Contentful.

## About

The Active Sloth is a travel blog that combines adventure with relaxation, featuring travel tips, stories, and inspiration. The site is organized by categories and includes features like:

- Blog posts with rich content
- Travel tips and recommendations
- Photo galleries
- Featured and recent post sections

## Tech Stack

- **Frontend**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Contentful
- **Components**: Atomic Design pattern (atoms, molecules, organisms)

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm
- Contentful account with content model

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/active-sloth.git
cd active-sloth
```

2. Install dependencies
```bash
npm install
```

3. Create `.env.local` file with your Contentful credentials
```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token
```

4. Start the development server
```bash
npm run dev
```

### Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run cf:export` - Generate Contentful types

## Project Structure

- `app/` - Next.js pages using App Router
- `components/` - Reusable UI components
- `client/` - API clients and data fetching
- `interfaces/` - TypeScript interfaces
- `public/` - Static assets
- `utils/` - Utility functions

## Content Management

This project uses Contentful as a headless CMS. The content model includes:
- Blog posts
- Categories
- Tips
- Galleries
- Images

## License

[MIT](LICENSE)