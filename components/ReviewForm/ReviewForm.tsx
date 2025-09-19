import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import styles from './ReviewForm.module.css';

interface ReviewFormData {
  name: string;
  // other fields
}

export const ReviewForm = ({ isOpened }: { isOpened: boolean }): React.ReactElement => {
  const {
    register,
    formState: { errors },
  } = useForm<ReviewFormData>({
    mode: 'onChange',
  });

  return (
    <form className={styles.form}>
      <Input
        {...register('name', { required: { value: true, message: 'Заполните имя' } })}
        placeholder="Имя"
        error={errors.name}
        tabIndex={isOpened ? 0 : -1}
        aria-invalid={errors.name ? true : false}
      />
      {/* other fields */}
    </form>
  );
};