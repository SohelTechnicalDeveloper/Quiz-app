const ques = [
{

         "ques":"What is Computer ?",
          'A' : 'Machine',
          'B' : 'Electronic device',
          'C' : 'Software',
          'D' : 'Hardware',
          "ans" : 'A'
},
{

        "ques":"What is JavaScript ?",
         'A' : 'Machine',
         'B' : 'Electronic device',
         'C' : 'Software',
         'D' : 'Hardware',
         "ans" : 'A'
},
{

    "ques":"What is Java ?",
     'A' : 'Machine',
     'B' : 'Electronic device',
     'C' : 'Software',
     'D' : 'Hardware',
     "ans" : 'A' 
},
{

    "ques":"What is Php",
     'A' : 'Machine',
     'B' : 'Electronic device',
     'C' : 'Software',
     'D' : 'Hardware',
     "ans" : 'A'
},
{

    "ques":"What is C language",
     'A' : 'Machine',
     'B' : 'Electronic device',
     'C' : 'Software',
     'D' : 'Hardware',
     "ans" : 'A'
},
     
]
 
 ans = [];

  html = ""
  for(i=0;i<ques.length;i++)
{
     html +=`
        <div class="task-list ">
          <div class = 'question' que_num'${i+1}'>
            <h2>${i+1} : ${ques[i].ques} </h2>
         </div>

     <div class=" quiz ">
         <div class = option >
           <b>A : </b> <input id="input" name="ques_${i+1}" onclick='saveAns("A",${i})' type="radio"/> =>  ${ques[i].A}
         </div>
    </div>
    <div class=" quiz ">
        <div class = option >
          <b>B : </b> <input id="input" name="ques_${i+1}" onclick='saveAns("B",${i})' type="radio"/> =>  ${ques[i].B}
        </div>
    </div>
    <div class=" quiz ">
       <div class = option >
         <b>C : </b> <input id="input" name="ques_${i+1}" onclick='saveAns("C",${i})' type="radio"/> =>  ${ques[i].C}
       </div>
    </div>
    <div class=" quiz ">
      <div class = option >
        <b>D: </b> <input id="input" name="ques_${i+1}" onclick='saveAns("D",${i})' type="radio"/> =>  ${ques[i].D}
      </div>
    </div>
   `
   ans[i] ="No ans";
}

document.querySelector('#quiz-list').innerHTML = html;

function saveAns(option,index)
{
     ans[index] = option===ques[index].ans; 
     
}

function showAns()
{
     html= ""
     let right = 0;
     let wrong = 0;
     let na = 0;

     for(i=0;i<ans.length;i++)
     {
         if(ans[i]===true)
         {
            right++;
         }
         else if(ans[i]===false)
         { 
            wrong++;
         }
         else 
         {
             na++;
         }
         html +=`<h3>${i+1} : ${ans[i]} </h3>`
     }

     html = ` <div class="result"> <h2> Quiz Completed</h2> <br> <b>Right : ${right} , Wrong : ${wrong} , Not Attempt :${na} <br> </b> <br>`+html+"<br>"+"</div>"
  
      document.querySelector('#quiz-list').innerHTML = html;

}

var count = 20
let timer = setInterval(timeFun,1000)

function timeFun()
{
     document.getElementById('countDown').innerHTML = count;
     count--;
     if(count===0)
     {
         clearInterval(timer)
         showAns();
     }
}