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
    console.log("Pre " +e.target.value)
    let text = e.target.value;
    text = text.trim();
    const parts = text.split("\t");
    console.log(parts);
    document.getElementById("time").value = parts[0];
    document.getElementById("link").value = parts[1];
    document.getElementById("phonenumber").value = parts[2]
};