const containerMobiMenu = document.createElement('div');
const popup = document.querySelector('.popupCon');
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
    if (window.pageYOffset >= (secTop - (7 / 6) * secHigh)) {
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

const project1 = {
  name: 'Project 1',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  image: '#f3f3f3 url("Icons/article2.png") no-repeat left top',
  technologies: ['html', 'css', 'Ruby'],
  live: 'https://sanja969.github.io/Portfolio/',
  source: 'https://github.com/Sanja969/Portfolio',
};
const project2 = {
  name: 'Project 2',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  image: '#f3f3f3 url("Icons/article3.png") no-repeat left top',
  technologies: ['html', 'javascript', 'css'],
  live: 'https://sanja969.github.io/Portfolio/',
  source: 'https://github.com/Sanja969/Portfolio',
};
const project3 = {
  name: 'Project 3',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  image: '#f3f3f3 url("Icons/article4.png") no-repeat left top',
  technologies: ['html', 'css', 'Ruby'],
  live: 'https://sanja969.github.io/Portfolio/',
  source: 'https://github.com/Sanja969/Portfolio',
};
const project4 = {
  name: 'Project 4',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  image: '#f3f3f3 url("Icons/article2.png") no-repeat left top',
  technologies: ['html', 'bootsrap', 'css'],
  live: 'https://sanja969.github.io/Portfolio/',
  source: 'https://github.com/Sanja969/Portfolio',
};
const project5 = {
  name: 'Project 5',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  image: '#f3f3f3 url("Icons/article3.png") no-repeat left top',
  technologies: ['html', 'javascript', 'css'],
  live: 'https://sanja969.github.io/Portfolio/',
  source: 'https://github.com/Sanja969/Portfolio',
};
const project6 = {
  name: 'Project 6',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
  image: '#f3f3f3 url("Icons/article4.png") no-repeat left top',
  technologies: ['html', 'css', 'Ruby'],
  live: 'https://sanja969.github.io/Portfolio/',
  source: 'https://github.com/Sanja969/Portfolio',
};

const projects = [project1, project2, project3, project4, project5, project6];

const table = document.querySelector('#table');

for (let i = 0; i < projects.length; i += 1) {
  const projectBox = document.querySelector('.workProjectHide').cloneNode(true);
  projectBox.classList.remove('workProjectHide');
  projectBox.classList.add('workProject');
  projectBox.children[0].textContent = projects[i].name;
  projectBox.children[1].textContent = projects[i].description;
  projectBox.style.background = projects[i].image;
  for (let j = 0; j < 3; j += 1) {
    projectBox.children[2].children[j].textContent = projects[i].technologies[j];
    projectBox.children[2].children[j].style.background = 'rgba(255, 255, 255, 0.24)';
    projectBox.children[2].children[j].style.padding = '8px 12px';
  }

  table.appendChild(projectBox);
  const popupProject = popup.cloneNode(true);
  document.body.appendChild(popupProject);

  projectBox.children[3].addEventListener('click', () => {
    popupProject.style.display = 'flex';
  });
  for (let j = 0; j < 3; j += 1) {
    popupProject.children[0].children[1].children[j].textContent = projects[i].technologies[j];
    popupProject.children[0].children[0].children[0].textContent = projects[i].name;
    popupProject.children[0].children[3].textContent = projects[i].description;
  }
  popupProject.children[0].children[0].children[1].addEventListener('click', () => {
    popupProject.style.display = 'none';
  });

  popupProject.children[0].children[4].children[0].addEventListener('click', () => {
    window.location.href = projects[i].live;
  });
  popupProject.children[0].children[4].children[1].addEventListener('click', () => {
    window.location.href = projects[i].source;
  });
}

const seeProjectsBtn = document.querySelector('.storyProjectBtn');

seeProjectsBtn.addEventListener('click', () => {
  window.location = '#table';
});

const form = document.getElementById('contactForm');
const nameC = document.getElementById('name-contact');
const email = document.getElementById('mail-contact');
const submit = document.querySelector('.submit-contact');
const EMAIL_REQUIRED = 'This field is required :)';
const EMAIL_INVALID = 'Please enter data in email format and it has to be in lower case "example@mail.com"';
const NAME_REQUIRED = 'Please enter your name';

function showError(input, message) {
  const errorMsg = input.parentNode.querySelector('.error');
  errorMsg.textContent = message;
  input.classList.add = 'errorMsg';
  return false;
}

function showSuccess(input) {
  const errorMsg = input.parentNode.querySelector('.error');
  errorMsg.textContent = '';
  input.classList.add = 'success';
  return true;
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  const emailRegex = /^([a-z0-9_]+)@[a-z0-9-]+([a-z0-9-]+)*([a-z]{2,3})$/;

const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
    }
    return true;
}

form.addEventListener('input', (event) => {
  hasValue(nameC, NAME_REQUIRED);
  validateEmail(email, EMAIL_REQUIRED, EMAIL_INVALID);
  event.preventDefault();
});

submit.addEventListener('click', () => {
  const errorMsg = submit.parentNode.querySelector('.error');

  if (!hasValue(email, EMAIL_REQUIRED)) {
    errorMsg.textContent = 'You need to fill all required fields';
    errorMsg.style.color = 'red';
    return;
  }

  if (!email.validity.valid) {
    errorMsg.textContent = 'You didn\'t put data in valid form and the form is not send';
    errorMsg.style.color = 'red';
  }
});
