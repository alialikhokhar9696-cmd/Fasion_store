'use client';

export default function ContactInfo() {
  const infoItems = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['Main Bazaar, Okara', 'Punjab, Pakistan'],
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+92 300 1234567', '+92 321 7654321'],
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: ['info@anasfashion.com', 'support@anasfashion.com'],
    },
    {
      icon: '🕒',
      title: 'Working Hours',
      details: ['Mon – Sat: 9:00 AM – 9:00 PM', 'Sunday: Closed'],
    },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: 'f', 
      href: 'https://facebook.com/anasfashion',
      bgColor: 'bg-[#1877f2] hover:bg-[#0e5cbf]'
    },
    { 
      name: 'Instagram', 
      icon: 'ig', 
      href: 'https://instagram.com/anasfashion',
      bgColor: 'bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#f77737] hover:opacity-90'
    },
    { 
      name: 'Twitter', 
      icon: 'x', 
      href: 'https://twitter.com/anasfashion',
      bgColor: 'bg-black hover:bg-gray-900'
    },
    { 
      name: 'YouTube', 
      icon: 'yt', 
      href: 'https://youtube.com/anasfashion',
      bgColor: 'bg-[#ff0000] hover:bg-[#cc0000]'
    },
  ];

  return (
    <section className="py-20 px-4 bg-amber-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-800 mb-4 animate-fadeIn">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fadeUp">
          We’re here to help – reach out through any of these channels.
        </p>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-rose-800 mb-2">{item.title}</h3>
              {item.details.map((line, i) => (
                <p key={i} className="text-gray-600">{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Social links with brand colors */}
        <div className="text-center animate-fadeUp animation-delay-400">
          <h3 className="text-2xl font-bold text-rose-800 mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 ${social.bgColor} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md`}
                aria-label={social.name}
              >
                <span className="text-white font-bold text-lg">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}