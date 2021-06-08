var platypus_r_img = new Array();
platypus_r_img[0] = "assets/platypus1.jpg";
platypus_r_img[1] = "assets/platypus2.jpg";
platypus_r_img[2] = "assets/platypus3.jpg";
platypus_r_img[3] = "assets/platypus4.jpg";
platypus_r_img[4] = "assets/platypus5.jpg";
platypus_r_img[5] = "assets/platypus6.jpg";

var left_pos = new Array();
left_pos[0] = "0%";
left_pos[1] = "5%";
left_pos[2] = "10%";
left_pos[3] = "15%";
left_pos[4] = "20%";
left_pos[5] = "25%";
left_pos[6] = "30%";
left_pos[7] = "35%";
left_pos[8] = "40%";
left_pos[9] = "45%";
left_pos[10] = "50%";
left_pos[11] = "55%";
left_pos[12] = "60%";
left_pos[13] = "65%";
left_pos[14] = "70%";
left_pos[15] = "75%";
left_pos[16] = "80%";
left_pos[17] = "85%";
left_pos[18] = "90%";
left_pos[19] = "95%";
left_pos[20] = "100%";

var top_pos = new Array();
top_pos[0] = "0%";
top_pos[1] = "5%";
top_pos[2] = "10%";
top_pos[3] = "15%";
top_pos[4] = "20%";
top_pos[5] = "25%";
top_pos[6] = "30%";
top_pos[7] = "35%";
top_pos[8] = "40%";
top_pos[9] = "45%";
top_pos[10] = "50%";
top_pos[11] = "55%";
top_pos[12] = "60%";
top_pos[13] = "65%";
top_pos[14] = "70%";
top_pos[15] = "75%";
top_pos[16] = "80%";
top_pos[17] = "85%";
top_pos[18] = "90%";
top_pos[19] = "95%";
top_pos[20] = "100%";


function platypus() {
    var button = document.getElementById("platybutton");
    var random = Math.floor(platypus_r_img.length * Math.random());
    var img = document.getElementById("img");
    img.src = platypus_r_img[random];
    var a = Math.floor(left_pos.length * Math.random());
    var b = Math.floor(top_pos.length * Math.random());
    img.style.left = left_pos[a];
    img.style.top = top_pos[b];
    var clonedimg = img.cloneNode();
    document.body.appendChild(clonedimg);
}