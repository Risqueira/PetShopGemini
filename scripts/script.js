document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. ALTERNADOR DE TEMA (LIGHT / DARK MODE)
    // ==========================================
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        
        htmlElement.setAttribute("data-theme", newTheme);
    });

    // ==========================================
    // 2. SEGURANÇA UX: BLOQUEAR DATAS PASSADAS
    // ==========================================
    const dateInput = document.getElementById("date");
    const hoje = new Date();
    
    // Formata a data de hoje para o padrão YYYY-MM-DD exigido pelo input tipo date
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');
    
    const dataMinima = `${ano}-${mes}-${dia}`;
    dateInput.setAttribute("min", dataMinima);

    // ==========================================
    // 3. MÁSCARA DE TELEFONE EM TEMPO REAL
    // ==========================================
    const phoneInput = document.getElementById("phone");

    phoneInput.addEventListener("input", (event) => {
        let input = event.target.value;
        
        // Remove tudo que não for número digitado
        input = input.replace(/\D/g, "");
        
        // Aplica a estilização dinâmica da máscara (XX) XXXXX-XXXX
        if (input.length > 0) {
            input = `(${input.substring(0, 2)}${input.length > 2 ? ') ' : ''}${input.substring(2, 7)}${input.length > 7 ? '-' : ''}${input.substring(7, 11)}`;
        }
        
        event.target.value = input;
    });

    // ==========================================
    // 4. ENVIO DO FORMULÁRIO (SIMULAÇÃO)
    // ==========================================
    const bookingForm = document.getElementById("booking-form");
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("🎉 Solicitação de agendamento enviada com sucesso! Entraremos em contato em breve.");
        bookingForm.reset();
    });
});