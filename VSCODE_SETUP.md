# One-Click VS Code Setup for Windows

This setup script configures a complete development environment for the Mason Besmer website with hot reload capabilities and all required tools.

## Quick Start

### Option 1: Double-click setup (Easiest)

1. Double-click `setup.bat` in Windows Explorer
2. Follow the prompts
3. VS Code will open automatically with the workspace configured

### Option 2: PowerShell (Advanced)

1. Right-click in the project folder and select "Open PowerShell window here"
2. Run the setup script:
   ```powershell
   .\setup.ps1
   ```
3. For automatic installation without prompts:
   ```powershell
   .\setup.ps1 -SkipConfirmation
   ```

## What the Setup Script Does

### 🔍 System Checks

- Checks for Node.js installation (installs LTS if missing)
- Checks for Visual Studio Code installation (installs if missing)
- Verifies npm is available and working

### 🛠️ VS Code Configuration

- Installs recommended extensions for Next.js development
- Configures workspace settings for optimal development experience
- Sets up debugging configurations for both client and server-side code
- Configures tasks for common development operations

### 📦 Project Setup

- Installs all project dependencies
- Verifies the project builds successfully
- Sets up hot reload development server

### 🎯 Recommended Extensions Installed

- **Prettier** - Code formatting
- **ESLint** - Code linting and error detection
- **Tailwind CSS IntelliSense** - CSS class autocomplete
- **TypeScript Hero** - Enhanced TypeScript support
- **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
- **Path Intellisense** - File path autocompletion
- **Error Lens** - Inline error display
- **TODO Tree** - TODO comment highlighting
- **npm Scripts** - npm script runner integration
- **npm Intellisense** - npm module autocomplete
- **Color Highlight** - CSS color visualization
- **Code Spell Checker** - Spell checking for code
- **Material Icon Theme** - Better file icons

## Development Workflow

### Starting Development

```bash
npm run dev
```

This starts the Next.js development server with hot reload at `http://localhost:3000`

### Available Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### VS Code Features

- **Hot Reload**: Changes are automatically reflected in the browser
- **IntelliSense**: Full TypeScript and React autocomplete
- **Debugging**: Built-in debugger for both client and server-side code
- **Integrated Terminal**: Run commands directly in VS Code
- **Git Integration**: Source control built into the editor
- **Error Highlighting**: Real-time error detection and suggestions

## Workspace Configuration

The setup creates a `.code-workspace` file that configures:

- **Editor Settings**: Consistent formatting, tab size, and code style
- **File Associations**: Proper syntax highlighting for all file types
- **Task Runner**: Quick access to npm scripts
- **Debug Configuration**: Ready-to-use debugging setups
- **Extension Recommendations**: Automatic suggestion of useful extensions

## Troubleshooting

### Script Execution Policy Error

If you get an execution policy error, run PowerShell as Administrator and execute:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Node.js Installation Issues

- The script downloads Node.js LTS from the official website
- If installation fails, try running the script as Administrator
- Alternatively, manually download from [nodejs.org](https://nodejs.org/)

### VS Code Installation Issues

- The script downloads VS Code from the official Microsoft website
- If installation fails, try running the script as Administrator
- Alternatively, manually download from [code.visualstudio.com](https://code.visualstudio.com/)

### Extension Installation Issues

- Extensions are installed automatically when VS Code is detected
- If an extension fails to install, you can manually install it from the Extensions marketplace
- The workspace configuration will recommend missing extensions

### Project Dependencies Issues

If `npm install` fails:

1. Delete `node_modules` folder and `package-lock.json`
2. Run `npm install` again
3. Ensure you have a stable internet connection

## Manual Setup (Alternative)

If the automatic setup doesn't work, you can set up manually:

1. **Install Node.js**: Download from [nodejs.org](https://nodejs.org/)
2. **Install VS Code**: Download from [code.visualstudio.com](https://code.visualstudio.com/)
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Open Workspace**:
   ```bash
   code masonbesmer.code-workspace
   ```
5. **Install Extensions**: VS Code will prompt you to install recommended extensions

## Next Steps

After setup is complete:

1. The workspace should open automatically in VS Code
2. Start the development server: `Ctrl+Shift+P` → "Tasks: Run Task" → "dev"
3. Open your browser to `http://localhost:3000`
4. Start coding! Changes will hot reload automatically

## Getting Help

- Check the VS Code integrated terminal for error messages
- Use the debugger by pressing `F5` to debug server-side code
- Use the "Next.js: debug full stack" configuration for complete debugging
- Extensions provide helpful error messages and suggestions inline
