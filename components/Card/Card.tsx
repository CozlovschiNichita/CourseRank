import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ color = 'white', children, className, ...props }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className={cn(styles.card, className, {
          [styles.blue]: color === 'blue'
        })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

// Добавляем displayName для ESLint
Card.displayName = 'Card';