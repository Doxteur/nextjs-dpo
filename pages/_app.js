import "../styles/globals.css";

import { NextUIProvider,createTheme } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  //Dark theme
  const darkTheme = createTheme({
    type: "dark",
  });

  return (
    
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
