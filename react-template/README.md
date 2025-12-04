# React + Vite + Tailwind + CRXJS (HMR) Template for Chrome Extensions

A modern, production-ready template for building Chrome extensions using React, TypeScript, Vite, and Tailwind CSS v4 with Hot Module Replacement (HMR) support.

## Features

- ⚡ **Vite** - Lightning fast build tool with HMR
- ⚛️ **React 19** - Latest React with TypeScript support
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework
- 🔧 **TypeScript** - Type-safe development
- 📦 **@crxjs/vite-plugin** - Seamless Chrome extension development
- 🎯 **Separated Components** - Organized structure for popup, options, background, and content scripts
- 🪝 **Git Hooks** - Automatic code formatting on push (via Husky)
- ✨ **Prettier** - Code formatting
- 🔍 **ESLint** - Code linting

## Project Structure

```
react-template/
├── src/
│   ├── popup/          # Extension popup UI
│   │   ├── Popup.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── options/        # Options page UI
│   │   ├── Options.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── background/     # Service worker
│   │   └── index.ts
│   ├── content/        # Content scripts
│   │   └── index.ts
│   └── assets/         # Static assets
├── public/
│   └── images/         # Extension icons
├── manifest.json        # Chrome extension manifest
├── popup.html          # Popup entry point
├── options.html        # Options page entry point
└── vite.config.ts      # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone or download this template
2. Install dependencies:

```bash
npm install
```

3. Initialize git hooks (if not already done):

```bash
npm run prepare
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

This will:

- Start Vite dev server
- Watch for file changes
- Enable Hot Module Replacement
- Generate the extension in the `dist/` folder

### Loading the Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select the `dist/` folder from this project
5. Your extension is now loaded!

**Note:** After making changes, click the refresh icon on the extension card to reload it.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The built extension will be in the `dist/` folder, ready to be packaged or uploaded to the Chrome Web Store.

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run fmt` - Format code with Prettier
- `npm run preview` - Preview production build locally

## Git Hooks

This project uses [Husky](https://typicode.github.io/husky/) to automatically run code formatting before pushing to git.

### Setup

Git hooks are automatically set up when you run `npm install` (via the `prepare` script).

### Pre-push Hook

The `.husky/pre-push` hook automatically runs `npm run fmt` before every push, ensuring all code is properly formatted.

To manually format your code:

```bash
npm run fmt
```

## Configuration

### Tailwind CSS

Tailwind CSS v4 is configured via `@tailwindcss/vite` plugin. No separate config file is needed unless you want custom configuration.

Import Tailwind in your CSS files:

```css
@import "tailwindcss";
```

### Prettier

Prettier configuration is in `.prettierrc`:

```json
{
  "tabWidth": 2,
  "useTabs": false
}
```

### ESLint

ESLint configuration is in `eslint.config.js` with React and TypeScript support.

### Manifest

Edit `manifest.json` to customize your extension:

- Change `name`, `version`, `description`
- Update `icons` paths
- Modify `permissions` as needed
- Adjust `action`, `options_page`, `background`, and `content_scripts` configurations

## Development Tips

1. **HMR**: Changes to React components will hot-reload automatically
2. **TypeScript**: Full type checking with `tsc -b`
3. **Styling**: Use Tailwind utility classes directly in your components
4. **Chrome APIs**: Use `@types/chrome` for TypeScript support
5. **Storage**: Use `chrome.storage` API (already included in permissions)

## Troubleshooting

### Extension not loading

- Make sure you're loading the `dist/` folder, not `src/`
- Check the browser console for errors
- Verify `manifest.json` is valid

### HMR not working

- Ensure you're running `npm run dev`
- Check that the extension is reloaded after initial load
- Some changes (like manifest updates) require a full reload

### Styles not applying

- Verify Tailwind is imported in your CSS file
- Check that classes are spelled correctly (e.g., `bg-gray-500` not `bg-grey-500`)
- Restart the dev server if needed

## License

MIT

## Contributing

Feel free to submit issues and enhancement requests!
