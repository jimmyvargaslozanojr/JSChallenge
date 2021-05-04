function ageInDays(){
    let birthYear = prompt('What year were tou born... Good friend?');
    let ageInDayss = (2021 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
    
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);

    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageInDayss);
}

function reset(){   
    document.getElementById('ageInDays').remove();
}

function catgenerate(){
    let img = document.createElement('img');
    // img.setAttribute('id','cat-image');
    // img.setAttribute('src','/static/images/cat.jpg');
    // document.getElementById('cats').appendChild(img);
    let div = document.getElementById('cats');
    img.src = "/static/images/cat.jpg";
    div.appendChild(img);
}