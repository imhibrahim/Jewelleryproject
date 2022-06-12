let bukharinecklacearray= [
    {
        id: 1,
        title: "pearl necklace",
        imgsrc: "./necklace/brown pearl.jpg",
        desc : "$100 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 2,
        title: "tortuga necklace",
        imgsrc: "./necklace/gold tortuga necklace.jpg",
        desc : "$600  ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 3,
        title: "goldpendant",
        imgsrc: "./necklace/goldpendant.jpg",
        desc : "$450",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 4,
        title: "necklace",
        imgsrc: "./necklace/necklace.jpg",
        desc : "$450",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 5 ,
        title: "pendant",
        imgsrc: "./necklace/necklace2.jpg",
        desc : "this is ring 5 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 6,
        title: "pearl",
        imgsrc: "./necklace/pearl.jpg",
        desc : "$300 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 7,
        title: "pelota lapis necklace",
        imgsrc: "./necklace/pelota lapis necklace.jpg",
        desc : "$300",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 8,
        title: "pendant",
        imgsrc: "./necklace/pendant.jpg",
        desc : "$450 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    },
    {
        id: 9,
        title: "silver chain",
        imgsrc: "./necklace/silver chain.jpg",
        desc : "$200 ",
        fulldesc: "this is lorem ipsoim in detail .. this is classic information for bukhari rings awesome pic dear .. I like it"
    }

]



function bukharinecklacegallery(){
 
    for(var i=0;i<bukharinecklacearray.length;i++){
   
        document.getElementById("bukbraclet").innerHTML += `
        <div class="col-md-4 mt-5">
        <div class="card p-3 bg-warning" style="background-color: #ededed;border-radius:15px;">
        <img src="${bukharinecklacearray[i].imgsrc}" width="100%" height="280px"/>
        <h3 class="mt-3 text-center text-capitalize fst-italic">${bukharinecklacearray[i].title}</h3>
        <p class="text-center">${bukharinecklacearray[i].desc}</p>
      
        <button class="btn btn-dark mb-2" onclick="openModel2(${bukharinecklacearray[i].id})" data-bs-toggle="modal" data-bs-target="#exampleModal" >More Info</button>
        </div>
        
        </div>
        `
       }
   
   
   }

   
   function openModel2(id) {
    let modalhtml = ""
    for(var i=0;i<bukharinecklacearray.length;i++){
        if (id == bukharinecklacearray[i].id) {
            console.log(id)
            modalhtml = `
  <div class="w-100" >

<button class="btn btn-danger" onclick="closeModal()"
style="position: absolute; right: 20px; ">&times;</button>
<div class="row">

<div class="col-md-5">

  <img src="${bukharinecklacearray[i].imgsrc}"  class="w-100" alt="">

</div>
<div class="col-md-7 d-flex flex-wrap align-content-center">
  <div>
  <h4>${bukharinecklacearray[i].title}</h4>
  <p>${bukharinecklacearray[i].fulldesc}</p>
  <a href="bukharibracletcompare.html"> <button class="btn btn-primary" onclick= "AddCompareProduct2(${bukharinecklacearray[i].id})" > Compare</button></a>
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
    bukharinecklacearray.filter((item) => {

        if (item.id == id) {
            let product2 = { id: item.id, title: item.title, desc: item.desc, imgsrc: item.imgsrc, fulldesc: item.fulldesc };
            console.log(product2);
            localStorage.setItem("product2", JSON.stringify(product2));
        }

    });

}


function selectbuhkarishowbr(){
    for(var i=0;i<bukharinecklacearray.length;i++){
        document.getElementById("product1selectbr").innerHTML +=  `
          <option>${bukharinecklacearray[i].title}</option>
        `
    }
}
function selectbuhkarishow2br(){
    for(var i=0;i<bukharinecklacearray.length;i++){
        document.getElementById("product2selectbr").innerHTML +=  `
          <option>${bukharinecklacearray[i].title}</option>
        `
    }
}

selectbuhkarishowbr();
selectbuhkarishow2br();


    let product1objbr = {imgsrc : bukharinecklacearray[0].imgsrc , title : bukharinecklacearray[0].title , desc : bukharinecklacearray[0].desc , fulldesc : bukharinecklacearray[0].fulldesc};
    document.getElementById("product1selectbr").addEventListener("change",function(){
        var selectvalue= document.getElementById("product1selectbr").value;
        for(var i=0;i<bukharinecklacearray.length;i++){
            if(selectvalue == bukharinecklacearray[i].title){
                product1objbr = {imgsrc : bukharinecklacearray[i].imgsrc , title : bukharinecklacearray[i].title , desc : bukharinecklacearray[i].desc , fulldesc : bukharinecklacearray[i].fulldesc}
                
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
    for(var i=0;i<bukharinecklacearray.length;i++){
        if(selectvalue == bukharinecklacearray[i].title){
            product2objbr = {imgsrc : bukharinecklacearray[i].imgsrc , title : bukharinecklacearray[i].title , desc : bukharinecklacearray[i].desc , fulldesc : bukharinecklacearray[i].fulldesc}

           }
    }
    product2showbr();
})

function product1showbr(){
  
    document.getElementById('product1braclet').innerHTML = `
    <div class="card p-3" style="background-color: #ededed;border-radius:15px;">
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
    <div class="card p-3" style="background-color: #ededed;border-radius:15px;">
    <img src="${product2objbr.imgsrc}" width="100%" height="250px"/>
    <h2 class="mt-3">${product2objbr.title}</h2>
    <p class="mt-3">${product2objbr.desc}</p>
    <p class="mt-3">${product2objbr.fulldesc}</p>
    </div>
    `
}
product2showbr();
