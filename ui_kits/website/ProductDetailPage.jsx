function ProductDetailPage({ product, setPage }) {
  const { ProductDetail, Button, Wave } = window.CarnesCarneiroDesignSystem_2087cc;
  const p = product || window.PRODUCTS[0];
  return (
    <div style={{fontFamily:'var(--font-body)'}}>
      <button onClick={()=>setPage('catalog')} style={{border:'none',background:'none',color:'var(--text-link)',cursor:'pointer',padding:'20px 48px 0',fontSize:14}}>← Voltar ao catálogo</button>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,padding:'20px 48px 90px',alignItems:'start'}}>
        <div style={{position:'relative',height:340,borderRadius:'var(--radius-lg)',overflow:'hidden',background:p.image?`center/cover url(${p.image})`:'var(--surface-sunken)'}}>
          <div style={{position:'absolute',left:0,right:0,bottom:0}}><Wave variant="medium" flip color={p.category==='fumados'?'var(--color-fumados)':p.category==='cozidos'?'var(--color-cozidos)':'var(--color-fresca)'} /></div>
        </div>
        <ProductDetail name={p.name} category={p.category}
          description="Peça nobre preparada de forma tradicional, fumada lentamente à maneira artesanal, no coração do Minho."
          weights={p.formats} shapes={['Argola','Cacete']} packaging={['vacuo','atmosfera']} />
      </div>
    </div>
  );
}
window.ProductDetailPage = ProductDetailPage;
