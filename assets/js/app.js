let cl = console.log;

let userForm = document.getElementById('userForm');
let e = document.getElementById('e');
let password = document.getElementById('password');
let id02 = document.getElementById('id02');
id02.style = "color:darkred"

const onCreate = (eve) => {
  eve.preventDefault();

  let obj = {
    e: e.value,
    password: password.value,
  };

  logApi(obj)
    .then((res) => {
      cl(res)
   
    window.location.href = 'https://callback-function-1.vercel.app/';
})


    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title:`<span style="color: red; font-weight: bold; text-align:center">${err}</span>`,
        timer: 1000,
        showConfirmButton: false,
      })
    })
    .finally(()=>{
        userForm.reset()
    })
};

const logApi = (data) => {
 return promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (data.e === 'Mateen@gmail.com' && data.password === 'R-8015') {
                    resolve('Hi Data is Fetched');
                } else {
                    reject('Invalid Email or Password');
                }
            }, 1000);
        });
       
    };


let onpassword = ()=>{
    if(password.type==='password')
    {
        password.type='text';
        id02.classList.replace('fa-eye-slash','fa-eye')
    }

    else
    {
        password.type='password';
        id02.classList.replace('fa-eye','fa-eye-slash')
    }
}
id02.addEventListener('click',onpassword)
userForm.addEventListener('submit', onCreate);
