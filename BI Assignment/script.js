var main= document.createElement("div")
main.setAttribute("style","background-color:red;position:relative;font-family:Verdana;")
document.body.appendChild(main)
var graybg=document.createElement("div")
graybg.setAttribute("style","background:#808080;height:250px;width: 70%;margin-left:15%;margin-right: 15%;margin-top:30px;margin-bottom:30px;position:absolute;")
main.appendChild(graybg)
var smallgraybg=document.createElement("div")
smallgraybg.setAttribute("style","background:#808080;height:25px;width: 70%;margin-left:15%;margin-right: 15%;margin-top:310px;margin-bottom:30px;position:absolute;")
main.appendChild(smallgraybg)
var profilepic=document.createElement("div")
profilepic.setAttribute("style","height:150px;width:10%;border-radius: 50%;background:#808080;position:absolute;margin-left:45%;margin-top:140px;border-width: 5px;border-style:dotted;border-color:#f7f708;padding:1px;")
main.appendChild(profilepic)
var profileimage=document.createElement("img")
profileimage.src="profile.jpg"
profileimage.setAttribute("style"," width:100%;height:100%;border-radius: 50%;")
profilepic.appendChild(profileimage)
var yellowbar= document.createElement("div")
yellowbar.innerHTML="<h1>John Doe</h1>"
yellowbar.setAttribute("style","background: #f3b02a;position:absolute;height: 70px;width:30%;margin-top: 260px;margin-left:35%;margin-right: 40%;text-align: center;")
main.appendChild(yellowbar)
var personalinfo=document.createElement("div")
personalinfo.setAttribute("style","font-size:15px;margin-left: 15%;width:70%;height:25px;border-bottom: solid black 2px;margin-top:340px;position:absolute;text-align: center;")
personalinfo.innerHTML="Varanasi India | +919140780963 | dummyemail.com | www.domain.com |"
main.appendChild(personalinfo)
var leftinformation=document.createElement("div")
leftinformation.setAttribute("style","border-right: black 2px solid;height:fit-content;width:35%;position:absolute;margin-top: 380px;margin-left:15%;")
main.appendChild(leftinformation)
var rightinformation=document.createElement("div")
rightinformation.setAttribute("style","height:fit-content;width:35%;position:absolute;margin-top: 380px;margin-left:51%;")
main.appendChild(rightinformation)
var topic1= document.createElement("div")
topic1.setAttribute("style","height:fit-content;width:98%;")
leftinformation.appendChild(topic1)
var prologo=document.createElement("img")
prologo.src="https://pp.netclipart.com/pp/s/244-2441803_profile-pic-icon-png.png"
prologo.setAttribute("style","height:35px;width:35px;border-radius:50%;margin-left:10%;position:absolute;")
topic1.appendChild(prologo)
var heading= document.createElement("div")
heading.setAttribute("style","margin-left:25%;font-size:15px;")
heading.innerHTML="<h1>Profile</h1>"
topic1.appendChild(heading)
var subtopic=document.createElement("div")
subtopic.setAttribute("style","font-size:15px;")
subtopic.innerHTML="<p>I am a full stack developer with strong fundamentals of Python and JS with hands on experience on Django, Bootstrap and MERN.</p>"
topic1.appendChild(subtopic)


var topic2= document.createElement("div")
topic2.setAttribute("style","height:fit-content;width:98%;")
leftinformation.appendChild(topic2)
var skillslogo=document.createElement("img")
skillslogo.src="skillslogo.jpg"
skillslogo.setAttribute("style","width:35px;height: 40px;margin-left:10%;position:absolute;")
topic2.appendChild(skillslogo)
var heading1= document.createElement("div")
heading1.setAttribute("style","margin-left:25%;")
heading1.innerHTML="<h1>Skills</h1>"
topic2.appendChild(heading1)
var subtopic2=document.createElement("div")
subtopic2.innerHTML="<h3>Technical Skills</h3>"
subtopic2.setAttribute("style","text-align:center;")
topic2.appendChild(subtopic2)
var subtopic=document.createElement("div")
subtopic.setAttribute("style","font-size:15px;")
subtopic.innerHTML="<p>Javascript</p>"
var slider=document.createElement("input")
slider.setAttribute("type","range")
slider.setAttribute("min","1")
slider.setAttribute("max","100")
slider.setAttribute("value","50")
slider.setAttribute("style","position:absolute;margin-left:50%;")
//,"min","1","max","100","value","50","style","width:100%"
topic2.appendChild(slider)

topic2.appendChild(subtopic)



var topic3= document.createElement("div")
topic3.setAttribute("style","height:fit-content;width:98%;")
leftinformation.appendChild(topic3)
var explogo=document.createElement("img")
explogo.src="experiencelogo.jpg"
explogo.setAttribute("style"," width:50px;height:30px;margin-left:10%;position:absolute;")
topic3.appendChild(explogo)
var heading= document.createElement("div")
heading.setAttribute("style","margin-left:25%;")
heading.innerHTML="<h1>Work Experience</h1>"
topic3.appendChild(heading)
var subtopic=document.createElement("div")
subtopic.setAttribute("style","text-align:center;font-size:15px;")
subtopic.innerHTML="<p>I have 3 years of experience as a freelance on codementor where i have worked on python assignments on a regular basis. I have 5 star rating from clients all across the globe.I have worked as a full time role for Company 1 and Company 2 .</p>"
topic3.appendChild(subtopic)
var subtopic3=document.createElement("div")
subtopic3.setAttribute("style","text-align:center;font-size:15px;")
subtopic3.innerHTML="<h3>Company 1</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tempor lacus, non placerat urna. Maecenas erat nisl, euismod eu urna at, vulputate volutpat mi. Morbi ullamcorper augue quisullamcorper maximus. Donec eu euismod diam, at tristique dolor. Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc.Nullam eu odio cursus, iaculis tellus non, ultrices nibh.Aliquam velit eros, pharetra non purus vel, fermentumcondimentum lectus. Donec nec ornare libero, ac lacinia tellus.</p>"
topic3.appendChild(subtopic3)

var righttopics=document.createElement("div")
righttopics.setAttribute("style","height:fit-content;width:98%;")
rightinformation.appendChild(righttopics)
var subtopic4=document.createElement("div")
subtopic4.setAttribute("style","text-align:center;font-size:15px;")
subtopic4.innerHTML="<h3>Company 2</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tempor lacus, non placerat urna. Maecenas erat nisl, euismod eu urna at, vulputate volutpat mi. Morbi ullamcorper augue quisullamcorper maximus. Donec eu euismod diam, at tristique dolor. Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc.Nullam eu odio cursus, iaculis tellus non, ultrices nibh.Aliquam velit eros, pharetra non purus vel, fermentumcondimentum lectus. Donec nec ornare libero, ac lacinia tellus.</p>"
righttopics.appendChild(subtopic4)
var subtopic5=document.createElement("div")
subtopic5.setAttribute("style","text-align:center;font-size:15px;")
subtopic5.innerHTML="<h3>Company 3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tempor lacus, non placerat urna. Maecenas erat nisl, euismod eu urna at, vulputate volutpat mi. Morbi ullamcorper augue quisullamcorper maximus. Donec eu euismod diam, at tristique dolor. Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc.Nullam eu odio cursus, iaculis tellus non, ultrices nibh.Aliquam velit eros, pharetra non purus vel, fermentumcondimentum lectus. Donec nec ornare libero, ac lacinia tellus.</p>"
righttopics.appendChild(subtopic5)
var subtopic6=document.createElement("div")
subtopic6.setAttribute("style","text-align:center;font-size:15px;")
subtopic6.innerHTML="<h2>Education</h2><h2>IIT-BHU</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tempor lacus, non placerat urna. Maecenas erat nisl, euismod eu urna at, vulputate volutpat mi. Morbi ullamcorper augue quisullamcorper maximus. Donec eu euismod diam, at tristique dolor. Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc.Nullam eu odio cursus, iaculis tellus non, ultrices nibh.Aliquam velit eros, pharetra non purus vel, fermentumcondimentum lectus. Donec nec ornare libero, ac lacinia tellus.</p>"
righttopics.appendChild(subtopic6)



            

