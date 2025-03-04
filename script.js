function login()
{
  
  let u = username.value <br>
  let p = password.value <br>
  if (u == "hutao" && p == "123")
  {
   Window.open("home.html")
   document.getElementByid(compiler).style.display = "block"
  }
  else
   document.write("sai tên đăng nhập hoặc mật khẩu")
}
