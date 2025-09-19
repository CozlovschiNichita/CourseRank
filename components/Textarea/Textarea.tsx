import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

// Компонент с forwardRef
export const Textarea = forwardRef(
  ({ error, className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <div className={cn(styles.textareaWrapper, className)}>
        <textarea
          className={cn(styles.textarea, { [styles.error]: error })}
          ref={ref}
          {...props}
        />
        {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

// Добавляем displayName для ESLint
Textarea.displayName = 'Textarea';