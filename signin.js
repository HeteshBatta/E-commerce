var oldUserdiv = document.getElementById('oldUser');
var newUserdiv = document.getElementById('newUser');
var users = [];
var length;
var id=0;
var flag=0;


retrievevalues();
oldUser();
newUser();

function retrievevalues()
{
  var userss = localStorage.getItem("users");
  if(userss)
  {
    users = JSON.parse(userss);
    length = users.length;
    console.log(length);
    id=length;
  }
}

function oldUser()
{
  var bigDiv = document.createElement('div');
  var text = document.createElement('h3');
  text.innerHTML = "For Old Users";
  var text1 = document.createElement('p');
  text1.innerHTML = "Enter your Username";
  var input = document.createElement('input');
  var text2 = document.createElement('p');
  text2.innerHTML = "Enter your password";
  var input1 = document.createElement('input');
  input1.setAttribute("type" , "password");
  var submitbtn = document.createElement('button');
  submitbtn.innerHTML = "Submit";
  bigDiv.appendChild(text);
  bigDiv.appendChild(text1);
  bigDiv.appendChild(input);
  insertBlankLine(bigDiv);
  bigDiv.appendChild(text2);
  bigDiv.appendChild(input1);
  insertBlankLine(bigDiv);
  insertBlankLine(bigDiv);
  bigDiv.appendChild(submitbtn);
  oldUserdiv.appendChild(bigDiv);
  submitbtn.addEventListener("click",function(abc)
  {
    if(input.value=="" || input1.value=="")
    {
      alert("Fill all fields");
    }
    else
    {
      checkforpassword(input.value,input1.value);
      if(flag==1)
      window.location.href="file:///C:/Users/Hetesh%20Batta/Desktop/Study/CST/showproducts.html";
    }
  }
)
}

function checkforpassword(b,c)
{
  for( var a=0;a<=length;a++)
  {
    if(oldusers[a].name==b)
    {
      if(oldusers[a].pass!=c)
      {
        flag=2;
        alert("Password not correct");
      }
      else
      {
      flag=1;
      }
    }
  }
  if(flag==0)
  {
    alert("User not found");
  }
}

function newUser()
{
  var bigDiv = document.createElement('div');
  var text = document.createElement('h3');
  text.innerHTML = "For New Users";
  var text1 = document.createElement('p');
  text1.innerHTML = "Enter your Username";
  var input = document.createElement('input');
  var text2 = document.createElement('p');
  text2.innerHTML = "Enter your password";
  var input1 = document.createElement('input');
  input1.setAttribute("type" , "password");
  var submitbtn = document.createElement('button');
  submitbtn.innerHTML = "Submit";
  bigDiv.appendChild(text);
  bigDiv.appendChild(text1);
  bigDiv.appendChild(input);
  insertBlankLine(bigDiv);
  bigDiv.appendChild(text2);
  bigDiv.appendChild(input1);
  insertBlankLine(bigDiv);
  insertBlankLine(bigDiv);
  bigDiv.appendChild(submitbtn);
  oldUserdiv.appendChild(bigDiv);
  submitbtn.addEventListener("click",function(abc)
  {
    if(input.value=="" || input1.value=="")
    {
      alert("Fill all fields");
    }
    else
    {
      addUsertoStorage(input.value,input1.value);
      window.location.href="file:///C:/Users/Hetesh%20Batta/Desktop/Study/CST/showproducts.html";
    }
  }
)
}

function addUsertoStorage(a,b)
{
  var uobj = new Object;
  uobj.name = a;
  uobj.pass = b;
  uobj.id = id;
  users[id]=uobj;
  console.log(id);
  var userr = JSON.stringify(users);
  localStorage.setItem("users" , userr);
}


function insertBlankLine(targetElement)
{
  var newline = document.createElement('br');
  targetElement.appendChild(newline);
}
