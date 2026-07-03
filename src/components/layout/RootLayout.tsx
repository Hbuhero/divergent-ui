import { Outlet } from 'react-router-dom';
import { OptimizedImage } from '../ui/OptimizedImage';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

function WatermarkBackground() {
  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
      <OptimizedImage
        src="/images/transparent-logo2.png"
        decorative
        className="w-[80vw] max-w-3xl object-contain drop-shadow-2xl grayscale"
      />
    </div>
  );
}

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#F0F2F5] overflow-x-hidden relative">
      <WatermarkBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
