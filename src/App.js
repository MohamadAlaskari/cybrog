import './App.css'
import { Container } from './components/index'
import { Header, Hero, MostPopular, GamingLibrary, Footer } from './sections/index'



const App = () => {
    return (
        <>
            <Header />
            <Container>
                <Hero />
                <MostPopular />
                <GamingLibrary />

            </Container>
            <Footer />
        </>
    )
}

export default App