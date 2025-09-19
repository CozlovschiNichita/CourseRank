import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import GlassIcon from './glass.svg';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState, KeyboardEvent, FormEvent, forwardRef, ForwardedRef } from 'react';
import { useRouter } from 'next/router';

export const Search = forwardRef(
  (
    { className, placeholder, value, onChange, ...props }: SearchProps,
    ref: ForwardedRef<HTMLFormElement>
  ): React.ReactElement => {
    const [search, setSearch] = useState<string>(value || '');
    const router = useRouter();

    const goToSearch = () => {
      if (!search.trim()) return;
      router.push({
        pathname: '/search',
        query: { q: search }
      });
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        goToSearch();
      }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      goToSearch();
    };

    return (
      <form
        className={cn(className, styles.search)}
        ref={ref}
        role="search"
        onSubmit={handleSubmit}
        {...props}
      >
        <Input
          className={styles.input}
          placeholder={placeholder || 'Поиск...'}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            if (onChange) onChange(e);
          }}
          onKeyDown={handleKeyDown}
        />
        <Button
          appearance="primary"
          className={styles.button}
          type="submit"
          aria-label="Искать по сайту"
        >
          <GlassIcon />
        </Button>
      </form>
    );
  }
);

Search.displayName = 'Search';