export interface ServiceContentSection {
  heading: string;
  paragraphs: string[];
}

export interface ContextLink {
  phrase: string;
  to: string;
}

export interface ServicePageContent {
  slug: string;
  h1: string;
  /** Concise featured-snippet target (40–80 words) */
  snippetAnswer: string;
  intro: string;
  introLinks?: ContextLink[];
  whoIsThisFor: string;
  sections: ServiceContentSection[];
  whyChooseHeading?: string;
  whyChooseParagraphs?: string[];
  ctaHeading: string;
}

export const servicePageContent: ServicePageContent[] = [
  {
    slug: 'logistics-supply-chain',
    h1: 'Logistics & Supply Chain Services in Tanzania',
    snippetAnswer:
      'Divergent Tanzania Limited provides end-to-end logistics and supply chain services across Tanzania — including nationwide distribution, last-mile delivery, cold chain logistics, and fleet tracking for commodity traders, cooperatives, and distributors.',
    intro:
      'Divergent Tanzania Limited provides end-to-end logistics and supply chain services across Tanzania and East Africa. From port-to-warehouse transport to last-mile delivery in rural districts, our integrated network helps businesses move goods reliably, on time, and at scale — with 98% on-time delivery performance across active routes. Clients often combine transport with warehouse storage and agribusiness market access.',
    introLinks: [{ phrase: 'warehouse storage', to: '/services/warehouse-operations' }],
    whoIsThisFor:
      'Our logistics services are built for commodity traders, agricultural cooperatives, manufacturers, NGOs, and distributors who need dependable transport and distribution across Tanzania. Whether you are moving bulk agricultural produce, packaged consumer goods, or temperature-sensitive cargo, we design routes and handling processes around your timelines and compliance requirements.',
    sections: [
      {
        heading: 'Nationwide Distribution & Transportation',
        paragraphs: [
          'We operate a modern distribution network connecting major commercial centres — including Dar es Salaam, Mwanza, Arusha, and Dodoma — with regional hubs and rural delivery points. Our fleet and partner-carrier model allows us to consolidate loads, optimise route efficiency, and maintain consistent service levels even during peak harvest and retail seasons.',
          'Every shipment is planned against clear SLAs, with dispatch tracking from origin to destination. For businesses expanding beyond a single region, Divergent Tanzania acts as a single logistics partner rather than a patchwork of informal transporters — reducing cost, delay, and loss risk across your supply chain.',
        ],
      },
      {
        heading: 'Last-Mile Delivery',
        paragraphs: [
          'Last-mile delivery is often the most expensive and unreliable leg of the supply chain in Tanzania. We specialise in reaching secondary towns, cooperative collection points, and retail outlets that many national carriers overlook — ensuring your products arrive where your customers and farmers actually are.',
          'Our last-mile teams coordinate with warehouse operations and agribusiness aggregation programmes so that outbound deliveries are timed to inventory availability and market windows. This integrated approach reduces dwell time, spoilage, and repeated handling costs.',
        ],
      },
    ],
    whyChooseHeading: 'Why Businesses Choose Our Logistics Services',
    whyChooseParagraphs: [
      'Businesses across Tanzania choose Divergent Tanzania because we combine local route knowledge with professional supply chain discipline. We understand the realities of rural road conditions, seasonal agricultural flows, and regional market timing — and we build logistics plans that work in practice, not just on paper.',
      'With 98% on-time delivery across our active network and integrated links to warehousing and agribusiness services, we offer a logistics and supply chain partner that grows with your operations — from single-route contracts to multi-region distribution programmes across East Africa.',
    ],
    ctaHeading: 'Get a Logistics Quote',
  },
  {
    slug: 'warehouse-operations',
    h1: 'Warehouse & Storage Services in Tanzania',
    snippetAnswer:
      'Divergent Tanzania Ltd offers warehouse and storage services in Tanzania — including climate-controlled commodity storage, agricultural warehouse receipt systems, real-time inventory management, and quality inspection for traders and cooperatives.',
    intro:
      'Divergent Tanzania Limited delivers secure warehouse and storage services for agricultural commodities, processed goods, and commercial inventory across Tanzania. Our facilities combine climate-controlled storage, warehouse receipt systems, and real-time inventory management — supporting more than 50,000 tons stored for clients who depend on safe, auditable commodity handling, with coordinated logistics and distribution for outbound delivery.',
    introLinks: [{ phrase: 'logistics and distribution', to: '/services/logistics-supply-chain' }],
    whoIsThisFor:
      'Our warehouse services serve commodity traders, agricultural cooperatives, food processors, and export-oriented businesses that need reliable storage with transparent inventory records. If you require financing against stored goods or quality inspection before sale, our warehouse receipt and inspection processes are designed to unlock value from inventory without unnecessary risk.',
    sections: [
      {
        heading: 'Climate-Controlled Storage',
        paragraphs: [
          'Many agricultural and food commodities lose value when exposed to heat, humidity, or pests. Our climate-controlled storage areas maintain conditions suited to grains, pulses, horticulture, and other sensitive products — extending shelf life and preserving grade quality between harvest and sale.',
          'Storage plans are tailored to commodity type, volume, and expected hold period. Whether you need short-term overflow capacity during harvest or longer-term strategic storage ahead of export windows, we provide environments that protect your investment in inventory.',
        ],
      },
      {
        heading: 'Real-Time Inventory Management',
        paragraphs: [
          'Inventory visibility reduces disputes, shrinkage, and operational blind spots. Our warehouse operations include real-time inventory tracking — recording inbound lots, internal movements, quality holds, and outbound releases against client accounts.',
          'Operations teams and clients can reconcile physical stock with system records quickly, supporting audit requirements and faster decision-making when market prices move. Accurate inventory data is the foundation of both efficient warehouse operations and trustworthy commodity financing.',
        ],
      },
      {
        heading: 'Commodity Financing & Quality Inspection',
        paragraphs: [
          'Stored commodities can be productive assets when quality and custody are verified. We provide inspection services at intake and before release, documenting grade, moisture, and condition against agreed standards — a prerequisite for many commodity financing arrangements.',
          'By linking inspection outcomes to warehouse receipts and inventory records, Divergent Tanzania helps clients present bankable collateral to lenders. This supports working capital for traders and cooperatives who would otherwise face cash-flow gaps between storage and sale.',
        ],
      },
    ],
    ctaHeading: 'Request Warehouse Services',
  },
  // {
  //   slug: 'clean-energy',
  //   h1: 'LPG Distribution & Clean Energy Solutions',
  //   snippetAnswer:
  //     'Divergent Tanzania distributes LPG cylinders and clean energy solutions across Tanzania — including solar projects and clean cooking programmes that help households and businesses reduce reliance on firewood and charcoal.',
  //   intro:
  //     'Divergent Tanzania Limited promotes cleaner energy access through LPG distribution, solar energy projects, and clean cooking solutions across Tanzania. We currently distribute approximately 15,000 LPG cylinders monthly, helping households, institutions, and businesses transition away from firewood and charcoal toward safer, more efficient energy alternatives — supported by logistics infrastructure for reliable supply.',
  //   introLinks: [{ phrase: 'logistics infrastructure', to: '/services/logistics-supply-chain' }],
  //   whoIsThisFor:
  //     'Our clean energy services support households seeking reliable cooking fuel, schools and health facilities reducing indoor air pollution, hospitality businesses managing energy costs, and organisations pursuing sustainability targets. If you need dependable LPG supply or want to explore solar and clean cooking options in Tanzania, we provide practical energy solutions grounded in local distribution capability.',
  //   sections: [
  //     {
  //       heading: 'Solar Energy Projects',
  //       paragraphs: [
  //         'Solar energy extends access to electricity where grid connection is limited or unreliable. We support solar energy projects for agricultural processing, community facilities, and commercial operations — integrating clean generation with the broader energy access goals of our clients and partners.',
  //         'Project approaches are scoped to load requirements, maintenance capacity, and financing realities on the ground. Solar is most impactful when designed as part of an overall energy strategy rather than a standalone installation — and we work with clients to align generation with actual operational needs.',
  //       ],
  //     },
  //     {
  //       heading: 'Clean Cooking Solutions',
  //       paragraphs: [
  //         'Indoor air pollution from traditional cooking fuels affects health and environmental outcomes across Tanzania. Clean cooking solutions — including improved LPG stoves and compatible equipment — reduce smoke exposure and cooking time while lowering pressure on forest resources.',
  //         'Divergent Tanzania promotes clean cooking through product access, user education, and reliable fuel supply. Adoption increases when communities trust both the equipment and the continuity of fuel delivery — which is why our clean energy work is integrated with our LPG distribution network.',
  //       ],
  //     },
  //     {
  //       heading: 'Carbon Reduction Initiatives',
  //       paragraphs: [
  //         'Transitioning from charcoal and firewood to LPG and solar contributes to measurable carbon reduction at household and institutional levels. We support clients and partners documenting fuel-switch outcomes as part of broader sustainability and ESG reporting commitments.',
  //         'Carbon reduction is a co-benefit of practical energy access — not a separate abstract goal. By making cleaner options affordable and available in Mkuranga, Pwani, and surrounding regions, Divergent Tanzania contributes to Tanzania\'s environmental and public health objectives while building a viable clean energy business.',
  //       ],
  //     },
  //   ],
  //   ctaHeading: 'Explore Clean Energy Options',
  // },
];

export function getServicePageContent(slug: string): ServicePageContent | undefined {
  return servicePageContent.find((content) => content.slug === slug);
}
