const fs = require('fs');

const advocate = {
    name: "YASH PALAN",
    title: "ADVOCATE HIGH COURT",
    creds: "BLS LLM | PGDM ADR"
};

const colors = {
    navy: "#001B44",
    gold: "#D4AF37",
    lightGold: "#F1E5AC",
    white: "#FFFFFF"
};

const ladyJusticeLogo = `
<svg width="800" height="900" viewBox="0 0 800 900" xmlns="http://www.w3.org/2000/svg">
    <!-- Background for preview -->
    <rect width="800" height="900" fill="${colors.white}"/>

    <!-- Outer Circular Seal (The Surprise Element) -->
    <circle cx="400" cy="300" r="180" fill="none" stroke="${colors.gold}" stroke-width="2" stroke-dasharray="10,5" opacity="0.5"/>
    <circle cx="400" cy="300" r="195" fill="none" stroke="${colors.navy}" stroke-width="1"/>

    <!-- LADY JUSTICE ILLUSTRATION (Line Art Style) -->
    <g transform="translate(340, 160) scale(1.2)">
        <!-- The Head & Blindfold -->
        <path d="M50 20 Q50 10 60 10 Q70 10 70 20 L70 45 Q60 55 50 45 Z" fill="${colors.navy}"/>
        <rect x="48" y="25" width="24" height="6" fill="${colors.gold}"/> <!-- Blindfold -->
        
        <!-- The Torso / Gown -->
        <path d="M50 50 L30 150 L90 150 L70 50 Z" fill="${colors.navy}"/>
        
        <!-- The Scales (Left) -->
        <line x1="35" y1="70" x2="-20" y2="90" stroke="${colors.navy}" stroke-width="3"/>
        <path d="M-35 90 Q-20 130 -5 90 Z" fill="none" stroke="${colors.gold}" stroke-width="2"/>
        
        <!-- The Sword (Right) -->
        <line x1="85" y1="70" x2="130" y2="100" stroke="${colors.navy}" stroke-width="3"/>
        <path d="M125 95 L150 120 M120 100 L115 105" stroke="${colors.navy}" stroke-width="4" stroke-linecap="round"/>
    </g>

    <!-- TEXT SECTION -->
    <g transform="translate(400, 580)">
        <!-- Name: Modern Serif for Authority -->
        <text text-anchor="middle" font-family="Georgia, serif" font-weight="bold" font-size="52" letter-spacing="4" fill="${colors.navy}">
            ${advocate.name}
        </text>
        
        <!-- Divider Line -->
        <line x1="-150" y1="30" x2="150" y2="30" stroke="${colors.gold}" stroke-width="3"/>
        
        <!-- Title: Sans-Serif for Modernity -->
        <text y="75" text-anchor="middle" font-family="Arial, sans-serif" font-weight="600" font-size="22" letter-spacing="8" fill="${colors.navy}">
            ${advocate.title}
        </text>
        
        <!-- Credentials: Small & Elegant -->
        <text y="115" text-anchor="middle" font-family="Verdana, sans-serif" font-size="16" letter-spacing="2" fill="#666">
            ${advocate.creds}
        </text>
    </g>
    
    <!-- Professional Accreditation Mark -->
    <path d="M380 750 L400 770 L420 750" fill="none" stroke="${colors.gold}" stroke-width="2"/>
</svg>
`;

fs.writeFileSync('Yash_Palan_LadyJustice.svg', ladyJusticeLogo);
console.log("Success! Open 'Yash_Palan_LadyJustice.svg' in your browser to see the surprise.");
