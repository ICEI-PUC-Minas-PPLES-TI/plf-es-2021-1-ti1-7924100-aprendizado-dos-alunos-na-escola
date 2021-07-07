var db_contatos_inicial = 
  {
   "alunos": [
      {
         "nomeCompleto":"Israel Miranda",
         "nomeDeUsuario":"israelmiranda",
         "email":"israelmiranda@gmail.com",
         "senha":1234
      },
      {
         "nomeCompleto":"Teste Abc",
         "nomeDeUsuario":"TesteAbc",
         "email":"testeAbc@gmail.com",
         "senha":5555
      }
   ],
   "professores": [
      {
         "nomeCompleto":"Natalia de Souza",
         "nomeDeUsuario":"natisouza",
         "email":"nataliasouza@gmail.com",
         "senha":1234
      },
      {
         "nomeCompleto":"Teste do Prof",
         "nomeDeUsuario":"professor",
         "email":"professor@gmail.com",
         "senha":2222
      }
   ]
}

const ls = localStorage;

let users = [];

let updateUsersLs = () => 
    ls.setItem('users', JSON.stringify(users));

let registerForm = (register) => {
  if(!register) return 0;

  register.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let name = document.querySelector('#name').value;
    let user = document.querySelector('#user').value;
    let email = document.querySelector('#email').value;
    let pass = document.querySelector('#pass').value;

    let User = {name,user,pass,email}

    users.push(User)

    console.log(users)

    updateUsersLs();
	  return window.location.href="index.html";
  }
 )
}

let loginForm = (login) => {
  if(!login) return 0;

  login.addEventListener('submit', (e) => {
    e.preventDefault()

    let user = document.querySelector('#user').value;
    let pass = document.querySelector('#pass').value;

    let success = users.find(u => 
      u.user == user && u.pass == pass
    )

    console.log({success, user, pass})

    if(success)
      return window.location.href="paginicial.html";

    alert('Dados incorretos.')
  }
 )
}
 
window.onload = () => { 
  users = ls.getItem('users')
  if(!users){
     users = '[]'
     ls.setItem('users', users)
  }
  users = JSON.parse(users)

  let register = document.querySelector('#register')
  registerForm(register)

  let login = document.querySelector('#login')
  loginForm(login)
}