import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
  id?: string;
}

export function Container({
  children,
  narrow = false,
  className = '',
  as: Tag = 'div',
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={`${styles.container} ${narrow ? styles.narrow : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
