

const slides = document.querySelectorAll(".slide");
const cardo = document.querySelectorAll(".cardo");
var counter=0;

function goFor(){
    counter++;
    
    slideImage();

    for(let i=0; i<cardo.length; i++)
    {
        if(counter==i)
        {
            cardo[i].classList.add("active");
        }
        else{
            cardo[i].classList.remove("active");
        }
    }
}

function goBack(){
    if(counter>0)
        counter--;
    slideImage();

    for(let i=0; i<cardo.length; i++)
        {
            if(counter==i)
            {
                cardo[i].classList.add("active");
            }
            else{
                cardo[i].classList.remove("active");
            }
        }
}


const slideImage = () => {
    
    let i=0;
    

    slides.forEach(
        (slide) => {
            
            slides[i].style.transform=`translateX(-${counter*210}px)`;
            i++;

        }
    )

}

document.querySelector(".next").addEventListener("click", goFor );
document.querySelector(".prev").addEventListener("click", goBack );




