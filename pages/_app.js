import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "../src/theme/theme";
import Layout from "../src/components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
