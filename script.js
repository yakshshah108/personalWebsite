$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Replace the video ID with your own YouTube video ID
    var videoID = "HD13eq_Pmp8";

    // Create a variable to hold the player object
    var player;

    // Function to create the YouTube player
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoID,
        playerVars: {
        'autoplay': 0, // Don't autoplay the video
        'controls': 1, // Show the video controls
        'modestbranding': 1, // Hide the YouTube logo
        'rel': 0, // Don't show related videos at the end
        'showinfo': 0 // Hide the video title and uploader information
    }
});
}

// Function to check if the video is in the user's view and play/pause accordingly
function checkVideoInView() {
  var playerTop = $('#player').offset().top;
  var playerBottom = playerTop + $('#player').height();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  // If the player is in the user's view, play the video
  if (playerTop < viewportBottom && playerBottom > viewportTop) {
    player.playVideo();
  }
  // Otherwise, pause the video
  else {
    player.pauseVideo();
  }
}

// Event listener for scrolling
$(window).scroll(function() {
  checkVideoInView();
});

// Event listener for resizing the window
$(window).resize(function() {
  checkVideoInView();
});


    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Automated Device and Network Testing", "Develop and Deploy communication services"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Contact us"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Strategy","Tech Procurement" ,"Lab Development", "Test Execution", "Custom Software"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});