import React from 'react';
import { Fish, ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

interface ShopLayoutProps {
  children: React.ReactNode;
}

const ShopLayout = ({ children }: ShopLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Simplified Navigation for Shop */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgb(16,43,42)]/95 backdrop-blur-md">
        <div className="border-b border-primary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3">
              {/* Centered Logo */}
              <div className="flex items-center space-x-2 group">
                <Fish className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="flex flex-col text-center">
                  <span className="font-serif text-2xl font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300">
                    myFishMeal
                  </span>
                  <span className="font-serif text-sm text-primary leading-tight opacity-90">
                    Fischzucht Shop
                  </span>
                </div>
              </div>

              {/* Right side - could add cart summary or user menu */}
              <div className="w-20 flex justify-end">
                {/* Placeholder for future features like cart icon */}
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-[6rem]">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default ShopLayout; 