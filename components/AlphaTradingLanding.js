import React, { useState, useEffect } from 'react';
import { ChevronDown, TrendingUp, Users, BookOpen, Zap, Bell, Play, CheckCircle, ArrowRight, Calendar, Clock, Target, BarChart3, MessageCircle, Mail } from 'lucide-react';

const AlphaTradingLanding = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleJoinNow = () => {
    window.open('https://buy.stripe.com/dRmdR876a15ebf183c5os0a', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Alpha Logo */}
            <div className="w-12 h-12 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e40af" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
                {/* Alpha symbol inspired by your logo */}
                <path d="M20 80 L35 20 L45 20 L65 80 L55 80 L51 65 L29 65 L25 80 Z M33 50 L47 50 L40 30 Z" fill="url(#logoGradient)" />
                <path d="M70 80 L70 20 L80 20 L80 45 L85 40 L95 55 L85 55 L80 50 L80 80 Z" fill="url(#logoGradient)" />
              </svg>
            </div>
            <div className="text-xl font-bold text-white">Alpha Trading Pros</div>
          </div>
          <button 
            onClick={handleJoinNow}
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
          >
            Subscribe Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-8 inline-flex items-center bg-emerald-500/20 border border-emerald-500/30 rounded-full px-6 py-2 backdrop-blur-sm">
            <TrendingUp className="w-5 h-5 mr-2 text-emerald-400" />
            <span className="text-emerald-400 font-medium">Live Trading Signals</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-emerald-400 bg-clip-text text-transparent leading-tight">
            Turn Market Moves into
            <span className="block text-emerald-400">Profits</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Get live trading signals, monthly webinars, and exclusive educational resources to trade smarter with options and futures.
          </p>

          <button 
            onClick={handleJoinNow}
            className="group relative bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white font-bold py-6 px-12 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25"
          >
            <span className="relative z-10 flex items-center">
              Join Now – Start Your Trading Journey
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-700 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-slate-400" />
          </div>
        </div>

        {/* Floating Chart Visual */}
        <div className="absolute right-10 top-1/4 hidden lg:block opacity-20 animate-float">
          <BarChart3 className="w-32 h-32 text-emerald-400" />
        </div>
      </section>

      {/* About/Credibility Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-slate-800/30 backdrop-blur rounded-2xl p-12 border border-slate-700/50">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full mx-auto mb-8 flex items-center justify-center">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Meet Your Trading Guide</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-emerald-400 font-bold text-2xl">MBA</div>
                <div className="text-slate-300">Specializing in CFA</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-bold text-2xl">2019</div>
                <div className="text-slate-300">Trading Options Since</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-bold text-2xl">Recent</div>
                <div className="text-slate-300">Started Futures Trading</div>
              </div>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm focused on documenting my trading journey and sharing actionable signals that work. 
              My mission is to help retail traders navigate the markets with confidence through proven strategies and real-time insights.
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Offer Section */}
      <section id="subscription" className="py-20 bg-gradient-to-br from-slate-800/50 to-blue-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What You Get as an
              <span className="text-emerald-400"> Alpha Trading Subscriber</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to trade smarter, learn faster, and profit consistently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 group">
              <Calendar className="w-12 h-12 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Monthly Webinars</h3>
              <p className="text-slate-300">Exclusive strategies, live Q&A sessions, and market analysis</p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <Zap className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Live Trading Signals</h3>
              <p className="text-slate-300">Real-time alerts delivered via WhatsApp or Telegram</p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <Play className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Recorded Webinars</h3>
              <p className="text-slate-300">Access to all past sessions – watch anytime, anywhere</p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 group">
              <BookOpen className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Educational Mini-Series</h3>
              <p className="text-slate-300">Learn trading foundations from beginner to advanced</p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
              <Target className="w-12 h-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Resources & Reading Lists</h3>
              <p className="text-slate-300">Curated trading books and premium materials</p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-8 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 group">
              <Bell className="w-12 h-12 text-red-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Market News Alerts</h3>
              <p className="text-slate-300">Live market-moving news delivered via Telegram</p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-8 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 group">
              <Mail className="w-12 h-12 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Weekly Newsletter</h3>
              <p className="text-slate-300">Market insights, trade recaps, and upcoming opportunities</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl p-8 mb-8 border border-emerald-500/30">
              <div className="text-4xl font-bold text-emerald-400 mb-2">$159.99</div>
              <div className="text-xl text-slate-300">per month</div>
              <div className="text-sm text-slate-400 mt-2">Cancel anytime • No long-term commitment</div>
            </div>
            
            <button 
              onClick={handleJoinNow}
              className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white font-bold py-6 px-12 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Subscribe Now – Start Trading Smarter
            </button>
          </div>
        </div>
      </section>

      {/* ORB Strategy Teaser */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Master the <span className="text-emerald-400">ORB Strategy</span>
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Mark Pre-Market High (PMH) & Pre-Market Low (PML)</div>
                    <div className="text-slate-300">Identify key levels before market open</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Break Above = Calls (Bullish)</div>
                    <div className="text-slate-300">Enter long positions on upward breakouts</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Break Below = Puts (Bearish)</div>
                    <div className="text-slate-300">Enter short positions on downward breakouts</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Avoid the "No Trade Zone"</div>
                    <div className="text-slate-300">Stay disciplined and wait for clear signals</div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleJoinNow}
                className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Learn This Strategy in Our Monthly Webinars
              </button>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur rounded-2xl p-8 border border-slate-700/50">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">ORB Strategy Visualization</h3>
              </div>
              
              {/* Simplified Chart Representation */}
              <div className="relative h-64 bg-slate-900/50 rounded-lg p-4">
                <div className="absolute top-8 left-4 right-4 border-t-2 border-emerald-400 border-dashed">
                  <div className="text-xs text-emerald-400 -mt-3">PMH</div>
                </div>
                
                <div className="absolute bottom-8 left-4 right-4 border-t-2 border-red-400 border-dashed">
                  <div className="text-xs text-red-400 -mt-3">PML</div>
                </div>
                
                <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 bg-yellow-500/20 h-16 rounded flex items-center justify-center">
                  <span className="text-yellow-400 text-sm font-medium">No Trade Zone</span>
                </div>
                
                <div className="absolute top-2 right-4 text-xs text-emerald-400">📈 Calls Zone</div>
                <div className="absolute bottom-2 right-4 text-xs text-red-400">📉 Puts Zone</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-emerald-400">Alpha Traders</span> Are Saying
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from real traders who've transformed their trading with our signals and strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">Marcus R.</div>
                  <div className="text-slate-400 text-sm">Options Trader, 2 years experience</div>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-300 leading-relaxed">
                "The ORB strategy alone has completely changed my trading game. I went from losing money consistently to having my best month ever. The signals are spot-on and the community support is incredible."
              </p>
              <div className="mt-4 text-emerald-400 font-semibold">+$8,500 in 30 days</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">Sarah L.</div>
                  <div className="text-slate-400 text-sm">Futures Trader, Beginner</div>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-300 leading-relaxed">
                "As a complete beginner, I was overwhelmed by futures trading. The educational content and live signals gave me the confidence to start trading profitably within my first month."
              </p>
              <div className="mt-4 text-emerald-400 font-semibold">$2,300 profit as a beginner</div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  D
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">David K.</div>
                  <div className="text-slate-400 text-sm">Prop Firm Trader</div>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-300 leading-relaxed">
                "The prop firm insights are pure gold. I passed my evaluation on the second try using the risk management techniques taught here. Now I'm trading with $100K in firm capital."
              </p>
              <div className="mt-4 text-emerald-400 font-semibold">Passed $100K prop firm eval</div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">Amanda T.</div>
                  <div className="text-slate-400 text-sm">Day Trader, 5 years experience</div>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-300 leading-relaxed">
                "I've been trading for years but was stuck in a rut. The weekly newsletter and monthly webinars opened my eyes to new strategies. My win rate jumped from 60% to 82%."
              </p>
              <div className="mt-4 text-emerald-400 font-semibold">Win rate: 60% → 82%</div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  J
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">James W.</div>
                  <div className="text-slate-400 text-sm">Options Trader, Side hustle</div>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-300 leading-relaxed">
                "Working full-time, I needed signals I could trust. The Telegram alerts let me catch profitable moves even during my lunch breaks. Made enough to pay off my car!"
              </p>
              <div className="mt-4 text-emerald-400 font-semibold">$12,000 side income</div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">Rachel M.</div>
                  <div className="text-slate-400 text-sm">Former Stock Trader</div>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-300 leading-relaxed">
                "Transitioning from stocks to options seemed impossible until I found Alpha Trading. The educational content is top-notch and the support is phenomenal. Worth every penny!"
              </p>
              <div className="mt-4 text-emerald-400 font-semibold">Successful transition to options</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
                <div className="text-slate-300">Happy Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
                <div className="text-slate-300">Average Win Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$2.1M+</div>
                <div className="text-slate-300">Total Profits Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">4.9/5</div>
                <div className="text-slate-300">Customer Rating</div>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Join the Success Stories</h3>
              <p className="text-lg text-slate-300 mb-6">
                Don't wait – start your journey to consistent trading profits today
              </p>
              <button 
                onClick={handleJoinNow}
                className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get Started Now - $159.99/Month
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join a <span className="text-emerald-400">Community</span> of Traders Growing Together
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-6 border border-slate-700/50">
              <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-emerald-400">500+</div>
              <div className="text-slate-300">Active Traders</div>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-6 border border-slate-700/50">
              <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-blue-400">24/7</div>
              <div className="text-slate-300">Support & Signals</div>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur rounded-xl p-6 border border-slate-700/50">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-purple-400">85%</div>
              <div className="text-slate-300">Success Rate</div>
            </div>
          </div>
          
          <p className="text-lg text-slate-300 mb-8">
            "The community aspect is incredible. Getting real-time signals and being able to discuss strategies with other traders has transformed my approach to the markets."
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't Trade Alone – Get Signals & Strategies That Work
          </h2>
          
          <p className="text-xl mb-12 opacity-90">
            Join Alpha Trading today and start your journey towards consistent profitability
          </p>
          
          <button 
            onClick={handleJoinNow}
            className="bg-white text-emerald-600 hover:bg-slate-100 font-bold py-6 px-12 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Join Alpha Trading Today
          </button>
        </div>
      </section>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="mailto:info@alphadatacapital.com?subject=Support Request"
          className="bg-blue-500 hover:bg-blue-400 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AlphaTradingLanding;