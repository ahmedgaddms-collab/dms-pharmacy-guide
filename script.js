document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("bg-icons");
    if (!container) return;

    const images = [
        "fingerprint.png",
        "scan.png",
        "upgrade.png",
        "person.png",
        "vaccine-approved.png"
    ];

    const cols = 10;
    const rows = 8;
    const totalCells = cols * rows;
    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    const cells = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            cells.push({ c, r });
        }
    }

    for (let i = cells.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cells[i], cells[j]] = [cells[j], cells[i]];
    }

    const fragment = document.createDocumentFragment();
    const count = Math.min(80, totalCells);

    for (let i = 0; i < count; i++) {
        const { c, r } = cells[i];
        const img = document.createElement("img");
        img.src = images[Math.floor(Math.random() * images.length)];
        img.alt = "";
        img.setAttribute("aria-hidden", "true");
        img.className = "random-icon";

        const posX = c * cellWidth + Math.random() * (cellWidth * 0.45);
        const posY = r * cellHeight + Math.random() * (cellHeight * 0.45);
        const size = Math.floor(Math.random() * 25 + 35);

        img.style.left = `${posX}%`;
        img.style.top = `${posY}%`;
        img.style.width = `${size}px`;

        fragment.appendChild(img);
    }

    container.appendChild(fragment);
});
