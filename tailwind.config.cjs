module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      border: {
        'b-1': '1px',
      },
      width: {
        'custom-width': '676px',
      },
      height: {
        'custom-height': '2px',
      },
      spacing: {
        'custom-padding': '0.9rem',
      },
    },
  },
  plugins: [require('daisyui')],
};
