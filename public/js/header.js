let lastScrollTop = 0;
const header = document.querySelector('.header');
const scrollThreshold = 5; // Ngưỡng cuộn để phát hiện

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Nếu cuộn xuống và vượt quá vị trí của lần cuộn trước đó, ẩn header
  if (scrollTop > lastScrollTop + scrollThreshold) {
    header.classList.add('hidden');
  }
  // Nếu cuộn lên 1 chút, hiện lại header
  else if (scrollTop < lastScrollTop - scrollThreshold) {
    header.classList.remove('hidden');
  }

  // Cập nhật vị trí cuộn trước đó
  lastScrollTop = scrollTop;
});
