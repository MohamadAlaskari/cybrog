import './App.css'
import { Container } from './components/index'
import { Header, Hero, Footer } from './sections/index'



const App = () => {
    return (
        <>
            <Header />
            <Container>
                <Hero />
            </Container>
            <Footer />
        </>
    )
}

export default App