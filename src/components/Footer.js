export default function Footer() {
  return (
    <footer
      id='footer'
      className='flex flex-col  justify-center  items-center  pt-5'>
      <div className='sm:w-2/3 text-center'>
        <ul className='flex justify-center  items-center text-gray-500 mb-2 space-x-7'>
          <li>
            <a
              href='mailto:cmurthy.dev@gmail.com'
              target={"_blank"}
              rel='noreferrer noopener'>
              <img
                src={require("../components/pages/logos/email.png")}
                alt='email logo'
              />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/chaitra-srinivas/'
              target={"_blank"}
              rel='noreferrer noopener'>
              <img
                src={require("../components/pages/logos/GitHub-Mark-32px.png")}
                alt='gitHub logo'></img>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/chaitramurthy/'
              target={"_blank"}
              rel='noreferrer noopener'>
              <img
                src={require("../components/pages/logos/linkedin.png")}
                alt='linkedIn logo'></img>
            </a>
          </li>
        </ul>
        <p className='text-sm text-gray-700 font-bold mb-2 mt-4'>
          © 2022 by Chaitra Srinivasamurthy
        </p>
      </div>
    </footer>
  );
}
