<script>
    import { onMount } from "svelte";

    let cardsContainer;

    // Cards spotlight
    class Spotlight {
        constructor(containerElement) {
            this.container = containerElement;
            this.cards = Array.from(this.container.children);
            this.mouse = {
                x: 0,
                y: 0,
            };
            this.containerSize = {
                w: 0,
                h: 0,
            };
            this.initContainer = this.initContainer.bind(this);
            this.onMouseMove = this.onMouseMove.bind(this);
            this.init();
        }

        initContainer() {
            this.containerSize.w = this.container.offsetWidth;
            this.containerSize.h = this.container.offsetHeight;
        }

        onMouseMove(event) {
            const { clientX, clientY } = event;
            const rect = this.container.getBoundingClientRect();
            const { w, h } = this.containerSize;
            const x = clientX - rect.left;
            const y = clientY - rect.top;
            const inside = x < w && x > 0 && y < h && y > 0;
            if (inside) {
                this.mouse.x = x;
                this.mouse.y = y;
                this.cards.forEach((card) => {
                    const cardX = -(card.getBoundingClientRect().left - rect.left) + this.mouse.x;
                    const cardY = -(card.getBoundingClientRect().top - rect.top) + this.mouse.y;
                    card.style.setProperty('--mouse-x', `${cardX}px`);
                    card.style.setProperty('--mouse-y', `${cardY}px`);
                });
            }
        }

        init() {
            this.initContainer();
            window.addEventListener('resize', this.initContainer);
            window.addEventListener('mousemove', this.onMouseMove);
        }
    }

    const cards = [
        {
            title:"Angus",
            body:"My portfolio",
            href:"//angus.paillaugue.fr"
        },
        {
            title:"Shop",
            body:"My shop project",
            href:"//shop.angus.paillaugue.fr"
        }
    ];

    onMount(() => {
        new Spotlight(cardsContainer);
    });

</script>
<div class="relative font-inter antialiased">

    <main class="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
        <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
    
            <div class="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group" data-spotlight bind:this={cardsContainer}>
                {#each cards as card}
                    <div class="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
                        <div class="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                            <!-- Radial gradient -->
                            <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                <div class="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                            </div>
                            <div class="flex flex-col h-full items-center text-center">
                                <!-- Image -->
                                <div class="relative inline-flex">
                                    <div class="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                                    <img class="inline-flex" src="https://cruip-tutorials.vercel.app/spotlight-effect/card-01.png" width="200" height="200" alt="Card 01" />
                                </div>
                                <!-- Text -->
                                <div class="grow mb-5">
                                    <h2 class="text-xl text-slate-200 font-bold mb-1">{card.title}</h2>
                                    <p class="text-sm text-slate-500">{card.body}</p>
                                </div>
                                <a class="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="{card.href}">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-slate-500 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>View</span>
                                </a>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </main>
</div>