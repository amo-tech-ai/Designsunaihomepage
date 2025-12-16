import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';

export function FAQV7() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {[
            { q: "Is coding knowledge required?", a: "No! Our platform is designed to be completely visual. You can build complex AI workflows just by dragging and dropping." },
            { q: "Can I connect my own data?", a: "Yes. We support over 100+ native integrations including PostgreSQL, Snowflake, Airtable, and Google Sheets." },
            { q: "Is my data secure?", a: "Absolutely. We use bank-grade encryption and never train our models on your private data without explicit permission." },
            { q: "Can I export the code?", a: "Yes. You can export any workflow as a Python script or a Docker container to host it on your own infrastructure." }
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-100">
              <AccordionTrigger className="py-6 hover:no-underline hover:text-[#FF6A3D] text-lg font-medium text-slate-900 text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 pb-6 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
