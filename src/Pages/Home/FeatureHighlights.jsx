import { FaRupeeSign, FaLink, FaGem } from "react-icons/fa";

const features = [
  {
    icon: <FaGem className="text-green-700 group-hover:text-white text-2xl" />,
    text: (
      <>
        <p>
        Experience luxury living with premium amenities: clubhouse, pool, gym, kids’ zone, indoor games, and salon, in Lucknow’s finest gated community.
        </p>
      </>
    ),
  },
  {
    icon: <FaRupeeSign className="text-green-700 group-hover:text-white text-2xl" />,
    text: (
      <>
        <p>
          Own your dream 2 & 3 BHK home in Lucknow from just <strong>₹66 Lakhs*</strong>. Experience seamless living in a RERA-approved township near IIM Road, where comfort meets convenience.
        </p>
       
      </>
    ),
  },
  {
    icon: <FaLink className="text-green-700 group-hover:text-white text-2xl" />,
    text: (
      <>
        <p>
         Book now with just <strong>5%</strong> and avail a <strong>construction-linked plan</strong> plus exclusive launch discounts on premium apartments <strong>near IIM Road in Eldeco City</strong>.
        </p>
      </>
    ),
  },
];

const FeatureHighlights = () => {
  return (
    <section className="bg-[#f9fcfa] py-6 lg:py-12 px-4 md:px-16  ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-4 group">
            <div className="bg-green-100 group-hover:bg-primary transition-colors duration-300 easy-in-out  p-4 flex items-center justify-center">
              {feature.icon}
            </div>
            <div className="text-sm text-gray-800 font-normal space-y-2">
              {feature.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
