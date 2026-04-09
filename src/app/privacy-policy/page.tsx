import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Slumbr",
  description:
    "Slumbr privacy policy. Learn how we collect, use, and protect your data in our AI dream journal app.",
  alternates: {
    canonical: "https://slumbr.ai/privacy-policy",
  },
};

export default function Privacy() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-24">
      <div className="max-w-2xl w-full">
        <Link
          href="/"
          className="text-[#3D3B8E] hover:text-white transition-colors text-sm mb-8 inline-block"
        >
          &larr; Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-[#9090A0] mb-10">Last updated: April 2026</p>

        <div className="text-[#C8C8D0] leading-relaxed space-y-8">
          <p>
            Slumbr (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a mobile app that helps you journal your
            dreams, analyse themes with AI, and optionally generate dream-inspired videos. We value your privacy. This
            Privacy Policy explains what personal data we collect, how we use it, and your rights.
          </p>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">1. Who we are</h2>
            <p className="mb-1">
              <span className="text-white font-medium">Controller:</span> Slumbr LTD
            </p>
            <p>
              <span className="text-white font-medium">Contact:</span>{" "}
              <a href="mailto:contact@slumbr.ai" className="text-[#D4A843] hover:underline">
                contact@slumbr.ai
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">2. What we collect</h2>
            <p className="mb-3">
              <span className="text-white font-medium">Account info:</span> email address, name, (optional) date of
              birth.
            </p>
            <p className="mb-3">
              <span className="text-white font-medium">App content you provide:</span> dream entries (text), optional
              voice notes/audio, and any media you upload.
            </p>
            <p className="mb-3">
              <span className="text-white font-medium">Usage &amp; device data:</span> app version, device model, OS
              version, crash logs, general analytics.
            </p>
            <p className="mb-3">
              <span className="text-white font-medium">Purchase data:</span> purchase receipts, product identifiers (via
              Apple / RevenueCat).
            </p>
            <p>
              <span className="text-white font-medium">Advertising data (free users):</span> ad impressions via Google
              AdMob; approximate location may be used for ad delivery where required.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">3. How we use your data</h2>
            <p className="mb-3">
              Provide and improve the app (performance of a contract; legitimate interests).
            </p>
            <p className="mb-3">
              Dream analysis and video generation using AI services (performance of a contract).
            </p>
            <p className="mb-3">
              Authentication, synchronisation, and payments via Firebase, RevenueCat, and App Store (performance of a
              contract).
            </p>
            <p className="mb-3">
              Customer support and communications (legitimate interests; consent where required).
            </p>
            <p className="mb-3">Analytics and app safety (legitimate interests).</p>
            <p>
              Advertising for free users via AdMob (consent/legitimate interests depending on region).
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">4. Data processing &amp; third parties</h2>
            <p className="mb-3">We use reputable providers:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Firebase (Google) for authentication, database, storage, and messaging.</li>
              <li>RevenueCat for in-app purchases and subscription validation.</li>
              <li>Apple App Store / StoreKit for payments and receipts.</li>
              <li>AI services for optional transcription and analysis.</li>
              <li>
                Google AdMob for advertising to free users; consent handled via Google&rsquo;s UMP where applicable.
              </li>
            </ul>
            <p className="mt-3">
              Some data may be processed outside the UK/EU with safeguards such as Standard Contractual Clauses.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">5. Voice notes &amp; AI features</h2>
            <p>
              If you record a voice note, we store the audio. If you request transcription or analysis, audio/text may be
              processed by AI services. You control what you submit and can delete entries anytime.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">6. Data retention</h2>
            <p>
              We retain your data while you have an account. You can delete entries in the app. When you delete your
              account, we delete your personal data and content from our systems, subject to legal/operational
              requirements.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">7. Your rights</h2>
            <p>
              Depending on your region (UK/EU GDPR), you may have rights to access, correct, delete, restrict, or port
              your data, and to object to certain processing. To exercise rights, contact{" "}
              <a href="mailto:support@slumbr.ai" className="text-[#D4A843] hover:underline">
                support@slumbr.ai
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">8. Children</h2>
            <p>
              Slumbr is not directed to children under 13 (or the minimum age in your jurisdiction).
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">9. Security</h2>
            <p>
              We take reasonable technical and organisational measures to protect your data, but no method is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">10. Advertising &amp; tracking</h2>
            <p>
              Free users may see ads via AdMob. We do not sell personal data. Where required (e.g., EEA/UK), we use
              Google&rsquo;s User Messaging Platform (UMP) to obtain consent for personalised ads. Users can opt for
              non-personalised ads or upgrade to Pro to remove ads.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">11. International transfers</h2>
            <p>
              Where data is transferred internationally, we use appropriate safeguards (e.g., SCCs).
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">12. Changes</h2>
            <p>
              We may update this policy. We will post the new version with a revised &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">13. Contact</h2>
            <p>
              <a href="mailto:contact@slumbr.ai" className="text-[#D4A843] hover:underline">
                contact@slumbr.ai
              </a>. You may also contact the ICO (UK) or your local authority.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
