import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/ReduxStore';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }
    if (typeof window === 'undefined') {
        return <></>;
    } else {
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default MyApp;
