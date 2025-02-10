document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('leadForm');
    
    leadForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const email = document.getElementById('email').value;
        
        const message = `Olá, me chamo ${nome}, meu WhatsApp é ${whatsapp} e meu e-mail é ${email}, quero ser minha melhor versão!`;
        
        // Replace with your WhatsApp number
        const whatsappNumber = '+5534988077628';
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappLink, '_blank');
    });

    
});
