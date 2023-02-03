/// <reference types="vite/client" />

export {}

declare module "@mui/material/styles" {
    
    
    interface PaletteOptions {
        toggleDarkMode: () => void
   }
    interface Palette {
        toggleDarkMode: () => void
   }
  }