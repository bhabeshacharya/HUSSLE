$(".icon").click(function () {
    $(".menu-items").toggle();
  });
  $(".menu-anchor").click(function () {
    $(".menu-items").toggle();
  });
  
  //bmi calculation
  function bmi() {
    let name = document.getElementById("nm").value;
    let a = document.getElementById("height").value;
    let b = document.getElementById("weight").value;
    let c = a / 100;
    var BMI = b / (c * c);
    var nbmi = BMI.toFixed(2);
    document.getElementById("label-bmi").innerHTML = "BMI = " + nbmi;
  
    if (nbmi < 18.5) {
      document.getElementById("ans").innerHTML = "Underweight";
      document.getElementById("bmi-text").innerHTML =
        "Hello " +
        name +
        "! Don't worry we've got the best diet plans to gain weight and maintain a healthy lifestyle. ";
    } else if (nbmi >= 18.5 && nbmi <= 24.9) {
      document.getElementById("ans").innerHTML = "Normal";
      document.getElementById("bmi-text").innerHTML =
        "Hello " +
        name +
        "! Looks like you are very fit. Join us and continue your fitness journey with Fitzone. ";
    } else if (nbmi >= 25 && nbmi <= 29.9) {
      document.getElementById("ans").innerHTML = "Overweight";
      document.getElementById("bmi-text").innerHTML =
        "Hello " + name + "! Don't worry we will help you to get back in shape.";
    } else if (nbmi >= 30) {
      document.getElementById("ans").innerHTML = "Obesity";
      document.getElementById("bmi-text").innerHTML =
        "Hello " +
        name +
        "! Join us to get the best diet and fitness plans to lead a healthy lifestyle.";
    }
  }
  
  $("#fbmr").click(function () {
    $(".info-container").hide();
    $(".fbmr-container").show();
  });
  $("#fmc").click(function () {
    $(".info-container").hide();
    $(".mc-container").show();
  });
  $("#fbmr-back").click(function () {
    $(".fbmr-container").hide();
    $(".info-container").show();
  });
  $("#mc-back").click(function () {
    $(".mc-container").hide();
    $(".info-container").show();
  });
  
  function BMR() {
    let mbtn = document.getElementById("mbtn");
    let fbtn = document.getElementById("fbtn");
    let w1 = document.getElementById("fbmr-w").value;
    let w2 = w1 * 2.205;
    let w3 = w2.toFixed(2);
    let h1 = document.getElementById("fbmr-h").value;
    let h2 = h1 / 2.54;
    let h3 = h2.toFixed(2);
    let age = document.getElementById("fbmr-a").value;
  
    if (mbtn.checked == true) {
      let mbmr = 66 + 6.3 * w3 + 12.9 * h3 - 6.8 * age;
      let mbmr1 = Math.round(mbmr);
      document.getElementById("fbmr-ans").innerHTML =
        "BMR = " + mbmr1 + " calories/day";
    } else if (fbtn.checked == true) {
      let fbmr = 655 + 4.3 * w3 + 4.7 * h3 - 4.7 * age;
      let fbmr1 = Math.round(fbmr);
      document.getElementById("fbmr-ans").innerHTML =
        "BMR = " + fbmr1 + " calories/day";
    }
  }
  
  function MC() {
    let ybmr = document.getElementById("mc-bmr").value;
    let sedentary = document.getElementById("sedentary");
    let lactive = document.getElementById("lactive");
    let mactive = document.getElementById("mactive");
    let vactive = document.getElementById("vactive");
    let eactive = document.getElementById("eactive");
  
  
    if (sedentary.checked == true) {
      let mc = ybmr * 1.2;
      mc = Math.round(mc);
      document.getElementById("mc-ans").innerHTML =
        "MC = " + mc + " calories/day";
    } else if (lactive.checked == true) {
      let mc = ybmr * 1.375;
      mc = Math.round(mc);
      document.getElementById("mc-ans").innerHTML =
        "MC = " + mc + " calories/day";
    } else if (mactive.checked == true) {
      let mc = ybmr * 1.55;
      mc = Math.round(mc);
      document.getElementById("mc-ans").innerHTML =
        "MC = " + mc + " calories/day";
    } else if (vactive.checked == true) {
      let mc = ybmr * 1.725;
      mc = Math.round(mc);
      document.getElementById("mc-ans").innerHTML =
        "MC = " + mc + " calories/day";
    } else if (eactive.checked == true) {
      let mc = ybmr * 1.9;
      mc = Math.round(mc);
      document.getElementById("mc-ans").innerHTML =
        "MC = " + mc + " calories/day";
    }
  
  }