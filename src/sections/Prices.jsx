export default function Pricing() {
  return (
    <section
      id="pricing"
      className="min-h-screen px-8 py-24 scroll-mt-24bg-[#183A3B]">
      <h2 className="text-4xl font-bold text-center text-white">
        Our Pricing Plans
      </h2>

      <p className="text-center text-slate-400 mt-4">
        Simple, transparent pricing for every business
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
          <h3 className="text-xl font-semibold text-white">Basic</h3>
          <p className="text-4xl font-bold text-white mt-4">₹9,999</p>
          <p className="text-slate-400 mt-2">Perfect for startups</p>

          <ul className="mt-6 space-y-3 text-slate-300">
            <li>✔ 1 Page Website</li>
            <li>✔ Basic Design</li>
            <li>✔ Email Support</li>
          </ul>

          <button className="mt-8 w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-slate-900 p-8 rounded-2xl border border-sky-500 scale-105">
          <h3 className="text-xl font-semibold text-white">Pro</h3>
          <p className="text-4xl font-bold text-white mt-4">₹24,999</p>
          <p className="text-slate-400 mt-2">Most popular</p>

          <ul className="mt-6 space-y-3 text-slate-300">
            <li>✔ 5 Page Website</li>
            <li>✔ Modern UI/UX</li>
            <li>✔ SEO Optimization</li>
            <li>✔ Priority Support</li>
          </ul>

          <button className="mt-8 w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl">
            Choose Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
          <h3 className="text-xl font-semibold text-white">Premium</h3>
          <p className="text-4xl font-bold text-white mt-4">₹49,999</p>
          <p className="text-slate-400 mt-2">For growing businesses</p>

          <ul className="mt-6 space-y-3 text-slate-300">
            <li>✔ Unlimited Pages</li>
            <li>✔ Custom Design</li>
            <li>✔ Performance Optimization</li>
            <li>✔ 24/7 Support</li>
          </ul>

          <button className="mt-8 w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
