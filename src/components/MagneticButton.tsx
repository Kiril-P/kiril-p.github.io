import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  strength?: number;
  ariaLabel?: string;
  title?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

export default function MagneticButton({ 
  children, 
  className = '', 
  href,
  strength = 0.3,
  ariaLabel,
  title,
  target,
  rel
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    if (!button || !text) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(button, {
        x: deltaX,
        y: deltaY,
        duration: 0.4,
        ease: 'power2.out',
      });

      // Slightly stronger effect for text
      gsap.to(text, {
        x: deltaX * 0.5,
        y: deltaY * 0.5,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)',
      });

      gsap.to(text, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf([button, text]);
    };
  }, [strength]);

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`magnetic-button ${className}`}
      style={{ display: 'inline-flex' }}
      aria-label={ariaLabel}
      title={title}
      target={target}
      rel={rel}
    >
      <span ref={textRef} className="flex items-center gap-2">
        {children}
      </span>
    </a>
  );
}
