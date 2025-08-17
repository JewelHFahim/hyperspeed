"use client";

import Breadcumb from "@/components/common/Breadcumb";
import HeroSection from "@/components/common/HeroSection";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Breadcrumb */}
      <Breadcumb title="Contact"/>

      {/* Hero Section */}
      <HeroSection title="Get in" colorTitle="Touch" dscription="We’d love to hear from you. Reach out anytime." />

      {/* Contact Form + Info */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-semibold hover:bg-black transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[var(--color-primary)] pl-4">
              <h4 className="font-semibold">Address</h4>
              <p>123 Main Street, Dhaka, Bangladesh</p>
            </div>
            <div className="border-l-4 border-[var(--color-primary)] pl-4">
              <h4 className="font-semibold">Phone</h4>
              <p>+880 1234 567 890</p>
            </div>
            <div className="border-l-4 border-[var(--color-primary)] pl-4">
              <h4 className="font-semibold">Email</h4>
              <p>support@yourdomain.com</p>
            </div>
            <div className="border-l-4 border-[var(--color-primary)] pl-4">
              <h4 className="font-semibold">Working Hours</h4>
              <p>Sat - Thu: 9 AM – 8 PM</p>
              <p>Friday: Closed</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Google Map Section */}
      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8465155099907!2d90.39156331538448!3d23.750885794648244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf579d8417e5%3A0x9b27e06a2e4c8a89!2sDhaka!5e0!3m2!1sen!2sbd!4v1673523423453!5m2!1sen!2sbd"
          className="w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}
