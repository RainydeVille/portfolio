export function typingEffect(elementId, text, speed = 120, onComplete) {
  const element = document.getElementById(elementId);

  if (!element) return;

  element.textContent = ""; //prevent from running twice

  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      setTimeout(type, speed);
    } else {
      if (onComplete) onComplete();
    }
  }

  type();
}
