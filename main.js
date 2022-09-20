window.addEventListener('load', () => {
    const currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    document.getElementById('date').innerText = currentDate;
    
    const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const email = params.get('email');
    const mobile = params.get('phone');
    const domainName = params.get('dname');
    const domainExtension = params.get('dnamee');
   

    document.querySelectorAll('.name').forEach(item=>{
        item.innerText = name;
    });
   

    document.querySelector('#email').innerText = email;
    document.querySelector('#mobile').innerText = mobile;

    document.querySelectorAll('.dom-extension').forEach(item=>{
        item.innerText = domainName+"."+domainExtension;
    });

    document.querySelector('#just-domain-extension').innerText = domainExtension;

    document.getElementById('download_as_jpg').addEventListener('click', function(){
        html2canvas($('.container'),{
            background :'#FFFFFF',
            onrendered: function(canvas){
                var a = document.createElement("a");
                a.href = canvas.toDataURL("image/jpg");
                a.download = `${domainName}_application.jpg`;
                a.click();
            }
        })
    });

    document.getElementById('download_as_pdf').addEventListener('click', function() {
        const applicationElement = $('#application-wrapper');
        html2pdf().from(applicationElement).save();   
    });

});


