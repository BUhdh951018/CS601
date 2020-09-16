function finalPayFunc(){
    let userid='put api user id';   // user iddddddddddddddddddddddddddddddddddd
    let address1= document.getElementById("address1");
    
    let address2= document.getElementById("address2");

    let city= document.getElementById("city");

    let state= document.getElementById("state");

    let zipcode= document.getElementById("zipcode");

    let xml="<ZipCodeLookupRequest USERID='"+ userid +"'><Revision>1</Revision><Address ID='0'><FirmName></FirmName><Address1>"+address1+"</Address1><Address2>"+address2+"</Address2><City>"+city+"</City><State>"+state+"</State></Address></ZipCodeLookupRequest>";
    let url="http://production.shippingapis.com/ShippingAPI.dll?API=ZipCodeLookup&XML="+xml;

    const myRequest = new Request(url);
    fetch(myRequest)
    .then(response => {
        response.text().then(text =>{
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text,"text/html");
            let show_error= document.getElementById("show_error");
            let error_msg= document.createElement("h3");    
                    
            if( xmlDoc.getElementsByTagName("ReturnText") && xmlDoc.getElementsByTagName("ReturnText").length > 0){
                console.log("Problem".getNodeValue(xmlDoc,"ReturnText"),"ZipCode:",getNodeValue(xmlDoc,"Zip5"));
                error_msg.innerHTML="Error in Address";
                    show_error.appendChild(error_msg);
                    setTimeout(function(){
                        show_error.innerHTML="";
                    },15000);
            }else{
                if(xmlDoc.getElementsByTagName("Zip5") && xmlDoc.getElementsByTagName("Zip5").length > 0){
                   console.log("ZipCode:", getNodeValue(xmlDoc,"Zip5")); 
                   error_msg.innerHTML="Error: Zipcode";
                    show_error.appendChild(error_msg);
                    setTimeout(function(){
                        show_error.innerHTML="";
                    },15000);
                
                }else{
                    console.log("Error: Address Not found");
                    error_msg.innerHTML="Error: Address Not found";
                    show_error.appendChild(error_msg);
                    setTimeout(function(){
                        show_error.innerHTML="";
                    },15000);
                    
    
                }
            }
            

        });
    });

    function getNodeValue(xmlDoc,tagName){
        return tagName ? xmlDoc.getElementsByTagName(tagName)[0].childNodes[0].nodeValue : null;
    }
}
