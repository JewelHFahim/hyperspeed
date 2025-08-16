"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdCall, MdLocationOn } from "react-icons/md";



export default function Footer() {

  return (
    <footer className="mt-">
      {/* 🔹 Main Footer */}
      <div className="bg-black text-gray-300 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {/* Logo & About */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/">
                       
                        <img
                          src="https://hyperspeedwinnipeg.ca/wp-content/uploads/hyperspeed-white.webp"
                          alt="Logo"
                          className="h-12 w-auto object-contain"
                        />
                      </Link>
            <p className="text-sm leading-relaxed">
              Premium wheels, tires, and accessories with world-class service.  
              Drive with style and confidence.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-4">
              {[
                { Icon: FaFacebook, href: "#" },
                { Icon: FaInstagram, href: "#" },
                { Icon: FaTwitter , href: "#" },
                { Icon: FaYoutube, href: "#" },
              ].map(({ Icon, href }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-2 rounded-full bg-white/10 hover:bg-primary transition"
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Shop", "Services", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="hover:text-primary relative group"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {["FAQ", "Returns", "Shipping", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="hover:text-primary relative group"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MdLocationOn className="w-4 h-4 text-primary"/> 123 Auto Street, Dhaka
              </li>
              <li className="flex items-center gap-2">
                <MdCall className="w-4 h-4 text-primary"/> +880 123 456 789
                </li>
              <li className="flex items-center gap-2">
                <IoIosMail className="w-4 h-4 text-primary"/> info@yourbrand.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-black border-t border-gray-800 text-center py-4 text-gray-400 text-sm"
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-semibold">YourBrand</span>. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
