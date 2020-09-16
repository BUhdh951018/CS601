$(document).ready(function(){
    
    let total_price=0;
    let all_sushi_buy="";

    parser = new DOMParser();
    xmlDoc = parser.parseFromString(sushiData,"text/xml");
    xmlDoc_length = xmlDoc.documentElement.childNodes.length;
        let id;
        let name;
        let image;
        let price;
        let product_div;
        let buy;

        let show_div = document.getElementById("show");
        
        let show_name;
        let show_image;
        let show_price;
        let buy_button;

        for(let i=0; i<xmlDoc_length; i++){
            id = xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue;
            name = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
            image = xmlDoc.getElementsByTagName("image")[i].childNodes[0].nodeValue;
            price = xmlDoc.getElementsByTagName("price")[i].childNodes[0].nodeValue;
            price = "Rate: $"+ price;

            product_div = document.createElement("div");     //formatting.. giving better looks
            show_name = document.createElement("h3");
            show_image = document.createElement("img");
            show_price = document.createElement("h5");
            buy_button = document.createElement("button");
            
            buy_button.setAttribute("id",id);

            show_name.innerHTML = name;
            show_image.setAttribute("src",image);
            show_price.innerHTML = price;
            buy_button.innerHTML = "Buy";
product_div.setAttribute("style","background-color:'grey'")
            product_div.appendChild(show_name);
            product_div.appendChild(show_image);
            product_div.appendChild(show_price);     //formatting.. giving better looks
            product_div.appendChild(buy_button);

            product_div.setAttribute("style","float:left");     //formatting.. giving better looks
            show_div.appendChild(product_div);     //formatting.. giving better looks
        }
        
        $("button").on("click", function(){

            for(let i=0; i<xmlDoc_length; i++){
                let id = xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue;
                let price = xmlDoc.getElementsByTagName("price")[i].childNodes[0].nodeValue;
                let name = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
                if(id==this.id){
                    if(total_price==0){
                        all_sushi_buy= '"'+name+'"';
                    }
                    else{
                        all_sushi_buy= all_sushi_buy + " ," + '"'+name+'"';
                    }
                    total_price= parseFloat(total_price)+ parseFloat(price);

                    


                    let bill_msg= document.getElementById("bill_msg");
                    bill_msg.innerHTML="";

                    let show_price= document.createElement("h3");
                    show_price.innerHTML= ">>>>>  Hey! Your bill is $"+total_price.toFixed(2)+" enjoy your "+all_sushi_buy+" <<<<<";
                    //show_price.setAttribute("value",">>>>>  Hey! Your bill is $"+total_price.toFixed(2)+" enjoy your "+all_sushi_buy+" <<<<<");
                    //show_price.setAttribute("readonly","readonly");

                    bill_msg.appendChild(show_price);



                    let show_bill= document.getElementById("bill_div");
                    show_bill.innerHTML="";

                    
                    let address1= document.createElement("input");
                    address1.setAttribute("type","text");
                    address1.setAttribute("placeholder","Address 1");
                    address1.setAttribute("id","address1");
                    
                    
                    let address2= document.createElement("input");
                    address2.setAttribute("type","text");
                    address2.setAttribute("placeholder","Address 2");
                    address2.setAttribute("id","address2");

                    let city= document.createElement("input");
                    city.setAttribute("type","text");
                    city.setAttribute("placeholder","City");
                    city.setAttribute("id","city");

                    let state= document.createElement("input");
                    state.setAttribute("type","text");
                    state.setAttribute("placeholder","State");
                    state.setAttribute("id","state");

                    let zipcode= document.createElement("input");
                    zipcode.setAttribute("type","text");
                    zipcode.setAttribute("placeholder","Zip Code");
                    zipcode.setAttribute("id","zipcode");

                    let bill_button= document.createElement("input");
                    bill_button.setAttribute("type","button");
                    bill_button.setAttribute("value","Place Order");
                    bill_button.setAttribute("id","finalPay");
                    bill_button.setAttribute("onClick","finalPayFunc()");
                    
                    show_bill.appendChild(address1);
                    show_bill.appendChild(address2);
                    show_bill.appendChild(city);
                    show_bill.appendChild(state);
                    show_bill.appendChild(zipcode);
                    show_bill.appendChild(bill_button);
                    
                }
            }
        });

       

    });