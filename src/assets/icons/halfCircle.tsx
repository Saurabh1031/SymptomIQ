export default function HalfCircle({ fillColor, strokeColor }) {
    return (
        <svg
            width="56"
            height="39"
            viewBox="0 0 56 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="Group 24632">
                <g id="Group 19659">
                    <path
                        id="Ellipse 2724"
                        opacity="0.15"
                        d="M28 11C12.536 11 -2.19187e-06 23.536 -4.89567e-06 39L56 39C56 23.536 43.464 11 28 11Z"
                        fill={fillColor}
                    />
                    <path
                        id="Ellipse 2725"
                        opacity="0.2"
                        d="M28 17C15.8497 17 6 26.8497 6 39L50 39C50 26.8497 40.1503 17 28 17Z"
                        fill={fillColor}
                    />
                </g>
                <g id="Group 22628">
                    <circle
                        id="Ellipse 3251"
                        cx="28"
                        cy="12"
                        r="11.25"
                        stroke={strokeColor}
                        stroke-width="1.5"
                    />
                    <g id="Group 21568">
                        <line
                            id="Line 930"
                            x1="27.6289"
                            y1="6.14355"
                            x2="27.6289"
                            y2="13.7436"
                            stroke={strokeColor}
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                        <circle
                            id="Ellipse 3628"
                            cx="27.6289"
                            cy="17.1162"
                            r="1"
                            fill={fillColor}
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
}