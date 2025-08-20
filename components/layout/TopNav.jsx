import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  Call
} from "react-icons/fa";
import { IoMdCall, IoMdMail } from "react-icons/io";

import Container from "./Container";
import Link from "next/link";

export default function TopNav() {
  return (
    <div className="hidden lg:block bg-[var(--color-primary)] text-white text-sm">
      <Container>
        <div className="flex justify-between items-center py-2">
          {/* Left Side */}
          <div className="flex items-center gap-6">
            <Link href="tel:+880123456789" className="hover:underline flex items-center gap-1">
              <IoMdCall />
              +880 1234-56789
            </Link>
            <Link href="mailto:info@carservice.com" className="hover:underline flex items-center gap-1">
              <IoMdMail/> info@carservice.com
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
