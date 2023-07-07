import { For, Show } from "solid-js";
import { classnames } from "../../helper/classnames";
import {
  addPassiveListener,
  removePassiveListener,
} from "../../helper/passiveListener";
import "./ImageSlider.scss";

function ImageSlider(props) {
  const { images, id, className } = props;
  const classNames = classnames(["c-image-slider", className ?? false]);

  addPassiveListener(window, "DOMContentLoaded", initImageSlider);

  return (
    <div class={classNames} id={id}>
      <div class="c-slider">
        <div class="c-slides">
          <For each={images}>
            {(image, i) => (
              <img
                src={image.src}
                width={image.width}
                height={image.height}
                class="c-image"
                alt={`Image ${i()}`}
                data-index={i()}
              />
            )}
          </For>
        </div>

        <Show when={images.length > 1}>
          <div class="c-indicators">
            <For each={images}>
              {(_, i) => (
                <button
                  class="c-indicator"
                  data-index={i()}
                  aria-label={`Slider indicator ${i()}`}
                >
                  <div class="c-line"></div>
                </button>
              )}
            </For>
          </div>
        </Show>
      </div>
    </div>
  );
}

function initImageSlider() {
  const slider = document.querySelector(".c-image-slider");
  const slidesWrapper = slider?.querySelector(".c-slides");
  const slides = slider?.querySelectorAll(".c-image");
  const indicators = slider.querySelectorAll(".c-indicator");
  if (!slider || !slidesWrapper || slides.length < 2) return;

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
  if (indicators) indicators[0].classList.add("current");

  const observerOptions = { root: null, threshold: 0.5 };
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(slider);

  if (indicators) {
    for (const indicator of indicators) {
      addPassiveListener(indicator, "click", handleIndicatorClick);
    }
  }

  function observerCallback(entries, _) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        startAutoPlay();
        addPassiveListener(window, "keydown", arrowKeyHandler);
        addPassiveListener(slider, "mouseenter", stopAutoPlay);
        addPassiveListener(slider, "mouseleave", startAutoPlay);
        addPassiveListener(slidesWrapper, "touchstart", handleTouchStart);
        addPassiveListener(slidesWrapper, "touchmove", handleTouchMove);
        addPassiveListener(slidesWrapper, "touchend", handleTouchEnd);
      } else {
        removePassiveListener(window, "keydown", arrowKeyHandler);
        removePassiveListener(slider, "mouseover", stopAutoPlay);
        removePassiveListener(slider, "mouseout", startAutoPlay);
        removePassiveListener(slidesWrapper, "touchstart", handleTouchStart);
        removePassiveListener(slidesWrapper, "touchmove", handleTouchMove);
        removePassiveListener(slidesWrapper, "touchend", handleTouchEnd);
      }
    });
  }

  function slideTo(index) {
    if (isTimeout) return;
    const currentSlide = slider.querySelector(".c-image.current");
    const nextSlide = slides[index];
    if (!currentSlide || !nextSlide || currentSlide === nextSlide) return;

    const currentIndicator = slider.querySelector(".c-indicator.current");
    const nextIndicator = slider.querySelector(
      `.c-indicator[data-index="${index}"]`
    );

    stopAutoPlay();
    isTimeout = true;
    currentSlide.classList.remove("current");
    currentSlide.classList.add("prev");
    nextSlide.classList.add("current");

    if (currentIndicator) {
      currentIndicator.classList.remove("current");
      nextIndicator.classList.add("current");
    }

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
    slideTo(slideId);
  }

  function slideToPrev() {
    if (isTimeout) return;
    slideId = slideId - 1;
    if (slideId < 0) slideId = slides.length - 1;
    slider.classList.add("slide-right");
    slideTo(slideId);
  }

  function arrowKeyHandler(event) {
    if (event.key === "ArrowLeft") slideToPrev();
    if (event.key === "ArrowRight") slideToNext();
  }

  function startAutoPlay() {
    isAutoPlay = true;
    timeout = setTimeout(() => {
      slideToNext();
      startAutoPlay();
    }, duration);
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

  function handleIndicatorClick(e) {
    if (isTimeout) return;
    const index = e.target.dataset.index;
    if (!index) return;
    slider.classList.add(index > slideId ? "slide-left" : "slide-right");
    slideId = parseInt(index);
    slideTo(slideId);
  }
}

export default ImageSlider;
