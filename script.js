const burger = document.querySelector('nav svg');
console.log(burger);

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  if(burger.classList.contains('active')) {
    gsap.to(".links", {x: "0%"});
    gsap.to(".line", {stroke: "#2C365E"})
    gsap.fromTo(".links a", {opacity: 0, y: 0}, {opacity: 1, y: 20, delay: 0.5, stagger: 0.35});
    gsap.set("body", {overflow: "hidden"})
  }else{
    gsap.to(".links", {x: "100%"})
    gsap.to(".line", {stroke: "white"})
    gsap.set("body", {overflow: "auto"})
    gsap.set("body", {overflowX: "hidden"})
  }
});

const videos = gsap.utils.toArray(".videos");
gsap.set(videos, {opacity: 0});
videos.forEach(video => {
  ScrollTrigger.create({
    trigger: video,
    start: "top center",
    end: "bottom center",
    // markers:true,
    onEnter: () => {
      gsap.to(video, {opacity: 1});
      video.play();
    },
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
  })
})