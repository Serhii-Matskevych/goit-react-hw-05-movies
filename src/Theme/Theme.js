// export const theme = {
//   colors: {
//     black: "#000",
//     white: "#fff",
//     text: "#2a2a2a",
//     background: "#fff",
//     primary: "#07c",
//     secondary: "#05a",
//     accent: "#609",
//     muted: "#f6f6f6",
//   },
//   space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
//   fonts: {
//     body: "system-ui, sans-serif",
//     heading: "system-ui, sans-serif",
//     monospace: "Menlo, monospace",
//   },
//   fontSizes: {
//     xs: "12px",
//     s: "14px",
//     m: "16px",
//     l: "32px",
//     xl: "64px",
//   },
//   fontWeights: {
//     normal: 400,
//     bold: 700,
//   },
//   lineHeights: {
//     body: 1.5,
//     heading: 1.125,
//   },
//   borders: {
//     none: "none",
//     normal: "1px solid",
//   },
//   radii: {
//     none: "0",
//     normal: "4px",
//     round: "50%",
//   },
//   // sizes: [768, 1200, "70vw", "calc(50vh + 500px )"],
//   sizes: [768, 1200, "60vw", "70vh"],
// };

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
});
