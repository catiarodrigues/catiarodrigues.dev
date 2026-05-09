const Home = () => {
  return (
    <main className="self-center text-center px-[30px] mb-[30px]">
      <div>
        <h1 className="h1-tag inline-block font-[Cookie] text-[60px] relative">
          Hi, I'm Cátia!
        </h1>
        <p className="text-[18px] mt-4">
          I'm a self-taught Frontend Developer based in beautiful Baleal,
          Portugal.
          <br />
          Most recently working with React @{' '}
          <a
            href="https://www.cloudflare.com"
            target="_blank"
            rel="noopener"
            className="text-[#f0c029] hover:text-[#333] transition-colors duration-500"
          >
            Cloudflare
          </a>
        </p>
        <p className="text-[18px] text-[#666] mt-4">
          You can find my work on{' '}
          <a
            href="https://codepen.io/catiarodrigues"
            target="_blank"
            rel="noopener"
            className="text-[#f0c029] hover:text-[#333] transition-colors duration-500"
          >
            Codepen
          </a>
          ,{' '}
          <a
            href="https://github.com/catiarodrigues/"
            target="_blank"
            rel="noopener"
            className="text-[#f0c029] hover:text-[#333] transition-colors duration-500"
          >
            Github
          </a>{' '}
          and{' '}
          <a
            href="https://www.instagram.com/catiarodrigues/"
            target="_blank"
            rel="noopener"
            className="text-[#f0c029] hover:text-[#333] transition-colors duration-500"
          >
            Instagram
          </a>
          .
        </p>
      </div>
    </main>
  )
}

export default Home
