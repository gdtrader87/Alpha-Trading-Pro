export default function AlphaTradingLanding() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #1e40af 50%, #1e293b 100%)',
      minHeight: '100vh',
      color: 'white',
      padding: '2rem'
    }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Alpha Trading Pros</h1>
        <a href="https://buy.stripe.com/dRmdR876a15ebf183c5os0a" 
           style={{ backgroundColor: '#10b981', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', textDecoration: 'none' }}>
          Subscribe Now
        </a>
      </nav>
      
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Turn Market Moves into Profits
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
          Get live trading signals, monthly webinars, and exclusive educational resources to trade smarter with options and futures.
        </p>
        <a href="https://buy.stripe.com/dRmdR876a15ebf183c5os0a" 
           style={{ backgroundColor: '#10b981', color: 'white', padding: '1rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '1.1rem' }}>
          Join Now – Start Your Trading Journey
        </a>
      </div>
    </div>
  )
}
