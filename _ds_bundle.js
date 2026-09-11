/* @ds-bundle: {"format":4,"namespace":"CarnesCarneiroDesignSystem_2087cc","components":[{"name":"Wave","sourcePath":"components/brand/Wave.jsx"},{"name":"CatalogFilter","sourcePath":"components/catalog/CatalogFilter.jsx"},{"name":"CategoryBadge","sourcePath":"components/catalog/CategoryBadge.jsx"},{"name":"PackagingIcon","sourcePath":"components/catalog/PackagingIcon.jsx"},{"name":"ProductCard","sourcePath":"components/catalog/ProductCard.jsx"},{"name":"ProductDetail","sourcePath":"components/catalog/ProductDetail.jsx"},{"name":"MapBlock","sourcePath":"components/content/MapBlock.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Timeline","sourcePath":"components/content/Timeline.jsx"},{"name":"ValueBlock","sourcePath":"components/content/ValueBlock.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"ContactForm","sourcePath":"components/forms/ContactForm.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"}],"sourceHashes":{"components/brand/Wave.jsx":"25bbde71c0c5","components/catalog/CatalogFilter.jsx":"7b848ec2ff11","components/catalog/CategoryBadge.jsx":"9cee94f43de5","components/catalog/PackagingIcon.jsx":"654ebebcae38","components/catalog/ProductCard.jsx":"e8cbcb559766","components/catalog/ProductDetail.jsx":"9db80f98223d","components/content/MapBlock.jsx":"deab221245c9","components/content/SectionHeader.jsx":"5fcb26dda439","components/content/Timeline.jsx":"f13f1aa9ac8f","components/content/ValueBlock.jsx":"4644a2f9fcb3","components/forms/Button.jsx":"e5aa78c37223","components/forms/ContactForm.jsx":"1448dcefd914","components/forms/Input.jsx":"9a4e0726cb43","components/navigation/Footer.jsx":"549f6c5c68d5","components/navigation/Header.jsx":"7c48fb97a01f","ui_kits/website/Catalog.jsx":"355a6bdc4a4b","ui_kits/website/Contact.jsx":"3709c28e911b","ui_kits/website/History.jsx":"1331b6c7793b","ui_kits/website/Home.jsx":"0c01df5633e5","ui_kits/website/ProductDetailPage.jsx":"cd98af3e4f8f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CarnesCarneiroDesignSystem_2087cc = window.CarnesCarneiroDesignSystem_2087cc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Wave.jsx
try { (() => {
const PATHS = {
  subtle: 'M0,18 C 60,10 110,26 180,16 C 250,6 300,24 370,14 C 440,4 500,22 570,15 C 640,8 700,20 770,13 C 840,6 900,22 970,14 C 1040,6 1100,20 1160,12 C 1180,10 1190,14 1200,12 L1200,0 L0,0 Z',
  medium: 'M0,34 C 70,8 130,46 210,26 C 290,6 340,50 420,28 C 500,6 560,48 640,24 C 720,0 780,46 860,22 C 940,-2 1000,42 1080,20 C 1120,10 1160,26 1200,18 L1200,0 L0,0 Z',
  pronounced: 'M0,58 C 90,4 160,84 260,42 C 360,0 420,90 520,46 C 620,2 690,86 790,40 C 890,-4 960,82 1060,38 C 1110,16 1150,40 1200,26 L1200,0 L0,0 Z'
};
const HEIGHT = {
  subtle: 36,
  medium: 60,
  pronounced: 96
};
function Wave({
  variant = 'medium',
  color = 'var(--color-primary)',
  flip = false,
  style
}) {
  return React.createElement('span', {
    style: {
      display: 'block',
      lineHeight: 0,
      width: '100%',
      transform: flip ? 'scaleY(-1)' : undefined,
      ...style
    }
  }, React.createElement('svg', {
    viewBox: `0 0 1200 ${HEIGHT[variant]}`,
    width: '100%',
    height: HEIGHT[variant],
    preserveAspectRatio: 'none',
    style: {
      display: 'block'
    }
  }, React.createElement('path', {
    d: PATHS[variant],
    fill: color,
    transform: `translate(0, ${HEIGHT[variant] - (variant === 'subtle' ? 34 : variant === 'medium' ? 50 : 90)})`
  })));
}
Object.assign(__ds_scope, { Wave });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wave.jsx", error: String((e && e.message) || e) }); }

// components/catalog/CatalogFilter.jsx
try { (() => {
function CatalogFilter({
  categories = ['Todos', 'Fumados', 'Cozidos', 'Fresca'],
  activeCategory = 'Todos',
  onCategoryChange,
  onSearch
}) {
  const [active, setActive] = React.useState(activeCategory);
  const pick = c => {
    setActive(c);
    onCategoryChange && onCategoryChange(c);
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('input', {
    placeholder: 'Procurar produto…',
    onChange: e => onSearch && onSearch(e.target.value),
    style: {
      flex: '1 1 220px',
      padding: '10px 16px',
      borderRadius: 'var(--radius-full)',
      border: '1px solid var(--border-default)',
      fontSize: 14,
      outline: 'none'
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8
    }
  }, categories.map(c => React.createElement('button', {
    key: c,
    onClick: () => pick(c),
    className: 'font-eyebrow',
    style: {
      fontSize: 12.5,
      padding: '8px 16px',
      borderRadius: 'var(--radius-full)',
      cursor: 'pointer',
      border: active === c ? '1px solid var(--color-primary)' : '1px solid var(--border-default)',
      background: active === c ? 'var(--color-primary)' : 'var(--white)',
      color: active === c ? 'var(--white)' : 'var(--text-secondary)'
    }
  }, c))));
}
Object.assign(__ds_scope, { CatalogFilter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/CatalogFilter.jsx", error: String((e && e.message) || e) }); }

// components/catalog/CategoryBadge.jsx
try { (() => {
const CFG = {
  fumados: {
    label: 'Fumados',
    bg: 'var(--color-fumados-surface)',
    fg: 'var(--red-700)',
    dot: 'var(--color-fumados)'
  },
  cozidos: {
    label: 'Cozidos',
    bg: 'var(--color-cozidos-surface)',
    fg: 'var(--blue-700)',
    dot: 'var(--color-cozidos)'
  },
  fresca: {
    label: 'Carne Fresca',
    bg: 'var(--color-fresca-surface)',
    fg: 'var(--gray-700)',
    dot: 'var(--color-fresca)'
  }
};
function CategoryBadge({
  category,
  size = 'md'
}) {
  const c = CFG[category];
  const fs = size === 'sm' ? 11 : 12.5;
  return React.createElement('span', {
    className: 'font-eyebrow',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: c.bg,
      color: c.fg,
      fontSize: fs,
      padding: size === 'sm' ? '4px 10px' : '5px 13px',
      borderRadius: 'var(--radius-full)'
    }
  }, React.createElement('span', {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: c.dot
    }
  }), c.label);
}
Object.assign(__ds_scope, { CategoryBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/CategoryBadge.jsx", error: String((e && e.message) || e) }); }

// components/catalog/PackagingIcon.jsx
try { (() => {
/* No packaging icon set was supplied by the client. Substituted with Lucide
   (CDN, matching stroke-width 2 / outline style) — flagged in ICONOGRAPHY. */
const SRC = {
  vacuo: 'https://unpkg.com/lucide-static@latest/icons/package-2.svg',
  atmosfera: 'https://unpkg.com/lucide-static@latest/icons/wind.svg'
};
const LABEL = {
  vacuo: 'Vácuo',
  atmosfera: 'Atmosfera Controlada'
};
function PackagingIcon({
  type = 'vacuo',
  size = 20
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, React.createElement('img', {
    src: SRC[type],
    width: size,
    height: size,
    style: {
      opacity: 0.75
    },
    alt: LABEL[type]
  }), LABEL[type]);
}
Object.assign(__ds_scope, { PackagingIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/PackagingIcon.jsx", error: String((e && e.message) || e) }); }

// components/catalog/ProductCard.jsx
try { (() => {
function ProductCard({
  name,
  category,
  formats = [],
  image
}) {
  const waveColor = category === 'fumados' ? 'var(--color-fumados)' : 'var(--color-cozidos)';
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'box-shadow var(--duration-md) var(--ease-standard)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      position: 'relative',
      height: 140,
      background: image ? `center/cover url(${image})` : 'var(--surface-sunken)'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 10,
      background: 'var(--surface-card)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 6
    }
  }, React.createElement(__ds_scope.Wave, {
    variant: 'subtle',
    color: 'var(--surface-card)',
    flip: true
  }))), React.createElement('div', {
    style: {
      padding: '14px 16px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement(__ds_scope.CategoryBadge, {
    category,
    size: 'sm'
  }), React.createElement('div', {
    className: 'font-display',
    style: {
      fontSize: 22,
      color: 'var(--text-primary)'
    }
  }, name), formats.length > 0 && React.createElement('div', {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, formats.map(f => React.createElement('span', {
    key: f,
    style: {
      fontSize: 11.5,
      padding: '3px 9px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface-card-alt)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-default)'
    }
  }, f)))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/catalog/ProductDetail.jsx
try { (() => {
function ChipRow({
  label,
  items
}) {
  if (!items || !items.length) return null;
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement('span', {
    className: 'font-eyebrow',
    style: {
      fontSize: 'var(--text-eyebrow-sm)',
      color: 'var(--text-muted)'
    }
  }, label), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, items.map(i => React.createElement('span', {
    key: i,
    style: {
      fontSize: 13,
      padding: '6px 14px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface-card-alt)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-primary)'
    }
  }, i))));
}
function ProductDetail({
  name,
  category,
  description,
  weights = [],
  shapes = [],
  packaging = []
}) {
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 460
    }
  }, React.createElement(__ds_scope.CategoryBadge, {
    category
  }), React.createElement('h2', {
    className: 'font-display',
    style: {
      margin: 0,
      fontSize: 'var(--text-display-md)',
      color: 'var(--text-primary)'
    }
  }, name), description && React.createElement('p', {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-body-md)'
    }
  }, description), React.createElement(ChipRow, {
    label: 'Formato / Peso',
    items: weights
  }), React.createElement(ChipRow, {
    label: 'Forma',
    items: shapes
  }), packaging.length > 0 && React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement('span', {
    className: 'font-eyebrow',
    style: {
      fontSize: 'var(--text-eyebrow-sm)',
      color: 'var(--text-muted)'
    }
  }, 'Embalagem'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 16
    }
  }, packaging.map(p => React.createElement(__ds_scope.PackagingIcon, {
    key: p,
    type: p
  })))));
}
Object.assign(__ds_scope, { ProductDetail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// components/content/MapBlock.jsx
try { (() => {
function MapBlock({
  address = 'Lousado, Vila Nova de Famalicão, Portugal'
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      flex: '1.4',
      minHeight: 220,
      background: 'var(--surface-sunken)',
      backgroundImage: 'linear-gradient(var(--border-default) 1px,transparent 1px),linear-gradient(90deg,var(--border-default) 1px,transparent 1px)',
      backgroundSize: '24px 24px',
      position: 'relative'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: '45%',
      left: '50%',
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: 'var(--color-primary)',
      border: '3px solid var(--white)',
      boxShadow: 'var(--shadow-md)'
    }
  })), React.createElement('div', {
    style: {
      flex: 1,
      background: 'var(--surface-card)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      justifyContent: 'center'
    }
  }, React.createElement('span', {
    className: 'font-eyebrow',
    style: {
      fontSize: 'var(--text-eyebrow-sm)',
      color: 'var(--color-primary)'
    }
  }, 'Localização'), React.createElement('p', {
    style: {
      margin: 0,
      color: 'var(--text-primary)',
      fontSize: 15
    }
  }, address)));
}
Object.assign(__ds_scope, { MapBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MapBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  tone = 'light',
  align = 'left'
}) {
  const fg = tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-primary)';
  const eb = tone === 'dark' ? 'var(--yellow-500)' : 'var(--color-primary)';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, eyebrow && React.createElement('span', {
    className: 'font-eyebrow',
    style: {
      fontSize: 'var(--text-eyebrow-md)',
      color: eb
    }
  }, eyebrow), React.createElement('h2', {
    className: 'font-display',
    style: {
      margin: 0,
      fontSize: 'var(--text-display-md)',
      color: fg
    }
  }, title));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/Timeline.jsx
try { (() => {
function Timeline({
  items
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      fontFamily: 'var(--font-body)'
    }
  }, items.map((it, i) => React.createElement('div', {
    key: it.year,
    style: {
      flex: 1,
      position: 'relative',
      padding: '0 16px 0 0'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      marginBottom: 14
    }
  }, React.createElement('span', {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: 'var(--color-primary)',
      flexShrink: 0
    }
  }), React.createElement('span', {
    style: {
      flex: 1,
      height: 2,
      background: i === items.length - 1 ? 'transparent' : 'var(--border-strong)'
    }
  })), React.createElement('div', {
    className: 'font-display',
    style: {
      fontSize: 26,
      color: 'var(--color-primary)'
    }
  }, it.year), React.createElement('div', {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 14,
      marginTop: 4
    }
  }, it.text))));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/content/ValueBlock.jsx
try { (() => {
function ValueBlock({
  title,
  description
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 20
    }
  }, React.createElement('span', {
    style: {
      width: 36,
      height: 3,
      background: 'var(--color-accent)',
      borderRadius: 2
    }
  }), React.createElement('h3', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-heading-sm)',
      color: 'var(--text-primary)'
    }
  }, title), React.createElement('p', {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-body-md)'
    }
  }, description));
}
Object.assign(__ds_scope, { ValueBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ValueBlock.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const PAD = {
  sm: '8px 16px',
  md: '12px 22px',
  lg: '15px 28px'
};
const FS = {
  sm: 13,
  md: 15,
  lg: 17
};
const VARIANTS = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--text-on-primary)',
    border: '1px solid var(--color-primary)'
  },
  secondary: {
    background: 'var(--color-secondary)',
    color: 'var(--text-on-secondary)',
    border: '1px solid var(--color-secondary)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: '1px solid var(--color-primary)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent'
  }
};
const HOVER = {
  primary: 'var(--color-primary-hover)',
  secondary: 'var(--color-secondary-hover)',
  outline: 'var(--color-primary-surface)',
  ghost: 'var(--surface-card-alt)'
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children
}) {
  const v = VARIANTS[variant];
  const [hover, setHover] = React.useState(false);
  const style = {
    ...v,
    padding: PAD[size],
    fontSize: FS[size],
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    borderRadius: 'var(--radius-full)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8
  };
  if (hover && !disabled) {
    style.background = HOVER[variant];
    if (variant === 'outline') style.color = 'var(--color-primary)';
    if (variant === 'ghost') style.color = 'var(--text-primary)';
  }
  return React.createElement('button', {
    style,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const fieldStyle = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 15,
  padding: '11px 14px',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-sm)',
  background: 'var(--white)',
  color: 'var(--text-primary)',
  outline: 'none',
  transition: 'border-color var(--duration-fast) var(--ease-standard)'
};
function Input({
  type = 'text',
  label,
  placeholder,
  options = [],
  required = false,
  error
}) {
  const [focus, setFocus] = React.useState(false);
  const style = {
    ...fieldStyle,
    borderColor: error ? 'var(--color-danger)' : focus ? 'var(--focus-ring)' : 'var(--border-default)'
  };
  const handlers = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  };
  let field;
  if (type === 'textarea') field = React.createElement('textarea', {
    style: {
      ...style,
      minHeight: 96,
      resize: 'vertical'
    },
    placeholder,
    ...handlers
  });else if (type === 'select') field = React.createElement('select', {
    style,
    ...handlers
  }, options.map(o => React.createElement('option', {
    key: o
  }, o)));else field = React.createElement('input', {
    type,
    style,
    placeholder,
    ...handlers
  });
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    className: 'font-eyebrow',
    style: {
      fontSize: 'var(--text-eyebrow-sm)',
      color: 'var(--text-secondary)'
    }
  }, label, required ? ' *' : ''), field, error && React.createElement('span', {
    style: {
      fontSize: 12,
      color: 'var(--color-danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/ContactForm.jsx
try { (() => {
function ContactForm({
  title = 'Encomenda Profissional'
}) {
  return React.createElement('form', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 480,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('h3', {
    className: 'font-display',
    style: {
      margin: 0,
      fontSize: 24,
      color: 'var(--text-primary)'
    }
  }, title), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, React.createElement(__ds_scope.Input, {
    label: 'Nome',
    required: true
  }), React.createElement(__ds_scope.Input, {
    label: 'Empresa',
    required: true
  })), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, React.createElement(__ds_scope.Input, {
    label: 'Email',
    type: 'email',
    required: true
  }), React.createElement(__ds_scope.Input, {
    label: 'Telefone',
    type: 'tel'
  })), React.createElement(__ds_scope.Input, {
    label: 'Tipo de Cliente',
    type: 'select',
    options: ['Talho', 'Supermercado', 'Restaurante', 'Distribuidor', 'Outro']
  }), React.createElement(__ds_scope.Input, {
    label: 'Mensagem',
    type: 'textarea'
  }), React.createElement(__ds_scope.Button, {
    variant: 'primary'
  }, 'Enviar Pedido'));
}
Object.assign(__ds_scope, { ContactForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ContactForm.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  logoSrc = '../assets/logo/logo-carnes-carneiro.png'
}) {
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  };
  const h = {
    className: 'font-eyebrow',
    style: {
      fontSize: 'var(--text-eyebrow-sm)',
      color: 'var(--gray-300)'
    }
  };
  const a = {
    style: {
      color: 'var(--gray-200)',
      fontSize: 14,
      textDecoration: 'none'
    }
  };
  return React.createElement('footer', {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement(__ds_scope.Wave, {
    variant: 'medium',
    color: 'var(--gray-900)'
  }), React.createElement('div', {
    style: {
      background: 'var(--gray-900)',
      color: 'var(--text-on-dark)',
      padding: '40px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, React.createElement('div', {
    style: col
  }, React.createElement('img', {
    src: logoSrc,
    style: {
      height: 36,
      objectFit: 'contain'
    }
  }), React.createElement('span', {
    style: {
      color: 'var(--gray-400)',
      fontSize: 13,
      maxWidth: 260
    }
  }, 'Francisco Alves Carneiro & Filhos, Lda. — Matadouro Industrial · Fumeiro Tradicional desde 1984.')), React.createElement('div', {
    style: col
  }, React.createElement('span', h, 'Contactos'), React.createElement('a', a, 'geral@carnescarneiro.pt'), React.createElement('a', a, '+351 252 000 000')), React.createElement('div', {
    style: col
  }, React.createElement('span', h, 'Morada'), React.createElement('span', {
    style: {
      color: 'var(--gray-200)',
      fontSize: 14
    }
  }, 'Lousado, Vila Nova de Famalicão, Portugal')), React.createElement('div', {
    style: {
      ...col,
      alignItems: 'flex-start'
    }
  }, React.createElement('span', h, 'Origem'), React.createElement('span', {
    style: {
      border: '1px solid var(--gray-600)',
      borderRadius: 'var(--radius-full)',
      padding: '4px 12px',
      fontSize: 12,
      color: 'var(--gray-300)'
    }
  }, '🇵🇹 Produto Português'))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
function Header({
  active = 'Início',
  links = ['Início', 'Catálogo', 'A Nossa História', 'Contacto'],
  logoSrc = '../assets/logo/logo-carnes-carneiro.png',
  onNavigate
}) {
  return React.createElement('header', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 32px',
      background: 'var(--white)',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('img', {
    src: logoSrc,
    alt: 'Carnes Carneiro',
    style: {
      height: 40,
      objectFit: 'contain'
    }
  }), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map(l => React.createElement(onNavigate ? 'button' : 'a', {
    key: l,
    href: onNavigate ? undefined : '#',
    onClick: onNavigate ? () => onNavigate(l) : undefined,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: l === active ? 'var(--color-primary)' : 'var(--text-secondary)',
      fontWeight: l === active ? 700 : 400,
      textDecoration: 'none',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: onNavigate ? 'pointer' : undefined
    }
  }, l))), React.createElement(__ds_scope.Button, {
    size: 'sm'
  }, 'Pedir Catálogo'));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Catalog.jsx
try { (() => {
const PRODUCTS = [{
  name: 'Chouriço',
  category: 'fumados',
  formats: ['1kg', 'Argola']
}, {
  name: 'Chouriço de Cebola',
  category: 'fumados',
  formats: ['1kg']
}, {
  name: 'Chouriço Mouro',
  category: 'fumados',
  formats: ['1kg']
}, {
  name: 'Linguiça',
  category: 'fumados',
  formats: ['500g', 'Cacete']
}, {
  name: 'Salpicão',
  category: 'fumados',
  formats: ['Naco', 'Vácuo']
}, {
  name: 'Presunto Fumado',
  category: 'fumados',
  formats: ['Inteiro', '½']
}, {
  name: 'Bacon Extra',
  category: 'fumados',
  formats: ['1kg', 'Fatias']
}, {
  name: 'Morcela',
  category: 'cozidos',
  formats: ['1kg']
}, {
  name: 'Farinheira',
  category: 'cozidos',
  formats: ['1kg']
}, {
  name: 'Mortadela',
  category: 'cozidos',
  formats: ['Peça']
}, {
  name: 'Paio York',
  category: 'cozidos',
  formats: ['1kg']
}, {
  name: 'Salsicha Frankfurt',
  category: 'cozidos',
  formats: ['1kg']
}, {
  name: 'Barriga',
  category: 'fresca',
  formats: ['1kg', 'Naco'],
  image: '../../assets/photography/fresh-barriga.jpg'
}, {
  name: 'Presunto',
  category: 'fresca',
  formats: ['Inteiro', '½'],
  image: '../../assets/photography/fresh-presunto.jpg'
}, {
  name: 'Pá',
  category: 'fresca',
  formats: ['Inteiro', '½'],
  image: '../../assets/photography/fresh-pa.jpg'
}, {
  name: 'Lombada',
  category: 'fresca',
  formats: ['1kg', 'Naco'],
  image: '../../assets/photography/fresh-lombada.jpg'
}, {
  name: 'Carcaça',
  category: 'fresca',
  formats: ['Inteiro'],
  image: '../../assets/photography/fresh-carcaca.jpg'
}, {
  name: 'Lombo',
  category: 'fresca',
  formats: ['1kg', 'Naco'],
  image: '../../assets/photography/fresh-lombo.jpg'
}];
window.PRODUCTS = PRODUCTS;
function Catalog({
  setPage,
  setSelected
}) {
  const {
    CatalogFilter,
    ProductCard,
    SectionHeader
  } = window.CarnesCarneiroDesignSystem_2087cc;
  const [cat, setCat] = React.useState('Todos');
  const [q, setQ] = React.useState('');
  const filtered = PRODUCTS.filter(p => (cat === 'Todos' || p.category === cat.toLowerCase()) && p.name.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 48px 90px',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Cat\xE1logo",
    title: "A Nossa Gama de Produtos"
  }), /*#__PURE__*/React.createElement(CatalogFilter, {
    onCategoryChange: setCat,
    onSearch: setQ
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, filtered.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    onClick: () => {
      setSelected(p);
      setPage('product');
    },
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(ProductCard, p)))), filtered.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Nenhum produto encontrado."));
}
window.Catalog = Catalog;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Catalog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
function Contact() {
  const {
    SectionHeader,
    ContactForm,
    MapBlock
  } = window.CarnesCarneiroDesignSystem_2087cc;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 48px 90px',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Encomendas Profissionais",
    title: "Contacte-nos"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(ContactForm, null), /*#__PURE__*/React.createElement(MapBlock, null)));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/History.jsx
try { (() => {
function History() {
  const {
    SectionHeader,
    Timeline,
    Wave
  } = window.CarnesCarneiroDesignSystem_2087cc;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 320,
      background: 'var(--gray-900) center/cover url(../../assets/photography/lagoncinha-1.jpg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(36,32,28,0.45)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 48px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "font-display",
    style: {
      color: '#fff',
      fontSize: 'var(--text-display-lg)',
      margin: 0
    }
  }, "A Nossa Hist\xF3ria")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement(Wave, {
    variant: "medium",
    color: "var(--surface-page)"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '70px 48px 90px',
      display: 'flex',
      flexDirection: 'column',
      gap: 40,
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Desde 1940",
    title: "Quatro Gera\xE7\xF5es de Tradi\xE7\xE3o"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-body-lg)'
    }
  }, "Francisco Alves Carneiro foi negociante de gado entre 1940 e 1970. Em 1970 come\xE7ou um pequeno neg\xF3cio familiar de abate e transforma\xE7\xE3o de carne de porco com m\xE9todos artesanais; em 1984 a empresa assumiu a forma que tem hoje, atualmente gerida pelos seus quatro filhos."), /*#__PURE__*/React.createElement(Timeline, {
    items: [{
      year: '1940',
      text: 'Francisco Alves Carneiro inicia a sua actividade como negociante de gado vivo.'
    }, {
      year: '1970',
      text: 'Após 30 anos no comércio de gado, cria uma pequena empresa familiar dedicada ao abate e transformação de carne de suínos, com instalações reduzidas e métodos artesanais.'
    }, {
      year: '1984',
      text: 'Nascem as Carnes Carneiro — Matadouro Industrial e Salsicharia de Francisco Alves Carneiro & Filhos, Lda, como a conhecemos hoje.'
    }, {
      year: 'Hoje',
      text: 'Sob o comando dos quatro filhos do fundador, dispõe de uma unidade de abate moderna, aliando profissionalismo à qualidade artesanal em fumados e cozidos, com frota própria e elevados padrões de higiene, segurança e sustentabilidade.'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-body-md)'
    }
  }, "A empresa disp\xF5e hoje de uma unidade de abate recente, resultado de dois grandes investimentos. Na transforma\xE7\xE3o, alia o profissionalismo e a moderniza\xE7\xE3o \xE0 qualidade da produ\xE7\xE3o artesanal, desenvolvendo uma ampla variedade de produtos de charcutaria e salsicharia \u2014 fumados e cozidos \u2014 para um mercado cada vez mais exigente e competitivo."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-body-md)'
    }
  }, "As instala\xE7\xF5es, modernamente equipadas, respondem aos requisitos mais exigentes de higiene e seguran\xE7a alimentar, bem como de protec\xE7\xE3o ambiental, contribuindo para um desenvolvimento sustent\xE1vel em favor das gera\xE7\xF5es futuras. A distribui\xE7\xE3o \xE9 assegurada por uma frota pr\xF3pria, devidamente equipada e actualizada."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-body-md)'
    }
  }, "A somar, o elevado capital humano de uma for\xE7a de trabalho din\xE2mica e motivada. Atrav\xE9s de um equil\xEDbrio entre ", /*#__PURE__*/React.createElement("strong", null, "Qualidade"), " e ", /*#__PURE__*/React.createElement("strong", null, "Confian\xE7a"), ", as Carnes Carneiro t\xEAm vindo a cimentar a sua posi\xE7\xE3o no mercado, merecendo a confian\xE7a dos seus clientes."))));
}
window.History = History;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/History.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home({
  setPage
}) {
  const {
    Wave,
    Button,
    SectionHeader,
    ValueBlock,
    CategoryBadge,
    ProductCard
  } = window.CarnesCarneiroDesignSystem_2087cc;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      color: '#fff',
      padding: '90px 48px 90px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 40,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: "center/cover url(../../assets/photography/hero-bridge.jpg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(0,0,0,.65) 0%, rgba(0,0,0,.4) 50%, rgba(0,0,0,.65) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "font-display",
    style: {
      fontSize: 'var(--text-display-xl)',
      margin: '0 0 14px'
    }
  }, "Carnes", /*#__PURE__*/React.createElement("br", null), "Carneiro"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      fontSize: 20,
      maxWidth: 480,
      opacity: 0.92
    }
  }, "\"Compromisso ao produzir, identidade ao sentir!\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setPage('catalog')
  }, "Ver Cat\xE1logo"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setPage('contact')
  }, "Fazer Encomenda"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      textAlign: 'right',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-eyebrow",
    style: {
      fontSize: 24,
      color: '#fff',
      display: 'block'
    }
  }, "Matadouro Industrial"), /*#__PURE__*/React.createElement("span", {
    className: "font-script",
    style: {
      fontSize: 'var(--text-script-md)',
      color: '#fff',
      display: 'block',
      marginTop: 6
    }
  }, "Fumeiro Tradicional"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 1,
      background: 'rgba(255,255,255,.5)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-eyebrow",
    style: {
      fontSize: 'var(--text-eyebrow-sm)',
      color: 'var(--yellow-500)'
    }
  }, "desde 1984"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 1,
      background: 'rgba(255,255,255,.5)'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '70px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Quem Somos",
    title: "Qualidade e Tradi\xE7\xE3o desde 1984"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, [{
    title: 'Qualidade',
    description: 'Métodos tradicionais aliados a instalações modernas e controlo rigoroso.'
  }, {
    title: 'Confiança',
    description: 'Quatro gerações de uma família portuguesa à frente do negócio.'
  }, {
    title: 'Origem',
    description: 'Produzido em Lousado, Vila Nova de Famalicão.'
  }].map(v => /*#__PURE__*/React.createElement("div", {
    key: v.title,
    style: {
      border: '1px solid var(--red-200)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--color-primary-surface)'
    }
  }, /*#__PURE__*/React.createElement(Wave, {
    variant: "subtle",
    color: "var(--color-primary)",
    flip: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 4px 8px'
    }
  }, /*#__PURE__*/React.createElement(ValueBlock, {
    title: v.title,
    description: v.description
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--surface-card-alt)',
      padding: '70px 48px 100px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "A Nossa Gama",
    title: "Fumados & Cozidos"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(ProductCard, {
    name: "Chouri\xE7o",
    category: "fumados",
    formats: ['1kg', 'Argola']
  }), /*#__PURE__*/React.createElement(ProductCard, {
    name: "Presunto Fumado",
    category: "fumados",
    formats: ['Inteiro', '½']
  }), /*#__PURE__*/React.createElement(ProductCard, {
    name: "Morcela",
    category: "cozidos",
    formats: ['1kg']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setPage('catalog')
  }, "Ver Cat\xE1logo Completo"))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductDetailPage.jsx
try { (() => {
function ProductDetailPage({
  product,
  setPage
}) {
  const {
    ProductDetail,
    Button,
    Wave
  } = window.CarnesCarneiroDesignSystem_2087cc;
  const p = product || window.PRODUCTS[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage('catalog'),
    style: {
      border: 'none',
      background: 'none',
      color: 'var(--text-link)',
      cursor: 'pointer',
      padding: '20px 48px 0',
      fontSize: 14
    }
  }, "\u2190 Voltar ao cat\xE1logo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      padding: '20px 48px 90px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 340,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: p.image ? `center/cover url(${p.image})` : 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement(Wave, {
    variant: "medium",
    flip: true,
    color: p.category === 'fumados' ? 'var(--color-fumados)' : p.category === 'cozidos' ? 'var(--color-cozidos)' : 'var(--color-fresca)'
  }))), /*#__PURE__*/React.createElement(ProductDetail, {
    name: p.name,
    category: p.category,
    description: "Pe\xE7a nobre preparada de forma tradicional, fumada lentamente \xE0 maneira artesanal, no cora\xE7\xE3o do Minho.",
    weights: p.formats,
    shapes: ['Argola', 'Cacete'],
    packaging: ['vacuo', 'atmosfera']
  })));
}
window.ProductDetailPage = ProductDetailPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductDetailPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Wave = __ds_scope.Wave;

__ds_ns.CatalogFilter = __ds_scope.CatalogFilter;

__ds_ns.CategoryBadge = __ds_scope.CategoryBadge;

__ds_ns.PackagingIcon = __ds_scope.PackagingIcon;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ProductDetail = __ds_scope.ProductDetail;

__ds_ns.MapBlock = __ds_scope.MapBlock;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.ValueBlock = __ds_scope.ValueBlock;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ContactForm = __ds_scope.ContactForm;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

})();
