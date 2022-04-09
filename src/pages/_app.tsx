import type { AppProps } from "next/app";

import { AppContextProvider } from "../common/context/appContext";
import GlobalStyle from "../common/styles/styles";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <AppContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
};

export default App;
