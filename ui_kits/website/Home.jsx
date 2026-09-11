function Home({ setPage }) {
  const { Wave, Button, SectionHeader, ValueBlock, CategoryBadge, ProductCard } = window.CarnesCarneiroDesignSystem_2087cc;
  return (
    <div style={{fontFamily:'var(--font-body)'}}>
      <section style={{position:'relative',color:'#fff',padding:'90px 48px 90px',display:'flex',justifyContent:'space-between',alignItems:'center',gap:40,overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:"center/cover url(../../assets/photography/hero-bridge.jpg)"}}></div>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to right, rgba(0,0,0,.65) 0%, rgba(0,0,0,.4) 50%, rgba(0,0,0,.65) 100%)'}}></div>
        <div style={{position:'relative',zIndex:1}}>
          <h1 className="font-display" style={{fontSize:'var(--text-display-xl)',margin:'0 0 14px'}}>Carnes<br/>Carneiro</h1>
          <p style={{fontFamily:'var(--font-body)',fontStyle:'italic',fontSize:20,maxWidth:480,opacity:0.92}}>"Compromisso ao produzir, identidade ao sentir!"</p>
          <div style={{display:'flex',gap:14,marginTop:28}}>
            <Button variant="secondary" onClick={()=>setPage('catalog')}>Ver Catálogo</Button>
            <Button variant="primary" onClick={()=>setPage('contact')}>Fazer Encomenda</Button>
          </div>
        </div>
        <div style={{position:'relative',zIndex:1,textAlign:'right',flexShrink:0}}>
          <span className="font-eyebrow" style={{fontSize:24,color:'#fff',display:'block'}}>Matadouro Industrial</span>
          <span className="font-script" style={{fontSize:'var(--text-script-md)',color:'#fff',display:'block',marginTop:6}}>Fumeiro Tradicional</span>
          <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',gap:10,marginTop:8}}>
            <span style={{width:36,height:1,background:'rgba(255,255,255,.5)'}}></span>
            <span className="font-eyebrow" style={{fontSize:'var(--text-eyebrow-sm)',color:'var(--yellow-500)'}}>desde 1984</span>
            <span style={{width:36,height:1,background:'rgba(255,255,255,.5)'}}></span>
          </div>
        </div>
      </section>

      <section style={{padding:'70px 48px',display:'flex',flexDirection:'column',gap:36}}>
        <SectionHeader eyebrow="Quem Somos" title="Qualidade e Tradição desde 1984" />
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
          {[
            {title:'Qualidade',description:'Métodos tradicionais aliados a instalações modernas e controlo rigoroso.'},
            {title:'Confiança',description:'Quatro gerações de uma família portuguesa à frente do negócio.'},
            {title:'Origem',description:'Produzido em Lousado, Vila Nova de Famalicão.'},
          ].map(v=>(
            <div key={v.title} style={{border:'1px solid var(--red-200)',borderRadius:'var(--radius-lg)',overflow:'hidden',background:'var(--color-primary-surface)'}}>
              <Wave variant="subtle" color="var(--color-primary)" flip />
              <div style={{padding:'4px 4px 8px'}}><ValueBlock title={v.title} description={v.description} /></div>
            </div>
          ))}
        </div>
      </section>

      <section style={{position:'relative',background:'var(--surface-card-alt)',padding:'70px 48px 100px'}}>
        <SectionHeader eyebrow="A Nossa Gama" title="Fumados & Cozidos" />
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,marginTop:32}}>
          <ProductCard name="Chouriço" category="fumados" formats={['1kg','Argola']} />
          <ProductCard name="Presunto Fumado" category="fumados" formats={['Inteiro','½']} />
          <ProductCard name="Morcela" category="cozidos" formats={['1kg']} />
        </div>
        <div style={{marginTop:32}}><Button variant="outline" onClick={()=>setPage('catalog')}>Ver Catálogo Completo</Button></div>
      </section>
    </div>
  );
}
window.Home = Home;
