const button = document.querySelector('.button');
button.addEventListener('click', () => {
       const login = document.querySelector('.login');
       login.classList.add("show-login");
       let k = document.querySelector("#rem");
       k.classList.add("a");
       
})

const register = document.querySelector(".button-reg");
register.addEventListener('click' , ()=>{
       const reg = document.querySelector('.register');
       reg.classList.add("show-regiseter");
       let s = document.querySelector("#bck");
       s.classList.add("ad");
})

const register1 = document.querySelector(".registration");
register1.addEventListener('click' , ()=>{
       const reg = document.querySelector('.register');
       reg.classList.add("show-regiseter");

})

const success = document.querySelector("#btn2");
success.addEventListener('click' , ()=>{
       const reg = document.querySelector('.success');
       reg.classList.add("show-success");
})



// upload item ka evetn
// yah section hide rahna cahiya kyoki yah tab tak open nhi hone chihiya jab tak verification nhi ho jata
 /* const upload = document.querySelector("#btn-pro");
upload.addEventListener('click' , ()=>{
       const item = document.querySelector('.upload-item');
       item.classList.add("show-item");
}) */


// login data varification 



document.getElementById("btn-pro").addEventListener('click' , ()=>{
      // window.open("index.html");
       var username = document.getElementById("name").value;
       var pass = document.getElementById("pass").value;  
       if(username == "Sunil Prajapat" && pass=="123456" ){
              let k = document.querySelector("#rem");
 k.addEventListener('click' , ()=>{
       const rg = document.querySelector('.login');
       rg.classList.remove("show-login");
 })
              // displaying upload data to website
 const upload = document.querySelector(".upload-item") // height add
 const uploadd = document.querySelector(".item") 
 const look = document.querySelector(".look")   // add display
 const back = document.querySelector(".upload-item")
   upload.classList.add("height");
   uploadd.classList.remove("display")
   look.classList.remove("display")
   back.classList.remove("display")
   const login = document.querySelector('.login');
   login.classList.remove("show-login");

  

       }else{
            let k = document.querySelector("#name");
            let p = document.querySelector("#pass");
            k.style.backgroundColor = "red";
            p.style.backgroundColor = "red";
             
       }
     
})
// insert or upload datc

const insertion = document.getElementById("btn4");

function func() {
       
          const shopName = document.getElementById("shop-name").value;
         const shopaddres = document.getElementById("shop-address").value;
         const owner = document.getElementById("owner").value;
         const product_avail = document.getElementById("product-aval").value;
         const type = document.getElementById("ty").value;
         const price = document.getElementById("price").value;
         localStorage.setItem("shopname", shopName );
         localStorage.setItem("shopaddress", shopaddres );
         localStorage.setItem("owner", owner );
         localStorage.setItem("avalablilty", product_avail );
         localStorage.setItem("ty", type );
         localStorage.setItem("price", price );

         uploada.classList.remove("height");

          addlist();
 }
 const uploada = document.querySelector(".upload-item");
  // send upload data back button
  let q = document.querySelector("#send");
  q.addEventListener('click' , ()=>{
      
      uploada.classList.remove("height");
  })
  


 function addlist(){
         var x = localStorage.getItem("shopname");
         var y = localStorage.getItem("shopaddress");
         var z = localStorage.getItem("owner");
         var a = localStorage.getItem("avalablilty");
         var b = localStorage.getItem("ty");
         var c = localStorage.getItem("price");
          
         let p = parseInt(c);
         let q = 0;
 // logic for pricing charges 
  if(p<5000){
        q =  ((p/100)*18) + ((p/100)*2) + p
  }
        else if( p >= 5000 && p < 20000){
               q =  ((p/100)*18) + ((p/100)*5) + p
        }
        else if( p >= 20000 && p < 100000){
               q =  ((p/100)*18) + ((p/100)*7) + p
        }
        else {
               q =  ((p/100)*18) + ((p/100)*10) + p
        }
       document.getElementById("yes").innerHTML = x ;
       document.getElementById("own").innerHTML = z ;
       document.getElementById("addres").innerHTML = y ;
       document.getElementById("aval").innerHTML = a;
       document.getElementById("type").innerHTML = b;
       document.getElementById("pri").innerHTML = q + "₹";
       const added = document.querySelector("#added");
       added.classList.remove("display");
       const addd = document.querySelector("#product");
       addd.classList.remove("display");
       alert("Succesfully added your product");

 }

 let s = document.querySelector("#bck");
 s.addEventListener('click' , ()=>{
       const reg = document.querySelector('.register');
       reg.classList.remove("show-regiseter");
 })
 

 let k = document.querySelector("#rem");
 k.addEventListener('click' , ()=>{
       const rg = document.querySelector('.login');
       rg.classList.remove("show-login");
 })


















 // social media selection 

 const fb = document.getElementById("fb");
 fb.addEventListener('click' , ()=>{
       window.open("https://www.facebook.com/profile.php?id=100064412120396")
 })
 const In = document.getElementById("in");
 In.addEventListener('click' , ()=>{
       window.open("https://www.instagram.com/sprajapat1101/")
 })
 const tw = document.getElementById("tw");
 tw.addEventListener('click' , ()=>{
       window.open("https://twitter.com/SunilPraja56224")
 })
 const li = document.getElementById("li");
 li.addEventListener('click' , ()=>{
       window.open("https://www.linkedin.com/in/%F0%9D%90%92%F0%9D%90%AE%F0%9D%90%A7%F0%9D%90%A2%F0%9D%90%A5-%F0%9D%90%8F%F0%9D%90%AB%F0%9D%90%9A%F0%9D%90%A3%F0%9D%90%9A%F0%9D%90%A9%F0%9D%90%9A%F0%9D%90%AD-117859204/")
 })
 const yt = document.getElementById("yt");
 yt.addEventListener('click' , ()=>{
       window.open("https://www.youtube.com/channel/UClDNBUQhcfhFbzI6dQxZMeQ")
 })