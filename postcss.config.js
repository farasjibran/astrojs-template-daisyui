import path from 'path';

export default  {
  plugins: {
    tailwindcss: {
      config: path.join('tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
