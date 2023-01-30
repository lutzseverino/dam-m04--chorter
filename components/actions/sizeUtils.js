import { css } from "styled-components";

const getSize = (size) =>
  ({
    small: css`
      font-size: 0.75rem;
      padding: 4px 8px;
    `,
    medium: css`
      font-size: 1rem;
      padding: 8px 16px;
    `,
    large: css`
      font-size: 1.25rem;
      padding: 12px 24px;
    `,
  }[size]);

export default getSize;
