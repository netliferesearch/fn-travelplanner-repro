/* eslint-disable */
const plugin = require('tailwindcss/plugin');

// Note: Couldn't figure out how to dynamically get the media queries from tailwind theme so these are updated manually
// TODO: Figure out a more dynamic way of doing this (also so they can be used with @apply on generic elements like <p>)
const responsiveFont = (fontSizeXS, fontSizeSM, fontSizeMD, fontSizeLG, fontSizeXL) => ({
  fontSize: `${fontSizeXS}rem`,
  [`@media (min-width: 640px)`]: {
    fontSize: `${fontSizeSM}rem`,
  },
  [`@media (min-width: 1060px)`]: {
    fontSize: `${fontSizeMD}rem`,
  },
  [`@media (min-width: 1320px)`]: {
    fontSize: `${fontSizeLG}rem`,
  },
  [`@media (min-width: 1620px)`]: {
    fontSize: `${fontSizeXL}rem`,
  },
});

module.exports = {
  corePlugins: {
    // ...
    fontSize: false,
  },
  mode: 'jit',
  purge: ['./src/components/**/*.js', './pages/**/*.js'],
  theme: {
    // Setting values at this level overrides Tailwind DEFAULTs
    boxShadow: {
      DEFAULT: '0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.4)', // Used on image hover effects
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.10)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.05)',
      lg: '0 4px 24px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.05)',
      inner: 'inset 0px 0px 40px 10px rgba(0, 0, 0, 0.5)',
      'outline-solid-2': '0 0 0 2px',
      'outline-solid-3': '0 0 0 3px',
      'outline-solid-blue-dark-2': '0 0 0 2px #003F65',
      'outline-solid-blue-dark-3': '0 0 0 3px #003F65',
      'highlight-green': '0 0 0 5px #12D9B5, inset 0 0 0 100px #12D9B5',
      none: '',
    },
    // For use with 'filter'
    dropShadow: {
      lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
    },
    colors: {
      inherit: 'inherit',
      black: {
        DEFAULT: '#1E1E1E', // "Granite"
      },
      blue: {
        DEFAULT: '#0DBBF2', // "Norwegian Crisp"
        dark: '#003F65', // "Midnight Blue"
      },
      green: '#12D9B5', // "Glacier Green"
      grey: {
        DEFAULT: '#C6C6C6', // "Cloudy Gray"
        light: '#EFEFEF', // "Mist"
        aa: '#767676', // Lowest possible AA contrast grey on white, for placeholders etc
      },
      red: {
        DEFAULT: '#FF4136', // https://clrs.cc/ // * Only used for warnings in development mode
      },
      yellow: {
        DEFAULT: '#FFDC00', // https://clrs.cc/ // * Only used for warnings in development mode
      },
      white: {
        DEFAULT: '#FFFFFF', // "Snow White"
      },
      transparent: 'transparent',
    },
    columnCount: [1, 2, 3, 4],
    columnGap: {
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
    },
    columnWidth: {
      sm: '10em',
      md: '20em',
    },
    columnRuleColor: false, // will fallback to `borderColor` values
    columnRuleWidth: false, // will fallback to `borderWidth` values
    columnRuleStyle: [
      'none',
      'hidden',
      'dotted',
      'dashed',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
    ],
    columnFill: ['auto', 'balance', 'balance-all'],
    columnSpan: ['none', 'all'],
    orphans: [1, 2, 3, 4, 5],
    widows: [1, 2, 3, 4, 5],
    boxDecorationBreak: ['slice', 'clone'],
    breakBefore: [
      'auto',
      'avoid',
      'avoid-page',
      'page',
      'always',
      'left',
      'right',
      'recto',
      'verso',
      'avoid-column',
      'column',
      'avoid-region',
      'region',
    ],
    breakAfter: [
      'auto',
      'avoid',
      'avoid-page',
      'page',
      'always',
      'left',
      'right',
      'recto',
      'verso',
      'avoid-column',
      'column',
      'avoid-region',
      'region',
    ],
    breakInside: ['auto', 'avoid', 'avoid-page', 'avoid-column', 'avoid-region'],
    fontFamily: {
      sans: ['Metric', 'Helvetica', 'sans-serif'],
      serif: ['TiemposHeadline', 'Georgia', 'serif'],
    },
    // For some reason, seem to need to redefine default opacities if using custom opacities
    // i.e. doesn't seem to allow extending without overriding original values
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      85: '0.85', // custom
      90: '0.9',
      95: '0.95',
      97: '0.97', // custom
      99: '0.99', // custom
      100: '1',
    },
    // Breakpoints
    screens: {
      // Generally, sm, md and lg are most used
      '2xs': '321px', // iPhone 5/SE (320px)
      xs: '430px', // iPhone 12 pro max (328px)
      sm: '640px',
      md: '768px',
      'md-max': { max: '768px' },
      lg: '1060px',
      xl: '1320px',
      '2xl': '1480px',
      '3xl': '1620px',
      '4xl': '1920px',
    },
    textIndent: {
      // defaults to {}
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '1rem',
      4: '2rem',
      5: '2.5rem',
      6: '3rem',
    },
    // svg color properties
    fill: theme => theme('colors'),
    stroke: theme => theme('colors'),

    // Setting values here adds to Tailwind DEFAULTs
    extend: {
      animation: {
        'slide-right': 'slide-right 0.5s cubic-bezier(0.190, 1.000, 0.220, 1.000) both',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderWidth: {
        3: '3px',
      },
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(100px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      height: theme => ({
        80: '20rem',
        96: '24rem',
        'screen-1/3': '33.33vh',
        'screen-1/2': '50vh',
        'screen-w': '100vw',
      }),
      lineHeight: theme => ({
        tighter: '1.125',
      }),
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
      },
      minWidth: theme => theme('width', 'spacing'), // This extends not only rem values (spacing) but percentages (width)
      minHeight: theme => theme('height', 'spacing'), // This extends not only rem values (spacing) but percentages (height)
      maxWidth: theme => ({
        xxxs: '10rem',
        xxs: '15rem',
        '8xl': '96rem',
        '9xl': '104rem',
        '10xl': '112rem',
        'max-w-screen-2xl': '1536px',
      }),
      // opacity: {
      //   75: '0.75',
      //   85: '0.85',
      //   97: '0.97',
      //   99: '0.99',
      // },
      outline: {
        'green-dotted-2': ['2px dotted #12D9B5', '0px'], // second figure is outline offset
        'green-dotted-3': ['3px dotted #12D9B5', '0px'], // second figure is outline offset
        'solid-blue-dark-2': '2px solid #003F65',
        'solid-blue-dark-3': '3px solid #003F65',
      },
      scale: {
        102: '1.02',
        105: '1.05',
        200: '2',
      },
      spacing: theme => ({
        px2: '2px',
        14: '3.5rem',
        30: '7.5rem',
      }),
      stroke: {
        current: 'currentColor',
      },
      strokeWidth: {
        3: '3',
      },
      inset: theme => theme('width', 'spacing'), // For some reason these *need* to be in the order width, spacing
      transitionDuration: {
        0: '0ms',
        50: '50ms',
        2000: '2000ms',
        3000: '3000ms',
        5000: '5000ms',
        10000: '10000ms',
      },
      transitionProperty: {
        'opacity-transform': 'opacity, transform',
      },
      zIndex: theme => ({
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
        110: '110',
      }),
    },
  },
  plugins: [
    // Official Tailwind plugins
    require('@tailwindcss/typography'), // For easily styling prose https://github.com/tailwindlabs/tailwindcss-typography
    require('@tailwindcss/forms')({ strategy: 'class' }), // https://github.com/tailwindlabs/tailwindcss-forms // Strategy: 'class' means you opt-in
    require('@tailwindcss/line-clamp'), // https://github.com/tailwindlabs/tailwindcss-line-clamp
    require('@tailwindcss/aspect-ratio'), // To maintain consistent aspect ratio for images https://github.com/tailwindlabs/tailwindcss-aspect-ratio
    // 3rd party tailwind plugins
    require('tailwindcss-typography')(), // 3rd party Tailwind typography not to be confused with the one above. For text indent and other details. https://www.npmjs.com/package/tailwindcss-typography
    require('tailwindcss-multi-column')(), // https://github.com/hacknug/tailwindcss-multi-column - for adding css columns functionality
    require('tailwindcss-interaction-variants'), // https://github.com/benface/tailwindcss-interaction-variants - for group-active and other missing variants
    require('tailwindcss-break')(), // https://github.com/hacknug/tailwindcss-break - for adding additional break functionality to css columns
    require('tailwindcss-animations'), // https://github.com/benface/tailwindcss-animations. This is DEPRECATED, as Tailwind 1.6 introduced animations, but is needed for "animationDelay". TODO: Reassess.
    plugin(function ({ addUtilities, addVariant, e, postcss }) {
      const newUtilities = {
        '.r-text-xs': responsiveFont(0.875, 0.9375, 1, 1.0625, 1.1875), // mainly for image credits
        '.r-text-sm': responsiveFont(1, 1.125, 1.25, 1.375, 1.5), // This is the DEFAULT base size applied to <body>
        '.r-text-md': responsiveFont(1.3125, 1.5, 1.6875, 1.875, 2.0265), // TODO: Have only set a scale on the lg size so far
        '.r-text-lg': responsiveFont(1.75, 2, 2.25, 2.5, 2.875),
        '.r-text-xl': responsiveFont(2, 2.25, 2.625, 3.25, 3.875),
        'transition-clip-path': { transition: 'clip-path' },
        // The position top, left, bottom, right below refers to position of the 90 degree angle
        // In / out refers to the opposite angle being acute (out) or obtuse (in)
        '.clip-polygon-top-left': {
          'clip-path': 'polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)',
        },
        '.clip-polygon-bottom-left': {
          'clip-path': 'polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%)',
        },
        '.clip-polygon-bottom-right': {
          'clip-path': 'polygon(0% 30%, 100% 0%, 100% 100%, 0% 100%)',
        },
        '.clip-polygon-bottom-right-out': {
          'clip-path': 'polygon(11.66% 20vh, 100% 0%, 100% 100%, 19% 100%)',
        },
        '.clip-polygon-bottom-right-in': {
          // Use calc so we don't extend to 100% edge of browser - takes into consideration gutter
          'clip-path': 'polygon(12.5% 10vh, 100% 0%, 100% 100%, calc(0% + 1em) 100%)',
        },
        '.clip-polygon-decagon': {
          // Decagon for use on world map on homepage
          'clip-path':
            'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)',
        },
        '.clip-triangle-right': {
          'clip-path': 'polygon(0 0, 100% 50%, 0 100%)',
        },
      };
      addUtilities(newUtilities);

      // https://gist.github.com/samselikoff/b3c5126ee4f4e69e60b0af0aa5bfb2e7
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules(rule => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
        });
      });
    }),
  ],
};
