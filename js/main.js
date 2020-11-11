// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');


const login = document.querySelector('.login'),
  loginForm = document.querySelector('.login-form'),
  emailInput = document.querySelector('.login-email'),
  passwordInput = document.querySelector('.login-password'),
  loginSignup = document.querySelector('.login-signup')
  userBlock = document.querySelector('.user'),
  userName = document.querySelector('.user-name'),
  authorName = document.querySelectorAll('.author-username'),
  editBlock = document.querySelector('.edit-container'),
  iconEdit = document.querySelector('.icon-edit'),
  exitBtn = document.querySelector('.exit')

  editUsername = document.querySelector('.edit-username'),
  editPhotoURL = document.querySelector('.edit-photo'),
  
  userAvatar = document.querySelector('.user-avatar'),
  
  postsWrapper = document.querySelector('.posts');

const regExpValidEmail = /^\w+@\w+\.\w{2,}$/

const listUsers = [
  {
    id: '01',
    email: 'liza@mail.com',
    password: '121212',
    displayName: 'lizaLiza',
    photo: ''
  },
  {
    id: '02',
    email: 'kate@mail.com',
    password: '12121112',
    displayName: 'KateNotKill',
    photo: ''
  },
  {
    id: '03',
    email: 'katy@mail.com',
    password: '151515',
    displayName: 'Катька',
    photo: "https://cdn.pixabay.com/photo/2017/05/13/23/05/img-src-x-2310895_960_720.png"
  }
];

const setUsers = {
  user: null,

  logIn(email, password, handler) {
    if (!regExpValidEmail.test(email)) return alert('Плохой email');
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizedUser(user);
      handler();
      console.log(listUsers);
    } else {
      alert('Пользователь не найден')
    }
  },
  logOut(handler) {
    this.user = null;
    handler();
  },
  signUp(email, password, handler) {

    if (!email.trim() || !password.trim()){
      alert('Введите данные');
      return;
    }

    if (!regExpValidEmail.test(email)) return alert('Плохой email');

    if(!this.getUser(email)){

      const userName = email.split('@')[0];

      const user = { email, password, displayName: userName };

      listUsers.push(user);
      this.authorizedUser(user);
      handler();
      console.log(listUsers);
    } else {
      alert('Это имя пользователя уже занято!')
    }
  },
  editUser(userName, userPhoto, handler) {
    if (userName) {
      this.user.displayName = userName;
    };
    if (userPhoto) {
      this.user.photo = userPhoto;
    }

    handler();
    showAllPosts();    
  },
  getUser(email) {
    return listUsers.find((item) => item.email === email);
  },
  authorizedUser(user) {
    this.user = user;
  } 
};

const setPosts = {
  allPosts: [
    {
      title: 'Заголовок поста',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: ['свежее', 'новое', 'горячее', 'мое', 'случайность'],
      author: 'liza@mail.com',
      date: '11.11.2020, 20:54:00',
      like: 45,
      comments: 20,           
    },
    {
      title: 'Заголовок поста2',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: ['свежее', 'новое'],
      author: 'kate@mail.com',
      date: '11.11.2020, 20:54:00',
      like: 445,
      comments: 220,           
    },
    {
      title: 'Заголовок постаtest',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: ['свежее', 'новое'],
      author: 'katy@mail.com',
      date: '11.11.2020, 20:54:00',
      like: 444445,
      comments: 212220,           
    }
  ]

};

const toggleDOMAuth = () => {
  const user = setUsers.user;
  
  if (user) {
    login.style.display = 'none';
    loginForm.style.display = 'none';
    userBlock.style.display = 'block';
    // userName.textContent = `${user.displayName}`;
    userName.textContent = user.displayName;
    userAvatar.src = user.photo || userAvatar.src;

    authorName.forEach((item) => item.textContent = `${user.displayName}`);
  }
  else {
    userBlock.style.display = 'none';
    login.style.display = 'flex';
    loginForm.style.display = 'flex';
  }
};


const showAllPosts = () => {

  postsWrapper.innerHTML = '';

  setPosts.allPosts.forEach(({ title, text, like, comments, author, date, tags }) => {


    const isAuthor = setUsers.getUser(author).displayName;

    const isAvatar = setUsers.getUser(author).photo;
    postHTML = `
      <section class="post">
        <div class="post-body">
          <h2 class="post-title">${title}</h2>
          <p class="post-text">${text}</p>
          <div class="tags">

          </div>
        </div>
        <div class="post-footer">
          <div class="post-buttons">
            <button class="post-button likes">
              <svg width="19" height="20" class="icon icon-like">
                <use xlink:href="img/icons.svg#like"></use>
              </svg>
              <span class="likes-counter">${like}</span>
            </button>
            <button class="post-button comments">
              <svg width="21" height="21" class="icon icon-comment">
                <use xlink:href="img/icons.svg#comment"></use>
              </svg>
              <span class="comments-counter">${comments}</span>
            </button>
            <button class="post-button save">
              <svg width="19" height="19" class="icon icon-save">
                <use xlink:href="img/icons.svg#save"></use>
              </svg>
            </button>
            <button class="post-button share">
              <svg width="17" height="19" class="icon icon-share">
                <use xlink:href="img/icons.svg#share"></use>
              </svg>
            </button>
          </div>
          <div class="post-author">
            <div class="author-about">
              <a href="#" class="author-username">${isAuthor}</a>
              <span class="post-time">${date}</span>
            </div>
            <a href="#" class="author-link"><img src=${isAvatar? isAvatar : "img/avatar.jpeg"} alt="avatar" class="author-avatar"></a>
          </div>
        </div> 
      </section>   
    `;

    postsWrapper.insertAdjacentHTML('afterbegin', postHTML); 

    tags.forEach(tag => {
      const tagsHolder = document.querySelector('.tags')

      tagsHolder.insertAdjacentHTML('afterbegin', `<a href="#" class="tag">#${tag}</a>`)
    });
  });

  // postsWrapper.innerHTML = 'HERE';

};

const init = () => {
  showAllPosts();

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    setUsers.logIn(emailInput.value, passwordInput.value, toggleDOMAuth);
    loginForm.reset();
  });
  
  loginSignup.addEventListener('click', (e) => {
    e.preventDefault();
    setUsers.signUp(emailInput.value, passwordInput.value, toggleDOMAuth);
    loginForm.reset();
  });
  
  exitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    setUsers.logOut(toggleDOMAuth);
  });
  
  iconEdit.addEventListener('click', (e) => {
    e.preventDefault();
    editBlock.classList.toggle('visible');
    editUsername.value = setUsers.user.displayName;
  });
  
  editBlock.addEventListener('submit', (e) => {
    e.preventDefault();
  
    setUsers.editUser(editUsername.value, editPhotoURL.value, toggleDOMAuth);
    editBlock.classList.toggle('visible')
  });

  menuToggle.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню 
    menu.classList.toggle('visible');
  })

};

document.addEventListener('DOMContentLoaded', init);



