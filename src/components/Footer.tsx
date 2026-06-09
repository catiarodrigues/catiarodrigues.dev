import { USER } from '../resources/constants';

const Footer = () => {
  return (
    <footer className="p-8">
      <ul className="flex list-none justify-center m-0 p-0 gap-8">
        <li>
          <a
            href={USER.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink no-underline hover:text-accent hover:underline"
          >
            linkedin
          </a>
        </li>
        <li>
          <a
            href={`mailto:${USER.EMAIL}`}
            className="text-ink no-underline hover:text-accent hover:underline"
          >
            send me an email
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
