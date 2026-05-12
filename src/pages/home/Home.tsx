import { USER } from '../../resources/constants'

const Home = () => {
  return (
    <main className="self-center text-center px-8 mb-8">
      <div>
        <h1 className="h1-tag inline-block font-cookie text-6xl relative">
          Hi, I'm Cátia!
        </h1>
        <p className="text-lg mt-4">
          I'm a self-taught Frontend Developer based in beautiful Baleal,
          Portugal.
          <br />
          Most recently working with React @{' '}
          <a
            href="https://www.cloudflare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-dark"
          >
            Cloudflare
          </a>
        </p>
        <p className="text-lg text-muted mt-4">
          You can find my work on{' '}
          <a
            href={USER.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-dark"
          >
            Github
          </a>{' '}
          and{' '}
          <a
            href={USER.INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-dark"
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
