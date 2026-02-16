"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Shield,
  Clock,
  DollarSign,
  Users,
  MapPin,
  Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const reasons = [
    {
      icon: Shield,
      title: "Unmatched Safety",
      description:
        "Our rigorous safety protocols and trained professionals ensure your cargo is protected at every step.",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Clock,
      title: "On-Time Guarantee",
      description:
        "99.9% on-time delivery rate. We value your time and keep our promises with precision scheduling.",
      color: "from-red-600 to-red-700",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description:
        "Premium service at fair prices. No hidden fees, just transparent and affordable logistics solutions.",
      color: "from-blue-700 to-blue-800",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Certified drivers and logistics professionals with years of experience in the transportation industry.",
      color: "from-red-700 to-red-800",
    },
    {
      icon: MapPin,
      title: "Nationwide Coverage",
      description:
        "Extensive network spanning all 50 states, ensuring we can deliver wherever your business needs.",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Round-the-clock customer service ready to assist you. Real people, real solutions, anytime.",
      color: "from-red-600 to-red-700",
    },
  ];

  return (
    <section id="why-us" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            Why Choose NBBT
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            The NBBT Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just move freight—we deliver peace of mind. Here's why
            businesses across the nation trust NBBT Transporter with their most
            valuable shipments.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              {/* Decorative gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              ></div>

              <div className="relative">
                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${reason.color} mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <reason.icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-blue-700 to-red-700 rounded-2xl p-12 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Years in Business", suffix: "" },
              { number: "500", label: "Active Clients", suffix: "+" },
              { number: "99.9", label: "On-Time Rate", suffix: "%" },
              { number: "50", label: "States Covered", suffix: "" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-white"
              >
                <div className="text-5xl font-bold mb-2">
                  {stat.number}
                  <span className="text-3xl">{stat.suffix}</span>
                </div>
                <div className="text-white/80 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
