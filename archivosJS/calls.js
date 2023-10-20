
//--------- llamada al menu de navegacion--------------->
const  callMenu = new Promise((resolve,reject)=>{
  
    let navegacion = 'http://localhost/game/componentes/nav_menu/navMenu.php';
        resolve(navegacion);

    
   


    
})
//--------------end llamada navegacion-->




//-------------------------llamada  a los datos automoviles--------------->

let urls = ["https://portal.edu-apps.com.ar/api/products/?format=json",""];

const callAutomoviles = new Promise((resolve,reject)=>{
    $.ajax({
        url: urls[1], success: function (result) {//--init result
          
          
         // result = JSON.parse(result);
          autos = result;
          
          resolve(autos);
  
        },//end result
  
        error: function (error) {//--init error->

            reject(alert("error " + error));
          
  
        }
      });//--end error



});
//-------------------------END llamada  a los datos automoviles--------------->



