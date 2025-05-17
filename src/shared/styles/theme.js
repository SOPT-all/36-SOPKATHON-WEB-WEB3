import { css } from '@emotion/react';

export const theme = {
  colors: {
    //gray
    gray100: '#F8FAFB',
    gray200: '#F2F4F5',
    gray300: '#E5E7EA',
    gray500: '#9CA2AE',
    gray800: '#4B5563',
    gray900: '#101827',
    gradation: 'rgba(0, 0, 0, 0.50)',
    //green
    green: '#3AD291',
    lightgreen: '#BCF0DA',

    black: '#000000',
    white: '#FFFFFF',
  },

  font: {
    // Title
    pre_title_semi_20: css`
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 2rem;
      line-height: 140%;
    `,
    pre_title_semi_18: css`
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 140%;
    `,

    //Subtitle
    pre_subtitle_semi_18: css`
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 140%;
    `,

    pre_subtitle_semi_16: css`
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 140%;
    `,

    //Body
    pre_body_med_16: css`
      font-family: 'Pretendard';
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 140%;
    `,

    pre_body_semi_14: css`
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 1.4rem;
    `,

    pre_body_med_14: css`
      font-family: 'Pretendard';
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 140%;
    `,

    pre_body_reg_14: css`
      font-family: 'Pretendard';
      font-weight: 400;
      font-size: 1.4rem;
    `,

    pre_body_semi_12: css`
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 140%;
    `,

    pre_body_reg_12: css`
      font-family: 'Pretendard';
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 140%;
    `,

    //Caption
    pre_cap_semi_12: css`
      font-family: 'Pretendard';
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 140%;
    `,

    pre_cap_reg_12: css`
      font-family: 'Pretendard';
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 140%;
    `,
  },
};
