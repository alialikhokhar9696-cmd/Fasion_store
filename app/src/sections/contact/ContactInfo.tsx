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
      bgColor: '#1877f2'
    },
    { 
      name: 'Instagram', 
      icon: 'ig', 
      href: 'https://instagram.com/anasfashion',
      bgColor: '#e4405f'
    },
    { 
      name: 'Twitter', 
      icon: '𝕏', 
      href: 'https://twitter.com/anasfashion',
      bgColor: '#000000'
    },
    { 
      name: 'YouTube', 
      icon: '▶', 
      href: 'https://youtube.com/anasfashion',
      bgColor: '#ff0000'
    },
  ];

  return (
    <section className="py-20 px-4 bg-amber-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We&apos;re here to help – reach out through any of these channels.
        </p>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-rose-800 mb-2">{item.title}</h3>
              {item.details.map((line, i) => (
                <p key={i} className="text-gray-600">{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-rose-800 mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md text-white font-bold"
                style={{ backgroundColor: social.bgColor }}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}