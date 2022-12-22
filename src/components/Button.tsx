import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  /**
   * 버튼 내부 텍스트입니다.
   */
  label: string;
  /**
   * 버튼 모양입니다.
   */
  variant: 'primary' | 'secondary' | 'tertiary';
  /**
   * `True` 를 지정하면 조작 불가 상태의 UI를 확인할 수 있습니다.
   */
  disabled: boolean;
  /**
   * `True` 를 지정하면 로딩중 상태의 UI를 확인할 수 있습니다.
   */
  loading: boolean;
  /**
   * (Optional) 버튼 가로 너비입니다.
   * 특정 너비를 지정하고 싶다면 `100px` 와 같이 지정합니다.
   */
  width?: string;
  /**
   * (Optional) 클릭하면 발생하는 콜백 함수입니다.
   */
  onClick?: () => void;
  /**
   * (Optional) 배경색을 자유롭게 지정할 수 있습니다.
   */
  backgroundColor?: string;
}

export const Button = ({
  disabled = false,
  loading = false,
  width = '100%',
  ...props
}: ButtonProps) => {
  return <MainButtonStyle {...props}>{props.label}</MainButtonStyle>;
};

const MainButtonStyle = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: 14px 0px;
  border: 0;
  border-radius: 4px;
  pointer-events: auto;
  overflow: hidden;
  cursor: pointer;
  transition: all ease-out 0.3s;
  color: ${(props) => props.theme.colors['ui-background']};
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};

  &:hover,
  &:active {
    opacity: 0.8;
  }

  &:disabled {
    cursor: default;
    pointer-events: none;
    color: #adaeb3;
    background-color: #f3f4f9;
  }

  ${(props) =>
    props.variant &&
    (props.variant === 'primary'
      ? css`
          color: ${(props) => props.theme.colors['ui-background']};
          background-color: ${(props) => props.theme.colors.primary};
        `
      : props.variant === 'secondary'
      ? css`
          color: ${(props) => props.theme.colors['ui-background']};
          background-color: ${(props) => props.theme.colors['ui-up-08']};
        `
      : props.variant === 'tertiary' &&
        css`
          color: #232429;
          border: 1px solid #dedfe4;
          background-color: transparent;
          &:hover,
          &:active {
            opacity: 1;
            border-color: ${(props) => props.theme.colors.primary};
          }
        `)}
`;
