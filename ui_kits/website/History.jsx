function History() {
  const { SectionHeader, Timeline, Wave } = window.CarnesCarneiroDesignSystem_2087cc;
  return (
    <div style={{fontFamily:'var(--font-body)'}}>
      <section style={{position:'relative',height:320,background:'var(--gray-900) center/cover url(../../assets/photography/lagoncinha-1.jpg)'}}>
        <div style={{position:'absolute',inset:0,background:'rgba(36,32,28,0.45)',display:'flex',alignItems:'center',padding:'0 48px'}}>
          <h1 className="font-display" style={{color:'#fff',fontSize:'var(--text-display-lg)',margin:0}}>A Nossa História</h1>
        </div>
        <div style={{position:'absolute',left:0,right:0,bottom:0}}><Wave variant="medium" color="var(--surface-page)" /></div>
      </section>
      <section style={{padding:'70px 48px 90px',display:'flex',flexDirection:'column',gap:40,maxWidth:900}}>
        <SectionHeader eyebrow="Desde 1940" title="Quatro Gerações de Tradição" />
        <p style={{color:'var(--text-secondary)',fontSize:'var(--text-body-lg)'}}>Francisco Alves Carneiro foi negociante de gado entre 1940 e 1970. Em 1970 começou um pequeno negócio familiar de abate e transformação de carne de porco com métodos artesanais; em 1984 a empresa assumiu a forma que tem hoje, atualmente gerida pelos seus quatro filhos.</p>
        <Timeline items={[
          {year:'1940',text:'Francisco Alves Carneiro inicia a sua actividade como negociante de gado vivo.'},
          {year:'1970',text:'Após 30 anos no comércio de gado, cria uma pequena empresa familiar dedicada ao abate e transformação de carne de suínos, com instalações reduzidas e métodos artesanais.'},
          {year:'1984',text:'Nascem as Carnes Carneiro — Matadouro Industrial e Salsicharia de Francisco Alves Carneiro & Filhos, Lda, como a conhecemos hoje.'},
          {year:'Hoje',text:'Sob o comando dos quatro filhos do fundador, dispõe de uma unidade de abate moderna, aliando profissionalismo à qualidade artesanal em fumados e cozidos, com frota própria e elevados padrões de higiene, segurança e sustentabilidade.'},
        ]} />
        <div style={{display:'flex',flexDirection:'column',gap:16,marginTop:8}}>
          <p style={{color:'var(--text-secondary)',fontSize:'var(--text-body-md)'}}>A empresa dispõe hoje de uma unidade de abate recente, resultado de dois grandes investimentos. Na transformação, alia o profissionalismo e a modernização à qualidade da produção artesanal, desenvolvendo uma ampla variedade de produtos de charcutaria e salsicharia — fumados e cozidos — para um mercado cada vez mais exigente e competitivo.</p>
          <p style={{color:'var(--text-secondary)',fontSize:'var(--text-body-md)'}}>As instalações, modernamente equipadas, respondem aos requisitos mais exigentes de higiene e segurança alimentar, bem como de protecção ambiental, contribuindo para um desenvolvimento sustentável em favor das gerações futuras. A distribuição é assegurada por uma frota própria, devidamente equipada e actualizada.</p>
          <p style={{color:'var(--text-secondary)',fontSize:'var(--text-body-md)'}}>A somar, o elevado capital humano de uma força de trabalho dinâmica e motivada. Através de um equilíbrio entre <strong>Qualidade</strong> e <strong>Confiança</strong>, as Carnes Carneiro têm vindo a cimentar a sua posição no mercado, merecendo a confiança dos seus clientes.</p>
        </div>
      </section>
    </div>
  );
}
window.History = History;
