import Head from 'next/head'
import AlphaTradingLanding from '../components/AlphaTradingLanding'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpha Trading Pros - Turn Market Moves into Profits</title>
        <meta name="description" content="Get live trading signals, monthly webinars, and exclusive educational resources to trade smarter with options and futures." />
        <meta name="keywords" content="options trading signals, futures trading signals, prop firm trading, trading education, alpha trading" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alphatradingpros.com/" />
        <meta property="og:title" content="Alpha Trading Pros - Turn Market Moves into Profits" />
        <meta property="og:description" content="Get live trading signals, monthly webinars, and exclusive educational resources to trade smarter with options and futures." />
        <meta property="og:image" content="https://alphatradingpros.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alphatradingpros.com/" />
        <meta property="twitter:title" content="Alpha Trading Pros - Turn Market Moves into Profits" />
        <meta property="twitter:description" content="Get live trading signals, monthly webinars, and exclusive educational resources to trade smarter with options and futures." />
        <meta property="twitter:image" content="https://alphatradingpros.com/og-image.jpg" />
      </Head>
      <AlphaTradingLanding />
    </>
  )
}