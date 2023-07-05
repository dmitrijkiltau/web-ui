import { For } from "solid-js";
import { classnames } from "../../helper/classnames";
import { addPassiveListener, removePassiveListener } from "../../helper/passiveListener";
import "./ImageSlider.scss";

function ImageSlider(props) {
  const { images, id, className } = props;
  const classNames = classnames(["c-image-slider", className ?? false]);

  addPassiveListener(window, "DOMContentLoaded", initImageSlider);

  return (
    <div class={classNames} id={id}>
      <For each={images}>
        {(image, i) => <img src={image} class="c-image" alt={`Image ${i()}`} data-index={i()} />}
      </For>
    </div>
  );
}

function initImageSlider() {
  const slider = document.querySelector(".c-image-slider");
  const slides = slider?.querySelectorAll(".c-image");
  if (!slider || slides.length < 2) return;

  const duration = 3000;
  const slideDuration = 1000;
  let slideId = 0;
  let isAutoPlay = false;
  let timeout;
  let isTimeout = false;
  let touchStartX = 0;
  let touchEndX = 0;

  slider.style.setProperty("--animation-duration", `${slideDuration}ms`);
  slides[0].classList.add("current");
  startAutoPlay();

  const observerOptions = { root: null, threshold: 0.5 };
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(slider);

  function slideTo(nextSlide) {
    if (isTimeout) return;
    const currentSlide = slider.querySelector(".current");
    if (!currentSlide || !nextSlide || currentSlide === nextSlide) return;

    stopAutoPlay();
    isTimeout = true;
    currentSlide.classList.remove("current");
    currentSlide.classList.add("prev");
    nextSlide.classList.add("current");

    setTimeout(() => {
      isTimeout = false;
      slider.classList.remove("slide-left");
      slider.classList.remove("slide-right");
      currentSlide?.classList.remove("prev");
    }, slideDuration + 100);
  }

  function slideToNext() {
    if (isTimeout) return;
    slideId = slideId + 1;
    if (slideId >= slides.length) slideId = 0;
    slider.classList.add("slide-left");
    slideTo(slides[slideId]);
  }

  function slideToPrev() {
    if (isTimeout) return;
    slideId = slideId - 1;
    if (slideId < 0) slideId = slides.length - 1;
    slider.classList.add("slide-right");
    slideTo(slides[slideId]);
  }

  function observerCallback(entries, _) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        addPassiveListener(window, "keydown", arrowKeyHandler);
        addPassiveListener(slider, "mouseover", stopAutoPlay);
        addPassiveListener(slider, "mouseout", startAutoPlay);
        addPassiveListener(slider, "touchstart", handleTouchStart);
        addPassiveListener(slider, "touchmove", handleTouchMove);
        addPassiveListener(slider, "touchend", handleTouchEnd);
      } else {
        removePassiveListener(window, "keydown", arrowKeyHandler);
        removePassiveListener(slider, "mouseover", stopAutoPlay);
        removePassiveListener(slider, "mouseout", startAutoPlay);
        removePassiveListener(slider, "touchstart", handleTouchStart);
        removePassiveListener(slider, "touchmove", handleTouchMove);
        removePassiveListener(slider, "touchend", handleTouchEnd);
      }
    });
  }

  function arrowKeyHandler(event) {
    if (event.key === "ArrowLeft") slideToPrev();
    if (event.key === "ArrowRight") slideToNext();
  }

  function startAutoPlay() {
    isAutoPlay = true;
    slideToNext();
    timeout = setTimeout(startAutoPlay, duration);
  }

  function stopAutoPlay() {
    isAutoPlay = false;
    if (timeout) clearTimeout(timeout);
  }

  function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    touchEndX = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    if (touchEndX < touchStartX) slideToNext();
    if (touchEndX > touchStartX) slideToPrev();
    touchStartX = 0;
    touchEndX = 0;
  }
}

export default ImageSlider;
