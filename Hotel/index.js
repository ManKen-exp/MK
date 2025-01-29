const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".links");

burger.addEventListener("click", () => {
	navlinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
	const counters = document.querySelectorAll(".stats__item-title");
	const duration = 2000;
	const steps = 60;
	const interval = duration / steps;

	counters.forEach((counter) => {
		const target = parseInt(counter.dataset.target);
		const suffix = counter.dataset.suffix;
		let current = 0;
		let step = 0;

		const timer = setInterval(() => {
			step++;
			const progress = step / steps;
			current = Math.min(Math.round(target * progress), target);
			counter.textContent = current + suffix;

			if (step >= steps) {
				clearInterval(timer);
			}
		}, interval);
	});
});
