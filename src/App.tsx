/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Instagram, ChevronRight, X } from "lucide-react";
import { CurvedDivider } from "./components/CurvedDivider";
import { PopupButton, Widget } from "@typeform/embed-react";
import { useState, useEffect } from "react";
import logo from "./assets/logo.png";

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    // Carson Marketing - Force Refresh
    document.title = "Carson Marketing";
    
    // Set favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = logo;
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = logo;
      document.head.appendChild(newLink);
    }
  }, []);

  const TypeformModal = () => (
    <AnimatePresence>
      {isFormOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-brand-red flex flex-col"
        >
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setIsFormOpen(false)}
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex-grow">
            <Widget 
              id="soeNBjx4" 
              style={{ width: '100%', height: '100%' }} 
              className="my-form"
              opacity={0}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen flex flex-col bg-brand-grey">
      <TypeformModal />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-grey/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Carson Marketing"
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="bg-brand-red text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition-opacity"
        >
          Apply Now
        </button>
      </nav>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bokeh-bg min-h-[85vh] flex flex-col items-start justify-center px-8 md:px-16 lg:px-32 py-20 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl max-w-3xl leading-[1.1] mb-10 font-display font-bold tracking-tight"
          >
            Grow your Ecommerce Store with <span className="text-brand-red">High ROI</span> Advertising
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-black font-medium max-w-xl mb-16 leading-snug"
          >
            Dedicated to crafting impactful strategies that connect with audiences, drive measurable results, and foster meaningful growth
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <button 
              onClick={() => setIsFormOpen(true)}
              className="text-2xl font-bold mb-2 px-2 hover:text-gray-500 transition-colors"
            >
              Apply Now
            </button>
            <div className="w-48 h-1.5 bg-black rounded-full"></div>
          </motion.div>

        </section>

        {/* Transition: White to Black */}
        <div className="bg-black">
          <CurvedDivider type="bottom" color="#f5f5f5" />
        </div>

        {/* Consistent Growth Section */}
        <section className="bg-black text-white py-24 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl leading-tight mb-12">
              Join the ranks of the numerous brands we've helped achieve {" "}
              <span className="relative inline-block px-4">
                consistent
                <svg className="absolute -inset-x-4 -inset-y-3 w-[calc(100%+2rem)] h-[calc(100%+1.5rem)] text-brand-red opacity-90" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path 
                    d="M5,20 C5,5 95,2 95,18 C95,34 5,38 5,22 C5,10 90,8 98,20" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                    className="drop-shadow-sm"
                  />
                </svg>
              </span>
              {" "} growth.
            </h2>
          </motion.div>
        </section>

        {/* Dashboard Previews */}
        <section className="bg-black py-24 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h3 className="text-white text-center text-2xl md:text-3xl mb-12">
              Consistent high volume days through FB & IG Ads
            </h3>
            <div className="space-y-8">
              {/* Images removed */}
            </div>
          </div>
        </section>

        {/* ROAS Section */}
        <section className="bg-black py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-white text-3xl md:text-5xl text-center mb-16">
              Maintaining a 7x ROAS in the span of months...
            </h2>
          </div>
        </section>

        {/* Transition: Black to White */}
        <div className="bg-brand-grey">
          <CurvedDivider type="bottom" color="black" />
        </div>

        {/* Tools Section */}
        <section className="bg-brand-grey py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl mb-8">All the tools you need to grow your brand</h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
              From strategy to analytics, we offer everything you need to boost engagement, drive conversions, and expand your brand's reach.
            </p>

            <div className="space-y-20">
              <div className="group">
                <h3 className="text-3xl md:text-4xl mb-4 inline-block pb-1">Tiktok Ads</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
                  Leverage TikTok's powerful algorithm to reach a highly engaged audience with creative, short-form video ads that capture attention and drive conversions.
                </p>
              </div>

              <div className="group">
                <h3 className="text-3xl md:text-4xl mb-4 inline-block pb-1">Meta Campaigns</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
                  Create targeted campaigns on Facebook & Instagram that connect with the right audience, increasing engagement and driving measurable results for your brand.
                </p>
              </div>

              <div className="group">
                <h3 className="text-3xl md:text-4xl mb-4 inline-block pb-1">Email and SMS</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
                  Reach your audience directly through personalized email and SMS campaigns that drive engagement, increase conversions, and nurture customer relationships.
                </p>
              </div>
            </div>
            
          </div>
        </section>

        <CurvedDivider type="bottom" color="#f5f5f5" />

        {/* Revenue Section */}
        <section className="bg-black text-white py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl mb-16">Extra $50k in revenue?</h2>
            
            <p className="text-xl mb-12 text-gray-400">Trusted by over 22 reputable brands worldwide</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left md:text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold mb-2">$500K +</p>
                <p className="text-gray-400">Revenue generated for clients</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold mb-2">200+</p>
                <p className="text-gray-400">Meta ads campaigns managed</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold mb-2">22+</p>
                <p className="text-gray-400">Brands partnered</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold mb-2">5X+</p>
                <p className="text-gray-400">ROA average</p>
              </div>
            </div>
            
          </div>
        </section>

        {/* Transition: Black to White */}
        <div className="bg-brand-grey">
          <CurvedDivider type="bottom" color="black" />
        </div>

        {/* Final CTA Section */}
        <section className="bokeh-bg py-32 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl mb-8">Let's work together</h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-16">
              Achieve Sustainable Growth with Data-Driven Strategies.
            </p>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="text-2xl font-bold border-b-4 border-black pb-2 px-6 flex items-center gap-2 mx-auto hover:text-gray-500 transition-colors duration-300"
            >
              Apply Now <ChevronRight className="w-6 h-6" />
            </button>
            
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <div className="bg-black">
        <CurvedDivider type="bottom" color="#f5f5f5" />
        <footer className="py-12 px-6 flex flex-col items-center gap-8">
          <a 
            href="https://www.instagram.com/carson.marketing/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <Instagram className="w-8 h-8 text-white cursor-pointer" />
          </a>
        </footer>
      </div>
    </div>
  );
}
