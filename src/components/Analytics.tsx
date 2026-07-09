import { Helmet } from 'react-helmet-async';

/** Loads Google Analytics when VITE_GA_MEASUREMENT_ID is set at build time. */
export function Analytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  if (!measurementId) return null;

  return (
    <Helmet>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}');
      `}</script>
    </Helmet>
  );
}
