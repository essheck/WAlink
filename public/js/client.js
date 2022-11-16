window.onload = function(){
    document.getElementById("form").reset();
}

window.addEventListener("pageshow", () => {
    // update hidden input field
    document.getElementById("form").reset();
  });



var Input = document.getElementById("all-input");
Input.addEventListener("input" , hello);

function hello(e){
    let text = e.target.value;
    text = text.trim();
    const parts = text.split("\t");
    console.log(parts);
    // 0 - link , 1 - country , 2 - counsl date , 3 - time, 4 - phone no , 5 name
    
    document.getElementById("link").value = parts[0];
    document.getElementById("country").value = parts[1];
    document.getElementById("time").value = parts[3];
    document.getElementById("phonenumber").value = parts[4];
    document.getElementById("name").value = parts[5];
    document.getElementById("agent-name").value = parts[6];
};

document.getElementById("send-now").addEventListener("click" , () => {
    //document.getElementById("form").reset();
});

