import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    { name: "Men Fashion", href: "/services/men", icon: "👔", desc: "Latest trends in men's clothing", color: "from-blue-500 to-blue-700" },
    { name: "Women Fashion", href: "/services/women", icon: "👗", desc: "Elegant women's collection", color: "from-pink-500 to-rose-600" },
    { name: "Kids Collection", href: "/services/kids", icon: "🧸", desc: "Cute outfits for little ones", color: "from-green-500 to-emerald-600" },
    { name: "Accessories", href: "/services/accessories", icon: "🕶️", desc: "Complete your look", color: "from-purple-500 to-indigo-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our <span className="text-amber-600">Services</span>
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover premium fashion services tailored just for you
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link key={service.name} href={service.href}>
              <div className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-4xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-amber-600 transition-colors">
                  {service.name}
                </h2>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Custom Order Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-rose-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Need Something Special?</h2>
          <p className="mb-4 opacity-90">Get custom orders and personalized styling services</p>
          <Link href="/contact">
            <button className="px-6 py-2 bg-white text-amber-600 rounded-lg font-semibold hover:scale-105 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}