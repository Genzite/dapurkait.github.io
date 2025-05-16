function toggleHamburger(){
    const Btn = document.getElementById('hamburger');
    const Sidebar = document.getElementById('sidebar');

    Btn.classList.toggle('open');
    Sidebar.classList.toggle('-translate-x-full');
    Sidebar.classList.toggle('translate-x-0');
}

window.onload = () => {
    // Inisialisasi AOS setelah semua elemen dimuat
    AOS.init({
      duration: 2000,  // durasi animasi   
    });
  };

function openPreview(src) {
    document.getElementById('previewImage').src = src;
    document.getElementById('imagePreview').classList.remove('hidden');
  }

function closePreview() {
    document.getElementById('imagePreview').classList.add('hidden');
  }