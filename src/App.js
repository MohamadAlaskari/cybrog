import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from './components/index'
import { Header, Footer } from './sections/index'
import { Home, Browse, Details } from './pages/index'



const App = () => {
    return (
        <>
            <BrowserRouter basename={''}>

                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/browse' element={<Browse />} />
                        <Route path='/details' element={<Details />} />

                    </Routes>


                </Container>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App