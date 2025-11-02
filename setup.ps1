# Mason Besmer Website - One-Click VS Code Setup Script
# This script sets up a complete development environment for Windows

param(
    [switch]$SkipConfirmation,
    [switch]$Help
)

# Colors for console output
$Red = "`e[31m"
$Green = "`e[32m"
$Yellow = "`e[33m"
$Blue = "`e[34m"
$Magenta = "`e[35m"
$Cyan = "`e[36m"
$Reset = "`e[0m"

function Write-ColorText {
    param($Text, $Color)
    Write-Host "$Color$Text$Reset"
}

function Show-Help {
    Write-ColorText "Mason Besmer Website - One-Click VS Code Setup" $Cyan
    Write-Host ""
    Write-Host "This script sets up a complete development environment for the Mason Besmer website."
    Write-Host ""
    Write-Host "Options:"
    Write-Host "  -SkipConfirmation    Skip confirmation prompts for automatic installation"
    Write-Host "  -Help               Show this help message"
    Write-Host ""
    Write-Host "What this script does:"
    Write-Host "  1. Checks for and installs Node.js (if needed)"
    Write-Host "  2. Checks for and installs Visual Studio Code (if needed)"
    Write-Host "  3. Installs recommended VS Code extensions"
    Write-Host "  4. Sets up the development environment"
    Write-Host "  5. Installs project dependencies"
    Write-Host "  6. Opens the workspace in VS Code"
    Write-Host ""
    Write-Host "Usage:"
    Write-Host "  .\setup.ps1                    # Interactive setup with confirmations"
    Write-Host "  .\setup.ps1 -SkipConfirmation  # Automatic setup without prompts"
    Write-Host ""
}

if ($Help) {
    Show-Help
    exit 0
}

Write-ColorText "🚀 Mason Besmer Website - One-Click VS Code Setup" $Cyan
Write-ColorText "=================================================" $Cyan
Write-Host ""

# Check if running as administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")

if (-not $isAdmin) {
    Write-ColorText "⚠️  WARNING: Running without administrator privileges." $Yellow
    Write-ColorText "   Some installations may require elevated permissions." $Yellow
    Write-Host ""
}

# Function to check if a command exists
function Test-Command {
    param($Command)
    try {
        if (Get-Command $Command -ErrorAction SilentlyContinue) {
            return $true
        }
    }
    catch {
        return $false
    }
    return $false
}

# Function to get user confirmation
function Get-UserConfirmation {
    param($Message, $Default = $true)
    
    if ($SkipConfirmation) {
        return $true
    }
    
    $prompt = if ($Default) { "[Y/n]" } else { "[y/N]" }
    $response = Read-Host "$Message $prompt"
    
    if ([string]::IsNullOrWhiteSpace($response)) {
        return $Default
    }
    
    return $response -match "^[Yy]"
}

# Function to install Node.js
function Install-NodeJS {
    Write-ColorText "📦 Installing Node.js..." $Blue
    
    try {
        # Download and install Node.js LTS
        $nodeVersion = "20.11.0"
        $nodeUrl = "https://nodejs.org/dist/v$nodeVersion/node-v$nodeVersion-x64.msi"
        $nodeInstaller = "$env:TEMP\node-installer.msi"
        
        Write-Host "   Downloading Node.js v$nodeVersion..."
        Invoke-WebRequest -Uri $nodeUrl -OutFile $nodeInstaller -UseBasicParsing
        
        Write-Host "   Installing Node.js..."
        Start-Process -FilePath "msiexec.exe" -ArgumentList "/i", $nodeInstaller, "/quiet", "/norestart" -Wait
        
        # Remove installer
        Remove-Item $nodeInstaller -Force
        
        # Refresh environment variables
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
        
        Write-ColorText "✅ Node.js installed successfully!" $Green
        return $true
    }
    catch {
        Write-ColorText "❌ Failed to install Node.js: $($_.Exception.Message)" $Red
        return $false
    }
}

# Function to install Visual Studio Code
function Install-VSCode {
    Write-ColorText "🔧 Installing Visual Studio Code..." $Blue
    
    try {
        # Download and install VS Code
        $vscodeUrl = "https://code.visualstudio.com/sha/download?build=stable&os=win32-x64"
        $vscodeInstaller = "$env:TEMP\vscode-installer.exe"
        
        Write-Host "   Downloading VS Code..."
        Invoke-WebRequest -Uri $vscodeUrl -OutFile $vscodeInstaller -UseBasicParsing
        
        Write-Host "   Installing VS Code..."
        Start-Process -FilePath $vscodeInstaller -ArgumentList "/VERYSILENT", "/NORESTART", "/MERGETASKS=!runcode" -Wait
        
        # Remove installer
        Remove-Item $vscodeInstaller -Force
        
        # Refresh environment variables
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
        
        Write-ColorText "✅ Visual Studio Code installed successfully!" $Green
        return $true
    }
    catch {
        Write-ColorText "❌ Failed to install VS Code: $($_.Exception.Message)" $Red
        return $false
    }
}

# Function to install VS Code extensions
function Install-VSCodeExtensions {
    Write-ColorText "🔌 Installing VS Code extensions..." $Blue
    
    $extensions = @(
        "esbenp.prettier-vscode",
        "dbaeumer.vscode-eslint", 
        "bradlc.vscode-tailwindcss",
        "ms-vscode.vscode-typescript-next",
        "formulahendry.auto-rename-tag",
        "christian-kohler.path-intellisense",
        "ms-vscode.vscode-json",
        "usernamehw.errorlens",
        "gruntfuggly.todo-tree",
        "ms-vscode.vscode-npm-scripts",
        "christian-kohler.npm-intellisense",
        "naumovs.color-highlight",
        "streetsidesoftware.code-spell-checker",
        "pkief.material-icon-theme"
    )
    
    foreach ($extension in $extensions) {
        Write-Host "   Installing $extension..."
        try {
            & code --install-extension $extension --force 2>$null
        }
        catch {
            Write-ColorText "   ⚠️  Could not install $extension" $Yellow
        }
    }
    
    Write-ColorText "✅ VS Code extensions installation completed!" $Green
}

# Check Node.js installation
Write-ColorText "🔍 Checking Node.js installation..." $Blue
if (Test-Command "node") {
    $nodeVersion = & node --version 2>$null
    Write-ColorText "✅ Node.js is already installed: $nodeVersion" $Green
} else {
    Write-ColorText "❌ Node.js is not installed" $Red
    if (Get-UserConfirmation "Would you like to install Node.js LTS?") {
        if (-not (Install-NodeJS)) {
            Write-ColorText "❌ Setup failed: Could not install Node.js" $Red
            exit 1
        }
    } else {
        Write-ColorText "❌ Setup aborted: Node.js is required" $Red
        exit 1
    }
}

# Check npm
Write-ColorText "🔍 Checking npm installation..." $Blue
if (Test-Command "npm") {
    $npmVersion = & npm --version 2>$null
    Write-ColorText "✅ npm is available: v$npmVersion" $Green
} else {
    Write-ColorText "❌ npm is not available" $Red
    Write-ColorText "   Please reinstall Node.js or check your PATH" $Red
    exit 1
}

# Check VS Code installation
Write-ColorText "🔍 Checking Visual Studio Code installation..." $Blue
if (Test-Command "code") {
    $codeVersion = & code --version 2>$null | Select-Object -First 1
    Write-ColorText "✅ VS Code is already installed: $codeVersion" $Green
    
    if (Get-UserConfirmation "Would you like to install/update recommended VS Code extensions?") {
        Install-VSCodeExtensions
    }
} else {
    Write-ColorText "❌ Visual Studio Code is not installed" $Red
    if (Get-UserConfirmation "Would you like to install Visual Studio Code?") {
        if (Install-VSCode) {
            # Wait a moment for VS Code to be available in PATH
            Start-Sleep -Seconds 3
            if (Get-UserConfirmation "Would you like to install recommended VS Code extensions?") {
                Install-VSCodeExtensions
            }
        } else {
            Write-ColorText "❌ Setup failed: Could not install VS Code" $Red
            exit 1
        }
    } else {
        Write-ColorText "❌ Setup aborted: VS Code is required for the best development experience" $Red
        exit 1
    }
}

# Install project dependencies
Write-ColorText "📦 Installing project dependencies..." $Blue
try {
    & npm install
    Write-ColorText "✅ Project dependencies installed successfully!" $Green
} catch {
    Write-ColorText "❌ Failed to install project dependencies: $($_.Exception.Message)" $Red
    exit 1
}

# Verify build works
Write-ColorText "🔨 Verifying project build..." $Blue
try {
    & npm run build
    Write-ColorText "✅ Project builds successfully!" $Green
} catch {
    Write-ColorText "❌ Project build failed: $($_.Exception.Message)" $Red
    Write-ColorText "   You may need to fix build issues before proceeding" $Yellow
}

Write-ColorText "🎉 Setup completed successfully!" $Green
Write-Host ""
Write-ColorText "Next steps:" $Cyan
Write-Host "  1. Open the workspace: code masonbesmer.code-workspace"
Write-Host "  2. Start development: npm run dev"
Write-Host "  3. Open browser: http://localhost:3000"
Write-Host ""

# Open VS Code workspace
if (Get-UserConfirmation "Would you like to open the workspace in VS Code now?") {
    Write-ColorText "🚀 Opening VS Code workspace..." $Blue
    try {
        & code "masonbesmer.code-workspace"
        Write-ColorText "✅ VS Code workspace opened!" $Green
        Write-Host ""
        Write-ColorText "Happy coding! 🎯" $Magenta
    } catch {
        Write-ColorText "❌ Could not open VS Code workspace" $Red
        Write-Host "You can manually open it by running: code masonbesmer.code-workspace"
    }
}

Write-Host ""
Write-ColorText "🔗 Useful commands:" $Cyan
Write-Host "  npm run dev    - Start development server with hot reload"
Write-Host "  npm run build  - Build for production"
Write-Host "  npm run lint   - Run ESLint"
Write-Host "  npm start      - Start production server"
Write-Host ""