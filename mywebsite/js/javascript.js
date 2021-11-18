function intoSang()
{
    let sang= document.getElementById("PhamVanSang");
    sang.scrollIntoView({behavior:"smooth"});
}
function intoThai()
{
    let thai= document.getElementById("TranVanThai");
    thai.scrollIntoView({behavior:"smooth"});
}
function intoTrieu()
{
    let trieu= document.getElementById("HuynhVietTrieu");
    trieu.scrollIntoView({behavior:"smooth"});
}
function intoContact()
{
    let c= document.getElementById("contact");
    c.scrollIntoView({behavior:"smooth"});
}
function Submit()
{
   let name = document.getElementById("fullname").value;
   let email = document.getElementById("email").value;
   if(ValidateEmail(email))
   {
    alert("Ban da submit voi \nName : "+name+"\nEmail  :"+email);
   }
   else{
    alert("Ban da nhap email khong hop le!")
   }
}
function ValidateEmail(mail) 
{
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(mail);
}
