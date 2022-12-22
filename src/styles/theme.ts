/* eslint-disable quotes */
import { lightColor, darkColor } from './colors';

const style = {
  font: {
    'head1-bold': {
      'font-size': '36px',
      'font-weight': '600',
      'line-height': '40px',
    },
    'head1-semi': {
      'font-size': '36px',
      'font-weight': '500',
      'line-height': '40px',
    },
    'head2-bold': {
      'font-size': '30px',
      'font-weight': '600',
      'line-height': '32px',
    },
    'head2-semi': {
      'font-size': '30px',
      'font-weight': '500',
      'line-height': '32px',
    },
    'head3-bold': {
      'font-size': '24px',
      'font-weight': '600',
      'line-height': '30px',
    },
    'head3-semi': {
      'font-size': '24px',
      'font-weight': '500',
      'line-height': '30px',
    },
    'head4-bold': {
      'font-size': '20px',
      'font-weight': '600',
      'line-height': '24px',
    },
    'head4-semi': {
      'font-size': '20px',
      'font-weight': '500',
      'line-height': '24px',
    },
    'subtitle-bold': {
      'font-size': '16px',
      'font-weight': '600',
      'line-height': '20px',
    },
    'subtitle-semi': {
      'font-size': '16px',
      'font-weight': '500',
      'line-height': '20px',
    },
    'subtitle-regular': {
      'font-size': '16px',
      'font-weight': '400',
      'line-height': '20px',
    },
    'body-bold': {
      'font-size': '14px',
      'font-weight': '600',
      'line-height': '20px',
    },
    'body-semi': {
      'font-size': '14px',
      'font-weight': '500',
      'line-height': '20px',
    },
    'body-regular': {
      'font-size': '14px',
      'font-weight': '400',
      'line-height': '20px',
    },
    'caption-bold': {
      'font-size': '12px',
      'font-weight': '600',
      'line-height': '20px',
    },
    'caption-semi': {
      'font-size': '12px',
      'font-weight': '500',
      'line-height': '20px',
    },
    'caption-regular': {
      'font-size': '12px',
      'font-weight': '400',
      'line-height': '20px',
    },
    'overline-bold': {
      'font-size': '11px',
      'font-weight': '600',
      'line-height': '16px',
    },
    'overline-semi': {
      'font-size': '11px',
      'font-weight': '500',
      'line-height': '16px',
    },
    'overline-regular': {
      'font-size': '11px',
      'font-weight': '400',
      'line-height': '16px',
    },
  },
};

export const lightTheme = {
  ...style,
  colors: { ...lightColor },
};

export const darkTheme = {
  ...style,
  colors: { ...darkColor },
};

export const theme = {
  lightTheme,
  darkTheme,
};
