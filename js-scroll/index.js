import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';


const scrollTracker = document.querySelector('.scroll-tracker');
const animatedImages = document.querySelector('.image-rotate-in');
const scrollTrackingTimeLine = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: 'block',
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
})

animatedImages.forEach((image) =>{
    const imageOffsetTop = image.imageOffsetTop;
    const imageHeight = image.offsetHeight;
    //const scollTrackerAnimate = new ScrollTimeline({
        //scrollOffsets: [
        //    {target: animatedImages, edge: 'end', threshold: '0'},
        //    {target: animatedImages, edge: 'start', threshold: '1'}
        //]
    //})

    image.animate(
        {
            transform: ['scaleX(0)', 'scaleX(1)']
    },{
        duration: 1,
        time: scrollTrackingTimeLine,
    })

    animatedImages.animate(
        {
        transform: ['perspective(1000px) rotateX(45deg)', 'perspective(1000px) rotate(0)'],
        opacity: ['0.5', '1']
    },
    {
        duration: 1,
        easing: 'linear',
        timeline: new ScrollTimeLine({
            scrollOffsets: [
                CSS.px(imageOffsetTop + imageHeight - window.innerHeight),
                CSS.px(imageOffsetTop)
            ]
        }),
    }
    )
})

/*
document.getElementById('parallax').animate(
    { transform: ['translateY(0)', 'translateY(100px)']},
    { duration: 10000, // Totally arbitrary!
      fill: 'both',
      timeline: new ScrollTimeline({
          scrollOffsets: [
              new CSSUnitValue(0, 'px'),
              new CSSUnitValue(200, 'px')
          ]
      })
    });
    */