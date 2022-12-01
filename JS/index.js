// All question, answer & options objects ---------->
const quizProps = [
    {
        qus: 'Q1: What stands for P.C. ?',
        a: 'Personal Computer',
        b: 'Private Comuter',
        c: 'Public Computer',
        d: 'Permanent Copmuter',
        ans: 'a'
    },
    {
        qus: 'Q2: Which one is the first search engine in internet ?',
        a: 'Google',
        b: 'Altavista',
        c: 'Archie',
        d: 'WAIS',
        ans: 'c'
    },
    {
        qus: 'Q3: First computer virus is known as..',
        a: 'Rabbit',
        b: 'Creeper Virus',
        c: 'Elk Cloner',
        d: 'SCA Virus',
        ans: 'b'
    },
    {
        qus: 'Q4: Which of the following is not an operating system ?',
        a: 'DOS',
        b: 'Mac',
        c: 'C',
        d: 'Linux',
        ans: 'c'
    },
    {
        qus: 'Q5: .gif is an extension of ?',
        a: 'Image file',
        b: 'video file',
        c: 'Audio file',
        d: 'Word file',
        ans: 'a'
    },
    {
        qus: 'Q6: Where is the headquater of Microsoft office located ?',
        a: 'texas',
        b: 'New York',
        c: 'Carlifornia',
        d: 'Washington',
        ans: 'd'
    },
    {
        qus: 'Q7: Mac Operating System is developed by which company ?',
        a: 'IBM',
        b: 'Apple',
        c: 'Microsoft',
        d: 'Samsung',
        ans: 'b'
    },
    {
        qus: 'Q8: Computer Hard Disk was first introduced in 1956 by ',
        a: 'Dell',
        b: 'Apple',
        c: 'Microsoft',
        d: 'IBM',
        ans: 'd'
    },
    {
        qus: 'Q9: In computer world, Trojan refer to ',
        a: 'Virus',
        b: 'Malware',
        c: 'Worm',
        d: 'Spyware',
        ans: 'b'
    },
    {
        qus: 'Q10: Who is also known as the the father of Indian supercomputing ? ',
        a: 'Raghunath Mashelkar',
        b: 'Vijay Bhatkar',
        c: 'Jayant Narlikar',
        d: 'Nandan Nilekani',
        ans: 'b'
    },];


// DOM manupulation & stores in variables------------>
const question = document.getElementById('question');
const opt_1 = document.getElementById('opt_1');
const opt_2 = document.getElementById('opt_2');
const opt_3 = document.getElementById('opt_3');
const opt_4 = document.getElementById('opt_4');
const submit = document.getElementById('submit');
const option = document.querySelectorAll('.option');
const show_area = document.getElementById('show_area');
const score = document.getElementById('score');



let quizPropsIndex = 0;
let result = 0;

const loadQuestion = () => {

    const elements = quizProps[quizPropsIndex];

    question.innerHTML = elements.qus;
    opt_1.innerHTML = elements.a;
    opt_2.innerHTML = elements.b;
    opt_3.innerHTML = elements.c;
    opt_4.innerHTML = elements.d;
}

loadQuestion();

const getAnswer = () => {
    let answer;
    option.forEach((elem) => {
        if (elem.checked) {
            answer = elem.id
        }
    })
    return answer;
}

const diselectOption = () =>{
    option.forEach((elem)=>{
            elem.checked = false;
    })
}


submit.addEventListener('click', () => {

    const checkedAnswers = getAnswer();

    if (checkedAnswers === quizProps[quizPropsIndex].ans) {
        result++;
    };

    quizPropsIndex++;

    

    if (quizPropsIndex < quizProps.length) {
        loadQuestion();
    } else {
        score.innerHTML = `You have scored ${result}/${quizProps.length}`
        show_area.classList.remove('show_item');

    }

    diselectOption();

});


// play_again button DOM_trget & function declaration --------------->

document.getElementById('play_more').addEventListener('click', () => {
    location.reload();
});

