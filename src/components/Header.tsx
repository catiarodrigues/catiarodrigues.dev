import profilePic from '../assets/profile.png'

const Header = () => {
  return (
    <header className="px-[30px] pt-[30px] mb-[30px]">
      <div className="flex items-center">
        <img
          src={profilePic}
          width={50}
          height={50}
          role="img"
          aria-label="Profile picture"
          className="mr-[10px] rounded-full"
        />
        <div>
          <div className="text-[16px]">Cátia Rodrigues</div>
          <div>
            <a
              href="https://www.instagram.com/catiarodrigues/"
              target="_blank"
              rel="noopener"
              className="text-[12px] font-light text-[#666] no-underline hover:text-[#f0c029] transition-colors duration-500"
            >
              @catiarodrigues
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header