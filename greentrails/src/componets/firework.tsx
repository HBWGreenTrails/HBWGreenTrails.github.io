import React from "react";

const fireworkSVG = encodeURIComponent(`
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" viewBox="0 0 400 400" enable-background="new 0 0 400 400" xml:space="preserve">
<!-- St. Patrick's Day Shamrock -->
<g id="shamrock">
  <defs>
    <radialGradient id="leafGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#66BB6A;stop-opacity:1" />
      <stop offset="60%" style="stop-color:#2E7D32;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1B5E20;stop-opacity:0.9" />
    </radialGradient>
    <radialGradient id="goldenLeaf" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
      <stop offset="60%" style="stop-color:#FFA500;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF8C00;stop-opacity:0.9" />
    </radialGradient>
  </defs>

  <!-- Outer glow -->
  <circle cx="200" cy="195" r="110" fill="#A5D6A7" opacity="0.15"/>

  <!-- Top leaf -->
  <ellipse cx="200" cy="130" rx="52" ry="62" fill="url(#leafGrad)" stroke="#1B5E20" stroke-width="2" opacity="0.95"/>
  <line x1="200" y1="192" x2="200" y2="130" stroke="#81C784" stroke-width="3" stroke-linecap="round" opacity="0.6"/>

  <!-- Left leaf -->
  <ellipse cx="148" cy="188" rx="52" ry="62" fill="url(#leafGrad)" stroke="#1B5E20" stroke-width="2" opacity="0.95" transform="rotate(-60 148 188)"/>
  <line x1="200" y1="192" x2="148" y2="188" stroke="#81C784" stroke-width="3" stroke-linecap="round" opacity="0.6"/>

  <!-- Right leaf -->
  <ellipse cx="252" cy="188" rx="52" ry="62" fill="url(#leafGrad)" stroke="#1B5E20" stroke-width="2" opacity="0.95" transform="rotate(60 252 188)"/>
  <line x1="200" y1="192" x2="252" y2="188" stroke="#81C784" stroke-width="3" stroke-linecap="round" opacity="0.6"/>

  <!-- Center knot -->
  <circle cx="200" cy="192" r="18" fill="#FFD700" opacity="0.95" stroke="#DAA520" stroke-width="2"/>

  <!-- Stem -->
  <path d="M 200 210 Q 195 255 185 280 Q 195 270 210 285 Q 205 265 200 210" fill="#2E7D32" opacity="0.95"/>

  <!-- Sparkle accents -->
  <g opacity="0.85">
    <circle cx="200" cy="68" r="7" fill="#FFD700"/>
    <path d="M 200 60 L 200 76 M 192 68 L 208 68" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>

    <circle cx="305" cy="155" r="6" fill="#66BB6A"/>
    <path d="M 305 149 L 305 161 M 299 155 L 311 155" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>

    <circle cx="95" cy="155" r="6" fill="#66BB6A"/>
    <path d="M 95 149 L 95 161 M 89 155 L 101 155" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>

    <circle cx="185" cy="300" r="5" fill="#FFD700"/>
    <path d="M 185 295 L 185 305 M 180 300 L 190 300" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
  </g>

  <!-- Twinkle -->
  <g opacity="0.7">
    <path d="M 200 178 L 204 192 L 200 206 L 196 192 Z" fill="#FFFFFF"/>
    <path d="M 186 192 L 200 196 L 214 192 L 200 188 Z" fill="#FFFFFF"/>
  </g>
</g>
</svg>
`);

export default fireworkSVG;
