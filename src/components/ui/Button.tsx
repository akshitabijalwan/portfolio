import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'text';
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  external = false,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const variantClass = styles[variant];
  const combinedClass = `${styles.button} ${variantClass} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        aria-label={ariaLabel}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClass}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
