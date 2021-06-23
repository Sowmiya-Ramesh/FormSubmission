var container=document.createElement('div');
container.setAttribute('class','container')
 var div=document.createElement('div');
div.setAttribute('class','row');
//form submission
var div1=document.createElement('div');
div1.setAttribute('class','col-4');
var form=document.createElement('form');
form.setAttribute('id','main');
var h3=document.createElement('h3');
h3.innerHTML="Fill the details";
//fname
var label1=ccc('label','fname','name','First Name');
var input1=bbb('input','form-control form-control-sm','text','fname','fname','');
var br1=document.createElement('br');

//lname
var label2=ccc('label','lname','name','Last Name');
var input2=bbb('input','form-control form-control-sm','text','lname','lname','');
var br2=document.createElement('br');

//address
var label3=ccc('label','address','foraddress','Address');
var input3=bbb('input','form-control form-control-sm','text','address','address','');
var br3=document.createElement('br');

//pincode
var label4=ccc('label','pin','forpin','PinCode');
var input4=bbb('input','form-control form-control-sm','text','pin','pin','');
var br4=document.createElement('br');

//state
var label5=ccc('label','state','state1','State');
var input5=bbb('input','form-control form-control-sm','text','state','state','');
var br5=document.createElement('br');

//country
var label6=ccc('label','country','forcountry','Country');
var input6=bbb('input','form-control form-control-sm','text','country','country','');
var br6=document.createElement('br');

//gender 
var label7=ccc('label','gender','forgender','Gender');
var labelm=ccc('label','male','male','Male');
var inputm=bbb('input','form-check-input','radio','gender','gender','Male');
var labelf=ccc('label','female','female','Female');
var inputf=bbb('input','form-check-input','radio','gender','gender','Female');
var br7=document.createElement('br');

//Multiple choices of food
var label8=ccc('label','','food','Food Choices');
var italic=document.createElement('i');
italic.setAttribute('id','italic')
italic.innerHTML="*(Press ctrl to select multiple)";
var select=document.createElement('select');
select.setAttribute('class','form-select form-select-sm');
select.setAttribute('name','choice');
select.setAttribute('id','choice');
select.setAttribute('multiple','');
var op1=aaa('option','Kimchi','Kimchi');
var op2=aaa('option','Pizza','Pizza');
var op3=aaa('option','Naan','Naan');
var op4=aaa('option','Sweets','Sweets');
var op5=aaa('option','Chocolates','Chocolates')

//submit button
var button=document.createElement('button');
button.setAttribute('class','btn btn-danger');
button.setAttribute('onclick','AddRow()');
button.setAttribute('id','btn');
button.setAttribute('name','button');
button.innerHTML="Submit";

//table for temporary database
var div2=document.createElement('div');
div2.setAttribute('class','col-8');
var hd=document.createElement('h3');
hd.innerHTML="Temporary Database";
var table=document.createElement('table');
table.setAttribute('class',"table table-striped table-dark");
table.style.border="4";
table.setAttribute('id','show');
var thead=document.createElement('thead');
   //thead.setAttribute('class','thead-dark')
var tr=document.createElement('tr');
var th1=document.createElement('th');
th1.innerHTML="First Name"
var th2=document.createElement('th');
th2.innerHTML="Last Name"
var th3=document.createElement('th');
th3.innerHTML="Address"
var th4=document.createElement('th');
th4.innerHTML="Zip"
var th5=document.createElement('th');
th5.innerHTML="State"
var th6=document.createElement('th');
th6.innerHTML="Country"
var th7=document.createElement('th');
th7.innerHTML="Gender"
var th8=document.createElement('th');
th8.innerHTML="Food"
tr.append(th1,th2,th3,th4,th5,th6,th7,th8);
thead.append(tr);
table.append(thead);
div2.append(hd,table);

//function for options
function aaa(ele,val,nam){
var tc=document.createElement(ele);
tc.setAttribute('value',val);
tc.innerHTML=nam;
return tc;
}
aaa();  

//function for label elements
function ccc(ele,far,id,value){
var bc=document.createElement(ele);
bc.setAttribute('for',far);
bc.setAttribute('id',id)
bc.innerHTML=value; 
return bc;
} 
ccc();

//function for input element
function bbb(tag,cls,typ,nam,id,val){
  var aa=document.createElement(tag);
  aa.setAttribute('class',cls);
  aa.setAttribute('type',typ);
  aa.setAttribute('name',nam);
  aa.setAttribute('id',id);
  aa.setAttribute('value',val);
  return aa;
}bbb();

label1.append(input1);
label2.append(input2);
label3.append(input3)
label4.append(input4)
label5.append(input5)
label6.append(input6);
labelm.append(inputm);
labelf.append(inputf);
label7.append(labelm,labelf)

select.append(op1,op2,op3,op4,op5)
label8.append(italic,select)
form.append(label1,br1,label2,br2,label3,br3,label4,br4,label5,br5,label6,br6,label7,br7,label8);
div1.append(h3,form,button);
div.append(div1,div2);
container.append(div)
document.body.append(container); 

var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];


var n = 1;
var x = 0;
//function to reset the form
function formReset(){
    document.getElementById("fname").value=" ";
document.getElementById("lname").value=" ";
document.getElementById("address").value=" ";
 document.getElementById("pin").value=" ";
document.getElementById("state").value=" ";
 document.getElementById("country").value=" ";

const gen = document.getElementsByName("gender");

      for(let i=0; i < gen.length; i++) {
            gen[i].checked = false;
                          }

                          var elements = document.getElementById("choice").options;

                          for(var i = 0; i < elements.length; i++){
                            elements[i].selected = false;
                          }
}

//function to add row
function AddRow(){
 
    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById("fname").value;
    list2[x] = document.getElementById("lname").value;
    list3[x] = document.getElementById("address").value;
    list4[x] = document.getElementById("pin").value;
    list5[x] = document.getElementById("state").value;
    list6[x] = document.getElementById("country").value;

    

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);
    var cel6 = NewRow.insertCell(5);
    var cel7 = NewRow.insertCell(6);
    var cel8 = NewRow.insertCell(7);
    
        


    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];
    cel6.innerHTML = list6[x];

    document.getElementsByName('gender').forEach(radio =>{
        if(radio.checked){
            cel7.innerHTML = radio.value;
        
        }
       
    });
    
    var emptyString="";
    var x= document.getElementById("choice");
    for(let i=0;i<x.options.length;i++){
        if(x.options[i].selected){
            emptyString+= " "+ x.options[i].value;
            
            cel8.innerHTML = emptyString;
            
        }
       
    }

   
    
   

   
    n++;
    x++;
        
formReset();
}

