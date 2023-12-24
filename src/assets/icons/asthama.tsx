export default function Asthama(disabled?: boolean) {
  return (
    <svg
      width="12"
      height="24"
      viewBox="0 0 12 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.45054 23.4624V20.496C2.45054 20.3025 2.644 20.1735 2.82671 20.2488L5.88986 21.5815C8.17915 22.3338 9.32917 21.2053 9.32917 20.0768V18.1959H6.65295C6.65295 16.315 7.03988 15.1865 9.32917 15.1865V13.3056H10.4792C11.2853 13.3164 11.6292 13.3056 11.2423 12.5533L9.32917 9.54388C10.0923 5.43819 6.65295 0.18248 0.537415 0.558656"
        stroke={disabled ? "#ADADAD" : "#49509D"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
