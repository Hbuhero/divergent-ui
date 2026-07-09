import type { RouteRecord } from 'vite-react-ssg';
import { RootLayout } from './components/layout/RootLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ServicesIndexPage from './pages/ServicesIndexPage';
import FaqPage from './pages/FaqPage';
import MediaPage from './pages/MediaPage';
import LogisticsPage from './pages/services/LogisticsPage';
import WarehousePage from './pages/services/WarehousePage';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesIndexPage /> },
      { path: 'services/logistics-supply-chain', element: <LogisticsPage /> },
      { path: 'services/warehouse-operations', element: <WarehousePage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'media', element: <MediaPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
];
