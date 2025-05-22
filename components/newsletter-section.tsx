import NewsletterForm from "./newsletter-form"

export default function NewsletterSection() {
  return (
    <section className="bg-slate-800 py-16 text-white">
      <div className="container text-center">
        <h2 className="mb-4 text-3xl font-bold">Stay Connected With Our Newsletter</h2>
        <p className="mx-auto mb-8 max-w-2xl text-slate-300">
          Subscribe to our newsletter to receive the latest updates on government activities, policies, programs, and
          events in Ondo State. We deliver timely and accurate information directly to your inbox.
        </p>
        <div className="flex justify-center">
          <NewsletterForm />
        </div>
      </div>
    </section>
  )
}
