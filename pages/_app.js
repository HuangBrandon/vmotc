import '@/styles/globals.css'
import '@/styles/layout.css'
import '@/styles/home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
        
    )
}
