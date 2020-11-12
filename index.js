function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showskill(){
    $("#skill_container").css("display","inherit");
    $("#skill_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#skill_container").removeClass("animated slideInRight");
    },800);
}
function closeskill(){
    $("#skill_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#skill_container").removeClass("animated slideOutRight");
        $("#skill_container").css("display","none");
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#skill").removeClass("animated fadeIn");
    },1000);
},1500);

const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
    });
    
    // Initial animation
    setTimeout(() => {
        span.classList.add('active');
    }, 750 * (idx+1))
});
 