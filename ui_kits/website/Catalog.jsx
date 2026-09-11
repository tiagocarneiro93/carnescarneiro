const PRODUCTS = [
  { name: 'Chouriço', category: 'fumados', formats: ['1kg','Argola'] },
  { name: 'Chouriço de Cebola', category: 'fumados', formats: ['1kg'] },
  { name: 'Chouriço Mouro', category: 'fumados', formats: ['1kg'] },
  { name: 'Linguiça', category: 'fumados', formats: ['500g','Cacete'] },
  { name: 'Salpicão', category: 'fumados', formats: ['Naco','Vácuo'] },
  { name: 'Presunto Fumado', category: 'fumados', formats: ['Inteiro','½'] },
  { name: 'Bacon Extra', category: 'fumados', formats: ['1kg','Fatias'] },
  { name: 'Morcela', category: 'cozidos', formats: ['1kg'] },
  { name: 'Farinheira', category: 'cozidos', formats: ['1kg'] },
  { name: 'Mortadela', category: 'cozidos', formats: ['Peça'] },
  { name: 'Paio York', category: 'cozidos', formats: ['1kg'] },
  { name: 'Salsicha Frankfurt', category: 'cozidos', formats: ['1kg'] },
  { name: 'Barriga', category: 'fresca', formats: ['1kg','Naco'], image: '../../assets/photography/fresh-barriga.jpg' },
  { name: 'Presunto', category: 'fresca', formats: ['Inteiro','½'], image: '../../assets/photography/fresh-presunto.jpg' },
  { name: 'Pá', category: 'fresca', formats: ['Inteiro','½'], image: '../../assets/photography/fresh-pa.jpg' },
  { name: 'Lombada', category: 'fresca', formats: ['1kg','Naco'], image: '../../assets/photography/fresh-lombada.jpg' },
  { name: 'Carcaça', category: 'fresca', formats: ['Inteiro'], image: '../../assets/photography/fresh-carcaca.jpg' },
  { name: 'Lombo', category: 'fresca', formats: ['1kg','Naco'], image: '../../assets/photography/fresh-lombo.jpg' },
];
window.PRODUCTS = PRODUCTS;

function Catalog({ setPage, setSelected }) {
  const { CatalogFilter, ProductCard, SectionHeader } = window.CarnesCarneiroDesignSystem_2087cc;
  const [cat, setCat] = React.useState('Todos');
  const [q, setQ] = React.useState('');
  const filtered = PRODUCTS.filter(p =>
    (cat === 'Todos' || p.category === cat.toLowerCase()) &&
    p.name.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <div style={{padding:'56px 48px 90px',fontFamily:'var(--font-body)',display:'flex',flexDirection:'column',gap:28}}>
      <SectionHeader eyebrow="Catálogo" title="A Nossa Gama de Produtos" />
      <CatalogFilter onCategoryChange={setCat} onSearch={setQ} />
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:18}}>
        {filtered.map(p => (
          <div key={p.name} onClick={()=>{setSelected(p);setPage('product');}} style={{cursor:'pointer'}}>
            <ProductCard {...p} />
          </div>
        ))}
      </div>
      {filtered.length===0 && <p style={{color:'var(--text-muted)'}}>Nenhum produto encontrado.</p>}
    </div>
  );
}
window.Catalog = Catalog;
