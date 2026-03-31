export default function Map() {
  return (
    <div className="h-[400px] w-full overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115819.4564123945!2d66.98570034748673!3d24.86150470641648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0660b6b1f3%3A0xd6f7b6b1f3b1f3b1!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1633072800000!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="w-full h-full"
      ></iframe>
    </div>
  );
}