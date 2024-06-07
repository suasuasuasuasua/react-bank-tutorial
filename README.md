# [React Tutorial](https://www.youtube.com/watch?v=_oO4Qi5aVZs)

## Setup

- Use [`Vite.js`](https://vitejs.dev/) to auto-generate the React project.
  - The tutorial is using plain `javascript`, but ideally we should be using
  `typescript` for type-safe reasons (duh)

- Install all dependencies for the project

  ```console
  # Install the dependencies for React
  npm install

  # Install tailwindcss and utility packages
  # https://tailwindcss.com/docs/guides/create-react-app
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```

- `src/main.jsx` is where we actually create and render the application
- `tailwind.config.js` is where we define some configurations for tailwind
- `src/index.css` is where we make use of Tailwind CSS
- Replace `src/App.jsx` with `rafc` snippet to set up an arrow function for React
- Add assets from the creator online to `src/assets`

## Structure and Layout

- Build structure in `src/App.jsx`

## Takeaways

- React is all about components
