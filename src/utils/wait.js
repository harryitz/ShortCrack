export async function wait(duration) {
    showToast(duration);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

function showToast(timeout) {
    const existing = document.getElementById("shortcrack-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.id = "shortcrack-toast";
    toast.innerHTML = `
    <div class="sc-toast-message">Please wait a moment for ShortCrack to lead to the landing page...</div>
    <div class="sc-toast-footer">made by harryitz with ❤️</div>
  `;
    document.body.appendChild(toast);

    const style = document.createElement("style");
    const delaySeconds = (timeout - 300) / 1000;
    style.textContent = `
    #shortcrack-toast {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #2d3748;
      color: #f7fafc;
      padding: 12px 16px;
      border-radius: 12px;
      font-family: 'Segoe UI', sans-serif;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
      z-index: 9999;
      animation: fadein 0.3s ease-out, fadeout 0.3s ease-in forwards;
      animation-delay: 0s, ${delaySeconds}s;
      max-width: 300px;
    }

    .sc-toast-message {
      font-size: 14px;
      margin-bottom: 6px;
    }

    .sc-toast-footer {
      font-size: 11px;
      color: #a0aec0;
      text-align: right;
    }

    @keyframes fadein {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeout {
      to { opacity: 0; transform: translateY(10px); }
    }
  `;
    document.head.appendChild(style);

    setTimeout(() => {
        toast.remove();
        style.remove();
    }, timeout);
}
