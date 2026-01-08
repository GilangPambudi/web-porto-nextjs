import { SiFacebook, SiLinkedin, SiGmail, SiInstagram, SiGithub, SiTiktok } from "react-icons/si";

const footerItems = [
  {
    label: "LinkedIn",
    icon: <SiLinkedin className="w-6 h-6" />,
    href: "https://www.linkedin.com/in/gilangpambudi/",
  },
  {
    label: "Gmail",
    icon: <SiGmail className="w-6 h-6" />,
    href: "mailto:gilangpambudiwibawanto@gmail.com",
  },
  {
    label: "GitHub",
    icon: <SiGithub className="w-6 h-6" />,
    href: "https://github.com/gilangpambudi",
  },
]

export default function Footer() {
  return (
    <footer className="py-8 md:py-6 bg-blue-900 text-white">
      <div className="w-full md:w-4/5 mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <p className="text-sm md:text-base font-bold text-center sm:text-left">
            © 2025 Gilang Pambudi Wibawanto – All Rights Reserved
          </p>
        </div>

        {/* Contact & Social Media */}
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          {footerItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}