const Footer = () => {
  return (
    <footer className="p-[30px]">
      <ul className="flex list-none justify-center m-0 p-0 gap-[30px]">
        <li>
          <a
            href="https://www.linkedin.com/in/catiarrodrigues/"
            target="_blank"
            rel="noopener"
            className="text-[#333] no-underline hover:text-[#f0c029] hover:underline transition-colors duration-500"
          >
            linkedin
          </a>
        </li>
        <li>
          <a
            href="mailto:catiarrodrigues@gmail.com"
            className="text-[#333] no-underline hover:text-[#f0c029] hover:underline transition-colors duration-500"
          >
            send me an email
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
