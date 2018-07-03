window.onload = (()=>{
  const btnLogin = document.getElementById('btnInicio');
  const inputEmail = document.getElementById('inputCorreo');
  const inputPassword = document.getElementById('inputPass');
  const alertP = document.getElementById('alertPassword');
  const alertE = document.getElementById('alertEmail');

  btnLogin.addEventListener('click', ()=> {
    password = inputPassword.value;
    email = inputEmail.value;
    console.log(password);
    //let expReg = new RegExp(/.*\d .{8}$/);
    //let expReg = new RegExp('{8}$');
    let expReg = /\d.{8}/;
    //let expReg = /.*\d.{8}$/; //"(?=.*\d).{8}"
    if(/^\d{8}$/.test(password)){
      if(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email)){
        window.localStorage.setItem('correo',email);
        window.location.href = 'home.html';
      }else{
        alertE.innerHTML= `<div class="alert alert-danger" role="alert">
        El E-mail debe tener un formato válido.</div>`;
          // console.log('La contraseña debe tener máximo 8 caracteres y acepta solo números.');
        inputEmail.value= '';
      } 
    }else{  
      alertP.innerHTML= `<div class="alert alert-danger" role="alert">
      La contraseña debe tener máximo 8 caracteres y acepta solo números.</div>`;
     //console.log('La contraseña debe tener máximo 8 caracteres y acepta solo números.');
     inputPassword.value= '';
    }
   
  });// fin evento botonLogin

  inputPassword.addEventListener('click',()=>{
    alertP.innerHTML= `<div></div>`;
  });
  inputEmail.addEventListener('click',()=>{
    alertE.innerHTML= `<div></div>`;
  });
  
});