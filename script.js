
let bukhariringsarray= [
    {
        id: 1,
        title: "Gold Ring",
        imgsrc: "./rings/883.jpg",
        desc : "$560 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 2,
        title: "lola sapphire ring",
        imgsrc: "./rings/lola sapphire ring.jpg",
        desc : "$500 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 3,
        title: "white gold",
        imgsrc: "./rings/mia white gold wedding.jpg",
        desc : "$120",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 4,
        title: "new ring",
        imgsrc: "./rings/istockphoto.jpg",
        desc : "$400 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 5 ,
        title: "lorena diomand",
        imgsrc: "./rings/lorena diomand eternity.jpg",
        desc : "$430 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 6,
        title: "uxmal ring",
        imgsrc: "./rings/uxmal gold ring.jpg",
        desc : "$350 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 7,
        title: "white gold",
        imgsrc: "./rings/white gold.jpg",
        desc : "$500 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 8,
        title: "valeria diomand",
        imgsrc: "./rings/valeria diomand.jpg",
        desc : "$200 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 9,
        title: "ring",
        imgsrc: "./rings/51.jpg",
        desc : "$450 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    }

]



function bukhariringsgallery(){
 
 for(var i=0;i<bukhariringsarray.length;i++){

     document.getElementById("bukrings").innerHTML += `
     <div class="col-md-4 mt-5">
     <div class="card p-3 bg-warning" style="background-color: #ededed;border-radius:15px;">
     <img src="${bukhariringsarray[i].imgsrc}" width="100%" height="280px"/>
     <h3 class="mt-3 text-center fst-italic text-capitalize text-dark">${bukhariringsarray[i].title}</h3>
     <p class="text-center">${bukhariringsarray[i].desc}</p>
   
     <button class="btn btn-dark mb-2" onclick="openModel(${bukhariringsarray[i].id})" data-bs-toggle="modal" data-bs-target="#exampleModal" >More Info</button>
     </div>
     
     </div>
     `
    }


}

function openModel(id) {
    let modalhtml = ""
    for(var i=0;i<bukhariringsarray.length;i++){
        if (id == bukhariringsarray[i].id) {
            console.log(id)
            modalhtml = `
  <div class="w-100" >

<button class="btn btn-danger" onclick="closeModal()"
style="position: absolute; right: 20px; ">&times;</button>
<div class="row">

<div class="col-md-5">

  <img src="${bukhariringsarray[i].imgsrc}"  class="w-100" alt="">

</div>
<div class="col-md-7 d-flex flex-wrap align-content-center">
  <div>
  <h4>${bukhariringsarray[i].title}</h4>
  <p>${bukhariringsarray[i].fulldesc}</p>
  <a href="bukhariringscompare.html"> <button class="btn btn-primary" onclick="AddCompareProduct(${bukhariringsarray[i].id})" > Compare</button></a>
  <a> <button class="btn btn-primary" onclick="closeModal()"> Done</button></a>
</div>
</div>
</div>  
    
    `;

        }
    }


    document.getElementById("modal").innerHTML = modalhtml;

    document.getElementById("modal").style.transform = "scale(1)";

}

function closeModal(){
    document.getElementById("modal").style.transform = "scale(0)";
}

function AddCompareProduct(id) {
    bukhariringsarray.filter((item) => {

        if (item.id == id) {
            let product2 = { id: item.id, title: item.title, desc: item.desc, imgsrc: item.imgsrc, fulldesc: item.fulldesc };
            console.log(product2);
            localStorage.setItem("product2", JSON.stringify(product1));
        }

    });

}



function selectbuhkarishow(){
    for(var i=0;i<bukhariringsarray.length;i++){
        document.getElementById("product1select").innerHTML +=  `
          <option>${bukhariringsarray[i].title}</option>
        `
    }
}
function selectbuhkarishow2(){
    for(var i=0;i<bukhariringsarray.length;i++){
        document.getElementById("product2select").innerHTML +=  `
          <option>${bukhariringsarray[i].title}</option>
        `
    }
}

selectbuhkarishow();
selectbuhkarishow2();


let product1obj = {imgsrc : bukhariringsarray[0].imgsrc , title : bukhariringsarray[0].title , desc : bukhariringsarray[0].desc , fulldesc : bukhariringsarray[0].fulldesc};
document.getElementById("product1select").addEventListener("change",function(){
     var selectvalue= document.getElementById("product1select").value;
     console.log(selectvalue);
     for(var i=0;i<bukhariringsarray.length;i++){
         if(selectvalue == bukhariringsarray[i].title){
             product1obj = {imgsrc : bukhariringsarray[i].imgsrc , title : bukhariringsarray[i].title , desc : bukhariringsarray[i].desc , fulldesc : bukhariringsarray[i].fulldesc}

            }
     }
     product1show();
})



let product2obj = localStorage.getItem("product2");
product2obj = JSON.parse(product2obj)
document.getElementById("product2select").value = product2obj.title;
document.getElementById("product2select").addEventListener("change",function(){
    
    var selectvalue= document.getElementById("product2select").value;
    console.log(selectvalue);
    for(var i=0;i<bukhariringsarray.length;i++){
        if(selectvalue == bukhariringsarray[i].title){
            product2obj = {imgsrc : bukhariringsarray[i].imgsrc , title : bukhariringsarray[i].title , desc : bukhariringsarray[i].desc , fulldesc : bukhariringsarray[i].fulldesc}

           }
    }
    product2show();
})

function product1show(){
  
    document.getElementById('product1').innerHTML = `
    <div class="card p-3" style="background-color: #ededed;border-radius:15px;">
      <img src="${product1obj.imgsrc}" width="100%" height="250px"/>
      <h2 class="mt-3">${product1obj.title}</h2>
      <p class="mt-3">${product1obj.desc}</p>
      <p class="mt-3">${product1obj.fulldesc}</p>
      </div>
    `
}
product1show();

function product2show(){
    document.getElementById("product2").innerHTML = `
    <div class="card p-3" style="background-color: #ededed;border-radius:15px;">
    <img src="${product2obj.imgsrc}" width="100%" height="250px"/>
    <h2 class="mt-3">${product2obj.title}</h2>
    <p class="mt-3">${product2obj.desc}</p>
    <p class="mt-3">${product2obj.fulldesc}</p>
    </div>
    `
}
product2show();






// braclet
