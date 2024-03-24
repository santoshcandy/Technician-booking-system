

document.addEventListener('DOMContentLoaded',loadcontent);
function loadcontent(){
    loaditems()
}
   
 const n_items= document.querySelectorAll(".n_items")
 const plumber_container = document.getElementById("plumber_list");

//-------------------count-------------
 let number={n1:1,n2:1,n3:1,n4:1,n5:1,n6:1,n7:1,n8:1,n9:1,n10:1,n11:1,n12:1,n13:1,n14:1}

document.getElementById('btn1').addEventListener('click',()=>{
     
    number.n1 = number.n1++
    document.getElementById("num1").innerHTML= number.n1++
    
})

document.getElementById('btn2').addEventListener('click',()=>{
    number.n2 = number.n2++
     document.getElementById("num2").innerHTML= number.n2++
    
})

document.getElementById('btn3').addEventListener('click',()=>{
     document.getElementById("num3").innerHTML= number.n3++
})

document.getElementById('btn4').addEventListener('click',()=>{
     document.getElementById("num4").innerHTML= number.n4++
})

document.getElementById('btn5').addEventListener('click',()=>{
     document.getElementById("num5").innerHTML= number.n5++
})

document.getElementById('btn6').addEventListener('click',()=>{
     document.getElementById("num6").innerHTML= number.n6++
})

document.getElementById('btn7').addEventListener('click',()=>{
     document.getElementById("num7").innerHTML= number.n7++
})

document.getElementById('btn8').addEventListener('click',()=>{
     
    document.getElementById("num8").innerHTML= number.n8++
})
document.getElementById('btn9').addEventListener('click',()=>{
     
    document.getElementById("num9").innerHTML= number.n8++
})
document.getElementById('btn10').addEventListener('click',()=>{
     
    document.getElementById("num10").innerHTML= number.n8++
})
document.getElementById('btn11').addEventListener('click',()=>{
     
    document.getElementById("num11").innerHTML= number.n8++
})
document.getElementById('btn12').addEventListener('click',()=>{
     
    document.getElementById("num12").innerHTML= number.n8++
})
document.getElementById('btn13').addEventListener('click',()=>{
     
    document.getElementById("num13").innerHTML= number.n8++
})
document.getElementById('btn14').addEventListener('click',()=>{
     
    document.getElementById("num14").innerHTML= number.n8++
})
// var num12=0


//-----------------------------
  
 // GETTING FOR EACH -----------------------------
 function loaditems(){
    //selecting border
    const fittings= document.querySelectorAll(".fittngs");
    fittings.forEach((fitting)=>{
         fitting.addEventListener("click",()=>{
             fitting.style.border="2.5px solid";
             
            })
        })
        
// seleting items in to proseed list
    const selecter= document.querySelectorAll(".select")
     selecter.forEach((btn)=> {
        btn.addEventListener("click", selected)
    })
    

    
    
// items cancal button
    const x= document.querySelectorAll(" #none")
    x.forEach((none)=>{
        none.addEventListener('click', canceled)
    })
}


 
    
    
    function canceled(itemsname,price){
       let x_parent = this.parentElement
       x_parent.remove()
       items_list.filter((fill)=>{fill.itemsname=!itemsname;
        
    })
    }


    
let items_list =[]

function selected(cons){
     let items = this.parentElement
     let item = items.parentElement
    
     let itemsname =item.querySelector(".itemname").innerHTML
     let prices= item.querySelector(".price").innerHTML
     let count = item.querySelector(".n_items").innerHTML
     price=Number(prices)
      
let new_item_list ={itemsname,price}
     if(items_list.find((name)=>name.itemsname==new_item_list.itemsname)){
         alert( itemsname +"  "+"already added")
         return;
        }else{
            items_list.push(new_item_list)
            
        }
        sub_total = price*count;
          
    let new_items_adder = create_items(itemsname,prices);
     let element = document.createElement('div');
     element.innerHTML=new_items_adder;
     let budget = document.querySelector('.selectedelemenet');
     budget.append(element);
     item.querySelector(".n_items").innerHTML=0
     loaditems();
     updatetotal()
     reset()

}
function reset(){
    number.n1=1;
    number.n2=1;
    number.n3=1;
    number.n4=1;
    number.n5=1;
    number.n6=1;
    number.n7=1;
    number.n8=1;
    number.n9=1;
    number.n10=1;
    number.n11=1;
    number.n12=1;
    number.n13=1;
    number.n14=1;

}

function updatetotal(){
    let tots = document.querySelectorAll(".added_items")
    let cons=0 ;
 let subtots = tots.forEach(value=> {
    let fulltots = value.querySelector(".final").innerHTML
    let totalnumber = Number(fulltots)
     cons += (totalnumber)
     })
    const total=  document.getElementById("final_total").innerHTML='RS.'+ cons ;
     
}


function create_items(itemsname,price,count){
return `
<div class="added_items" id="add_items">
    <tr>
      <td>  <h3>  ${itemsname} :</h3></td>
         
      <td> <h4 class="subtotal"> RS. <span class="final">${sub_total}</span></h4><td>
       <td>  <i class="fa-solid fa-xmark"   id="none"  > </i></td>
         </tr>
     </div>
`

}

// console.log(total_array)

document.getElementById('plumber_list').addEventListener('click',()=>{
    document.getElementById("proseed_container").style.right="2.2%";
})

document.getElementById('prosscced').addEventListener('click',()=>{
   const book= document.getElementById('bookelement').style.display="block";
   book.border="2.5px solid"
   const totalselecton= document.querySelectorAll(".added_items").length;
   document.querySelector(".totalselc").innerHTML= '('+totalselecton+')'
})



document.getElementById('btn12').addEventListener('click',()=>{
    var number12= document.getElementById("num12").innerHTML;
    
    number12 = Number(number12);
    console.log(typeof(number12))
    number12 = ++number12
    console.log(number12)

     
 })
 document.getElementById('cancelbtn').addEventListener('click',()=>{
    const book= document.getElementById('bookelement').style.display=" none";
    
 })


  