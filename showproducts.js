var ptcBtn = document.getElementById('ptcButton');
var divProductList = document.getElementById('divProductList');
var productList = document.getElementById('productList');
var products = [];
var cartvalue = [];
var productId;
retrievedata();
ptcBtn.addEventListener("click" , function(event)
{
   window.location.href="file:///C:/Users/Hetesh%20Batta/Desktop/Study/CST/checkOut.html";
}
)
function retrievedata()
{
  var items = localStorage.getItem("data");
  if(items)
  {
    products = JSON.parse(items);
    var length = products.length;
    var i=0;
    productId=length;
    while(i<length)
    {
      makeProductList(products[i]);
      i++;
    }
  }
}

function makeProductList(objProduct)
{
  var listItem = document.createElement('li');
  var productName = objProduct.name;
  var productAvailableQuantity = objProduct.quantity;
  var input = document.createElement('input');
  var addtocartbtn = document.createElement('button');
  addtocartbtn.innerHTML = "Add To Cart";
  input.setAttribute("placeholder" , "Enter the quantity");
  listItem.innerHTML="Name : "+productName+" "+"<br>Description : "+objProduct.desc+"<br>Available Quantity : "+productAvailableQuantity;
  insertBlankLine(listItem);
  listItem.appendChild(input);
  listItem.appendChild(addtocartbtn);
  productList.appendChild(listItem);
  insertBlankLine(listItem);
  insertBlankLine(listItem);
  addtocartbtn.addEventListener("click" , function(event)
{
  if(input.value=="" || input.value<0 || parseInt(input.value)>parseInt(productAvailableQuantity))
  {
  alert("Item quantity not valid");
  input.value="";
  }
  else
  {
  addToCart(objProduct,input.value);
  }
}
)
}

function insertBlankLine(targetElement)
{
  var newline = document.createElement('br');
  targetElement.appendChild(newline);
}

function addToCart(objProduct,value)
{
  var quantity = value;
  var cobj = new Object();
  cobj.name = objProduct.name;
  cobj.quantity = value;
  cobj.price=objProduct.price;
  cobj.original = objProduct.quantity;
  cartvalue[objProduct.ID]=cobj;
  saveValues();
}

function saveValues()
{
  var maal = JSON.stringify(cartvalue);
  localStorage.setItem("cart" , maal);
}
