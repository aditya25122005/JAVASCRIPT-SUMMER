// function step1(){
//     setTimeout(function(){
//         console.log('Image Select kar raha hu');
//         return 'Image';
        
//     },2000);
// }

// function step2(image){
//     setTimeout(function(){
//         console.log(`Filter ${image} laga raha hu`);
//         return 'Filtered Image'
        
//     },4000);
// }

// function step3(){
//     setTimeout(function(){
//         console.log('Caption dekh liya ');
//         return 'Captioned Image'
        
//     },6000);
// }

// function step4(final){
//     setTimeout(function(){
//         console.log(`${final} uploaded`);
        
//     },8000);
// }

// let image=step1();
// let filteredImage=step2(image);
// let CaptionedImage=step3(filteredImage);
// let uploadedImage=step4('Img1');

function step1(fn){
    setTimeout(function(){
        console.log(' selecting Image ');
        // return 'Image';
        fn('Image');
    },4000)
}

function step2(image,cb){
    setTimeout(function(){
        console.log(`Applying Filter to ${image}`);
        cb('filtered Image');
        
    },2000)
}

function step3(filteredImage,cb2){
    setTimeout(function(){
        console.log(`Applying caption on ${filteredImage}`);
        cb2('filtered with captioned Image');
    },3000);
}
function step4(finalImage){
    setTimeout(function(){
        console.log(`${finalImage} uploaded`);
        
    },2000);
}
step1(function(image){
    step2(image,function(filteredImage){
        step3(filteredImage,function(finalImage){
            step4(finalImage);
        });
    })
})