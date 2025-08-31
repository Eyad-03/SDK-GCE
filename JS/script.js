window.addEventListener("scroll", function () {
    let landingPage = document.getElementById("landing");
    if (window.scrollY > 50) { 
        landingPage.classList.add("hidden");
    }
});

document.getElementById("enter-btn").addEventListener("click", function(){
    document.getElementById("landing").classList.add("hidden")
})


// الدالة التي تتحكم بعرض الأقسام  
function showSectionFun(sectionId) {
  // اخفاء جميع الأقسام
  const sections = document.querySelectorAll("section")
  sections.forEach(sec => sec.classList.remove("active"))

  // اظهار القسم المطلوب
  const sec = document.getElementById(sectionId)
  if(sec) {
    sec.classList.add("active")
    sec.scrollIntoView({behavior: "smooth"}) //لعمل scroll smooth
  }
}

// countdown
// التاريخ المستهدف
// تعديل ساعة المعرض
const eventDate = new Date("2025-09-24T10:00:00").getTime()
// يحسب الوقت الحالي وموعد الحدث
const timer = setInterval(() => {
  const now = new Date().getTime()
  const diff = eventDate - now

//   انتهاء الوقت
if (diff <= 0) {
    document.getElementById("countdownMessage").innerText = "🎉 The Event has Started!"
    document.getElementById("countdown").style.display = "none" //يوقف العداد
    clearInterval(timer)
} 
else {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    document.getElementById("days").innerText = days
    document.getElementById("hours").innerText = hours
    document.getElementById("minutes").innerText = minutes
}}, 1000)


//  صفحة تواصل معنا
function confirmationMessage(){
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("contactMessage").value.trim()
    const confirmation = document.getElementById("confirmation")

    if (name === "" || email === "" || message === ""){
        confirmation.textContent = "❗ Please fill in all fields."
        confirmation.style.color = "red"
    }
    else{
        confirmation.textContent = "Your message has been received , Thank You "
    }
}