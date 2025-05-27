import Image from "next/image";
import { Facebook, Linkedin, Instagram, Github } from "lucide-react";
import { SiFacebook, SiLinkedin, SiInstagram, SiGithub, SiTiktok } from "react-icons/si"; // Import TikTok logo from react-icons

export default function Footer() {
  return (
    <footer className="py-4 md:py-6 bg-blue-900 text-white">
      <div className="w-full md:w-4/5 mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <p className="text-sm md:text-base font-bold text-center sm:text-left">
            © 2025 Gilang Pambudi Wibawanto – All Rights Reserved
          </p>
        </div>

        {/* Contact & Social Media */}
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          <a
            href="https://linkedin.com/gilangpambudi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
          >
            <SiLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/gilang.wib"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
          >
            <SiInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com/gilanggpambudi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
          >
            <SiFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/gilangpambudi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
          >
            <SiGithub className="w-6 h-6" />
          </a>
          <a
            href="https://tiktok.com/gawai.santai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
          >
            <SiTiktok className="w-6 h-6" /> {/* TikTok logo */}
          </a>
        </div>
      </div>
    </footer>
  );
}