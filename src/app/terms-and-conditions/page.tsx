import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Slumbr",
  description:
    "Slumbr terms and conditions. Read the terms of use for our AI dream journal app.",
  alternates: {
    canonical: "https://slumbr.ai/terms-and-conditions",
  },
};

export default function Terms() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-24">
      <div className="max-w-2xl w-full">
        <Link
          href="/"
          className="text-[#3D3B8E] hover:text-white transition-colors text-sm mb-8 inline-block"
        >
          &larr; Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-2">Terms and Conditions</h1>
        <p className="text-[#9090A0] mb-10">Last updated: April 2026</p>

        <div className="text-[#C8C8D0] leading-relaxed space-y-8">
          <p>
            These Terms govern your use of Slumbr (&ldquo;the App&rdquo;). By using the App, you agree to these Terms.
          </p>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">1. Who we are</h2>
            <p>
              Slumbr LTD (&ldquo;we&rdquo;, &ldquo;us&rdquo;). Contact:{" "}
              <a href="mailto:contact@slumbr.ai" className="text-[#D4A843] hover:underline">
                contact@slumbr.ai
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">2. The App</h2>
            <p>
              Slumbr is a dream journaling app with AI-assisted analysis and optional dream-inspired video generation.
              Slumbr is for personal reflection and entertainment only and does not provide medical, psychological, or
              mental health advice.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">3. Your account</h2>
            <p>
              Provide accurate information and keep your login secure. You are responsible for activity under your account.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">4. Acceptable use</h2>
            <p>
              You will not store or share illegal content, infringe others&rsquo; rights, or abuse the service. We may
              suspend or terminate accounts violating these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">5. Content &amp; licence</h2>
            <p>
              You retain rights to content you create (journal entries, audio, etc.). You grant us a limited licence to
              process and store your content to operate the App and provide requested features (e.g., analysis, video
              generation).
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">6. AI features &amp; limitations</h2>
            <p>
              AI outputs may be inaccurate or incomplete. Do not rely on results as facts or professional advice.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">7. Subscriptions, tokens &amp; purchases</h2>
            <p className="mb-3">
              <span className="text-white font-medium">Subscriptions:</span> Auto-renewing until cancelled in your Apple
              settings. Apple handles billing and refunds.
            </p>
            <p className="mb-3">
              <span className="text-white font-medium">Pro membership:</span> Includes ad removal, unlimited dream
              analysis (capped at 10 per day), and monthly video tokens.
            </p>
            <p className="mb-3">
              <span className="text-white font-medium">Video tokens:</span> Consumable credits used to generate videos.
              Additional tokens can be purchased. No cash value, non-transferable.
            </p>
            <p className="mb-3">
              <span className="text-white font-medium">Prices and taxes:</span> Displayed in the App Store and may change.
            </p>
            <p>
              <span className="text-white font-medium">Cancellations:</span> Manage in App Store settings; access
              continues until the current period ends.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">8. Advertising</h2>
            <p>Free users may see ads. Pro users do not see ads.</p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">9. Termination &amp; deletion</h2>
            <p>
              You can delete your account in the app. We remove your personal data and content, subject to
              legal/operational requirements.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">10. Disclaimers</h2>
            <p>
              The App is provided &ldquo;as is&rdquo; without warranties. We disclaim implied warranties to the extent
              permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">11. Limitation of liability</h2>
            <p>
              To the extent permitted by law, we are not liable for indirect, incidental, special, or consequential
              damages, or any loss of data or profits.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">12. Changes</h2>
            <p>
              We may modify or discontinue features and update these Terms. Continued use means you accept changes.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">13. Governing law</h2>
            <p>England &amp; Wales.</p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">14. Contact</h2>
            <p>
              <a href="mailto:contact@slumbr.ai" className="text-[#D4A843] hover:underline">
                contact@slumbr.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
