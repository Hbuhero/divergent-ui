import type { RouteRecord } from 'vite-react-ssg';
import { RootLayout } from './components/layout/RootLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ServicesIndexPage from './pages/ServicesIndexPage';
import AgribusinessPage from './pages/services/AgribusinessPage';
import CleanEnergyPage from './pages/services/CleanEnergyPage';
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
      { path: 'services/agribusiness-support', element: <AgribusinessPage /> },
      { path: 'services/clean-energy', element: <CleanEnergyPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
];
