import React from 'react';

export default function Svg({ setColor, isFavorites }) {
  return (
    <div>
      {isFavorites ? (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="350px"
          height="350px"
          viewBox="0 0 900.000000 900.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
            fill={setColor}
            stroke="none"
          >
            <path
              d="M4835 8480 c-100 -20 -294 -29 -415 -19 -121 9 -444 12 -1045 10
-159 -1 -515 -1 -790 0 -409 1 -503 -2 -512 -13 -5 -7 -16 -74 -23 -149 -12
-132 -12 -138 10 -204 22 -66 23 -78 17 -285 -13 -429 21 -852 90 -1108 36
-136 36 -138 36 -332 -1 -205 -16 -354 -59 -587 -26 -145 -49 -221 -119 -391
-89 -219 -131 -436 -122 -626 9 -183 51 -315 145 -453 75 -110 141 -175 425
-411 92 -77 169 -125 231 -144 34 -10 84 -34 111 -52 120 -80 375 -335 545
-546 152 -188 298 -401 770 -1126 251 -386 498 -709 700 -917 143 -148 215
-203 355 -272 203 -100 369 -135 670 -142 184 -4 222 -2 308 15 142 30 180 52
253 147 57 75 65 82 129 105 58 21 73 32 94 66 14 23 47 68 74 100 69 86 212
337 240 424 71 220 81 446 29 695 -67 323 -158 527 -430 960 -116 185 -235
357 -502 725 -275 380 -668 944 -770 1105 -45 72 -108 184 -140 250 -122 250
-138 365 -160 1140 -12 427 -24 646 -51 920 -30 303 -35 565 -15 687 19 118
20 192 1 320 -13 97 -20 119 -33 117 -4 -1 -25 -5 -47 -9z"
            />
          </g>
        </svg>
      ) : (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="900px"
          height="900px"
          viewBox="0 0 900.000000 900.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
            fill={setColor}
            stroke="none"
          >
            <path
              d="M4835 8480 c-100 -20 -294 -29 -415 -19 -121 9 -444 12 -1045 10
-159 -1 -515 -1 -790 0 -409 1 -503 -2 -512 -13 -5 -7 -16 -74 -23 -149 -12
-132 -12 -138 10 -204 22 -66 23 -78 17 -285 -13 -429 21 -852 90 -1108 36
-136 36 -138 36 -332 -1 -205 -16 -354 -59 -587 -26 -145 -49 -221 -119 -391
-89 -219 -131 -436 -122 -626 9 -183 51 -315 145 -453 75 -110 141 -175 425
-411 92 -77 169 -125 231 -144 34 -10 84 -34 111 -52 120 -80 375 -335 545
-546 152 -188 298 -401 770 -1126 251 -386 498 -709 700 -917 143 -148 215
-203 355 -272 203 -100 369 -135 670 -142 184 -4 222 -2 308 15 142 30 180 52
253 147 57 75 65 82 129 105 58 21 73 32 94 66 14 23 47 68 74 100 69 86 212
337 240 424 71 220 81 446 29 695 -67 323 -158 527 -430 960 -116 185 -235
357 -502 725 -275 380 -668 944 -770 1105 -45 72 -108 184 -140 250 -122 250
-138 365 -160 1140 -12 427 -24 646 -51 920 -30 303 -35 565 -15 687 19 118
20 192 1 320 -13 97 -20 119 -33 117 -4 -1 -25 -5 -47 -9z"
            />
          </g>
        </svg>
      )}
    </div>
  );
}
