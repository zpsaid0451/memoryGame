
//found from stack overflow
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


window.onload = () => {

    let values = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
    values = shuffle(values);

    let matches = 0;
    let clicks = 0;

    let exposed1 = null;
    let exposed2 = null;

    const press = numb => {

        if (!exposed1) {
            exposed1 = numb;
            flip(numb);
        } else if (!exposed2) {
            if (numb === exposed1)
                return;
            exposed2 = numb;
            flip(numb);


            if (values[exposed1 - 1] === values[exposed2 - 1]  && matches + 1 == 8){
                alert(`GOOD JOB!!! you made ${clicks / 2} attempts.`);
            }
        } else
            flipBack();

    };

    const flip = numb => {
        clicks++;
        let element = document.getElementById(`button_${numb}`);
        element.innerHTML = values[numb - 1];
        element.style.background = "lightblue";

    };


    let correctGuesses = 0;
    const flipBack = () => {

        if (values[exposed1 - 1] !== values[exposed2 - 1]) {


            let element1=document.getElementById(`button_${exposed1}`);
            let element2=document.getElementById(`button_${exposed2}`);
            element1.innerHTML = 'M';
            element2.innerHTML = 'M';
            element1.style.background = "#DDDDDD";
            element2.style.background = "#DDDDDD";

        } else {
            matches++;

            if (matches === 8) {
                alert(`GOOD JOB!!! you made ${clicks / 2} attempts.`);
            }

        }



        exposed1 = null;
        exposed2 = null;

    }




    console.log(values);

    for (let i=1; i<17; i++){
        let id = `button_${i}`;
        document.getElementById(id).addEventListener('click', () => press(i));
    }


    document.getElementById("button_new").addEventListener('click', () => {
        exposed1 = null;
        exposed2 = null;

        values = shuffle(values);
        matches = 0;
        clicks = 0;
        for (let i=1; i<17; i++){
            let id = `button_${i}`;
            let element = document.getElementById(id);
            element.innerHTML = 'M'
            element.style.background = "#DDDDDD";
        }
    });

}