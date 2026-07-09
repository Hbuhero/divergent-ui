export const contactInfo = {
  legalName: 'Divergent Tanzania Limited',
  shortName: 'Divergent Tanzania Ltd',
  addressLines: ['Mkuranga, Pwani', 'Tanzania'],
  locality: 'Mkuranga',
  region: 'Pwani',
  country: 'TZ',
  phones: [
    { display: '+255 656 426 585', tel: '+255656426585' },
    { display: '+255 787 589 945', tel: '+255787589945' },
  ],
  primaryPhone: { display: '+255 656 426 585', tel: '+255656426585' },
  email: 'info@divergenttz.co.tz',
  hours: {
    weekdays: 'Monday – Friday: 8:00 AM – 6:00 PM',
    saturday: 'Saturday: 9:00 AM – 1:00 PM',
  },
  geo: { latitude: -7.1218674, longitude: 39.2037708 },
  foundingDate: '2025-09',
} as const;
