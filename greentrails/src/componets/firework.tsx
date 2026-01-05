import React from "react";

const fireworkSVG = encodeURIComponent(`
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" viewBox="0 0 120 120" enable-background="new 0 0 120 120" xml:space="preserve">
<!-- Firework burst with sparkles -->
<g>
  <!-- Center burst -->
  <circle cx="60" cy="60" r="8" fill="#FFD700" opacity="0.9"/>
  
  <!-- Main rays -->
  <path d="M60 20 L60 40" stroke="#FF4444" stroke-width="3" stroke-linecap="round"/>
  <path d="M60 80 L60 100" stroke="#FF4444" stroke-width="3" stroke-linecap="round"/>
  <path d="M20 60 L40 60" stroke="#4444FF" stroke-width="3" stroke-linecap="round"/>
  <path d="M80 60 L100 60" stroke="#4444FF" stroke-width="3" stroke-linecap="round"/>
  
  <!-- Diagonal rays -->
  <path d="M35 35 L47 47" stroke="#44FF44" stroke-width="3" stroke-linecap="round"/>
  <path d="M73 73 L85 85" stroke="#44FF44" stroke-width="3" stroke-linecap="round"/>
  <path d="M85 35 L73 47" stroke="#FF44FF" stroke-width="3" stroke-linecap="round"/>
  <path d="M47 73 L35 85" stroke="#FF44FF" stroke-width="3" stroke-linecap="round"/>
  
  <!-- Secondary sparkles -->
  <path d="M60 15 L60 25" stroke="#FFAA00" stroke-width="2" stroke-linecap="round"/>
  <path d="M60 95 L60 105" stroke="#FFAA00" stroke-width="2" stroke-linecap="round"/>
  <path d="M15 60 L25 60" stroke="#AA00FF" stroke-width="2" stroke-linecap="round"/>
  <path d="M95 60 L105 60" stroke="#AA00FF" stroke-width="2" stroke-linecap="round"/>
  
  <!-- Small sparkle dots -->
  <circle cx="30" cy="30" r="3" fill="#FFD700"/>
  <circle cx="90" cy="30" r="3" fill="#FF44FF"/>
  <circle cx="30" cy="90" r="3" fill="#44FF44"/>
  <circle cx="90" cy="90" r="3" fill="#4444FF"/>
  
  <!-- Outer glow circles -->
  <circle cx="60" cy="60" r="12" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.5"/>
  <circle cx="60" cy="60" r="16" fill="none" stroke="#FFD700" stroke-width="0.5" opacity="0.3"/>
</g>
</svg>
`);

export default fireworkSVG;
