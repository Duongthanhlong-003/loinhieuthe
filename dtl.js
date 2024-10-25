const btn = document.querySelectorAll("button")
//console.log(btn)
btn.forEach(function (button, index) {
button.addEventListener("click", function() {{
	var btnItem = event.target
	var product = btnItem.parentElement
	var productImg = product.querySelector("img").src
	var productName = product.querySelector("H1").innerText
	var productPrice = product.querySelector("span").innerText
	// console.log(productPrice,productImg, productName )	
	addcart(productPrice,productImg, productName )
}})

})
function addcart(productPrice,productImg, productName ){
	var addtr = document.createElement("tr")
	var cartItem = document.querySelectorAll("tbody tr")
	for (var i=0;i<cartItem.length;i++){
		var productT = document.querySelectorAll(".title")
		if(productT[i].innerHTML == productName) {
			alert("Sản phẩm này đã có trong giỏ hàng")
			return
		}
	}
	var trcontent = '<tr><td style="display: flex;align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt=""><h3 class="title">'+productName+'</h3></td><td><p><span>'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1" ></td><td style="cursor: pointer;"><span class="cart-delete">Xóa<span></td></tr>'
	addtr.innerHTML = trcontent
	var cartTable = document.querySelector("tbody")
	cartTable.append(addtr)
	carttotal()
	deleteCart()
}
//-------------------totalprice------------------
function carttotal(){
	var cartItem = document.querySelectorAll("tbody tr")
	var totalC = 0
	// console.log(cartItem.length)
	for (var i=0;i<cartItem.length;i++){
		var inputValue = cartItem[i].querySelector("input").value
		//console.log(inputValue)
		var productPrice = cartItem[i].querySelector("span").innerHTML.replace(/,/g,'')
		//console.log(productPrice)
		totalA = inputValue*productPrice
		//totalB = totalA.toLocaleString('de-DE')
		//console.log(totalB)
		totalC = totalC + totalA
		//totalD = totalC.toLocaleString('de-DE')
	}
	var carttotalA = document.querySelector(".price-total span")
	carttotalA.innerHTML = totalC.toLocaleString('de-DE')
	inputchange()
	//console.log(carttotalA)
	
}
//-------------------Delete cart------------------
function deleteCart(){
	var cartItem = document.querySelectorAll("tbody tr")
	for (var i=0;i<cartItem.length;i++){
		var productT = document.querySelectorAll(".cart-delete")
		productT[i].addEventListener("click", function(event){
			var cartDelete = event.target
			var cartitemR = cartDelete.parentElement.parentElement
			cartitemR.remove()
			carttotal()
			//console.log(cartitemR)
		})
	}
}
function inputchange(){
	var cartItem = document.querySelectorAll("tbody tr")
	for (var i=0;i<cartItem.length;i++){
		var inputValue = cartItem[i].querySelector("input")
		inputValue.addEventListener("change",function(){
			carttotal()	
		})
	}
}
const cartbtn = document.querySelector(".fa-xmark")
const cartshow = document.querySelector(".fa-cart-shopping")
cartshow.addEventListener("click", function(){
	document.querySelector(".cart").style.right = "0"

})
const usershow = document.querySelector(".fa-user")
usershow.addEventListener("click", function(){
})
cartbtn.addEventListener("click", function(){
	document.querySelector(".cart").style.right = "-100%"

})

document.getElementById("scrollToTop").addEventListener("click", function() {
    window.scrollTo(0, 10000);
});
document.getElementById("scrollToBottom").addEventListener("click", function() {
    window.scrollTo(10000, document.body.scrollHeight);
});
function handleScrollDown(){
	//console.log('h')

}




