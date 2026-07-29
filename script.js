// AI Hub Frontend Script

console.log("AI Hub Loaded 🚀");


// Backend URL
// Later we will replace this with your Render URL

const API_URL = "http://localhost:5000";


// Test backend connection

async function checkBackend(){

    try{

        const response = await fetch(API_URL);

        const data = await response.json();


        console.log(
            "Backend Connected:",
            data.message
        );


    }

    catch(error){

        console.log(
            "Backend not connected yet"
        );

    }

}


checkBackend();



// Button animation

const buttons = document.querySelectorAll("button");


buttons.forEach(button=>{


    button.addEventListener("click",()=>{


        button.style.transform="scale(0.95)";


        setTimeout(()=>{

            button.style.transform="scale(1)";

        },150);


    });


});



// Future AI Chat function

async function sendMessage(message){


    try{


        const response = await fetch(
            `${API_URL}/api/chat`,
            {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },


                body:JSON.stringify({

                    message:message

                })

            }
        );


        const data = await response.json();


        return data.reply;


    }


    catch(error){


        return "Backend connection error";


    }


}
