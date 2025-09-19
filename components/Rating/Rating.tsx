import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import {
  useEffect,
  useState,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
  useRef,
  useCallback
} from 'react';

export const Rating = forwardRef(
  (
    { isEditable = false, error, rating, setRating, tabIndex, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): React.ReactElement => {
    const [ratingArray, setRatingArray] = useState<React.ReactElement[]>(new Array(5).fill(<></>));
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

    // Вычисление tabIndex для звезд
    const computeFocus = useCallback(
      (r: number, i: number) => {
        if (!isEditable) return -1;
        if (!r && i === 0) return tabIndex ?? 0;
        if (r === i + 1) return tabIndex ?? 0;
        return -1;
      },
      [isEditable, tabIndex]
    );

    // Обработка клавиш стрелок
    const handleKey = useCallback(
      (e: KeyboardEvent<HTMLSpanElement>) => {
        if (!isEditable || !setRating) return;

        if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
          e.preventDefault();
          const newRating = !rating ? 1 : Math.min(rating + 1, 5);
          setRating(newRating);
          ratingArrayRef.current[newRating - 1]?.focus();
        }

        if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
          e.preventDefault();
          const newRating = Math.max(rating - 1, 1);
          setRating(newRating);
          ratingArrayRef.current[newRating - 1]?.focus();
        }
      },
      [isEditable, rating, setRating]
    );

    const onClick = useCallback(
      (i: number) => {
        if (!isEditable || !setRating) return;
        setRating(i);
      },
      [isEditable, setRating]
    );

    const constructRating = useCallback(
      (currentRating: number) => {
        const updatedArray = new Array(5).fill(null).map((_, i) => (
          <span
            key={i}
            className={cn(styles.star, {
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable
            })}
            onMouseEnter={() => constructRating(i + 1)}
            onMouseLeave={() => constructRating(rating)}
            onClick={() => onClick(i + 1)}
            tabIndex={computeFocus(currentRating, i)}
            onKeyDown={handleKey}
            ref={r => { ratingArrayRef.current[i] = r; }}
            role={isEditable ? 'slider' : undefined}
            aria-invalid={!!error}
            aria-valuenow={rating}
            aria-valuemax={5}
            aria-valuemin={1}
            aria-label={isEditable ? 'У(Uriarte Rating' : `Рейтинг ${rating}`}
          >
            <StarIcon />
          </span>
        ));
        setRatingArray(updatedArray);
      },
      [isEditable, rating, error, computeFocus, handleKey, onClick]
    );

    useEffect(() => {
      constructRating(rating);
    }, [rating, tabIndex, constructRating]);

    return (
      <div
        {...props}
        ref={ref}
        className={cn(styles.ratingWrapper, { [styles.error]: error })}
      >
        {ratingArray}
        {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

Rating.displayName = 'Rating';