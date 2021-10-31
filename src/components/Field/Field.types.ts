import { Input, Label, Textarea } from './components';

export type FieldComposition = {
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof Textarea;
};
