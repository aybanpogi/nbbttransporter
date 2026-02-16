"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Operations Manager",
      company: "TechFlow Industries",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
      rating: 5,
      text: "NBBT has been our logistics partner for 3 years. Their reliability and professionalism are unmatched. Our supply chain has never been more efficient.",
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "GreenLeaf Manufacturing",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
      rating: 5,
      text: "Outstanding service! The real-time tracking and communication kept us informed every step of the way. Highly recommend for business logistics.",
    },
    {
      name: "Emily Rodriguez",
      position: "Supply Chain Director",
      company: "Nationwide Retail Co.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
      rating: 5,
      text: "We have tried many transportation companies, but NBBT stands out. Their attention to detail and customer service is exceptional. True professionals.",
    },
    {
      name: "David Thompson",
      position: "Warehouse Manager",
      company: "BuildRight Construction",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
      rating: 5,
      text: "The team at NBBT handles our heavy equipment shipments with care and precision. Never had a single issue. They are our go-to transportation partner.",
    },
    {
      name: "Jennifer Martinez",
      position: "Logistics Coordinator",
      company: "FreshFood Distributors",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
      rating: 5,
      text: "Temperature-controlled shipping is critical for our business. NBBT reliability ensures our products arrive fresh every time. Absolutely dependable!",
    },
    {
      name: "Robert Williams",
      position: "Procurement Head",
      company: "AutoParts Direct",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
      rating: 5,
      text: "Fast, affordable, and professional. NBBT has helped us reduce costs while improving delivery times. They have become an essential part of our operations.",
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Do not just take our word for it. Here is what businesses across the
            nation say about partnering with NBBT Transporter.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <Quote size={80} className="text-blue-700" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-blue-700 font-semibold">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-red-600/0 group-hover:from-blue-600/5 group-hover:to-red-600/5 transition-all duration-300 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6 font-semibold">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="text-2xl font-bold text-gray-800">TechFlow</div>
            <div className="text-2xl font-bold text-gray-800">GreenLeaf</div>
            <div className="text-2xl font-bold text-gray-800">BuildRight</div>
            <div className="text-2xl font-bold text-gray-800">FreshFood</div>
            <div className="text-2xl font-bold text-gray-800">AutoParts</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
