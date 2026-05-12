import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] max-w-[1240px] mx-auto font-raleway text-dark">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
