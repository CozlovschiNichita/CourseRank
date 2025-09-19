import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.css';
import SortIcon from './sort.svg';
import cn from 'classnames';
import React from 'react';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): React.ReactElement => {
	return (
		<div className={cn(styles.sort, className)} {...props}>
			<div className={styles.sortName} id="sort">Сортировка</div>

			<button
				type="button"
				id="rating"
				onClick={() => setSort(SortEnum.Rating)}
				className={cn({ [styles.active]: sort === SortEnum.Rating })}
				aria-pressed={sort === SortEnum.Rating}
				aria-label="Сортировка по рейтингу"
			>
				<SortIcon className={styles.sortIcon} />По рейтингу
			</button>

			<button
				type="button"
				id="price"
				onClick={() => setSort(SortEnum.Price)}
				className={cn({ [styles.active]: sort === SortEnum.Price })}
				aria-pressed={sort === SortEnum.Price}
				aria-label="Сортировка по цене"
			>
				<SortIcon className={styles.sortIcon} />По цене
			</button>
		</div>
	);
};