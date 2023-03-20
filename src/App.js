import './App.css'
import { Container } from './components/index'
import { Header, Hero, MostPopular, Footer } from './sections/index'



const App = () => {
    return (
        <>
            <Header />
            <Container>
                <Hero />
                <MostPopular />
            </Container>
            <Footer />
        </>
    )
}

export default App