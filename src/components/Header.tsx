import profilePic from '../assets/profile.png'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <header className="px-8 pt-8 mb-8">
      <div className="flex items-center">
        <img
          src={profilePic}
          width={50}
          height={50}
          alt="Profile picture"
          className="mr-2.5 rounded-full"
        />
        <div className="mr-auto">
          <div className="text-base">Cátia Rodrigues</div>
          <div>
            <a
              href="https://www.instagram.com/catiarodrigues/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-light text-muted no-underline hover:text-accent"
            >
              @catiarodrigues
            </a>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header