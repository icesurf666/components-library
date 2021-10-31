import styled from 'styled-components';
import { TextareaProps } from './TextArea.types';
import { StyledInput } from '../Input/Input.styles';

export const StyledTextarea = styled(StyledInput as 'textarea').attrs({
  as: 'textarea',
})<TextareaProps>`
  resize: ${(props) => !props.isResizable && 'none'};
`;
