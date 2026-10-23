import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-serif text-4xl text-sh-navy font-bold uppercase tracking-wide mb-3">
            Contact Us
          </h1>
          <p className="font-sans text-sh-gray text-base">
            Whether you have questions, need prayer, or are planning your first
            visit, we are here to connect with you.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Column 1: Contact Information & Form */}
          <div className="flex flex-col gap-8">
            {/* Quick Details Card */}
            <div className="bg-sh-light border border-sh-light rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-sh-navy mb-4">
                Souls Harbor Apostolic Church
              </h2>

              <div className="space-y-4 font-sans text-sh-navy">
                <div>
                  <span className="text-xs uppercase tracking-wider text-sh-gray font-semibold block">
                    Pastor
                  </span>
                  <p className="text-lg font-medium">Pastor Jordan Riley</p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-sh-gray font-semibold block">
                    Phone
                  </span>
                  <a
                    href="tel:7753585116"
                    className="text-lg font-medium hover:text-sh-gold transition-colors inline-block"
                  >
                    (775) 358-5116
                  </a>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-sh-gray font-semibold block">
                    Campus Address
                  </span>
                  <p className="text-base text-sh-navy">
                    450 Queen Way
                    <br />
                    Sparks, NV 89431
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="border border-sh-light rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-sh-navy mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-sh-gray mb-6 font-sans">
                Fill out the form below and church leadership will follow up
                with you.
              </p>

              <form className="flex flex-col gap-4 font-sans text-sm">
                <div>
                  <label className="block text-xs font-semibold uppercase text-sh-navy mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg border border-sh-light focus:outline-none focus:border-sh-gold transition-colors text-sh-navy bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-sh-navy mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="johndoe@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-sh-light focus:outline-none focus:border-sh-gold transition-colors text-sh-navy bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-sh-navy mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help or pray for you?"
                    className="w-full px-4 py-2.5 rounded-lg border border-sh-light focus:outline-none focus:border-sh-gold transition-colors text-sh-navy bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-sh-gold text-white font-semibold py-3 rounded-full hover:bg-opacity-95 transition shadow-sm text-xs uppercase tracking-wider"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Map & Driving Directions */}
          <div className="flex flex-col gap-6">
            {/* Embedded Google Map */}
            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-sh-light shadow-sm">
              <iframe
                title="Souls Harbor Apostolic Church Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.5857876807897!2d-119.7490696!3d39.5492196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80993f350bbdb8e9%3A0xc3b83c44840eefee!2s450%20Queen%20Way%2C%20Sparks%2C%20NV%2089431!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Turn-by-Turn Directions Box */}
            <div className="bg-sh-light border border-sh-light rounded-2xl p-6 shadow-sm font-sans">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-lg font-bold text-sh-navy">
                  Driving Directions
                </h3>
                <Link
                  href="https://maps.google.com/?q=450+Queen+Way,+Sparks,+NV+89431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-sh-gold hover:underline font-semibold"
                >
                  Open in Maps ↗
                </Link>
              </div>
              <p className="text-sm text-sh-navy leading-relaxed">
                From the I-80 East, exit Pyramid Way and turn left. Continue for
                about 2 miles, then take a right on Queen Way. The church campus
                is just past Teglia Dr. Turn left to enter the driveway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
