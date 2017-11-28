<template>
	<footer>
		<section id="utility" class="social">
			<div class="social-links">
				<p>Follow Star Wars</p>
				<ul id="social-links">
					<li>
						<a class="facebook facebook-icon" href="https://www.facebook.com/StarWars" 
						target="_blank" data-cto="social"></a>
					</li>
					<li>
		                <a class="tumblr tumblr-icon" href="http://starwars.tumblr.com/" 
		                target="_blank" data-cto="social"></a>
		            </li>
		            <li>
		                <a class="twitter twitter-icon" href="https://twitter.com/starwars" 
		                target="_blank" data-cto="social"></a>
		            </li>
		            <li>
                		<a class="instagram instagram-icon" href="http://instagram.com/starwars" 
                		target="_blank" data-cto="social"></a>
              		</li>
              		<li>
                		<a class="google_plus google_plus-icon" href="https://plus.google.com/+StarWars/posts" 
                		target="_blank" data-cto="social"></a>
              		</li>
              		<li>
                		<a class="youtube youtube-icon" href="http://www.youtube.com/user/starwars" 
                		target="_blank" data-cto="social"></a>
              		</li>
				</ul>
			</div>
		</section>
		<!-- END SOCIAL LINKS -->
		<section id="help">
			<div>
				<p id="copyright">TM &amp; © Schadofilm Ltd. All Rights Reserved</p>
				<ul id="legal">
		            <li>
		            	<a target="_blank" href="http://disneytermsofuse.com/">
		            		Terms of Use
		            	</a>
		            </li>
		            <li>
		            	<a target="_blank" href="http://disney.go.com/guestservices/legalnotices?ppLink=pp_wdig">
		            		Legal Notices
		            	</a>
		            </li>
		            <li>
		            	<a target="_blank" href="http://disneyprivacycenter.com/">
		            		Privacy Policy
		            	</a>
		            </li>
		            <li>
		            	<a target="_blank" href="https://disneyprivacycenter.com/kids-privacy-policy/english/">
		            		Children’s Online Privacy Policy
		            	</a>
		            </li>
		            <li>
		            	<a target="_blank" href="http://www.shopdisney.com/star-wars?CMP=OTL-Dcom&amp;att=StarWars_Footer_Store">
		            		Star Wars at shopDisney
		            	</a>
		            </li>
		            <li>
		            	<a target="_blank" href="http://help.starwars.com">
		            		Star Wars Helpdesk
		            	</a>
		            </li>
		        </ul>
			</div>
		</section>
	</footer>
</template>

<script>
	export default{
		name: 'msFooter'
	}
</script>

<style scoped>
	footer {
		margin-top: 50px;
		min-height: 282px;
		background-image: url(https://static-mh.content.disney.io/starwars/assets/footer/vader-1c0fe900f0e4.jpg);
		background-position: center;
		background-repeat: no-repeat;
	    display: block;
	    position: relative;
	    width: 100%;
	    height: 100%;
	    clear: both;
	    margin: auto 0;
	    letter-spacing: 1.05px;
	    background-color: #1a1a1a;
	}

	section {
		display: block;
	}

	footer #utility {
		padding-top: 16px;
		margin: 0 auto;
	}

	div {
		display: block;
	}

	footer #utility .social-links {
		text-align: center;
	}

	footer #utility .social-links p {
		margin: 48px 0 28px;
		text-transform: uppercase;
	}

	footer a, footer p {
		font-size: 0.8rem;
		font-family: GeoGrotesque, Helvetica, Arial, sans-serif;
	    font-weight: 400;
	    color: #858a8d;
	}

	ul {
		color: #aaa;
		list-style: none;
	}

	footer #utility .social-links li{
	    margin-left: 0;
	    width: 50px;
	    height: 50px;
	    margin: 0 20px;
	    padding: 0;
	    display: inline-block;
    	vertical-align: middle;
    	color: #aaa;
	}
	
	footer #utility .social-links li a {
	    display: block;
	    color: transparent;
	    opacity: 0.42;
	    background-repeat: no-repeat;
	    background-image: url(https://static-mh.content.disney.io/starwars/assets/shared/social_sprite-dd24527bbe38.png);
	    background-size: 700% 300%;
	    width: 36px;
	    height: 36px;
	}

	footer #utility .social-links li a.facebook {
	    background-position: 0% 0%;
	}

	footer #utility .social-links li a.tumblr {
	    background-position: 16.66667% 0%;
	}

	footer #utility .social-links li a.twitter {
	    background-position: 33.33333% 0%;
	}

	footer #utility .social-links li a.instagram {
	    background-position: 50% 0%;
	}

	footer #utility .social-links li a.google_plus {
	    background-position: 66.66667% 0%;
	}

	footer #utility .social-links li a.youtube {
	    background-position: 83.33333% 0%;
	}

	footer #help {
	    text-align: center;
	    margin-top: 10px;
	    max-width: 650px;
	    margin: 0 auto;
	}

	footer #help #copyright {
	    margin: 20px auto 6px;
	}

	footer #help #legal {
	    margin: 0 auto;
	    font-size: 0;
    	box-sizing: border-box;
	}


	footer #help #legal li {
	    display: inline-block;
	    width: auto;
	    min-height: 1em;
	    line-height: 0.8rem;
	    margin: 6px 0;
	    padding: 0 8px 0 9px;
	    border: 0;
	    border-right: 1px solid rgba(255,255,255,0.09);
	}

	footer #help #legal li a {
	    padding-bottom: 2px;
	    display: inline-block;
	    height: 100%;
	    width: auto;
	    box-sizing: border-box;
	}
</style>