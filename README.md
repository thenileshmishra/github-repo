# GitHub Repo Explorer

A modern web application built with React, TypeScript, and the GitHub API that allows users to search and explore GitHub repositories with a beautiful, responsive interface.

## Features

- 🔍 Search GitHub repositories with real-time results
- 📱 Responsive design that works on all devices
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast and efficient search using GitHub's API
- 📊 View repository details including stars, forks, and language
- 🔄 Infinite scroll pagination for search results
- 🎯 Type-safe development with TypeScript

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- GitHub REST API
- React Router DOM
- React Icons

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later
- A GitHub account (for API access)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/github-repo-explorer.git
   cd github-repo-explorer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your GitHub API token:
   ```
   VITE_GITHUB_TOKEN=your_github_token_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── services/      # API services
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [GitHub REST API](https://docs.github.com/en/rest)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Tailwind CSS](https://tailwindcss.com/)
