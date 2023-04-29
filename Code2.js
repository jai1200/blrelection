function loadJson(){
    let a = document.getElementById("na").value;
    let match=0,v="",i;
    var ins=0,si=0,con=0,hco=0,hg=0;
    let b,c,d,g,h="",j="",k,l,m,n,o,p,q,r,s;
    let ca="",ha="";
    var e=[],f=[];
     
    if(a!=0)
    {
   
     fetch('./JsonNXml.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        
       
         
           for(i=0;i<data["VElec"].length;i++)
            {
               if(a==data["VElec"][i].copno||a==data["VElec"][i].comob)
                {
                    match=1; 
                    b=data["VElec"][i].thana;
                    c=data["VElec"][i].center;
                    d=data["VElec"][i].booth_cen;
                   /* e=data["VElec"][i].coname;
                    f=data["VElec"][i].copno;
                    g=data["VElec"][i].boothno;*/

                    h+=data["VElec"][i].coname+" "+
                        data["VElec"][i].cocity+" "+
                        data["VElec"][i].codist+" पी0एन0ओ0 "+
                        data["VElec"][i].copno+" मोबाइल नं0 "+
                        data["VElec"][i].comob+" "+"<b>"+
                        data["VElec"][i].coduty+"</b>";

                    r=data["VElec"][i].Critical;
                    s=data["VElec"][i].van;
                }
                  else if(a==data["VElec"][i].hgmob||a==data["VElec"][i].hgpno) 
                  { 
                    match=1; 
                    b=data["VElec"][i].thana;
                    c=data["VElec"][i].center;
                    d=data["VElec"][i].booth_cen;
                   /* e=data["VElec"][i].coname;
                    f=data["VElec"][i].copno;
                    g=data["VElec"][i].boothno;*/


                    h+=data["VElec"][i].hgname+" "+
                        data["VElec"][i].hgcity+" "+
                        data["VElec"][i].hgdist+" पी0एन0ओ0 "+
                        data["VElec"][i].hgpno+" मोबाइल नं0 "+
                        data["VElec"][i].hgmob+" "+"<b>";
                        

                    r=data["VElec"][i].Critical;
                    s=data["VElec"][i].van;

                } 
                
            }

            for(i=0;i<data["VElec"].length;i++)
            {
                if(b==data["VElec"][i].thana&&c==data["VElec"][i].center)
                {
                    l=data["VElec"][i].coname; 
                    m=data["VElec"][i].hgname;
                    e[i]=data["VElec"][i].booth_no;
                    f[i]=data["VElec"][i].booth_name;



                    if(l.substring(0,5)==="म0का0")
                        ins++;
                        else if(l.substring(0,5)==="उ0नि0")
                        si++;
                        else if(l.substring(0,6)==="हे0का0")
                        hco++;
                        else if(l.substring(0,3)==="का0")
                        con++;
                    if(m.substring(0,6)==="हो0गा0")   
                        hg++;

                        if(data["VElec"][i].coname!="?")
                            ca+=data["VElec"][i].coname+" "+
                                data["VElec"][i].cocity+" "+
                                data["VElec"][i].codist+" पी0एन0ओ0 "+
                                data["VElec"][i].copno+" मोबाइल नं0 "+
                                data["VElec"][i].comob+" "+
                                data["VElec"][i].coduty+"<br\><br\>";

                        if(data["VElec"][i].hgname!="?")
                            ha+=data["VElec"][i].hgname+" "+
                                data["VElec"][i].hgcity+" "+
                                data["VElec"][i].hgdist+" मोबाइल नं0 "+
                                data["VElec"][i].hgmob+"<br\><br\>";
                        

                       
                }  
            }

            var tab=document.getElementById('tab');
            var cells= tab.getElementsByTagName('td');
            var dd=document.getElementById("diff");
         if(match==1&&h.substring(0,5)=="उ0नि0")
         {
         
             cells[0].innerHTML="<b>"+interChange(b)+"</b>";
             cells[1].innerHTML=h;
             cells[1].bgColor="pink"
             cells[2].innerHTML=c;
             cells[3].innerHTML=b;
             cells[4].innerHTML=d;
             cells[5].innerHTML=removeusingSet(e).join("<br /><br /><br /><br />");
             cells[6].innerHTML=removeusingSet(f).join("<br /><br />");
             cells[7].innerHTML=ca;
             cells[8].innerHTML=ha;
             cells[9].innerHTML=r;
             cells[10].innerHTML=s;
             //cells[11].innerHTML="I";
             cells[12].innerHTML="उ0नि0-"+si;
             cells[13].innerHTML="हे0का0-"+hco;
             cells[14].innerHTML="का0-"+con+" / "+"म0का0-"+ins;
             cells[15].innerHTML="हो0गो0-"+hg;

             tab.style['display']="table";
             tab.style['backgroundColor']="white";
             tab.style['border']="Red";
            dd.style.display="block";
             document.getElementById('y').innerHTML="";
         }
         else if(match==1&&h.substring(0,6)=="हे0का0"||match==1&&h.substring(0,3)=="का0")
         {
         
            cells[0].innerHTML="<b>"+interChange(b)+"</b>";
             cells[1].innerHTML=h;
             cells[1].bgColor="yellow"
             cells[2].innerHTML=c;
             cells[3].innerHTML=b;
             cells[4].innerHTML=d;
             cells[5].innerHTML=removeusingSet(e).join("<br /><br /><br /><br />");
             cells[6].innerHTML=removeusingSet(f).join("<br /><br />");
             cells[7].innerHTML=ca;
             cells[8].innerHTML=ha;
             cells[9].innerHTML=r;
             cells[10].innerHTML=s;
             //cells[11].innerHTML="I";
             cells[12].innerHTML="उ0नि0-"+si;
             cells[13].innerHTML="हे0का0-"+hco;
             cells[14].innerHTML="का0-"+con+" / "+"म0का0-"+ins;
             cells[15].innerHTML="हो0गो0-"+hg;
           
            tab.style['display']="table";
            tab.style['backgroundColor']="white";
            tab.style['border']="Red";
            dd.style.display="block";
            document.getElementById('y').innerHTML="";
         }
        else if(match==1&&h.substring(0,6)=="हो0गा0")
         {
         
            cells[0].innerHTML="<b>"+interChange(b)+"</b>";
             cells[1].innerHTML=h;
             cells[1].bgColor="White"
             cells[2].innerHTML=c;
             cells[3].innerHTML=b;
             cells[4].innerHTML=d;
             cells[5].innerHTML=removeusingSet(e).join("<br /><br /><br /><br />");
             cells[6].innerHTML=removeusingSet(f).join("<br /><br />");
             cells[7].innerHTML=ca;
             cells[8].innerHTML=ha;
             cells[9].innerHTML=r;
             cells[10].innerHTML=s;
             //cells[11].innerHTML="I";
             cells[12].innerHTML="उ0नि0-"+si;
             cells[13].innerHTML="हे0का0-"+hco;
             cells[14].innerHTML="का0-"+con+" / "+"म0का0-"+ins;
             cells[15].innerHTML="हो0गो0-"+hg;
           
            tab.style['display']="table";
            tab.style['backgroundColor']="white";
            tab.style['border']="Red";
            dd.style.display="block";
            document.getElementById('y').innerHTML="";
         }
         else
         {
             tab.style['display']="none";
             tab.style['background']="white";
             tab.style['border']="white";
             document.getElementById('y').style['center']="true";
             dd.style.display="none";
             document.getElementById('y').innerHTML="कोई डाटा उपलब्ध नहीं है!!!";
             console.log(match);
         }
       
            
        
    })
}
else
window.alert("Please Input PNO Number or Mobile Number")

function removeusingSet(arr)
 {
    let outputArray = Array.from(new Set(arr))
    return outputArray
 }


 function interChange(a)
 {
    if(a=="को0नगर")
    return "बलरामपुर";
    else if(a=="गैसड़ी")
    return "को0 गैसड़ी";
    else if(a=="पचपेड़वा")
    return "थाना पचपेड़वा";
    else if(a=="तुलसीपुर")
    return "तुलसीपुर";
    else if(a=="को0 उतरौला")
    return "उतरौला";
 }
}