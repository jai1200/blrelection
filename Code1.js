function loadJson(){
    let a = document.getElementById("na").value;
    let match=0,v="",i;
    var ins=0,si=0,con=0,hco=0;
    let b,c,d,e,f,g,h="",j="",k,l,m,n,o,p,q,r,s;
    let ca="",ha="";

    var table =
    `<tr>
        <th align='center'>विधान सभा</th>
        <th align='center'>केन्द्र संख्या</th>
        <th align='center'>नाम अधिकारी/कर्मचारी</th>
        <th align='center'>पी0एन0ओ0</th>
        <th align='center'>मोबाइल नम्बर</th>
        <th align='center'>होमगार्ड का नाम</th>
        <th align='center'>मोबाइल नम्बर</th>
        <th align='center'>बस संख्या</th>
        <th align='center'>सी0ए0पी0एफ0</th>
    </tr>`;




   // console.log("value of a is "+a);
    if(a!=0)
    {
   
     fetch('./JsonXml.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        
       
         //  console.log(data["Election"]["VElec"].length)
           for(i=0;i<data["Election"]["VElec"].length;i++)
            {
               if(a==data["Election"]["VElec"][i].copno||a==data["Election"]["VElec"][i].comob)
                {
                    match=1; 
                    b=data["Election"]["VElec"][i].code;
                    c=data["Election"]["VElec"][i].center;
                    d=data["Election"]["VElec"][i].thana;
                    e=data["Election"]["VElec"][i].pname;
                    f=data["Election"]["VElec"][i].pno;
                    g=data["Election"]["VElec"][i].boothno;

                    h+=data["Election"]["VElec"][i].coname+" "+
                        data["Election"]["VElec"][i].codis+" पी0एन0ओ0 "+
                        data["Election"]["VElec"][i].copno+" मोबाइल नं0 "+
                        data["Election"]["VElec"][i].comob+" "+"<b>"+
                        data["Election"]["VElec"][i].coduty+"</b>";

                    r=data["Election"]["VElec"][i].capf;
                    s=data["Election"]["VElec"][i].bus;
                }
                  else if(a==data["Election"]["VElec"][i].hgmob) 
                  { 
                    match=1; 
                    b=data["Election"]["VElec"][i].code;
                    c=data["Election"]["VElec"][i].center;
                    d=data["Election"]["VElec"][i].thana;
                    e=data["Election"]["VElec"][i].pname;
                    f=data["Election"]["VElec"][i].pno;
                    g=data["Election"]["VElec"][i].boothno;

                    h+=data["Election"]["VElec"][i].hgname+" "+
                        data["Election"]["VElec"][i].hgoffice+" "+
                        data["Election"]["VElec"][i].hgdis+" मोबाइल नं0 "+
                        data["Election"]["VElec"][i].hgmob;

                    
                    r=data["Election"]["VElec"][i].capf;
                    s=data["Election"]["VElec"][i].bus;

                } 
                
            }

            for(i=0;i<data["Election"]["VElec"].length;i++)
            {
                if(b==data["Election"]["VElec"][i].code&&c==data["Election"]["VElec"][i].center)
                {
                    l=data["Election"]["VElec"][i].coname; 

                    if(l.substring(0,5)==="निरी0")
                        ins++;
                        else if(l.substring(0,5)==="उ0नि0")
                        si++;
                        else if(l.substring(0,6)==="हे0का0")
                        hco++;
                        else if(l.substring(0,3)==="का0")
                        con++;
                        

                        if(data["Election"]["VElec"][i].coname!="?")
                            ca+=data["Election"]["VElec"][i].coname+" "+
                                data["Election"]["VElec"][i].codis+" पी0एन0ओ0 "+
                                data["Election"]["VElec"][i].copno+" मोबाइल नं0 "+
                                data["Election"]["VElec"][i].comob+" "+
                                data["Election"]["VElec"][i].coduty+"<br\><br\>";

                            ha+=data["Election"]["VElec"][i].hgname+" "+
                                data["Election"]["VElec"][i].hgoffice+" "+
                                data["Election"]["VElec"][i].hgdis+" मोबाइल नं0"+
                                data["Election"]["VElec"][i].hgmob+"<br\><br\>";
                        

                        /*table += "<tr><td>" +
                            data["Election"]["VElec"][i].code+"</td><td align='center'>" +
                            data["Election"]["VElec"][i].center + "</td><td align='center'>" +
                            data["Election"]["VElec"][i].coname+ "</td><td align='center'>" +
                            data["Election"]["VElec"][i].copno+"</td><td align='center'>" +
                            data["Election"]["VElec"][i].comob+"</td><td align='center'>" +
                            data["Election"]["VElec"][i].hgname+ "</td><td align='center'>" +
                            data["Election"]["VElec"][i].hgmob+ "</td><td align='center'>" +
                            data["Election"]["VElec"][i].bus+"</td><td align='center'>" +
                            data["Election"]["VElec"][i].capf+"</td></tr>";*/
                }  
            }

            var tab=document.getElementById('tab');
            var cells= tab.getElementsByTagName('td');

         if(match==1&&h.substring(0,5)=="उ0नि0")
         {
         
             cells[0].innerHTML=b;
             cells[1].innerHTML=h;
             cells[1].bgColor="pink"
             cells[2].innerHTML=c;
             cells[3].innerHTML=d;
             cells[4].innerHTML=e;
             cells[5].innerHTML=ca;
             cells[6].innerHTML=ha;
             cells[7].innerHTML=r;
             cells[8].innerHTML=s;
             cells[10].innerHTML="निरी0-"+ins;
             cells[11].innerHTML="उ0नि0-"+si;
             cells[12].innerHTML="हे0का0-"+hco;
             cells[13].innerHTML="का0-"+con;
            
             tab.style['display']="table";
             tab.style['backgroundColor']="white";
             tab.style['border']="Red";
             document.getElementById('y').innerHTML="";
         }
         else if(match==1&&h.substring(0,6)=="हे0का0"||match==1&&h.substring(0,3)=="का0")
         {
         
            cells[0].innerHTML=b;
            cells[1].innerHTML=h;
            cells[1].bgColor="#FFFFE0";
            cells[2].innerHTML=c;
            cells[3].innerHTML=d;
            cells[4].innerHTML=e;
            cells[5].innerHTML=ca;
            cells[6].innerHTML=ha;
            cells[7].innerHTML=r;
            cells[8].innerHTML=s;
            cells[10].innerHTML="निरी0-"+ins;
            cells[11].innerHTML="उ0नि0-"+si;
            cells[12].innerHTML="हे0का0-"+hco;
            cells[13].innerHTML="का0-"+con;
           
            tab.style['display']="table";
            tab.style['backgroundColor']="white";
            tab.style['border']="Red";
            document.getElementById('y').innerHTML="";
         }
        else if(match==1&&h.substring(0,6)=="हो0गा0")
         {
         
            cells[0].innerHTML=b;
            cells[1].innerHTML=h;
            cells[1].bgColor="white";
            cells[2].innerHTML=c;
            cells[3].innerHTML=d;
            cells[4].innerHTML=e;
            cells[5].innerHTML=ca;
            cells[6].innerHTML=ha;
            cells[7].innerHTML=r;
            cells[8].innerHTML=s;
            cells[10].innerHTML="निरी0-"+ins;
            cells[11].innerHTML="उ0नि0-"+si;
            cells[12].innerHTML="हे0का0-"+hco;
            cells[13].innerHTML="का0-"+con;
           
            tab.style['display']="table";
            tab.style['backgroundColor']="white";
            tab.style['border']="Red";
            document.getElementById('y').innerHTML="";
         }
         else
         {
             tab.style['display']="none";
             tab.style['background']="white";
             tab.style['border']="white";
             document.getElementById('y').innerHTML="कोई डाटा उपलब्ध नहीं है!!!"+h;
             console.log(match);
         }
       
              //  console.log(match)
        
    })
}
else
window.alert("Please Input PNO Number or Mobile Number")

//document.getElementById("diff").innerHTML=v;
}
