let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
    }
    window.addEventListener('load',()=>{
        wishMe()
    })
    let speechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition
    let recognition=new speechRecognition()
    recognition.onresult=(event)=>{
        let currentIndex=event.resultIndex
        let transcript=event.results[currentIndex][0].transcript
        ConstantSourceNode.innerText=transcript
        takeCommand(transcript.toLowerCase())
    }
    btn.addEventListener("click",()=>{
        recognition.start()
        voice.style.display="block"
        btn.style.display="none"
    })
    function takeCommand(message){
        voice.style.display="none"
        btn.style.display="flex"
        if(message.includes("hello")||message.includes("hey")){
            speak("hello sir,What can i help you?")
        }
        else if(message.includes("who are you")){
            speak("i am shifra, Your virtual assistant")
        }else if(message.includes("open youtube")){
            speak("opening youtube....")
            window.open("https://www.youtube.com")
        }
        else if(message.includes("open google")){
            speak("opening google....")
            window.open("https://www.google.com")
        }
        else if(message.includes("open facebook")){
            speak("opening facebook...")
            window.open("https://www.facebook.com")
        }
        else if(message.includes("open instagram")){
            speak("opening instagram...")
            window.open("https://www.instagram.com")
        }
        else if(message.includes("open calculator")){
            speak("opening calculator...")
            window.open("https://www.calculator.com")
        }
        else if(message.includes("open whatsapp")){
            speak("opening whatsapp..")
            window.open("https://web.whatsapp.com")
        }
        else if(message.includes("time")){
            let time=new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
            speak(time)
        }
        else if(message.includes("date")){
            let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
            speak(date)
        }
         
         else{
             let finalText="this is what i found on internet regarding" + message.replace("shifra","") 
             || message.replace("shifra","")
             speak(finalText)
             window.open('https://www.google.com/search?q=${message.replace("shifra","")}' ,"_blank")
        }
        }
 
 
   