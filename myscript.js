var productID = 0;
var products = [];
var aAddProduct = document.getElementById("aAddProduct");
var divListProducts = document.getElementById('divListProducts');
var divAddProduct = document.getElementById('divAddProduct');
retrievedata();
aAddProduct.addEventListener("click" , function(event)
{
    ShowProductList();
}
);
function ShowProductList()
{
  hidepanel();
  var heading = document.createElement('b');
  heading.innerHTML = "Add a new product";
  divAddProduct.appendChild(heading);

  insertBlankLine(divAddProduct);
  insertBlankLine(divAddProduct);

  var productName = document.createElement('input');
  productName.setAttribute("type","text");
  productName.setAttribute("id","productName");
  productName.setAttribute("placeholder", "Enter the product name");
  productName.setAttribute("style" , "width:250px");

  divAddProduct.appendChild(productName);

  insertBlankLine(divAddProduct);
  insertBlankLine(divAddProduct);

  var productDescription = document.createElement('input');
  productDescription.setAttribute("type","text");
  productDescription.setAttribute('id' , 'productDescription');
  productDescription.setAttribute("placeholder" , "Add a Description");
  productDescription.setAttribute("style" , "width:250px ; height:50px");
  divAddProduct.appendChild(productDescription);

  insertBlankLine(divAddProduct);
  insertBlankLine(divAddProduct);

  var productprice = document.createElement('input');
  productprice.setAttribute("type" , "text");
  productprice.setAttribute("id" , "productprice");
  productprice.setAttribute("placeholder" , "Enter the Price");
  productprice.setAttribute("style" , "width:250px");
  divAddProduct.appendChild(productprice);

  insertBlankLine(divAddProduct);
  insertBlankLine(divAddProduct);

  var productquantity = document.createElement('input');
  productquantity.setAttribute("type" , "text");
  productquantity.setAttribute("id" , "productquantity");
  productquantity.setAttribute("placeholder" , "Enter the Quantity");
  productquantity.setAttribute("style" , "width:250px");
  divAddProduct.appendChild(productquantity);

  insertBlankLine(divAddProduct);
  insertBlankLine(divAddProduct);

  var addButton = document.createElement("button");
  addButton.setAttribute("id" , "addButton");
  addButton.innerHTML =  "Add Product";
  divAddProduct.appendChild(addButton);

  addButton.addEventListener("click" , function(event)
{
  addProducttoArray();
}
);
}

function addProducttoArray()
{
  var productobj = new Object();

  productobj.ID = productID;
  productobj.name = document.getElementById('productName').value;
  productobj.desc = document.getElementById('productDescription').value;
  productobj.price = document.getElementById('productprice').value;
  productobj.quantity = document.getElementById('productquantity').value;
  if(productobj.name=="" || productobj.desc=="" || productobj.price=="" || productobj.quantity=="")
  {
    alert("Cannot be empty.Fill all fields");
    return
  }
  products.push(productobj);
  storingvalues();
  deletelist();
  showpanel();
  addproducttodom(productobj);
  productID++;
}

function addproducttodom(productobj)
{
    var divProduct = document.createElement('div');
    divProduct.setAttribute("id" , productID);

    var aProductName = document.createElement("a");
    aProductName.setAttribute("href","#");
    aProductName.innerHTML = productobj.name;
    divProduct.appendChild(aProductName);

    insertBlankLine(divProduct);

    //create a anchor for deleting this product
    var aDelete = document.createElement("a");
    aDelete.setAttribute("href","#");
    aDelete.innerHTML = "Delete";
    divProduct.appendChild(aDelete);

    insertBlankLine(divProduct);

    var editbtn = document.createElement("a");
    editbtn.setAttribute("href" , "#");
    editbtn.innerHTML = "Edit";
    divProduct.appendChild(editbtn);

    aDelete.addEventListener("click",function(event)
                      {
                         var targetParent = event.target.parentNode;
                         targetParent.parentNode.removeChild(targetParent);
                         deletefromarray(parseInt(event.id));
                      }
                );
    aProductName.addEventListener("click",function(event)
  {
      var description = document.createElement('p');
      description.innerHTML = productobj.desc;
      divProduct.appendChild(description);

      var price = document.createElement('p');
      price.innerHTML = productobj.price;
      divProduct.appendChild(price);

      var quan = document.createElement('p');
      quan.innerHTML=productobj.quantity;
      divProduct.appendChild(quan);
  }
);
  editbtn.addEventListener("click",function(event)
{
    RecreateProductList(productobj);
}
);
    divListProducts.appendChild(divProduct);


    insertBlankLine(divProduct);
    insertBlankLine(divProduct);

    //showpanel();
}

  function RecreateProductList(productobj)
  {
    hidepanel();
    hidepanel2();
    var heading = document.createElement('b');
    heading.innerHTML = "Add a new product";
    divAddProduct.appendChild(heading);

    insertBlankLine(divAddProduct);
    insertBlankLine(divAddProduct);

    var productName = document.createElement('input');
    productName.setAttribute("type","text");
    productName.setAttribute("id","newproductName");
    productName.setAttribute("placeholder", "Enter the product name");
    productName.setAttribute("style" , "width:250px");
    productName.value=productobj.name;
    divAddProduct.appendChild(productName);


    insertBlankLine(divAddProduct);
    insertBlankLine(divAddProduct);

    var productDescription = document.createElement('input');
    productDescription.setAttribute("type","text");
    productDescription.setAttribute('id' , 'newproductDescription');
    productDescription.setAttribute("placeholder" , "Add a Description");
    productDescription.setAttribute("style" , "width:250px ; height:50px");
    productDescription.value=productobj.desc;
    divAddProduct.appendChild(productDescription);

    insertBlankLine(divAddProduct);
    insertBlankLine(divAddProduct);

    var productprice = document.createElement('input');
    productprice.setAttribute("type" , "text");
    productprice.setAttribute("id" , "newproductprice");
    productprice.setAttribute("placeholder" , "Enter the Price");
    productprice.setAttribute("style" , "width:250px");
    productprice.value=productobj.price;
    divAddProduct.appendChild(productprice);

    insertBlankLine(divAddProduct);
    insertBlankLine(divAddProduct);

    var productquantity = document.createElement('input');
    productquantity.setAttribute("type" , "text");
    productquantity.setAttribute("id" , "newproductquantity");
    productquantity.setAttribute("placeholder" , "Enter the Quantity");
    productquantity.setAttribute("style" , "width:250px");
    productquantity.value=productobj.quantity;
    divAddProduct.appendChild(productquantity);

    insertBlankLine(divAddProduct);
    insertBlankLine(divAddProduct);

    var addButton = document.createElement("button");
    addButton.setAttribute("id" , "addButton");
    addButton.innerHTML =  "Add Product";
    divAddProduct.appendChild(addButton);

    addButton.addEventListener("click" , function(event)
  {
    UpdateProducttoArray(productobj);
    showpanel2();
  }
);
}

function UpdateProducttoArray(productobj)
{
    productobj.name = newproductName.value;
    productobj.desc=newproductDescription.value;
    productobj.price=newproductprice.value;
    productobj.quantity=newproductquantity.value;
    console.log(newproductDescription.value);
    deletelist();
    showpanel();
}

  function deletelist()
    {
      divAddProduct.innerHTML="";
    }
 function hidepanel()
 {
   aAddProduct.setAttribute("style","visibility:hidden");
 }

function showpanel()
{
  aAddProduct.setAttribute("style","visibility:visible");
}

function hidepanel2()
{
  divListProducts.setAttribute("style","visibility:hidden");
}

function showpanel2()
{
  divListProducts.setAttribute("style","visibility:visible");
}

function insertBlankLine(targetElement)
{
  var newline = document.createElement('br');
  targetElement.appendChild(newline);
}

function storingvalues()
{
  var product = JSON.stringify(products);
  localStorage.setItem("data",product);
}

function retrievedata()
{
  var rdata=localStorage.getItem("data");
  if(rdata)
  {
  products = JSON.parse(rdata);
  var len = products.length;
  var i=0;
    while(i<len)
    {
    addproducttodom(products[i]);
    i++;
    }
  }
}

function deletefromarray(a)
{
  products.splice(a,1);
  storingvalues();
}
