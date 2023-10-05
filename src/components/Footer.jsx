import logoWhite from "../assets/shared/desktop/logo-white.svg";
import arrowWhite from "../assets/shared/desktop/arrow-white.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-[56px] md:py-[64px] md:px-10 xl:px-[165px]">
      <div className="md:flex md:justify-between md:mx-auto md:items-stretch xl:relative">
        {/* div contains logo, social icons, menu  */}
        <div>
          <div className="mx-auto md:ml-0">
            <img src={logoWhite} alt="logo" className="h-4 w-full object-contain mb-8 md:mb-0 md:object-left" />

            {/* div contains social icons and menu */}
            <div className="md:flex md:flex-col-reverse">
              {/* div contains social icons */}
              <div className="socials flex  items-center justify-center space-x-[13px] md:justify-start xl:mt-[89px]">
                <svg className="facebook" width="20" height="20" viewBox="0 0 20 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="fb" x1="100%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#fff" />
                      <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M18.8958 0H1.10417C0.494167 0 0 0.494167 0 1.10417V18.8967C0 19.5058 0.494167 20 1.10417 20H10.6833V12.255H8.07667V9.23667H10.6833V7.01083C10.6833 4.4275 12.2608 3.02083 14.5658 3.02083C15.67 3.02083 16.6183 3.10333 16.895 3.14V5.84L15.2967 5.84083C14.0433 5.84083 13.8008 6.43667 13.8008 7.31V9.2375H16.79L16.4008 12.2558H13.8008V20H18.8975C19.5058 20 20 19.5058 20 18.8958V1.10417C20 0.494167 19.5058 0 18.8958 0Z"
                    fill="url(#fb)"
                  />
                </svg>
                <svg className="youtube" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="yt" x1="0%" x2="100%" y1="100%" y2="0%">
                      <stop offset="0%" stopColor="#fff" />
                      <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                  </defs>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.3333 0C4.81081 0 0.333313 4.4775 0.333313 10C0.333313 15.5225 4.81081 20 10.3333 20C15.8558 20 20.3333 15.5225 20.3333 10C20.3333 4.4775 15.8558 0 10.3333 0ZM14.0341 14.0767C12.2825 14.1967 8.38081 14.1967 6.63165 14.0767C4.73498 13.9467 4.51415 13.0183 4.49998 10C4.51415 6.97583 4.73748 6.05333 6.63165 5.92333C8.38081 5.80333 12.2833 5.80333 14.0341 5.92333C15.9316 6.05333 16.1516 6.98167 16.1666 10C16.1516 13.0242 15.9291 13.9467 14.0341 14.0767ZM12.7641 9.99667L8.66665 8.04833V11.9517L12.7641 9.99667Z"
                    fill="url(#yt)"
                  />
                </svg>
                <svg className="twitter" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="tw" x1="100%" x2="0%" y1="16.979%" y2="83.021%">
                      <stop offset="0%" stopColor="#fff" />
                      <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M20.6667 2.79746C19.9309 3.12412 19.14 3.34412 18.31 3.44329C19.1575 2.93579 19.8084 2.13162 20.1142 1.17329C19.3217 1.64329 18.4434 1.98496 17.5084 2.16912C16.7609 1.37162 15.6934 0.873291 14.5134 0.873291C11.8642 0.873291 9.91752 3.34496 10.5159 5.91079C7.10669 5.73996 4.08335 4.10662 2.05919 1.62412C0.984187 3.46829 1.50169 5.88079 3.32835 7.10246C2.65669 7.08079 2.02335 6.89662 1.47085 6.58912C1.42585 8.48996 2.78835 10.2683 4.76169 10.6641C4.18419 10.8208 3.55169 10.8575 2.90835 10.7341C3.43002 12.3641 4.94502 13.55 6.74169 13.5833C5.01669 14.9358 2.84335 15.54 0.666687 15.2833C2.48252 16.4475 4.64002 17.1266 6.95669 17.1266C14.575 17.1266 18.8792 10.6925 18.6192 4.92162C19.4209 4.34246 20.1167 3.61996 20.6667 2.79746Z"
                    fill="url(#tw)"
                  />
                </svg>
                <svg className="pinterest" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="pin" x1="100%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#fff" />
                      <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M10 0C4.4775 0 0 4.47667 0 10C0 14.2367 2.63583 17.855 6.35583 19.3117C6.26833 18.5208 6.18917 17.3075 6.39083 16.4442C6.5725 15.6633 7.56333 11.4733 7.56333 11.4733C7.56333 11.4733 7.26417 10.8742 7.26417 9.98833C7.26417 8.59833 8.07 7.56 9.07333 7.56C9.92583 7.56 10.3383 8.20083 10.3383 8.96833C10.3383 9.82583 9.7925 11.1083 9.51 12.2975C9.27417 13.2925 10.0092 14.105 10.9908 14.105C12.7683 14.105 14.1342 12.2308 14.1342 9.52583C14.1342 7.13167 12.4142 5.4575 9.9575 5.4575C7.1125 5.4575 5.4425 7.59167 5.4425 9.79667C5.4425 10.6558 5.77333 11.5783 6.18667 12.0783C6.26833 12.1775 6.28 12.265 6.25583 12.3658L5.97833 13.4992C5.93417 13.6825 5.83333 13.7217 5.64333 13.6333C4.39417 13.0517 3.61333 11.2258 3.61333 9.75917C3.61333 6.605 5.905 3.7075 10.2208 3.7075C13.69 3.7075 16.3858 6.18 16.3858 9.48333C16.3858 12.93 14.2133 15.7033 11.1967 15.7033C10.1833 15.7033 9.23083 15.1775 8.905 14.555L8.28167 16.9325C8.05583 17.8017 7.44667 18.8908 7.03833 19.5542C7.975 19.8433 8.96917 20 10 20C15.5225 20 20 15.5225 20 10C20 4.47667 15.5225 0 10 0Z"
                    fill="url(#pin)"
                  />
                </svg>
                <svg className="instagram" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="ins" x1="0%" x2="50%" y1="100%" y2="0%">
                      <stop offset="0%" stopColor="#fff" />
                      <stop offset="51.945%" stopColor="#fff" />
                      <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                  </defs>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.3333 0C7.61748 0 7.27748 0.0116667 6.21081 0.06C2.57915 0.226667 0.560813 2.24167 0.394146 5.87667C0.34498 6.94417 0.333313 7.28417 0.333313 10C0.333313 12.7158 0.34498 13.0567 0.393313 14.1233C0.55998 17.755 2.57498 19.7733 6.20998 19.94C7.27748 19.9883 7.61748 20 10.3333 20C13.0491 20 13.39 19.9883 14.4566 19.94C18.085 19.7733 20.1083 17.7583 20.2725 14.1233C20.3216 13.0567 20.3333 12.7158 20.3333 10C20.3333 7.28417 20.3216 6.94417 20.2733 5.8775C20.11 2.24917 18.0925 0.2275 14.4575 0.0608333C13.39 0.0116667 13.0491 0 10.3333 0ZM10.3333 1.8025C13.0033 1.8025 13.32 1.8125 14.375 1.86083C17.085 1.98417 18.3508 3.27 18.4741 5.96C18.5225 7.01417 18.5316 7.33083 18.5316 10.0008C18.5316 12.6717 18.5216 12.9875 18.4741 14.0417C18.35 16.7292 17.0875 18.0175 14.375 18.1408C13.32 18.1892 13.005 18.1992 10.3333 18.1992C7.66331 18.1992 7.34665 18.1892 6.29248 18.1408C3.57581 18.0167 2.31665 16.725 2.19331 14.0408C2.14498 12.9867 2.13498 12.6708 2.13498 10C2.13498 7.33 2.14581 7.01417 2.19331 5.95917C2.31748 3.27 3.57998 1.98333 6.29248 1.86C7.34748 1.8125 7.66331 1.8025 10.3333 1.8025ZM5.19831 10C5.19831 7.16417 7.49748 4.865 10.3333 4.865C13.1691 4.865 15.4683 7.16417 15.4683 10C15.4683 12.8367 13.1691 15.1358 10.3333 15.1358C7.49748 15.1358 5.19831 12.8358 5.19831 10ZM10.3333 13.3333C8.49248 13.3333 6.99998 11.8417 6.99998 10C6.99998 8.15917 8.49248 6.66667 10.3333 6.66667C12.1741 6.66667 13.6666 8.15917 13.6666 10C13.6666 11.8417 12.1741 13.3333 10.3333 13.3333ZM14.4708 4.6625C14.4708 4 15.0083 3.4625 15.6716 3.4625C16.3341 3.4625 16.8708 4 16.8708 4.6625C16.8708 5.325 16.3341 5.8625 15.6716 5.8625C15.0083 5.8625 14.4708 5.325 14.4708 4.6625Z"
                    fill="url(#ins)"
                  />
                </svg>
              </div>

              <ul className="mt-[49px] mb-[119px] text-center space-y-[19px] text-[12px] tracking-[2px] md:flex md:justify-start md:items-center md:space-y-0 md:space-x-[26px] md:mt-8 md:mb-[72px] xl:absolute xl:flex-col xl:top-0 xl:left-[30%] xl:space-x-0 xl:items-start xl:mt-0 xl:mb-0 xl:space-y-[19px] 2xl:left-[25%]">
                <li><a href="/">HOME</a></li>
                <li><a href="/stories">STORIES</a></li>
                <li><a href="/features">FEATURES</a></li>
                <li><a href="/pricing">PRICING</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* div contains cta, copyrights */}
        <div className="">
          <a href="/pricing" className="flex items-center cta justify-center hover:underline md:justify-end">
            GET AN INVITE <img src={arrowWhite} alt="arrow" className="ml-[18px]" />
          </a>
          <p className="text-[15px] text-white/50 text-center mt-[34px] md:mt-[120px] xl:mt-[87px]">Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
