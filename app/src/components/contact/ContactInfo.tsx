import Link from 'next/link';

export default function ContactInfo() {
  const info = {
    address: '123 Fashion Street, Clifton, Karachi, Pakistan',
    phone: ['+92 300 1234567', '+92 21 35876543'],
    email: ['info@anasfashion.com', 'support@anasfashion.com'],
    hours: ['Monday – Friday: 9:00 AM – 8:00 PM', 'Saturday: 10:00 AM – 6:00 PM', 'Sunday: Closed'],
    social: [
      { name: 'Facebook', url: 'https://facebook.com', icon: 'f' },
      { name: 'Instagram', url: 'https://instagram.com', icon: '📷' },
      { name: 'TikTok', url: 'https://tiktok.com', icon: '🎵' },
      { name: 'WhatsApp', url: 'https://wa.me/923001234567', icon: '📱' }
    ]
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">📍 Address</h3>
        <p className="text-gray-600">{info.address}</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">📞 Phone</h3>
        {info.phone.map((p, i) => <p key={i} className="text-gray-600 mb-1">{p}</p>)}
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">✉️ Email</h3>
        {info.email.map((e, i) => <p key={i} className="text-gray-600 mb-1">{e}</p>)}
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">⏰ Business Hours</h3>
        {info.hours.map((h, i) => <p key={i} className="text-gray-600">{h}</p>)}
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <div className="flex gap-4">
          {info.social.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-amber-600 transition text-xl">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}