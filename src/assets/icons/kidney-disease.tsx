import React from "react";

export default function KidneyDisease(disabled?: boolean) {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2726_53404)">
        <path
          d="M21.6646 9.89957C20.9449 9.56175 19.153 6.93262 19.153 5.0232C19.153 2.62907 21.0477 0.749023 24.1909 0.749023C27.3341 0.749023 30.7417 4.14192 30.7417 10.0611C30.7417 15.9804 27.0845 19.1236 24.1909 19.1236C21.2974 19.1236 17.9045 14.82 21.6793 9.89957H21.6646ZM21.6646 9.89957H19.9755C18.6242 9.89957 17.5226 11.0012 17.5226 12.3525V23.2655M25.0722 5.5079C26.5851 6.93262 28.7001 10.6927 25.0722 14.3206"
          stroke={disabled ? "#ADADAD" : "#49509D"}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.76742 10.208C10.4871 9.8702 12.3084 6.93262 12.3084 5.0232C12.3084 2.62907 10.4137 0.749023 7.27048 0.749023C4.12728 0.749023 0.734375 4.12724 0.734375 10.0465C0.734375 15.9657 4.39166 19.1089 7.28517 19.1089C10.1787 19.1089 13.5569 15.1138 9.78211 10.1933L9.76742 10.208ZM9.76742 10.208L11.295 9.94364C11.4272 9.91426 11.5593 9.91426 11.6915 9.91426C12.94 9.91426 13.9535 10.9277 13.9535 12.1762V23.2949M6.4039 5.52259C4.89105 6.94731 2.77599 10.7074 6.4039 14.3353"
          stroke={disabled ? "#ADADAD" : "#49509D"}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2726_53404">
          <rect width="31.4761" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
