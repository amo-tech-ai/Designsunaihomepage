/**
 * BCG-Style Team Profiles Section
 * Simple circular avatars, name + title, no hover effects
 * Matches BCG consultant profile pattern
 */

import { unsplash_tool } from '../../../tools/unsplash';

const consultants = [
  {
    name: 'Sarah Chen',
    role: 'Managing Director & Partner',
    specialty: 'Fashion & Luxury AI',
    credentials: 'Ex-LVMH Digital',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Principal',
    specialty: 'Computer Vision & Virtual Try-On',
    credentials: 'PhD MIT, 12 patents',
  },
  {
    name: 'Priya Sharma',
    role: 'Partner',
    specialty: 'Trend Forecasting & Demand Planning',
    credentials: 'Ex-McKinsey, Harvard MBA',
  },
  {
    name: 'James Wellington',
    role: 'Senior Partner',
    specialty: 'Supply Chain AI & Operations',
    credentials: 'Ex-Bain, Stanford MBA',
  },
];

export function BCGTeamSection() {
  return (
    <section className="bcg-section bg-white">
      <div className="bcg-container">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="bcg-text-section text-[#212427] mb-4">
            Meet our fashion consultants
          </h2>
          <p className="bcg-text-body text-[#696969] max-w-3xl">
            Our team combines deep fashion industry expertise with technical AI implementation experience. 
            Every engagement is led by a partner-level consultant with fashion domain knowledge.
          </p>
        </div>

        {/* Consultants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {consultants.map((consultant, index) => (
            <div key={index} className="text-center">
              {/* Avatar */}
              <div className="mb-4 mx-auto">
                <img
                  src={`https://i.pravatar.cc/160?img=${index + 20}`}
                  alt={consultant.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-[#E5E7EB]"
                />
              </div>

              {/* Name */}
              <h3 className="text-base font-medium text-[#212427] mb-1">
                {consultant.name}
              </h3>

              {/* Role */}
              <div className="text-sm text-[#696969] mb-2">
                {consultant.role}
              </div>

              {/* Specialty */}
              <div className="text-xs text-[#696969] mb-1">
                {consultant.specialty}
              </div>

              {/* Credentials */}
              <div className="text-xs text-[#696969]">
                {consultant.credentials}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#696969] mb-4">
            Want to discuss your fashion AI roadmap?
          </p>
          <button className="bcg-btn-secondary px-8 py-3">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
