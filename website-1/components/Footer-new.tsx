import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 text-lg">
                Get the latest insights on fleet safety, industry trends, and company updates
                delivered directly to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="text-3xl font-bold">
                <span className="text-blue-400">Future</span>
                <span className="text-orange-400">Experts</span>
              </div>
              <span className="ml-2 text-gray-400">Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading provider of AI-powered fleet safety management solutions,
              helping companies reduce accidents, save costs, and improve operational efficiency worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors group">
                <Facebook className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors group">
                <Twitter className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors group">
                <Linkedin className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors group">
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Fleet Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Driver Monitoring
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Safety Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Compliance Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Consulting Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0 w-5 h-5" />
                <div>
                  <p className="text-gray-300">
                    123 Innovation Drive<br />
                    Tech District, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400 flex-shrink-0 w-5 h-5" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400 flex-shrink-0 w-5 h-5" />
                <p className="text-gray-300">contact@futureexpertsgroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Future Experts Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
