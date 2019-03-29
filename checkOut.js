var divCart = document.getElementById('cartdiv');
var list = document.getElementById('list');
var carts = [];
var productId;
var products = [];
var billdiv = document.getElementById('bill');

retreiveData1();
retreiveData();
calculateBill();

function retreiveData()
{
  var items = localStorage.getItem("cart");
  if(items)
  {
    carts = JSON.parse(items);
    var length = carts.length;
    var i=0;
    productId=length;
    while(i<length)
    {
      makeCartList(carts[i]);
      i++;
    }
  }
}

function retreiveData1()
{
    var items = localStorage.getItem("data");
    if(items)
    {
      products = JSON.parse(items);
    }
}

function makeCartList(objProduct)
{
  var listItem = document.createElement("li");
  var productName = objProduct.name;
  var productPrice = objProduct.price;
  var productQuantity = objProduct.quantity;
  //var productQuantityLeft =( parseInt(objProduct.orginal) - parseInt(objProduct.quantity);
  listItem.innerHTML = "Name : "+productName+"<br> Price : "+productPrice; //+" Quantity Left : "+productQuantityLeft;
  var dltbtn = document.createElement("button");
  dltbtn.innerHTML = "DELETE";
  insertBlankLine(listItem);
  listItem.appendChild(dltbtn);
  list.appendChild(listItem);
  insertBlankLine(listItem);
  insertBlankLine(listItem);
  dltbtn.addEventListener("click" , function(abc)
{
  deletefromarray(objProduct.id);
  deletefromcart(abc.target.parentNode);
}
)
}

function deletefromarray(id)
{
  console.log(id);
  carts.splice(id,1);
  saveValues();
}

function saveValues()
{
  var maal = JSON.stringify(carts);
  localStorage.setItem("cart" , maal);
  calculateBill();
}

function insertBlankLine(targetElement)
{
  var newline = document.createElement('br');
  targetElement.appendChild(newline);
}

function calculateBill()
{
  billdiv.innerHTML="";
  var text = document.createElement('h3');
  var number = carts.length;
  var i=0;
  var bill = 0;
  while(i<number)
  {
    bill = bill + (carts[i].quantity*carts[i].price);
    i++;
  }
  text.innerHTML = "The total bill amount is " + bill;
  billdiv.appendChild(text);
}

function deletefromcart(target1)
{
    target1.parentNode.removeChild(target1);
}
