import Footer from './components/Footer'
import Header from './components/Header'
import Content from './pages/home/Home'

const App = () => {
  return (
    <article className="min-h-screen grid grid-rows-[auto_1fr_auto] max-w-[1240px] mx-auto font-[Raleway] text-[#333]">
      <Header />
      <Content />
      <Footer />
    </article>
  )
}

export default App
