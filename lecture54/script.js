const t1 = performance.now();
let fragment = document.createDocumentFragment();

for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "this is para: " + i;
    fragment.appendChild(para);
    //there is no reflow and repaint for the above code of line 
}
//the below line takes one reflow and one repaint
document.body.appendChild(fragment);
const t2 = performance.now();

console.log("the performance time is:" + (t2-t1));