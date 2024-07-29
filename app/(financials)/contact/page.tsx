import ContactTabs from '@/components/ContactTabs'

const COntactPage = () => {
  return (
    <section className="relative w-full h-full bg-cover bg-center pb-8" style={{
      backgroundImage: "url('/images/footer-bg.svg')",
      backgroundPosition: "top center",
      overflow: 'hidden',
    }}>
      <div className='max-container pt-40 pb-16'>
        <h1 className='bold-56 text-orange-base mb-2'>Contact us</h1>
        <p className='regular-18 text-generic-700'>Get in touch with any of our business touch points.</p>
      </div>

      <ContactTabs />
    </section>
  )
}

export default COntactPage