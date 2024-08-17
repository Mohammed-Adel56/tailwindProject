import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  const contact = [
    {
      icon: "icon-phone.svg",
      text: "+201027581767",
    },
    {
      icon: "icon-email.svg",
      text: "569mohamedadel2514@gmail.com",
    },
  ];
  const links = [
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ];
  const socialIcons = ["facebook", "twitter", "instagram"];
  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white">
      <div className="container">
        <a href="/">
          <img
            src="/images/logo.svg"
            alt="logo.img"
            className="w-[175px] h-66px object-contain"
          />
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-center gap-[15px] w-[340px] max-w-full">
            <img
              src="/images/icon-location.svg"
              alt="location.img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            {contact.map((item, ind) => (
              <div
                key={ind}
                className="flex items-start gap-[15px] mb-[15px] last-of-type::mb-0"
              >
                <img
                  src={`/images/${item.icon}`}
                  alt="icon.img"
                  className="w-[18px] h-[18px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((link, ind) => (
              <li key={ind}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-primary transition-colors duration-200 text-base"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {socialIcons.map((item, ind) => (
              <li key={ind}>
                <a href="/" className="group">
                  <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                    {item == "facebook" ? (
                      <FaFacebookF className="group-hover:text-primary transition-colors duration-200" />
                    ) : item == "twitter" ? (
                      <FaTwitter className="group-hover:text-primary transition-colors duration-200" />
                    ) : (
                      <FaInstagram className="group-hover:text-primary transition-colors duration-200" />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
