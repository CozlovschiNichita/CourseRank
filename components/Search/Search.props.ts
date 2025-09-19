import { DetailedHTMLProps, HTMLAttributes, ChangeEvent } from 'react';

export interface SearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}