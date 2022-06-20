//Clase de Paletas, con diferentes propiedades.




class Paletas {
    constructor(name, weight, playerType, price, amount, number) {
      this.name = name.toUpperCase();
      this.weight = weight;
      this.playerType = playerType;
      this.price = parseFloat(price);
      this.amount = amount;
      this.avalible = true;
    
    }
  
    calcularIVA (){
      return this.price * this.amount * 1.21;
    }
  
    notAvailable(){
      this.avalible =false;
    }
  
    suggestedPrice(){
      return this.price * 1.21 * 1.25;
    }
  
    calcularCantidad (){
      return this.price * this.amount;
    }
  
  
  }
  var arrayProducts = [];
  do {
    var comprobation = prompt('Please, enter product name or exit to finish');
    if (comprobation === "exit"|| comprobation === "EXIT"|| comprobation ==="Exit") {
      break;
    }else{ 
      name1 = comprobation;
      var weight = prompt( 'enter weight');
      var playerType = prompt(' enter player type');
      var price = prompt( 'enter the price of the product');
      var amount = prompt('enter amount');
      arrayProducts.push(new Paletas(name1, weight, playerType, price, amount ));
     
    }
  }
  
  while (comprobation != "exit"|| comprobation != "EXIT"|| comprobation != "Exit") 
  
  console.log(arrayProducts);
  
  for (var product of arrayProducts){
    document.write("<h3>Name:  " + product.name +"</h3>");
    document.write("<h3>Weight: " + product.weight +" G<h3>");
    document.write("<h3>Player Type: " + product.playerType +"<h3>");
    document.write("<h3>Amount: " + product.amount +" U.<h3>");
    document.write("<h3>Price: U$D" + product.price +"<h3>");
    document.write("<h3>Final price Without taxes: U$D" + product.calcularCantidad() +"<h3>");
    document.write("<h3>Final price: U$D" + product.calcularIVA() +"<h3>");
    
    
    console.log(product.name);
    console.log(product.weight);
    console.log(product.playerType);
    console.log(product.amount);
    console.log(product.calcularCantidad());
    console.log(product.calcularIVA());
    
  }
  

//Buscar un producto por Nombre:


 var joined = prompt('Enter the product:');
 var proJoined = arrayProducts.filter(product => product.name.includes(joined));
console.log(proJoined);
document.write("<p> Entered product: </p>");

for (var product of proJoined){
  document.write(" <p>Name: " + product.name + "</p>");
  document.write(" <p>Amount: " + product.amount + "</p>");
  document.write(" <p>Player Typ: " + product.playerType + "</p>");
  document.write(" <p>Weight: " + product.weight + "</p>");
  document.write(" Final price: U$D: " + product.calcularIVA() + "</p>");
} 

///Stock de productos///


var outofStock = arrayProducts.filter(product => product.amount == 0 || product.avalible == false);
console.log(outofStock);
document.write("<p> Out of Stock: </p>");



for (var product of outofStock) {
  document.write("<p>Name:" + product.name + "</p>");
  document.write("<p>Weight:" + product.weight + "</p>");
  document.write("<p>Player Type:" + product.playerType + "</p>");
  document.write("<p>Amount:" + product.amount + "</p>");

}



