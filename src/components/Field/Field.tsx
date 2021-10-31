import React from 'react';
import { useUniqueID } from '../../utils';
import { Label, Input, Textarea } from './components';
import { FieldContext } from '../../context';
import { FieldComposition } from './Field.types';

export const Field: React.FC & FieldComposition = ({ children }) => {
  const id = useUniqueID();

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
Field.Textarea = Textarea;
