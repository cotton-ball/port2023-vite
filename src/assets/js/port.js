import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function port() {
    gsap.registerPlugin(ScrollTrigger);
    const horSection = gsap.utils.toArray(".port__item");

    gsap.to(horSection, {
        xPercent: -100 * (horSection.length - 1),  // -120% 대신 -100% 사용
        ease: "none",
        scrollTrigger: {
            trigger: "#port",
            start: "top top",  // 시작 위치를 페이지 상단으로 설정
            end: () => `+=${horSection.length * window.innerWidth}`,  // 동적으로 끝 지점 설정
            pin: true,
            scrub: 1,
            markers: true,  // 문제를 디버깅하기 위해 markers를 true로 설정
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
}
