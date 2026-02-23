import { RelatedServicesCard } from './RelatedServicesCard';

interface RelatedService {
  label: string;
  title: string;
  imageUrl: string;
  imageAlt?: string;
  variant?: 'large' | 'medium';
}

interface RelatedServicesSectionProps {
  title?: string;
  services?: RelatedService[];
  className?: string;
}

const defaultServices: RelatedService[] = [
  {
    label: 'CAPABILITY',
    title: 'Customer Demand',
    imageUrl: 'https://images.unsplash.com/photo-1758520387811-7b406f7225bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGJhZ3MlMjByZXRhaWwlMjBjdXN0b21lcnN8ZW58MXx8fHwxNzcwMjI4OTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Customers with shopping bags',
    variant: 'large'
  },
  {
    label: 'INDUSTRY',
    title: 'Retail Industry',
    imageUrl: 'https://images.unsplash.com/photo-1761652661873-a08d8cb25b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMHRlY2hub2xvZ3klMjBibHVlfGVufDF8fHx8MTc3MDEzOTgwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Digital technology',
    variant: 'medium'
  },
  {
    label: 'CAPABILITY',
    title: 'Social Impact',
    imageUrl: 'https://images.unsplash.com/photo-1666368461141-4c5349c327da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxlYWYlMjB3YXRlciUyMGRyb3BsZXQlMjBuYXR1cmV8ZW58MXx8fHwxNzcwMjI4OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Green leaf with water',
    variant: 'medium'
  }
];

export function RelatedServicesSection({
  title = 'Explore Related Services',
  services = defaultServices,
  className = ''
}: RelatedServicesSectionProps) {
  return (
    <section className={`
      py-20 md:py-24 lg:py-28
      px-6 md:px-12 lg:px-16
      bg-white
      ${className}
    `}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <h2 className="
          text-4xl md:text-5xl lg:text-[56px]
          tracking-tight
          leading-tight
          mb-12 md:mb-14
          text-neutral-900
        ">
          {title}
        </h2>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7">
          {/* Left Column - Large Card */}
          {services[0] && (
            <div className="lg:row-span-2">
              <RelatedServicesCard
                label={services[0].label}
                title={services[0].title}
                imageUrl={services[0].imageUrl}
                imageAlt={services[0].imageAlt}
                variant="large"
              />
            </div>
          )}

          {/* Right Column - Two Medium Cards Stacked */}
          <div className="flex flex-col gap-6 md:gap-7">
            {services[1] && (
              <RelatedServicesCard
                label={services[1].label}
                title={services[1].title}
                imageUrl={services[1].imageUrl}
                imageAlt={services[1].imageAlt}
                variant="medium"
              />
            )}

            {services[2] && (
              <RelatedServicesCard
                label={services[2].label}
                title={services[2].title}
                imageUrl={services[2].imageUrl}
                imageAlt={services[2].imageAlt}
                variant="medium"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
