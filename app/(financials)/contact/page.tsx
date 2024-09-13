import ContactTabs from '@/components/ContactTabs'

const COntactPage = () => {
  return (
    <div className="bg-cover" style={{
      backgroundImage: "url('/images/footer-bg.svg')",
      backgroundPosition: "top center",
      overflow: 'hidden',
    }}>
      <section className="relative max-container padding-container mt-32 pb-16">
        <div className="mb-16">
          <h1 className='bold-56 text-orange-base mb-2'>Contact us</h1>
          <p className='regular-18 text-generic-700'>Get in touch with any of our business touch points.</p>
          <p className="text-base"><span className="text-green-600">WhatsApp:</span> <a href="whatsapp://+2349139330003" className="hover:text-green-600">+2349139330003</a></p>
        </div>
        <ContactTabs />
      </section>
    </div>
  )
}

export default COntactPage