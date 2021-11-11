import { oneOf } from "prop-types";
import * as React from "react";
import styled from "styled-components";

const paths = {
  more: (
    <path d="M14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L15.7071 16.7071C15.3166 17.0976 14.6834 17.0976 14.2929 16.7071C13.9024 16.3166 13.9024 15.6834 14.2929 15.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L14.2929 8.70711C13.9024 8.31658 13.9024 7.68342 14.2929 7.29289Z" />
  ),
  menu: <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />,
  search: (
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  ),
  stackOverflow: (
    <path d="M4.92,14.8888312 L4.92,20.6737662 L18.4098701,20.6737662 L18.4098701,14.8888312 L20.3298701,14.8888312 L20.3298701,22.5937662 L3,22.5937662 L3,14.8888312 L4.92,14.8888312 Z M16.4649351,16.8088312 L16.4649351,18.7288312 L6.84,18.7288312 L6.84,16.8088312 L16.4649351,16.8088312 Z M7.43844156,12.4451948 L16.8638961,14.4150649 L16.4649351,16.3101299 L7.03948052,14.3402597 L7.43844156,12.4451948 Z M9.08415584,8.08155844 L17.8114286,12.1709091 L17.0135065,13.9163636 L8.28623377,9.85194805 L9.08415584,8.08155844 Z M11.9267532,4.09194805 L19.3324675,10.2509091 L18.1106494,11.7220779 L10.7049351,5.56311688 L11.9267532,4.09194805 Z M15.4924675,1 L21.2275325,8.72987013 L19.6815584,9.87688312 L13.9464935,2.14701299 L15.4924675,1 Z" />
  ),
  twitter: (
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
  ),
  slack: (
    <path d="M9.36156352,12.5374593 C10.5179153,12.5374593 11.4625407,13.4820847 11.4625407,14.6384365 L11.4625407,19.8990228 C11.4625407,21.0553746 10.5179153,22 9.36156352,22 C8.20521173,22 7.26058632,21.0553746 7.26058632,19.8990228 L7.26058632,14.6384365 L7.26058632,14.6384365 C7.26058632,13.4820847 8.20521173,12.5374593 9.36156352,12.5374593 Z M14.6384365,17.7980456 C15.7947883,17.7980456 16.7394137,18.742671 16.7394137,19.8990228 C16.7394137,21.0553746 15.7947883,22 14.6384365,22 C13.4820847,22 12.5374593,21.0553746 12.5374593,19.8990228 L12.5374593,17.7980456 L14.6384365,17.7980456 Z M19.8990228,12.5374593 C21.0553746,12.5374593 22,13.4820847 22,14.6384365 C22,15.7947883 21.0553746,16.7394137 19.8990228,16.7394137 L14.6384365,16.7394137 C13.4820847,16.7394137 12.5374593,15.7947883 12.5374593,14.6384365 C12.5374593,13.4820847 13.4820847,12.5374593 14.6384365,12.5374593 L19.8990228,12.5374593 Z M6.2019544,12.5374593 L6.2019544,14.6384365 C6.2019544,15.7947883 5.25732899,16.7394137 4.1009772,16.7394137 C2.94462541,16.7394137 2,15.7947883 2,14.6384365 C2,13.4820847 2.94462541,12.5374593 4.1009772,12.5374593 L6.2019544,12.5374593 Z M19.8990228,7.26058632 C21.0553746,7.26058632 22,8.20521173 22,9.36156352 C22,10.5179153 21.0553746,11.4625407 19.8990228,11.4625407 L17.7980456,11.4625407 L17.7980456,9.36156352 C17.7980456,8.20521173 18.742671,7.26058632 19.8990228,7.26058632 Z M14.6384365,2 C15.7947883,2 16.7394137,2.94462541 16.7394137,4.1009772 L16.7394137,9.36156352 C16.7394137,10.5179153 15.7947883,11.4625407 14.6384365,11.4625407 C13.4820847,11.4625407 12.5374593,10.5179153 12.5374593,9.36156352 L12.5374593,4.1009772 C12.5374593,2.94462541 13.4820847,2 14.6384365,2 Z M9.36156352,7.26058632 C10.5179153,7.26058632 11.4625407,8.20521173 11.4625407,9.36156352 C11.4625407,10.5179153 10.5179153,11.4625407 9.36156352,11.4625407 L4.1009772,11.4625407 C2.94462541,11.4625407 2,10.5179153 2,9.36156352 C2,8.20521173 2.94462541,7.26058632 4.1009772,7.26058632 L9.36156352,7.26058632 L9.36156352,7.26058632 Z M9.36156352,2 C10.5179153,2 11.4625407,2.94462541 11.4625407,4.1009772 L11.4625407,6.2019544 L9.36156352,6.2019544 C8.20521173,6.2019544 7.26058632,5.25732899 7.26058632,4.1009772 C7.26058632,2.94462541 8.20521173,2 9.36156352,2 Z" />
  ),
  externalLink: (
    <path d="M 3 3 L 3 21 L 21 21 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 3 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z" />
  ),
};

const IconSvg = styled.svg`
  font-size: inherit;
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  flex-shrink: 0;
  user-select: none;
`;

const Icon = (props) => {
  const { icon, className } = props;

  return (
    <IconSvg
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      {paths[icon]}
    </IconSvg>
  );
};

Icon.propTypes = {
  icon: oneOf(Object.keys(paths)).isRequired,
};

export default Icon;
