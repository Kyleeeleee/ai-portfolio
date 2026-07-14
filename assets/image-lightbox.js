(() => {
  const previews = [...document.querySelectorAll('.interface-preview img')];
  if (!previews.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'image-lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', '界面截图放大预览');

  const image = document.createElement('img');
  const close = document.createElement('button');
  close.className = 'image-lightbox-close';
  close.type = 'button';
  close.setAttribute('aria-label', '关闭预览');
  close.textContent = '×';
  overlay.append(image, close);
  document.body.appendChild(overlay);

  let previousFocus = null;
  function openPreview(source) {
    previousFocus = document.activeElement;
    image.src = source.currentSrc || source.src;
    image.alt = source.alt;
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    close.focus();
  }
  function closePreview() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    image.removeAttribute('src');
    if (previousFocus instanceof HTMLElement) previousFocus.focus();
  }

  previews.forEach(preview => {
    preview.tabIndex = 0;
    preview.setAttribute('role', 'button');
    preview.setAttribute('aria-label', `${preview.alt}，点击放大`);
    preview.addEventListener('click', () => openPreview(preview));
    preview.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openPreview(preview);
      }
    });
  });
  close.addEventListener('click', closePreview);
  overlay.addEventListener('click', event => {
    if (event.target === overlay) closePreview();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) closePreview();
  });
})();
