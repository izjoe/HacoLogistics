import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  Truck,
  Shield,
  Zap,
  Wallet,
  ArrowRight,
  MapPin,
  Globe,
  Smartphone,
  Database,
  Headphones,
  SmartphoneNfc,
  FileCheck,
  Star,
  CheckCircle,
  UserCheck,
  Mail,
  TrendingUp,
  Users,
  Clock,
  Sparkles,
  Play
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [typedText, setTypedText] = useState("");
  const [currentFeature, setCurrentFeature] = useState(0);

  const fullText = "Logistics";

  // Typing Animation
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.substring(0, i));
        i++;
      } else clearInterval(typing);
    }, 50);
    return () => clearInterval(typing);
  }, []);

  const handleGetStarted = (role = "shipper") => {
    navigate(`/signup?role=${role}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-yellow-50 text-gray-900 overflow-hidden relative">

      {/* Full-page background (glowing blobs + grid) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-60 -right-60 w-[800px] h-[800px] bg-yellow-300/10 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-60 w-[700px] h-[700px] bg-amber-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-3xl" />

        {/* grid lines */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #333 1px, transparent 1px),
              linear-gradient(to bottom, #333 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* PAGE CONTENT */}
      <div className="relative z-10">

        {/* HERO ────────────────────────────────────────────── */}
        <div className="pt-20 px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

            {/* LEFT HERO */}
            <div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="text-yellow-600">Haco</span>
                <span className="text-yellow-500 drop-shadow-md">Logistics</span>
              </h1>

              <p className="pb-2 text-3xl md:text-4xl bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent font-medium tracking-wide">
                Redefining Logistics
              </p>

              <div className="text-2xl text-gray-700 mb-4 h-16 mt-8">
                {typedText}
                <span className="animate-pulse">|</span>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
                <button
                  onClick={() => handleGetStarted("shipper")}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold rounded-full hover:scale-105 transition-all flex items-center group shadow-lg hover:shadow-yellow-500/50"
                >
                  <span>{t("home_page.get_started")}</span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>

                <Link
                  to="/viewvehicle"
                  className="px-8 py-4 bg-yellow-50 border-2 border-yellow-600 text-yellow-700 rounded-full hover:bg-yellow-100 transition-all flex items-center group font-semibold"
                >
                  <MapPin className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                  {t("home_page.how_it_works")}
                </Link>
              </div>

              {/* Highlights */}
              <div className="mt-10 flex items-center space-x-6">
                <div className="flex items-center group">
                  <Shield className="w-5 h-5 text-green-600 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-700 group-hover:text-green-700 transition-colors">100% Secure</span>
                </div>
                <div className="flex items-center group">
                  <Zap className="w-5 h-5 text-yellow-600 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-700 group-hover:text-yellow-700 transition-colors">AI-Powered</span>
                </div>
                <div className="flex items-center group">
                  <Wallet className="w-5 h-5 text-yellow-600 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-700 group-hover:text-yellow-700 transition-colors">Transparent Pricing</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - MODERN LOGISTICS IMAGE WITH OVERLAY */}
            <div className="relative lg:ml-8 group">
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-yellow-300/10 to-amber-400/20" />
                
                {/* Main logistics image */}
                <div className="relative h-96 w-full">
                  {/* Placeholder for actual image - using a logistics-themed background */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-50 group-hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage: `url('/logic.JPG')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundBlendMode: 'overlay'
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
                  
                  {/* Floating UI elements overlay */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-3 shadow-lg hover:scale-105 transition-transform">
                      <div className="flex items-center gap-2">
                        <Truck className="w-6 h-6 text-white" />
                        <span className="text-white font-bold text-sm">1.2k Active</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-center group">
                        <p className="text-2xl font-bold text-yellow-700 group-hover:scale-110 transition-transform">98%</p>
                        <p className="text-xs text-gray-600 group-hover:text-yellow-700 transition-colors">Accuracy</p>
                      </div>
                      <div className="text-center group">
                        <p className="text-2xl font-bold text-yellow-700 group-hover:scale-110 transition-transform">35%</p>
                        <p className="text-xs text-gray-600 group-hover:text-yellow-700 transition-colors">Faster</p>
                      </div>
                      <div className="text-center group">
                        <p className="text-2xl font-bold text-yellow-700 group-hover:scale-110 transition-transform">24/7</p>
                        <p className="text-xs text-gray-600 group-hover:text-yellow-700 transition-colors">Tracking</p>
                      </div>
                    </div>
                  </div>
                 
                </div>
                
                {/* Decorative border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/30 rounded-2xl transition-all duration-300" />
              </div>
              
              {/* Small floating cards around the main image */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-yellow-300/20 to-amber-300/20 backdrop-blur-lg rounded-xl p-4 border border-yellow-400/30 shadow-lg max-w-[180px] hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400/30 to-amber-400/30 flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <Sparkles className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-700">AI Powered</p>
                    <p className="text-sm font-bold text-yellow-700">Real-time</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 backdrop-blur-lg rounded-xl p-4 border border-yellow-400/30 shadow-lg max-w-[180px] hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400/30 to-orange-400/30 flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <TrendingUp className="w-4 h-4 text-yellow-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-700">Network</p>
                    <p className="text-sm font-bold text-yellow-700">500+ Cities</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* FEATURES  */}
        <div className="max-w-7xl mx-auto mt-24 px-4">

   <h2 className="text-5xl font-bold text-center text-yellow-700 drop-shadow mb-8 
               hover:scale-105 transition-transform duration-300 mx-auto block">
  {t("home_page.features_title")}
</h2>


          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16 hover:text-yellow-900 transition-colors duration-300">
            {t("nav.about")} shippers and transporters using AI-powered
            tools, smart tracking, optimization engines, and deep logistics insights.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"> 

            {/* card 1 */}
            <FeatureCard
              icon={<MapPin className="w-8 h-8 text-yellow-700 group-hover:rotate-12 transition-transform" />}
              title={t("home_page.fast_delivery")}
              desc={t("home_page.fast_delivery_desc")}
              border="border-yellow-200"
              glow="hover:shadow-yellow-400/40"
            /> 

            {/* card 2 */}
            <FeatureCard
              icon={<Truck className="w-8 h-8 text-yellow-600 group-hover:rotate-12 transition-transform" />}
              title={t("home_page.secure_payment")}
              desc={t("home_page.secure_payment_desc")}
              border="border-yellow-200"
              glow="hover:shadow-yellow-400/40"
            />

            {/* card 3 */}
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-yellow-700 group-hover:rotate-12 transition-transform" />}
              title={t("home_page.support_24_7")}
              desc={t("home_page.support_desc")}
              border="border-yellow-200"
              glow="hover:shadow-yellow-400/40"
            />

            {/* card 4 */}
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-yellow-600 group-hover:rotate-12 transition-transform" />}
              title={t("home_page.affordable")}
              desc={t("home_page.affordable_desc")}
              border="border-yellow-200"
              glow="hover:shadow-yellow-400/40"
            />

            {/* card 5 */}
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-green-700 group-hover:rotate-12 transition-transform" />}
              title={t("common.success")}
              desc="All accounts verified for authenticity and safety."
              border="border-yellow-200"
              glow="hover:shadow-green-400/40"
            />

            {/* card 6 */}
            <FeatureCard
              icon={<Wallet className="w-8 h-8 text-yellow-700 group-hover:rotate-12 transition-transform" />}
              title="Transparent Pricing"
              desc="Pay only for the distance you travel. No surprises."
              border="border-yellow-200"
              glow="hover:shadow-yellow-400/40"
            />

          </div>
        </div>

        {/*TESTIMONIALS*/}
        <div className="mt-40 max-w-7xl mx-auto px-4">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-center text-yellow-700 drop-shadow mb-6 hover:scale-105 transition-transform duration-300 inline-block">
              {t("home_page.testimonials")}
            </h2>
            
            <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12 leading-relaxed hover:text-yellow-900 transition-colors duration-300">
              Transporters, logistics managers, and shippers trust HacoLogistics
              to simplify operations and deliver excellence.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-yellow-50 backdrop-blur-lg rounded-2xl p-6 border border-yellow-200 hover:border-yellow-400 transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-300/30 to-yellow-400/30 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <TrendingUp className="w-6 h-6 text-yellow-700" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-700 group-hover:scale-110 transition-transform">10,000+</p>
                  <p className="text-gray-700 group-hover:text-yellow-700 transition-colors">{t("home_page.cta_title")}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 backdrop-blur-lg rounded-2xl p-6 border border-yellow-200 hover:border-yellow-400 transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-300/30 to-green-400/30 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-700 group-hover:scale-110 transition-transform">5,000+</p>
                  <p className="text-gray-700 group-hover:text-green-700 transition-colors">Happy Clients</p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 backdrop-blur-lg rounded-2xl p-6 border border-yellow-200 hover:border-yellow-400 transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-300/30 to-yellow-400/30 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Clock className="w-6 h-6 text-yellow-700" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-700 group-hover:scale-110 transition-transform">24/7</p>
                  <p className="text-gray-700 group-hover:text-yellow-700 transition-colors">{t("home_page.support_24_7")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
         <h1 className="text-5xl font-bold text-center text-yellow-700 drop-shadow mb-10">
  {t("home_page.testimonials")}
</h1>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <TestimonialCard
              text="Booking a truck now takes seconds. AI route planning is extremely accurate! Our delivery efficiency has improved by 60%."
              img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              name="Rohit Sharma"
              role="Shipper • Delhi"
              rating={5}
              company="Delhi Transport Co."
            />

            <TestimonialCard
              text="I get more bookings and better trip planning. My income has doubled! The platform is incredibly user-friendly."
              img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
              name="Mahesh Yadav"
              role="Driver • Jaipur"
              rating={5}
              company="Independent Transporter"
            />

            <TestimonialCard
              text="Excellent tracking system. Our logistics team relies on it daily. The real-time updates have transformed our operations."
              // Fixed the image URL - using a reliable Unsplash image
              img="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
              name="Sneha Patel"
              role="Logistics Manager • Mumbai"
              rating={5}
              company="Mumbai Logistics Pvt Ltd"
            />

          </div>
        </div>

        {/* FOOTER*/}
        <footer className="mt-40 py-20 bg-gradient-to-b from-transparent to-yellow-50 backdrop-blur-xl border-t border-yellow-200 px-6 relative overflow-hidden">
          
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
              
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-medium text-yellow-700 group-hover:scale-105 transition-transform inline-block">
                      {t("home_page.footer_title")}
                    </h1> 
                    <p className="text-sm text-gray-700 group-hover:text-yellow-700 transition-colors">{t("home_page.footer_desc")}</p>
                  </div>
                </div>
               
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-yellow-700 flex items-center gap-2 group">
                  <MapPin className="w-5 h-5 text-yellow-600 group-hover:rotate-12 transition-transform" />
                  <span className="group-hover:scale-105 transition-transform inline-block">Quick Links</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    { label: t("nav.home"), link: "/" },
                    { label: t("nav.about"), link: "/about" },
                    { label: t("nav.services"), link: "/services" },
                    { label: t("nav.news"), link: "/news" },
                    { label: t("nav.contact"), link: "/contact" },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.link}
                        className="text-gray-700 hover:text-yellow-700 transition-colors flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 transition-transform" />
                        <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-yellow-700 flex items-center gap-2 group">
                  <Zap className="w-5 h-5 text-yellow-600 group-hover:rotate-12 transition-transform" />
                  <span className="group-hover:scale-105 transition-transform inline-block">Features</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    "AI Route Optimization",
                    "Live GPS Tracking",
                    "Smart Vehicle Matching",
                    "Predictive Analytics",
                    "Secure Payments"
                  ].map((feature, idx) => (
                    <li key={idx} className="text-gray-700 hover:text-yellow-700 transition-colors flex items-center group">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-600 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:translate-x-1 transition-transform">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-yellow-700 flex items-center gap-2 group">
                  <Headphones className="w-5 h-5 text-yellow-600 group-hover:rotate-12 transition-transform" />
                  <span className="group-hover:scale-105 transition-transform inline-block">{t("contact_page.hero_title")}</span>
                </h3>
                <ul className="space-y-4">
                  <li className="text-gray-700 hover:text-yellow-700 transition-colors flex items-start group">
                    <Headphones className="w-5 h-5 mr-3 text-yellow-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium">Support</p>
                      <p className="text-sm">1800-XXX-XXXX</p>
                      <p className="text-xs text-gray-600 group-hover:text-yellow-700 transition-colors">Mon-Sun, 24/7</p>
                    </div>
                  </li>
                  <li className="text-gray-700 hover:text-yellow-700 transition-colors flex items-start group">
                    <Mail className="w-5 h-5 mr-3 text-green-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm group-hover:text-green-700 transition-colors">support@hacologistics.in</p>
                    </div>
                  </li>
                  <li className="text-gray-700 hover:text-yellow-700 transition-colors flex items-start group">
                    <SmartphoneNfc className="w-5 h-5 mr-3 text-yellow-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium">Mobile App</p>
                      <p className="text-sm">Coming Soon</p>
                      <p className="text-xs text-gray-600 group-hover:text-yellow-700 transition-colors">iOS & Android</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-yellow-200 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <p className="text-gray-700 text-sm hover:text-yellow-700 transition-colors">
                  {t("home_page.copyright")}
                </p>
                <div className="flex items-center gap-2 group">
                  <Shield className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-600 group-hover:text-green-700 transition-colors">ISO 27001 Certified</span>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 group">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse group-hover:scale-150 transition-transform" />
                  <span className="text-sm text-gray-700 group-hover:text-green-700 transition-colors">All systems operational</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <Link to="/privacy" className="text-sm text-gray-700 hover:text-yellow-700 transition-colors hover:scale-105 inline-block">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="text-sm text-gray-700 hover:text-yellow-700 transition-colors hover:scale-105 inline-block">
                    Terms of Service
                  </Link>
                  <Link to="/cookies" className="text-sm text-gray-700 hover:text-yellow-700 transition-colors hover:scale-105 inline-block">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc, border, glow }) => (
  <div
    className={`bg-yellow-50 backdrop-blur-xl p-8 rounded-xl border ${border}
                hover:-translate-y-2 transition-all duration-300 ${glow}
                text-center group hover:bg-yellow-100`}   
  >
    <div className="mx-auto mb-4 bg-yellow-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center group-hover:bg-yellow-200">
      {icon}
    </div>

    <h3 className="text-2xl font-semibold text-yellow-900 mb-2 text-center group-hover:text-yellow-700 transition-colors">
      {title}
    </h3>

    <p className="text-gray-700 text-center group-hover:text-gray-800 transition-colors">{desc}</p>
  </div>
);


// TESTIMONIAL CARD COMPONENT
const TestimonialCard = ({ text, img, name, role, rating = 5, company }) => (
  <div className="group relative bg-yellow-50 backdrop-blur-xl border border-yellow-200 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:bg-yellow-100">
    
    {/* Top quote mark */}
    <div className="absolute top-6 right-6 text-6xl text-yellow-300/40 group-hover:text-yellow-400/50 transition-colors">"</div>
    
    {/* Rating */}
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} group-hover:scale-110 transition-transform`}
        />
      ))}
    </div>
    
    {/* Testimonial text */}
    <p className="text-gray-800 italic leading-relaxed mb-8 relative z-10 group-hover:text-gray-900 transition-colors">"{text}"</p>
    
    {/* User info */}
    <div className="flex items-center">
      <div className="relative">
        <img
          src={img}
          alt={name}
          className="w-14 h-14 rounded-full border-2 border-yellow-400/50 object-cover group-hover:border-yellow-500 transition-colors group-hover:scale-110 transition-transform"
        />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-600 rounded-full border-2 border-white flex items-center justify-center group-hover:scale-125 transition-transform">
          <UserCheck className="w-3 h-3 text-white" />
        </div>
      </div>
      <div className="ml-4">
        <h4 className="text-yellow-900 font-bold group-hover:text-yellow-700 transition-colors">{name}</h4>
        <p className="text-gray-700 text-sm group-hover:text-yellow-800 transition-colors">{role}</p>
        {company && <p className="text-yellow-700 text-sm font-medium group-hover:text-yellow-600 transition-colors">{company}</p>}
      </div>
    </div>
    
    {/* Bottom decorative element */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

export default Home;