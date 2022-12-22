import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    width: { control: 'text' },
  },
  parameters: {
    componentSubtitle:
      'NFTBank에서 사용되는 버튼입니다. 버튼의 크기, 색상, 너비 등을 조절할 수 있습니다.',
  },
} as ComponentMeta<typeof Button>;

export const Standard: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
Standard.args = {
  variant: 'primary',
  label: 'Select',
  disabled: false,
  loading: false,
  width: '100%',
};

// Other Button stories
export const Variants = (args) => (
  <ButtonWrapper>
    <Button {...args} variant='primary' />
    <Button {...args} variant='secondary' />
    <Button {...args} variant='tertiary' />
  </ButtonWrapper>
);
Variants.args = {
  width: '200px',
  label: 'Select',
  disabled: false,
  loading: false,
};
Variants.parameters = {
  docs: {
    storyDescription: '3가지 타입의 variant를 지원합니다.',
  },
};

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  & > button {
    margin-right: 12px;
  }
`;
