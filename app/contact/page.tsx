import ContactForm from '../src/components/contact/ContactForm';
import ContactInfo from '../src/components/contact/ContactInfo';
import Map from '../src/components/contact/Map';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-rose-800 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">We'd love to hear from you</p>
        </div>
      </div>

      {/* Contact content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>

      {/* Map */}
      <Map />
    </main>
  );
}