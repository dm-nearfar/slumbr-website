import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your Slumbr Account | Slumbr",
  description: "How to delete your Slumbr account and associated data.",
  alternates: {
    canonical: "https://slumbr.ai/delete-account",
  },
};

export default function DeleteAccount() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-24">
      <div className="max-w-2xl w-full">
        <Link
          href="/"
          className="text-[#3D3B8E] hover:text-white transition-colors text-sm mb-8 inline-block"
        >
          &larr; Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-10">Delete your Slumbr account</h1>

        <div className="text-[#C8C8D0] leading-relaxed space-y-8">
          <p>
            You can delete your Slumbr account and all associated data at any time. You do not need to
            keep the app installed to make a deletion request.
          </p>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">From inside the app</h2>
            <p>
              Open Slumbr, go to Account &rarr; Delete Account, and confirm. Your account, journal
              entries, recorded dreams, AI interpretations, and any generated videos will be permanently
              removed within 30 days. Any active subscription will be cancelled at the end of the current
              billing period.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">If you cannot access the app</h2>
            <p>
              Email{" "}
              <a href="mailto:delete@slumbr.ai" className="text-[#D4A843] hover:underline">
                delete@slumbr.ai
              </a>{" "}
              from the address registered to your Slumbr account. Use &ldquo;Account deletion
              request&rdquo; as the subject line. We will confirm receipt within 5 business days and complete
              deletion within 30 days of confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">What we delete</h2>
            <p>
              Everything tied to your account: profile information, dream entries, voice recordings, AI
              analyses, generated videos, preferences, and authentication records.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">What we may retain</h2>
            <p>
              Some records are kept where legally required, including transaction history for tax
              compliance (typically 6 years in the UK) and aggregated anonymised analytics that cannot be
              linked back to you. See our privacy policy at{" "}
              <Link href="/privacy-policy" className="text-[#D4A843] hover:underline">
                slumbr.ai/privacy-policy
              </Link>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-2">Operator</h2>
            <p>
              Slumbr is operated by Slumbr LTD, registered in England and Wales. For privacy or data
              protection enquiries beyond account deletion, contact{" "}
              <a href="mailto:contact@slumbr.ai" className="text-[#D4A843] hover:underline">
                contact@slumbr.ai
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
