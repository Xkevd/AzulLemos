const openQuestionButton = document.querySelectorAll("#faq-div section button");
const answerPara = document.querySelectorAll("#faq-div section p:nth-child(3)");
const questionPara = document.querySelectorAll("#faq-div section p:nth-child(1)")

function openQuestion(){
    for(let i=0; i<openQuestionButton.length; i++){
        openQuestionButton[i].addEventListener("click",()=>answerPara[i].classList.toggle("closed"));
        questionPara[i].addEventListener("click",()=>answerPara[i].classList.toggle("closed"));
    }
}
openQuestion()