export interface FaqItem {
  question: string;
  answer: string;
}

export const generalFaqs: FaqItem[] = [
  {
    question: 'Does Divergent Tanzania operate outside Dar es Salaam and Mkuranga?',
    answer:
      'Yes. Divergent Tanzania Limited serves clients across Tanzania and East Africa. While our base is in Mkuranga, Pwani, our logistics, warehousing, agribusiness, and clean energy services extend to major commercial centres and regional delivery points nationwide.',
  },
  {
    question: 'What industries does Divergent Tanzania serve?',
    answer:
      'We work with agricultural cooperatives, commodity traders, food processors, manufacturers, NGOs, and energy distributors who need reliable logistics, warehouse storage, farmer market access, or LPG and clean energy solutions in Tanzania.',
  },
  {
    question: 'How can I request a quote from Divergent Tanzania?',
    answer:
      'Contact us by phone at +255 656 426 585, email info@divergenttz.co.tz, or use the contact form on divergenttz.co.tz/contact. Describe your service needs and our team will respond within one business day.',
  },
  {
    question: 'Is Divergent Tanzania Limited the same as other Divergent companies online?',
    answer:
      'No. Divergent Tanzania Limited is a Tanzania-based company established in 2025, headquartered in Mkuranga, Pwani. Our official website is divergenttz.co.tz and we specialise in logistics, warehousing, agribusiness support, and clean energy in Tanzania.',
  },
];

export const serviceFaqs: Record<string, FaqItem[]> = {
  'logistics-supply-chain': [
    {
      question: 'What areas does Divergent Tanzania distribution network cover?',
      answer:
        'Our distribution network connects Dar es Salaam, Pwani, and regional hubs with rural and secondary-town delivery points across Tanzania, supporting both urban and agricultural supply chains.',
    }
  ],
  'warehouse-operations': [
    {
      question: 'Is Divergent Tanzania warehouse storage climate-controlled?',
      answer:
        'Yes. Our warehouse facilities include climate-controlled storage areas suited to grains, pulses, and other sensitive commodities — helping preserve grade quality and reduce spoilage between harvest and sale.',
    }
  ]
};

export function getAllFaqs(): FaqItem[] {
  return [...generalFaqs, ...Object.values(serviceFaqs).flat()];
}

export function getFaqsForService(slug: string): FaqItem[] {
  return serviceFaqs[slug] ?? [];
}
