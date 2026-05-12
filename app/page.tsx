export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Chrome Extension
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Extract form data from{' '}
          <span className="text-[#58a6ff]">any website</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Instantly detect and pull structured data from web forms into clean CSV or JSON exports.
          Built for sales teams and data researchers who need results fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Extracting – $25/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[['Any Site', 'Works on all websites'], ['CSV & JSON', 'Flexible exports'], ['Instant', 'One-click extraction']].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-bold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </span>
          <div className="text-4xl font-bold text-white mb-1">$25<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything you need to extract at scale</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Chrome extension with form auto-detection',
              'Unlimited extractions per month',
              'CSV and JSON export formats',
              'Web dashboard for managing data',
              'Background sync across sessions',
              'Priority email support'
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5 font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which browsers are supported?',
              a: 'FormExtract works on Google Chrome and any Chromium-based browser (Edge, Brave, Arc). Firefox support is on the roadmap.'
            },
            {
              q: 'What kinds of forms can it detect?',
              a: 'The extension detects standard HTML forms, dynamic React/Vue/Angular forms, and multi-step wizards. It captures field labels, names, types, and current values.'
            },
            {
              q: 'Is my extracted data stored securely?',
              a: 'Extractions are stored in your personal dashboard with encryption at rest. You can delete your data at any time from the dashboard settings.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} FormExtract. All rights reserved.
      </footer>
    </main>
  )
}
