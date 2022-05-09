const mobileMenu = document.createElement('div');
function hideMobileMenu() {
  mobileMenu.style.display = 'none';
}
function showMobileMenu() {
  mobileMenu.style.display = 'block';
}
mobileMenu.className = 'mobile-menu';
mobileMenu.innerHTML = '<img></p><ul class="menu"><li><a>Portfolio</a></li><li><a>About</a></li><li><a>Contact</a></li></ul>';
document.body.appendChild(mobileMenu);
mobileMenu.style.display = 'none';
mobileMenu.style.paddingTop = '34px';
mobileMenu.style.boxSizing = 'border-box';
mobileMenu.style.position = 'absolute';
mobileMenu.style.top = '0px';
mobileMenu.style.left = '-8px';
mobileMenu.style.backgroundColor = '#3c3a39';
mobileMenu.style.height = '755px';
mobileMenu.style.width = '102%';
mobileMenu.children[0].src = 'Icons/cencel.png';
mobileMenu.children[0].style.float = 'right';
mobileMenu.children[0].style.marginRight = '38px';
mobileMenu.children[1].style.display = 'flex';
mobileMenu.children[1].style.flexDirection = 'column';
mobileMenu.children[1].style.alignItems = 'center';
mobileMenu.children[1].style.padding = '0';
const li = document.querySelectorAll('ul.menu > li');
for (let i = 0; i < li.length; i += 1) {
  li[i].className = 'li[i]';
  li[i].style.listStyle = 'none';
  li[i].firstChild.style.fontSize = '32px';
  li[i].firstChild.style.fontWeight = '700';
  li[i].firstChild.style.color = '#fff5e1';
  li[i].firstChild.style.textDecoration = 'none';
  li[i].style.padding = '15px';
  li[i].style.marginTop = '9px';
  li[i].style.borderBottom = '1px solid white';
  li[i].style.width = '80%';
  li[i].addEventListener('click', hideMobileMenu);
}
li[0].firstChild.setAttribute('href', '#work');
li[1].firstChild.setAttribute('href', '#aboutMeBox');
li[2].firstChild.setAttribute('href', '#contact-section');
const hamb = document.querySelector('.unionImg');
hamb.addEventListener('click', showMobileMenu);
mobileMenu.children[0].addEventListener('click', hideMobileMenu);
