import * as React from 'react';

function SvgConfusedEmoji(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.75 24c0-8.13-6.62-14.75-14.75-14.75-8.13 0-14.75 6.61-14.75 14.75S15.87 38.75 24 38.75c8.13 0 14.75-6.62 14.75-14.75zM8 24c0-8.84 7.16-16 16-16s16 7.17 16 16c0 8.84-7.16 16-16 16S8 32.84 8 24zm21.55-3.285h3.62v-1.25h-3.62v1.25zm1.81 3.425a1.18 1.18 0 100-2.36 1.18 1.18 0 000 2.36zm-13.31-1.18a1.18 1.18 0 11-2.36 0 1.18 1.18 0 012.36 0zm-3.42-3.85a2.489 2.489 0 012.49-2.49c.746 0 1.425.324 1.88.854l-.76.651a1.467 1.467 0 00-1.12-.505c-.824 0-1.49.666-1.49 1.49h-1zm7.71 8.61c0-.196.125-.444.475-.668.344-.22.85-.372 1.435-.372.585 0 1.09.152 1.435.372.35.224.475.472.475.668 0 .196-.125.444-.475.667-.344.22-.85.373-1.435.373-.585 0-1.09-.153-1.435-.373-.35-.223-.475-.471-.475-.667zm1.91-2.04c-.746 0-1.445.192-1.973.53-.523.333-.937.855-.937 1.51 0 .654.414 1.176.937 1.51.528.337 1.227.53 1.973.53s1.445-.193 1.973-.53c.523-.334.937-.856.937-1.51 0-.655-.414-1.177-.937-1.51-.528-.338-1.227-.53-1.973-.53z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgConfusedEmoji;
