import { ChevronDown, Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-gray-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>info@futureexpertsgroup.com</span>
            </div>
          </div>
          <div className="hidden md:block text-gray-300">
            Leading provider of fleet safety management solutions
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-3xl font-bold text-gray-900">
                <span className="text-blue-600">Future</span>
                <span className="text-orange-500">Experts</span>
              </div>
              <div className="ml-2 text-sm text-gray-600 hidden sm:block">
                Group
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium border-b-2 border-blue-600 pb-1">
                Home
              </a>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
                  Products <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
                  Solutions <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
                  Industries <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
                  About <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </a>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Button variant="outline" className="hidden md:flex border-blue-600 text-blue-600 hover:bg-blue-50">
                Get Quote
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Book Demo
              </Button>
              <Menu className="lg:hidden w-6 h-6 text-gray-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
