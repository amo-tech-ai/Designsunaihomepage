import { motion } from 'motion/react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface RelatedServicesCardProps {
  label: string;
  title: string;
  imageUrl: string;
  imageAlt?: string;
  variant?: 'large' | 'medium';
  className?: string;
}

export function RelatedServicesCard({
  label,
  title,
  imageUrl,
  imageAlt = '',
  variant = 'medium',
  className = ''
}: RelatedServicesCardProps) {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-lg
        bg-[#F5F3EF]
        border border-[#E8E6E1]
        cursor-pointer
        group
        ${variant === 'large' ? 'h-[280px]' : 'h-[130px]'}
        ${className}
      `}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="h-full flex items-stretch">
        {/* Text Content - Left Side */}
        <div className={`
          flex flex-col justify-center
          ${variant === 'large' ? 'w-[55%] px-10' : 'w-[52%] px-8'}
        `}>
          {/* Label */}
          <div className="mb-3">
            <span className="
              text-[10px] 
              uppercase 
              tracking-[0.15em] 
              text-neutral-500
              font-medium
            ">
              {label}
            </span>
          </div>

          {/* Title */}
          <h3 className={`
            text-neutral-900
            leading-tight
            tracking-tight
            transition-colors duration-200
            group-hover:text-neutral-700
            ${variant === 'large' ? 'text-3xl max-w-[200px]' : 'text-2xl max-w-[180px]'}
          `}>
            {title}
          </h3>
        </div>

        {/* Image - Right Side */}
        <div className={`
          ${variant === 'large' ? 'w-[45%]' : 'w-[48%]'}
          relative
          overflow-hidden
        `}>
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <ImageWithFallback
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
