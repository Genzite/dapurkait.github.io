function toggleburger(){
    const Btn = document.getElementById('hamburger');
    const Sidebar = document.getElementById('sidebar');

    Btn.classList.toggle('open');
    Sidebar.classList.toggle('-translate-x-full');
    Sidebar.classList.toggle('translate-x-0');
}