<template>
	<div>
		<section class="se-container">
			<div class="se-slope">
				<article class="se-content">
					<h3>Power! Unlimited power!</h3>
					<p>Restraint is Darth Sidious’ most important tool; it’s the only mask he needs in order to hide behind his role as the scheming Chancellor Palpatine. One of Revenge of the Sith’s greatest joys is when he takes that mask off — just long enough to show Vader the vast potential of the dark side. </p>
				</article>
			</div>
			<div class="se-slope">
				<article class="se-content">
					<h3>Do. Or do not. There is no try.</h3>
					<p>Yoda’s most memorable quote, bar none, and one of the greatest in all of Star Wars. This is another line from the X-wing sequence on Dagobah, and are the last instructions the Jedi Master gives Luke before he attempts to raise his fighter from the swamp. Within the scene, it was a lightning bolt of dialogue, another great nugget of undeniable wisdom that teaches Luke to have a more serious mind. Yoda had consistently tried to teach Luke to focus on the present, and essentially, to grow up.</p>
					<ms-yoda></ms-yoda>
				</article>
			</div>
			<div class="se-slope">
				<article class="se-content">
					<h3>I am your father.</h3>
					<p>There is no escape! Don’t make me destroy you. Luke, you do not yet realize your importance. You’ve only begun to discover your power! Join me, and I will complete your training! With our combined strength, we can end this destructive conflict, and bring order to the galaxy.</p>
					<ms-vader></ms-vader>
				</article>
			</div>
			<div class="se-slope">
				<article class="se-content">
					<h3>The Force will be with you. Always.</h3>
					<p>These are old Ben’s final words to Luke before being cut down by Darth Vader, and he repeats them immediately after the film’s climactic space battle.</p>
				</article>
			</div>
			<div class="se-slope">
				<article class="se-content">
					<h3>Now, young Skywalker, you will die.</h3>
					<p>Ian McDiarmid went on to play Palpatine in five of the first six Star Wars films, but it all began with his haunting turn as the Emperor in Return of the Jedi. “He’s a bit of a mystery,” McDiarmid said recently at Star Wars Celebration. “I saw this face that they created in front of me, literally, and the yellow eyes, and I thought he looked like a sort of revolting reptile of some kind — a kind of toad.” </p>
				</article>
			</div>
			<div class="se-slope">
				<article class="se-content">
					<h3>Fear is the path to the dark side.</h3>
						<p>There’s plenty of great dialogue in The Phantom Menace, but this is the line everyone seems to remember best. Perhaps that’s because it’s such a signature Frank Oz performance. And, of course, it’s yet another powerful allusion to Skywalker’s transformation into Vader.</p>
				</article>
			</div>
			<div class="se-slope">
				<article class="se-content">
					<h3>I find your lack of faith disturbing.</h3>
						<p>Don’t be too proud of this technological terror you’ve constructed. The ability to destroy a planet is insignificant next to the power of the Force. 
							Originated in the 1977 film Star War IV – A new hope in a scene where the movies villains discuss the theft of important plans for a planet destroying battle station.</p>
				</article>
			</div>
			<div class="se-slope">
				<article class="se-content">
					<h3>Your focus determines your reality.</h3>
					<p>Use in pep talks to encourage positivity and to remind others to take control of their fate.</p>
				</article>
			</div>
		</section>
		<ms-atAtWalker></ms-atAtWalker>
	</div>
</template>

<script>
	import msYoda from './ms-yoda.vue';
	import msVader from './ms-vader.vue';
	import msAtAtWalker from './ms-atAtWalker.vue';

	export default{
		name: 'msStart',
		components: {
			msYoda,
			msVader,
			msAtAtWalker
		}
	}
</script>

<style scoped>
	.parallax-container {
	  position: relative;
	  overflow: hidden;
	  height: 500px;
	}

	.parallax-container .parallax {
	  position: absolute;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  z-index: -1;
	}

	.parallax-container .parallax img {
	  display: none;
	  position: absolute;
	  left: 50%;
	  bottom: 0;
	  min-width: 100%;
	  min-height: 100%;
	  -webkit-transform: translate3d(0, 0, 0);
	          transform: translate3d(0, 0, 0);
	  -webkit-transform: translateX(-50%);
	          transform: translateX(-50%);
	}
</style>