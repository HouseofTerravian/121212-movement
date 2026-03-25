interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <section className="bg-gray-50 section-padding pb-8">
        <div className="container-custom">
          <h1 className="heading-primary mb-2">{title}</h1>
          <p className="text-gray-500 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>
      <section className="section-padding pt-8">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose prose-gray prose-headings:font-serif prose-headings:text-brand-black prose-a:text-brand-red prose-a:no-underline hover:prose-a:underline max-w-none">
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
