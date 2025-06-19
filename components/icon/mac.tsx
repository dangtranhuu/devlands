import { SVGProps } from 'react';

// Generic SVG wrapper type
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

export const MacIcons = {
  noForcus: ({ size = 16, color = 'white', ...props }: IconProps) => (
    <svg enable-background="new 0 0 85.4 85.4" viewBox="0 0 85.4 85.4" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m42.7 85.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7-42.7 19.1-42.7 42.7 19.1 42.7 42.7 42.7z" fill="#d1d0d2" /><path d="m42.7 81.7c21.6 0 39.1-17.5 39.1-39.1s-17.5-39.1-39.1-39.1-39.1 17.5-39.1 39.1 17.5 39.1 39.1 39.1z" fill="#c7c7c7" /></g></svg>
  ),
  closeNormal: ({ size = 16, color = 'white', ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.4 85.4">
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          fill="#e24b41"
          d="M42.7 85.4c23.6 0 42.7-19.1 42.7-42.7S66.3 0 42.7 0 0 19.1 0 42.7s19.1 42.7 42.7 42.7"
        ></path>
        <path
          fill="#ed6a5f"
          d="M42.7 81.8c21.6 0 39.1-17.5 39.1-39.1S64.3 3.6 42.7 3.6 3.6 21.1 3.6 42.7s17.5 39.1 39.1 39.1"
        ></path>
      </g>
    </svg>
  ),

  closeHover: ({ size = 16, color = 'white', ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.4 85.4">
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          fill="#e24b41"
          d="M42.7 85.4c23.6 0 42.7-19.1 42.7-42.7S66.3 0 42.7 0 0 19.1 0 42.7s19.1 42.7 42.7 42.7"
        ></path>
        <path
          fill="#ed6a5f"
          d="M42.7 81.8c21.6 0 39.1-17.5 39.1-39.1S64.3 3.6 42.7 3.6 3.6 21.1 3.6 42.7s17.5 39.1 39.1 39.1"
        ></path>
        <g fill="#460804">
          <path d="m22.5 57.8 35.3-35.3c1.4-1.4 3.6-1.4 5 0l.1.1c1.4 1.4 1.4 3.6 0 5L27.6 62.9c-1.4 1.4-3.6 1.4-5 0l-.1-.1c-1.3-1.4-1.3-3.6 0-5"></path>
          <path d="m27.6 22.5 35.3 35.3c1.4 1.4 1.4 3.6 0 5l-.1.1c-1.4 1.4-3.6 1.4-5 0L22.5 27.6c-1.4-1.4-1.4-3.6 0-5l.1-.1c1.4-1.3 3.6-1.3 5 0"></path>
        </g>
      </g>
    </svg>
  ),

  minimizeNormal: ({ size = 16, color = 'white', ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.4 85.4">
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          fill="#e1a73e"
          d="M42.7 85.4c23.6 0 42.7-19.1 42.7-42.7S66.3 0 42.7 0 0 19.1 0 42.7s19.1 42.7 42.7 42.7"
        ></path>
        <path
          fill="#f6be50"
          d="M42.7 81.8c21.6 0 39.1-17.5 39.1-39.1S64.3 3.6 42.7 3.6 3.6 21.1 3.6 42.7s17.5 39.1 39.1 39.1"
        ></path>
      </g>
    </svg>
  ),

  minimizeHover: ({ size = 16, color = 'lime', ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.4 85.4">
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          fill="#e1a73e"
          d="M42.7 85.4c23.6 0 42.7-19.1 42.7-42.7S66.3 0 42.7 0 0 19.1 0 42.7s19.1 42.7 42.7 42.7"
        ></path>
        <path
          fill="#f6be50"
          d="M42.7 81.8c21.6 0 39.1-17.5 39.1-39.1S64.3 3.6 42.7 3.6 3.6 21.1 3.6 42.7s17.5 39.1 39.1 39.1"
        ></path>
        <path
          fill="#90591d"
          d="M17.8 39.1h49.9c1.9 0 3.5 1.6 3.5 3.5v.1c0 1.9-1.6 3.5-3.5 3.5H17.8c-1.9 0-3.5-1.6-3.5-3.5v-.1c0-1.9 1.5-3.5 3.5-3.5"
        ></path>
      </g>
    </svg>
  ),

  maximizeNormal: ({ size = 16, color = 'white', ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.4 85.4">
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          fill="#2dac2f"
          d="M42.7 85.4c23.6 0 42.7-19.1 42.7-42.7S66.3 0 42.7 0 0 19.1 0 42.7s19.1 42.7 42.7 42.7"
        ></path>
        <path
          fill="#61c555"
          d="M42.7 81.8c21.6 0 39.1-17.5 39.1-39.1S64.3 3.6 42.7 3.6 3.6 21.1 3.6 42.7s17.5 39.1 39.1 39.1"
        ></path>
      </g>
    </svg>
  ),

  maximizeHover: ({ size = 16, color = 'lime', ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.4 85.4">
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          fill="#2dac2f"
          d="M42.7 85.4c23.6 0 42.7-19.1 42.7-42.7S66.3 0 42.7 0 0 19.1 0 42.7s19.1 42.7 42.7 42.7"
        ></path>
        <path
          fill="#61c555"
          d="M42.7 81.8c21.6 0 39.1-17.5 39.1-39.1S64.3 3.6 42.7 3.6 3.6 21.1 3.6 42.7c0 21.5 17.5 39.1 39.1 39.1"
        ></path>
        <path
          fill="#2a6218"
          d="M31.2 20.8h26.7c3.6 0 6.5 2.9 6.5 6.5V54zm23.2 43.7H27.6c-3.6 0-6.5-2.9-6.5-6.5V31.2z"
        ></path>
      </g>
    </svg>
  ),

  controlCenter: ({ size = 16, color = 'white', ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 29 29"
    >
      <path d="M7.5 13h14a5.5 5.5 0 0 0 0-11h-14a5.5 5.5 0 0 0 0 11m0-9h14a3.5 3.5 0 0 1 0 7h-14a3.5 3.5 0 0 1 0-7m0 6A2.5 2.5 0 1 0 5 7.5 2.5 2.5 0 0 0 7.5 10m14 6h-14a5.5 5.5 0 0 0 0 11h14a5.5 5.5 0 0 0 0-11m1.434 8a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5"></path>
    </svg>
  ),
};