var divSortedImages = document.getElementById("map-div-sorted-images");



var intImageOrder = 0;
var staImages = ["resource/pictures/img_image1_20240321_145011.jpg", "resource/pictures/img_image2_20240321_145051.jpg", 
            "resource/pictures/img_image3_20240321_145059.jpg"];
var intWidth, intHeight;
var tiTimingIdentity;



class MainpageMethods {

    sleep(ms) {
        return new Promise(resolve =>
          tiTimingIdentity = window.setTimeout(resolve, ms)
        )
    }



    cancelTiming() {
        window.clearTimeout(tiTimingIdentity);
    }



    async change() {
    
        while (intImageOrder < staImages.length + 1) {
    
            if (intImageOrder == staImages.length - 1) {
                intImageOrder = 0;
                divSortedImages.style.backgroundImage = `url(${staImages[intImageOrder]})`;
                await this.sleep(3000);
            }
            else {
                intImageOrder ++;
                divSortedImages.style.backgroundImage = `url(${staImages[intImageOrder]})`;
                await this.sleep(3000);  
            }
    
        }
    }

    back() {

        this.cancelTiming();
    
        if (intImageOrder == 0) {
            intImageOrder = staImages.length - 1;
            divSortedImages.style.backgroundImage = `url(${staImages[intImageOrder]})`;
        }
        else {
            intImageOrder --;
            divSortedImages.style.backgroundImage = `url(${staImages[intImageOrder]})`;
        }
    
    }


    
    forward() {
        
        this.cancelTiming();

        if (intImageOrder == staImages.length - 1) {
            intImageOrder = 0;
            divSortedImages.style.backgroundImage = `url(${staImages[intImageOrder]})`;
        }
        else {
            intImageOrder ++;
            divSortedImages.style.backgroundImage = `url(${staImages[intImageOrder]})`;
        }

    }

}