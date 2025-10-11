document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('input[name$="icon"]').forEach(function (input) {
        const previewSpan = document.createElement('span');
        previewSpan.style.marginLeft = '10px';
        previewSpan.style.fontSize = '22px';
        input.parentNode.appendChild(previewSpan);

        const updatePreview = () => {
            const val = input.value.trim();
            previewSpan.innerHTML = val ? `<i class="${val}"></i>` : '';
        };

        updatePreview();
        input.addEventListener('input', updatePreview);
    });
});
        