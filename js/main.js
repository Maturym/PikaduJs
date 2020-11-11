// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})

const login = document.querySelector('.login'),
  loginForm = document.querySelector('.login-form'),
  emailInput = document.querySelector('.login-email'),
  passwordInput = document.querySelector('.login-password'),
  loginSignup = document.querySelector('.login-signup')
  userBlock = document.querySelector('.user'),
  userName = document.querySelector('.user-name'),
  authorName = document.querySelectorAll('.author-username');

const listUsers = [
  {
    id: '01',
    email: 'liza@mail.com',
    password: '121212',
    displayName: 'lizaLiza'
  },
  {
    id: '02',
    email: 'kate@mail.com',
    password: '12121112',
    displayName: 'KateNotKill'
  }
];

const setUsers = {
  user: null,

  logIn(email, password, handler) {
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizedUser(user);
      handler()
    } else {
      alert('Пользователь не найден')
    }
  },
  logOut() {

  },
  signUp(email, password, handler) {
    if(!this.getUser(email)){

      const userName = email.split('@')[0];

      const user = { email, password, displayName: userName };

      listUsers.push(user);
      this.authorizedUser(user);
      handler();

    } else {
      alert('Это имя пользователя уже занято!')
    }
  },
  getUser(email) {
    return listUsers.find((item) => item.email === email);
  },
  authorizedUser(user) {
    this.user = user;
  } 
};

const toggleDOMAuth = () => {
  const user = setUsers.user;
  
  if (user) {
    login.style.display = 'none';
    loginForm.style.display = 'none';
    userBlock.style.display = 'flex';
    userName.textContent = `${user.displayName}`;

    authorName.forEach((item) => item.textContent = `${user.displayName}`);
  }
};

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  setUsers.logIn(emailInput.value, passwordInput.value, toggleDOMAuth);
});

loginSignup.addEventListener('click', (e) => {
  e.preventDefault();
  setUsers.signUp(emailInput.value, passwordInput.value, toggleDOMAuth);
})