function Contact() {
  const { SectionHeader, ContactForm, MapBlock } = window.CarnesCarneiroDesignSystem_2087cc;
  return (
    <div style={{padding:'56px 48px 90px',fontFamily:'var(--font-body)',display:'flex',flexDirection:'column',gap:36}}>
      <SectionHeader eyebrow="Encomendas Profissionais" title="Contacte-nos" />
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:40,alignItems:'start'}}>
        <ContactForm />
        <MapBlock />
      </div>
    </div>
  );
}
window.Contact = Contact;
