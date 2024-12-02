function calculerMontant() {
    const montant = document.getElementById("montant").value;
    const typeCoupon = document.getElementById("type-coupon").value;

    let frais = 0;
    let montantFinal = montant;

    if (montant > 30) {
        frais = 0;
    } else {
        frais = montant * 0.1; // 10% de frais si le montant est inférieur à 30€
    }

    montantFinal = montant - frais;

    // Afficher le résultat
    document.getElementById("montant-texte").innerText = montant;
    document.getElementById("frais").innerText = frais.toFixed(2);
    document.getElementById("montant-final").innerText = montantFinal.toFixed(2);
}

function toggleContactBubble() {
    const bubble = document.getElementById("contact-bubble");
    bubble.style.display = bubble.style.display === 'none' || bubble.style.display === '' ? 'block' : 'none';
}
