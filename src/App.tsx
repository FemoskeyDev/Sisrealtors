import './App.css'

const featuredProperties = [
  {
    title: 'Lakeside Manor',
    location: 'Lekki Phase 1',
    price: '₦96M',
    details: '4 Beds • 3 Baths • Smart home',
    tag: 'Featured',
  },
  {
    title: 'Skyline Residences',
    location: 'Victoria Island',
    price: '₦128M',
    details: '5 Beds • 4 Baths • Sea view',
    tag: 'New',
  },
  {
    title: 'Cedar Grove',
    location: 'Ikeja',
    price: '₦74M',
    details: '3 Beds • 2 Baths • Community park',
    tag: 'Popular',
  },
]

const reasons = [
  'Luxury homes in prime, high-growth neighborhoods',
  'Transparent pricing and documentation support',
  'End-to-end buying, selling, and leasing guidance',
  'Strong negotiation power backed by local market data',
]

const process = [
  { step: '01', title: 'Consultation', text: 'We learn your goals, budget, and ideal location.' },
  { step: '02', title: 'Search', text: 'Our team curates homes that match your lifestyle and value.' },
  { step: '03', title: 'Closing', text: 'We manage offers, inspections, paperwork, and handover.' },
]

const stats = [
  { value: '1.2K+', label: 'Happy clients' },
  { value: '320', label: 'Properties sold' },
  { value: '18', label: 'Years experience' },
  { value: '96%', label: 'Repeat referrals' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">S</div>
          <div>
            <p className="brand-name">SIS REALTORS</p>
            <span className="brand-tag">Property & lifestyle</span>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#properties">Properties</a>
          <a href="#why-us">Why us</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Book a call
        </a>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Your next address starts here</p>
            <h1>Find a place that feels like home.</h1>
            <p className="hero-text">
              Sis Realtors connects buyers, sellers, and investors with exceptional
              homes in the most desirable neighborhoods across Lagos and beyond.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#properties">
                Explore homes
              </a>
              <a className="secondary-btn" href="#why-us">
                Why choose us
              </a>
            </div>

            <div className="hero-metrics" aria-label="Company statistics">
              {stats.map((item) => (
                <div key={item.label} className="metric-item">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Featured property overview">
            <div className="property-card highlight-card">
              <div className="property-visual">
                <span className="badge">For sale</span>
              </div>
              <div className="card-content">
                <div className="price-row">
                  <div>
                    <p className="label">Featured listing</p>
                    <h2>Oceanview Crest</h2>
                  </div>
                  <strong>₦112M</strong>
                </div>
                <ul>
                  <li>5 Bedrooms</li>
                  <li>Private pool</li>
                  <li>2-car garage</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="trusted-bar">
          <p>Trusted by homeowners, investors, and developers</p>
          <div className="brand-row">
            <span>Marina</span>
            <span>Northview</span>
            <span>CityEdge</span>
            <span>EstateOne</span>
            <span>Horizon</span>
          </div>
        </section>

        <section className="properties-section" id="properties">
          <div className="section-heading">
            <p className="eyebrow">Featured properties</p>
            <h2>Curated spaces for every lifestyle.</h2>
          </div>

          <div className="property-grid">
            {featuredProperties.map((property) => (
              <article key={property.title} className="property-card">
                <div className="property-image image-one">
                  <span className="badge">{property.tag}</span>
                </div>
                <div className="card-content">
                  <div className="price-row compact">
                    <div>
                      <h3>{property.title}</h3>
                      <p>{property.location}</p>
                    </div>
                    <strong>{property.price}</strong>
                  </div>
                  <p className="details">{property.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits-section" id="why-us">
          <div className="section-heading narrow">
            <p className="eyebrow">Why SIS</p>
            <h2>Real estate advice built around your goals.</h2>
          </div>

          <div className="benefits-layout">
            <div className="benefit-list">
              {reasons.map((reason) => (
                <div key={reason} className="benefit-item">
                  <span className="checkmark">✓</span>
                  <p>{reason}</p>
                </div>
              ))}
            </div>

            <div className="insight-panel">
              <p className="panel-label">Market insight</p>
              <h3>Buyer demand is strongest in waterfront and gated communities.</h3>
              <p>
                We help clients act quickly on opportunities while protecting long-term
                value and lifestyle fit.
              </p>
              <div className="mini-stats">
                <div>
                  <strong>+14%</strong>
                  <span>Annual growth</span>
                </div>
                <div>
                  <strong>22 days</strong>
                  <span>Avg. sale cycle</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="section-heading">
            <p className="eyebrow">Simple process</p>
            <h2>From first conversation to final keys.</h2>
          </div>

          <div className="process-grid">
            {process.map((item) => (
              <article key={item.step} className="process-card">
                <span className="step-number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div>
          <p className="eyebrow">Let’s find your next estate</p>
          <h2>Ready to move with confidence?</h2>
        </div>
        <a className="primary-btn" href="mailto:hello@sisrealtors.com">
          hello@sisrealtors.com
        </a>
      </footer>
    </div>
  )
}

export default App
