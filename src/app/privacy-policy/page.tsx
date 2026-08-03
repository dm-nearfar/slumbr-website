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
        <p className="text-[#9090A0] mb-10">Last updated: 3 August 2026</p>

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
              <span className="text-white font-medium">Purchase data:</span> purchase receipts and product identifiers,
              via the Apple App Store or Google Play (depending on your device) and RevenueCat.
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
              Authentication, synchronisation, and payments via Firebase, RevenueCat, and the Apple App Store or Google
              Play (performance of a contract).
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
              <li>
                <span className="text-white font-medium">Firebase (Google)</span> for authentication, database, storage,
                crash reporting, push notifications, and analytics.
              </li>
              <li>
                <span className="text-white font-medium">RevenueCat</span> for in-app purchases and subscription
                validation.
              </li>
              <li>
                <span className="text-white font-medium">Apple App Store and Google Play</span> for payments and
                receipts, depending on your device.
              </li>
              <li>
                <span className="text-white font-medium">OpenAI</span> for optional voice note transcription and dream
                analysis. We send only the content needed to fulfil your request. OpenAI processes this content under
                API terms that do not permit its use for training their models.
              </li>
              <li>
                <span className="text-white font-medium">PiAPI and Kling (Kuaishou Technology)</span> for optional dream
                video generation. Kling is an AI video model operated by Kuaishou Technology, a company based in China.
                Your raw dream entry is not sent to the video provider: a short, AI-generated cinematic prompt derived
                from your entry is sent instead.
              </li>
              <li>
                <span className="text-white font-medium">AppsFlyer</span> for install and marketing attribution
                analytics.
              </li>
              <li>
                <span className="text-white font-medium">Google AdMob</span> for advertising to free users; consent is
                handled via Google&rsquo;s User Messaging Platform where applicable.
              </li>
            </ul>
            <p className="mt-3">
              Some data may be processed outside the UK/EU/US with safeguards such as Standard Contractual Clauses.
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
            <p className="mb-3">
              Depending on your region (UK/EU GDPR), you may have rights to access, correct, delete, restrict, or port
              your data, and to object to certain processing. To exercise rights, contact{" "}
              <a href="mailto:contact@slumbr.ai" className="text-[#D4A843] hover:underline">
                contact@slumbr.ai
              </a>.
            </p>
            <p>
              If you are a resident of the United States, see section 12 for your rights under applicable state privacy
              laws.
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
              non-personalised ads in the app&rsquo;s ad preferences or through their device settings (App Tracking
              Transparency on iOS, or the ads personalisation setting on Android), or upgrade to Pro to remove ads
              entirely. Your dream entries, voice notes, and AI analyses are never used for advertising.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">11. International transfers</h2>
            <p>
              Where data is transferred internationally, we use appropriate safeguards (e.g., SCCs).
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">12. United States privacy disclosures</h2>
            <p className="mb-3">
              This section applies to residents of US states with consumer privacy laws (including California, Colorado,
              Connecticut, Texas, Virginia, and others).
            </p>
            <p className="mb-3">
              <span className="text-white font-medium">Categories of personal information we collect:</span> identifiers
              (email address, name, device identifiers); user content (dream entries, voice notes, media you upload);
              commercial information (purchase history); internet activity (app usage and diagnostics); approximate
              location (for ad delivery to free users, where permitted); and inferences generated at your request (AI
              dream analysis). We collect this information directly from you and from your device, for the purposes
              described in section 3, and share it only with the service providers listed in section 4.
            </p>
            <p className="mb-3">
              <span className="text-white font-medium">We do not sell your personal information</span>, and we have not
              sold it in the preceding 12 months. For free users, delivering advertising through Google AdMob may
              involve disclosing device identifiers to Google, which some state laws treat as &ldquo;sharing&rdquo; for
              targeted advertising. You can opt out at any time using the controls described in section 10. We do not
              knowingly sell or share the personal information of anyone under 16.
            </p>
            <p>
              <span className="text-white font-medium">Your rights.</span> Depending on your state, you may have the
              right to know what personal information we hold about you, to access it in a portable format, to correct
              it, to delete it, to opt out of targeted advertising, and not to be discriminated against for exercising
              these rights. You can delete individual entries or your entire account directly in the app, and you can
              exercise any of these rights by emailing{" "}
              <a href="mailto:contact@slumbr.ai" className="text-[#D4A843] hover:underline">
                contact@slumbr.ai
              </a>. We will verify requests using your account email and respond within the time required by your
              state&rsquo;s law. If we decline a request, you may appeal by replying to our response.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">
              13. Consumer health data (Washington and Nevada residents)
            </h2>
            <p className="mb-3">
              Dream journal entries, voice notes, and AI-generated dream analyses could reveal, or be interpreted as
              revealing, information about your emotional or mental state. Washington&rsquo;s My Health My Data Act and
              Nevada&rsquo;s SB 370 may treat such information as consumer health data. For that reason we want to be
              explicit:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                We collect this content only when you choose to provide it, and we process it only to deliver the
                features you request (journaling, transcription, analysis, and video generation).
              </li>
              <li>We never sell it, never use it for advertising, and never share it with advertising providers.</li>
              <li>
                It is shared only with the processors needed to fulfil your request, as listed in section 4 (for
                example, OpenAI for analysis you initiate).
              </li>
              <li>
                You can delete any entry, or your entire account and all associated content, at any time in the app.
              </li>
            </ul>
            <p className="mt-3">
              To exercise access or deletion rights over this data, or to withdraw consent to its processing, contact{" "}
              <a href="mailto:contact@slumbr.ai" className="text-[#D4A843] hover:underline">
                contact@slumbr.ai
              </a>. Washington residents may appeal a refusal by replying to our response and may contact the Washington
              Attorney General if the appeal is unsuccessful.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">14. Changes</h2>
            <p>
              We may update this policy. We will post the new version with a revised &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">15. Contact</h2>
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
