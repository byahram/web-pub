// Show "arrow" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
const save = document.querySelector("#nav");
const saveHeight = save.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
      if (window.scrollY > saveHeight) {
        arrowUp.classList.add("visible");
      } else {
        arrowUp.classList.remove("visible");
      }
});

// handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
    const scrollTo = document.querySelector("#main");
      scrollTo.scrollIntoView({ behavior: "smooth" });
});

//scrollIntoView
document.querySelectorAll("a[href^='#']").forEach(el => {
    el.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector(el.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "center",
        })
    });
});

// when click 'view the result'
document.querySelectorAll(".result").forEach(el => {
    el.querySelector("summary").addEventListener("click", () => {
        el.classList.toggle("active");
    })
});

// tab menu
$(document).ready(function() {
    let tabBtn = $("#nav > ul > li");       // 버튼 설정
    let tabCont = $("#main > section");         //콘텐츠 설정
    tabCont.hide().eq(0).show();     // 첫번째 콘텐츠만 보이게 설정

    tabBtn.on("click", function() {
        const index = $(this).index();      // 클릭한 번호를 저장

        $(this).addClass("active").siblings().removeClass("active");        // 내가 클릭한 버튼에 클래스를 추가하고 나머지 버튼은 삭제
        tabCont.eq(index).show().siblings().hide();         // 내가 클릭한 버튼의 콘텐츠는 보여주고 나머지는 숨김
    });
});

// menu
ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: {
        className: "isActive", 
        targets: "#header"
    },
});

ScrollTrigger.create({
    start: "top -80",
    end: 99999,
    toggleClass: {
        className: "isActive", 
        targets: "#nav"
    }
});
