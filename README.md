# Investment Calculator

A simple investment calculator built with React and Vite, deployed on Vercel.

## Live Demo

Try it out here: [https://investment-calculator-ruby-eight.vercel.app](https://investment-calculator-ruby-eight.vercel.app)

## Table of Contents

- [Installation](#installation)  
- [Development](#development)  
- [Building for Production](#building-for-production)  
- [Project Structure](#project-structure)  
- [Technologies Used](#technologies-used)  
- [Features](#features)  
- [What I Learned](#what-i-learned)  
- [License](#license)  

## Installation

Make sure you have [Node.js](https://nodejs.org/) (v16 or later) installed.

1. Clone the repo  
   ```bash
   git clone https://github.com/Peglo98/Investment-Calculator.git
   cd Investment-Calculator
   ```
2. Install dependencies  
   ```bash
   npm install
   ```

## Development

Run the development server with hot-reload:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to use the calculator.

## Building for Production

Build the optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── index.html           # Main HTML template
├── package.json         # Project metadata & scripts
├── vite.config.js       # Vite configuration
├── public               # Static assets
├── src
│   ├── main.jsx         # Entry point for React
│   ├── App.jsx          # Root React component
│   ├── Calculator.jsx   # Investment calculation logic and UI
│   ├── index.css        # Global styles
│   └── App.css          # Component-specific styles
└── .gitignore
```

## Technologies Used

- [React 18](https://reactjs.org)  
- [Vite](https://vitejs.dev)  
- JavaScript (ES6+)  
- CSS  
- [Vercel](https://vercel.com) for deployment  

## Features

- **User Inputs**: Initial investment, annual contribution, expected rate of return, investment duration  
- **Calculation**: Computes future value and growth breakdown  
- **Results Table**: Displays year-by-year balance in a clear table  
- **Responsive Design**: Mobile-friendly layout  

## What I Learned

- **React Fundamentals**: Using functional components, `useState`, and handling form inputs  
- **Calculations in JavaScript**: Implementing financial formulas for compound interest  
- **Component Structure**: Organizing a project with reusable components  
- **Styling**: Writing scoped CSS for clean, modular styles  
- **Build & Deployment**: Configuring Vite for production and deploying on Vercel  

## License

This project is licensed under the [MIT License](LICENSE).
