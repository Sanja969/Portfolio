const containerMobiMenu = document.createElement('div');
const mobileMenu = document.createElement('div');
const line = document.createElement('div');
function hideMobileMenu() {
  containerMobiMenu.style.display = 'none';
}

function showMobileMenu() {
  containerMobiMenu.style.display = 'block';
}

mobileMenu.className = 'mobile-menu';
mobileMenu.innerHTML = '<img><ul class="menu"><li><a>Portfolio</a></li><li><a>About</a></li><li><a>Contact</a></li></ul>';
document.body.appendChild(containerMobiMenu);
containerMobiMenu.appendChild(mobileMenu);
containerMobiMenu.appendChild(line);

containerMobiMenu.style.display = 'none';
containerMobiMenu.style.position = 'absolute';
containerMobiMenu.style.top = '0px';
containerMobiMenu.style.left = '-8px';
containerMobiMenu.style.height = '100%';
containerMobiMenu.style.width = '102%';
containerMobiMenu.style.boxSizing = 'border-box';
containerMobiMenu.style.background = '#fff5e1';

mobileMenu.style.paddingTop = '34px';
mobileMenu.style.boxSizing = 'border-box';
mobileMenu.style.backgroundColor = '#3c3a39';
mobileMenu.style.height = '90%';
mobileMenu.style.width = '100%';

line.style.width = '33%';
line.style.borderBottom = '5px solid #3c3a39';
line.style.marginLeft = '33%';
line.style.paddingTop = '15%';

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

const hamburger = document.querySelector('.unionImg');
hamburger.addEventListener('click', showMobileMenu);
mobileMenu.children[0].addEventListener('click', hideMobileMenu);

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.sec');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const secTop = section.offsetTop;
    const secHigh = section.clientHeight;
    if (window.pageYOffset >= (secTop - secHigh)) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach((a) => {
    a.classList.remove('active');
    if (a.classList.contains(current)) {
      a.classList.add('active');
    }
  });
});