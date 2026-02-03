// Copy-to-clipboard for each code block
// This file replaces the inline <script> in the HTML to follow best practices

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btn-copy").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-target");
      const codeEl = document.getElementById(id);
      if (!codeEl) return;

      try {
        await navigator.clipboard.writeText(codeEl.textContent);
        const original = btn.textContent;
        btn.textContent = "Copiado";
        setTimeout(() => (btn.textContent = original), 1200);
      } catch (e) {
        console.warn("No se pudo copiar", e);
      }
    });
  });
});
