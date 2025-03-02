let emailArea=document.querySelector('.email');
let userNameArea=document.querySelector('.user-name');
let fullNameInp=document.querySelector('[name=full-name-input]');
let emailInp=document.querySelector('[name=email-input]');
let gitHubUserNameInp=document.querySelector('[name=user-name-input]');
let emailRe=/\w+\n*@\w+.\w+/;
let userNameRe=/@/i;
let email=false;
let userName=false;
let all=false;
const handleSubmitData=()=>{
    if (fullNameInp.value!== '' && emailInp.value!== '' && gitHubUserNameInp.value!== '' ){
        if (emailInp.value.match(emailRe)){
            if (emailArea.lastChild.className==='valid-div') {
                emailArea.lastChild.remove();
                emailInp.classList.remove('valid-input');
            }
            email=true;
        }else{
            email=false;
            console.log(false);
            create("email");
            emailInp.value='';
        }
        if (gitHubUserNameInp.value.match(userNameRe)){
            if (userNameArea.lastChild.className==='valid-div') {
                userNameArea.lastChild.remove();
                gitHubUserNameInp.classList.remove('valid-input');
            }
            userName=true;
        }else{
            userName=false;
            create("userName");
            gitHubUserNameInp.value='';
        }
    }else{
    }
    if (email===true && userName=== true){
    //     document.querySelector('form').remove();
    //     document.querySelector('.header').innerHTML=`<h1>contgrats, <span>${fullNameInp.value}!</span>your ticket is ready.</h1> <p>we've emailed your ticket to <span>${emailInp.value}</span> and will send updates in the run up to the event.</p>`;
    //     document.querySelector('.header h1 span').classList.add('after-add-full-name');
    //     document.querySelector('.header p span').classList.add('after-add-full-name');
    //     let div=document.createElement('div');
    //     div.classList.add('ticket');
    //     document.body.appendChild(div);
    //     let img=document.createElement('img');
    //     img.src='images/pattern-ticket.svg';
    //     div.appendChild(img);
    //     div.appendChild(document.querySelector('body>div'));
    //     let span=document.createElement('span');
    //     span.textContent='Jan 31, 2025 / Austin, TX';
    //     div.appendChild(span);
    //     let infoDiv=document.createElement('div');
    //     div.appendChild(infoDiv);
    //     let userImage=document.createElement('img');
    //     userImage.src='images/image-avatar.jpg';
    //     userImage.classList.add('img');
    //     infoDiv.appendChild(userImage);
    //     let userNameInfo=document.createElement('h3');
    //     userNameInfo.textContent=`${fullNameInp.value}`;
    //     div.appendChild(userNameInfo);
    //     let gitHubImg=document.createElement('img');
    //     gitHubImg.src='images/icon-github.svg';
    //     div.appendChild(gitHubImg);
    //     let githubUserName=document.createElement('p');
    //     githubUserName.textContent=gitHubUserNameInp.value;
    //     div.appendChild(githubUserName);
    // }
}
const create=(area)=>{
    let validDiv=document.createElement('div');
    validDiv.classList.add('valid-div');
    let validSpan=document.createElement('span');
    validSpan.textContent=`please enter a valid ${area}`;
    validSpan.classList.add('span-valid');
    validDiv.appendChild(validSpan);
    let validImg=document.createElement('i');
    validImg.className='fa-solid fa-circle-info';
    validDiv.prepend(validImg);
    if (area==="email"){
        emailArea.appendChild(validDiv);
        emailInp.classList.add('valid-input');
    }else{
        userNameArea.appendChild(validDiv);
        gitHubUserNameInp.classList.add('valid-input');
    }
}
}