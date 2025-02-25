function login()
{
  
  let u = username.value
  let p = password.value 
  if (u=="hutao" && p=="123")
  {
   Window.open("home.html")
   document.getElementByid(compiler).style.display="block"
  }
  else
   document.write("sai tên đăng nhập hoặc mật khẩu")
}
