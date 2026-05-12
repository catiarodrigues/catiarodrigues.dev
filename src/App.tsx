import { ThemeProvider } from './contexts/ThemeContext'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/home/Home'

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
        <div className="grid grid-rows-[auto_1fr_auto] max-w-[1240px] mx-auto font-raleway text-ink min-h-screen">
          <Header />
          <Home />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
