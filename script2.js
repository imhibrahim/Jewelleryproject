let bukharibracletarray= [
    {
        id: 1,
        title: "braccelet",
        imgsrc: "./bracelet/bracelet1.jpg",
        desc : "$350",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 2,
        title: "new bracelet",
        imgsrc: "./bracelet/bracelet2.jpg",
        desc : "$240  ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 3,
        title: "coral bengal blue",
        imgsrc: "./bracelet/coral bengal blue.jpg",
        desc : "$100",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 4,
        title: "coral bengal red",
        imgsrc: "./bracelet/coral bengal.jpg",
        desc : "$100",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 5 ,
        title: "correo gold",
        imgsrc: "./bracelet/correo gold.jpg",
        desc : "$250 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 6,
        title: "isla bracelet",
        imgsrc: "./bracelet/isla bracelet.jpg",
        desc : "$400 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 7,
        title: "ilex silver",
        imgsrc: "./bracelet/large ilex silver.jpg",
        desc : "$300",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 8,
        title: "lock bracelet",
        imgsrc: "./bracelet/lock.jpg",
        desc : "$250 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 9,
        title: "orpheus garnet gold",
        imgsrc: "./bracelet/orpheus garnet gold.jpg",
        desc : "$400 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    }

]



function bukharibracletgallery(){
 
    for(var i=0;i<bukharibracletarray.length;i++){
   
        document.getElementById("bukbraclet").innerHTML += `
        <div class="col-md-4 mt-5">
        <div class="card p-3 bg-warning" style="background-color: #ededed;border-radius:15px;">
        <img src="${bukharibracletarray[i].imgsrc}" width="100%" height="280px"/>
        <h3 class="mt-3 text-center text-capitalize fst-italic">${bukharibracletarray[i].title}</h3>
        <p class="text-center">${bukharibracletarray[i].desc}</p>
      
        <button class="btn btn-dark mb-2" onclick="openModel2(${bukharibracletarray[i].id})" data-bs-toggle="modal" data-bs-target="#exampleModal" >More Info</button>
        </div>
        
        </div>
        `
       }


   
   }

   
   function openModel2(id) {
    let modalhtml = ""
    for(var i=0;i<bukharibracletarray.length;i++){
        if (id == bukharibracletarray[i].id) {
            console.log(id)
            modalhtml = `
  <div class="w-100" >

<button class="btn btn-danger" onclick="closeModal()"
style="position: absolute; right: 20px; ">&times;</button>
<div class="row">

<div class="col-md-5">

  <img src="${bukharibracletarray[i].imgsrc}"  class="w-100" alt="">

</div>
<div class="col-md-7 d-flex flex-wrap align-content-center">
  <div>
  <h4>${bukharibracletarray[i].title}</h4>
  <p>${bukharibracletarray[i].fulldesc}</p>
  <a href="bukharibracletcompare.html"> <button class="btn btn-primary" onclick= "AddCompareProduct2(${bukharibracletarray[i].id})" > Compare</button></a>
  <a> <button class="btn btn-primary" onclick="closeModal2()"> Done</button></a>
</div>
</div>
</div>  
    
    `;

        }
    }


    document.getElementById("modal2").innerHTML = modalhtml;

    document.getElementById("modal2").style.transform = "scale(1)";

}

function closeModal2(){
    document.getElementById("modal2").style.transform = "scale(0)";
}

function AddCompareProduct2(id) {
    bukharibracletarray.filter((item) => {

        if (item.id == id) {
            let product2 = { id: item.id, title: item.title, desc: item.desc, imgsrc: item.imgsrc, fulldesc: item.fulldesc };
            console.log(product2);
            localStorage.setItem("product2", JSON.stringify(product2));
        }

    });

}

function selectbuhkarishowbr(){
    for(var i=0;i<bukharibracletarray.length;i++){
        document.getElementById("product1selectbr").innerHTML +=  `
          <option>${bukharibracletarray[i].title}</option>
        `
    }
}
function selectbuhkarishow2br(){
    for(var i=0;i<bukharibracletarray.length;i++){
        document.getElementById("product2selectbr").innerHTML +=  `
          <option>${bukharibracletarray[i].title}</option>
        `
    }
}

selectbuhkarishowbr();
selectbuhkarishow2br();


    let product1objbr = {imgsrc : bukharibracletarray[0].imgsrc , title : bukharibracletarray[0].title , desc : bukharibracletarray[0].desc , fulldesc : bukharibracletarray[0].fulldesc};
    document.getElementById("product1selectbr").addEventListener("change",function(){
        var selectvalue= document.getElementById("product1selectbr").value;
        for(var i=0;i<bukharibracletarray.length;i++){
            if(selectvalue == bukharibracletarray[i].title){
                product1objbr = {imgsrc : bukharibracletarray[i].imgsrc , title : bukharibracletarray[i].title , desc : bukharibracletarray[i].desc , fulldesc : bukharibracletarray[i].fulldesc}
                
            }
        }
        product1showbr();
    })


let product2objbr = localStorage.getItem("product2");
product2objbr = JSON.parse(product2objbr)
document.getElementById("product2selectbr").value = product2objbr.title;
document.getElementById("product2selectbr").addEventListener("change",function(){
    
    var selectvalue= document.getElementById("product2selectbr").value;
    console.log(selectvalue);
    for(var i=0;i<bukharibracletarray.length;i++){
        if(selectvalue == bukharibracletarray[i].title){
            product2objbr = {imgsrc : bukharibracletarray[i].imgsrc , title : bukharibracletarray[i].title , desc : bukharibracletarray[i].desc , fulldesc : bukharibracletarray[i].fulldesc}

           }
    }
    product2showbr();
})

function product1showbr(){
  
    document.getElementById('product1braclet').innerHTML = `
    <div class="card p-3">
      <img src="${product1objbr.imgsrc}" width="100%" height="250px"/>
      <h2 class="mt-3">${product1objbr.title}</h2>
      <p class="mt-3">${product1objbr.desc}</p>
      <p class="mt-3">${product1objbr.fulldesc}</p>
      </div>
    `
}
product1showbr();

function product2showbr(){
    document.getElementById("product2braclet").innerHTML = `
    <div class="card p-3">
    <img src="${product2objbr.imgsrc}" width="100%" height="250px"/>
    <h2 class="mt-3">${product2objbr.title}</h2>
    <p class="mt-3">${product2objbr.desc}</p>
    <p class="mt-3">${product2objbr.fulldesc}</p>
    </div>
    `
}
product2showbr();
