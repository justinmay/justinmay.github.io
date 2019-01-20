import React from 'react';
import './blog.css';

function NavBar(props) {
  return(
    <div>
      <a 
        href="#Home" 
        class="floatRight"
        onClick={() => props.onClickNav()}
      >
        <p color="white" align="top">About Me</p>
      </a>
      
    </div>

  )
}

class Blog extends React.Component {

	render(){
		return(
			<div>
				<NavBar
					onClickNav={() => this.props.onClickToSplitScreenMain()}
				/>
				<title>Justin May Blog</title>
				<meta charset="UTF-8"></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
				<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"></link>
				<body class="w3-light-grey">

					<div class="w3-content yikes">
						<header class="w3-container w3-center w3-padding-32"> 
						  <h1 id="top"><b>Someone in the crowd</b></h1>
						  <p>Welcome to the blog of <span class="w3-tag">Justin May</span></p>
						</header>
					</div>

					<div class="w3-row">

						<div class="w3-col l8 s12">

							<div id = "blogThree" class="w3-card-4 w3-margin w3-white">
							    <img src={require("./images/aidan.jpg")} alt="Nature" class="imgStyle"></img>
							  
							    <div class="w3-container">
							      <h3><b>Independent Activities Period</b></h3>
							      <h5>Day fourty-two, <span class="w3-opacity">Saturday January 19th </span></h5>
							    </div>

							    <div class="w3-container">
							      <p>
							      Every year, some time in early January, hundreds of thousands of college students across the United States of 
							      America say goodbye to their friends and families, board planes, busses, cars, and trucks, and head back to 
							      their “other lives”— having done nothing all break besides eat, sleep, and binge Netflix. And as sure as the 
							      sun will rise, so too will the countless new year's resolutions’ of “getting a 4.0 this semester,” “only drinking 
							      on the weekends,” and “going to class” will be broken before the weeks end. After all, humans are habitual creatures, 
							      that indulge in creature comforts. But, every year one small technical institute in boston stands as a bastion of change 
							      promoting dangerous new ideas such as “independence, creativity, and passion.” 	
							      </p>
							      
							      <p>
							      Let me cut the cr@p, everyone and their mother has heard about MIT. What you might not know, though, is that while 
							      all the other universities are re-starting their tired classes and recitations, MIT students engage in a month long 
							      journey called “Independent Activities Period.” IAP, or so I have gathered, lasts a month (January for those who aren’t following) 
							      and whose purpose is to allow students to pursue their passions: interesting credited and uncredited classes are offered 
							      (including some pretty cool ones like <a href="http://student.mit.edu/iap/nc38.html">Kanye lesson</a>), crazy and interesting 
							      personal projects are pursued, hacker houses are created, winternships are undertaken, and many a naps are pursued. What an insane 
							      idea! One of my friends, Peter Zhou who admittedly is not a MIT student, participated in one of these “hacker houses” in SF and built 
							      something *really cool*, I highly suggest you check it out [docs.langapi.co]. It’s these cool projects that become the next 
							      Facebook, Amazon, or Tinder. Don’t believe me? Just check out this <a href="http://www.paulgraham.com/before.html">article</a> 
							      from Silicon Valley legend Paul Gram. 
							      </p>

							      <p>
							      So, after wasting two perfectly good winter breaks my freshman and sophomore year, I am done with winter breaks. 
							      This year, I took an independent activity period and took advantage of my time. Here’s my challenge to you, have 
							      a free weekend? IAP. Not doing much next semester? IAP. Finished a huge project and your boss doesn’t have anything 
							      for you? IAP. This IAP has been amazing for me, and while I wasn’t working every second of the break, I have a lot 
							      	to improve on for next winter. I’m excited for next winter. 
							      </p>

							      <p>
							      (You can stop reading at this point if you honestly don’t care about my life.) 
							      </p>

							      <p>
							      As promised, here are some goals I outlined in an earlier post: 
							      </p>

							      <p>
							      Improve my writing: 
								Noticed a few GLARING typos in previous posts. Currently typing this on google docs instead of sublime (which has no built in auto-correct).
							      </p>
							      Projects I’ve undertaken:
							      	<ol>
							      		<li>This website! I’ve learned React and Javascript this break and completely refactored this website.</li> 
							      		<li>Directive, which you can check out in the projects section of my website, has been completely refactored. The iOS application is done, the Android app is ¾ done, and the backend is 100% planned. Building scalable apps is kinda fun! </li>
							      	</ol>
							      <p>
							      What I’ve Read this Break: 
								    <ol>
								    	<li>Modern Romance by Aziz Ansari, narrated by Aziz Ansari - I highly suggest the audiobook over the actual book, he has funny asides and a captivating voice </li>
								    	<li>Astrophysics for People in a Hurry by Neil Degrasse Tyson by Neil Degrasse Tyson - True to its name, it really is astrophysics for people in a hurry. I personally was a little bored by the end but if you don’t know much about astrophysics it’s a great read. NDT has a great voice. </li>
								    	<li>The Life changing Magic of Tidying Up by Marie Kondo - I got so incredibly bored I couldn’t get past the second chapter. </li>
								    </ol>
								  What I'm currently Reading: 
								  	<ol>
								  		<li>Battlecry of Freedom by James McPherson</li>
								  		<li>Bad Blood: Secrets and Lies in a Silicon Valley Startup by John Carreyrou </li>
								  	</ol>
							      </p>

							      <p>
							      Other misc. Cool things: 
							      	<ul>
								    	<li>Threw a New Years Party</li>
								    	<li>Went Skiing for the First Time</li>
								    	<li>Visited Yale</li>
								    	<li>Turned 21</li>
								    	<li>Played my first ever Poker Game and lost everything</li>
								    	<li>Rekindled my love for photography with a photoshoot (peep the post picture)</li>
								    </ul>
							      </p>

							      <p>
							      </p>

							      <p>
							      </p>
							    </div>
						  	</div>

						  	<div id="blogTwo" class="w3-card-4 w3-margin w3-white">
							    <img src={require("./images/newYear.jpg")} class="imgStyle"alt="Nature"></img>
							    <div class="w3-container">
							      <h3><b>New Years Resolutions and on the Subject of Learning</b></h3>
							      <h5>Day twenty six, <span class="w3-opacity">Thursday, January 3rd</span></h5>
							    </div>

							    <div class="w3-container">
							      <p>
							        I left off the previous blog with a set of goals: 
							        <ol>
							          <li>Get proficient at web design</li>
							          <li>Improve my writing</li>
							          <li>Note important ideas I come across</li>
							          <li>Highlight projects I undertake</li>
							          <li>Record my life</li>
							        </ol>
							        I have a hypothesis that the following design process will lead to better outcomes: define goals, outline a plan of action, break said actions into discrete steps, follow said steps in a consistent fashion, reflect and improve in a consistent fashion, reduce friction to take said steps, track improvement, meditate on said action, and profit. This idea seems incredibly trivial and self explanatory, but my insight is this: my whole life I have been — in my cohort of friends — incredibly mediocre (It's actually incredible how medicore, if you controlled for factors such as varying socio-economic backgrounds, different teachers, access to specialized educations such as Music, Sports, etc. my GPA, success in sports, school rankings, etc. I am amazingly average.) This is not to say, though, that I am neither deeply unhappy, unsatisfied, nor regretful for these experiences. This is rather, a reflection on my imperfect process of learning.
							      </p>

							      <p>

							        The process of iterative learning, reflection, and improvement (known to some as "deliberate practice" or "perfect practice makes perfect") was first verbalized to me in an incredible book called "Grit: The Power of Passiona and Perseverance," by Angela Duckworth. If you haven't heard of it, here's an incredible <a href="https://www.youtube.com/watch?v=W-ONEAcBeTk">Google talk</a>. If anything, my biggest takeaway is the following two equations: 

							        <p>
							          Talent x Effort = Skill
							          Skill x Effort = ACHIEVEMENT
							        </p>

							        and in the pursuit of doing simple algebra to seem smart: 

							        <p>
							          Talent X Effort^2 = ACHIEVEMENT 
							        </p>

							        Then, for no real purpose, the "runtime" of Achievement (holding talent as a constant) is O(effort^2). I have always found it helpful to frame abstract concepts with relatable ideas. 

							        The "Theme" or henceforth new years resolution I have for 2019 is meaningful effort or grit. A gritty year. Year of Grit. Whatever that may be, it should inform my every decision (and hopefully develop as a skill).  

							        I will leave off this blog post with a plan of action for each goal: 
							        <ol>
							          <li>Get proficient at web design</li>
							          <ol>
							            <li>Redesign my personal website in Angular </li>
							            <li>(Executing project I'm not sure I can reveal for legal reasons)</li>
							          </ol>
							          <li>Improve my writing</li>
							          <ol>
							            <li>Write minimum one blog post per month</li>
							            <li>Read minimum ten blog posts per month</li>
							            <li>Ask one new person per month to review my writing</li>
							          </ol>
							          <li>Note important ideas I come across</li>
							          <ol>
							            <li>Highlight at least one important talk/ concept/ book/ blog etc. per blog</li>
							            <li>Research and explore these ideas more before each blog to dive into them deeper</li>
							          </ol>
							          <li>Highlight projects I undertake</li>
							          <ol>
							            <li>Post updates on major projects I'm undertaking</li>
							            <li>Post solutions to hard problems I tackle</li>
							            <li>List all my major projects to come</li>
							          </ol>
							          <li>Record my life</li>
							          <ol>
							            <li>Create a flexible weekly schedule to keep</li>
							            <li>Record meaningful progress and insights</li>
							          </ol>
							        </ol>


							      </p>
							    </div>
							</div>

						 	<div id = "groundZero" class="w3-card-4 w3-margin w3-white">
							    <img src={require("./images/tracks.jpg")} alt="Nature" class="imgStyle"></img>
							  
							    <div class="w3-container">
							      <h3><b>The Baader-Meinhof Phenomenon</b></h3>
							      <h5>Day one, <span class="w3-opacity">Saturday, December 8th</span></h5>
							    </div>

							    <div class="w3-container">
							      <p>
							      	Indulge me for a moment and let us posit the nature of blogs. It seems to me that a good number of successful people submit themselves to this grueling task. I find it incredibly uncomfortable, sitting alone with my own thoughts. My insecurities seep front and center: if I am being honest, I wonder if I have anything worth saying, if I will be judged by the content of my words and the values that I present. But, I suppose, if a good number of successful, well-to-do, self made individuals keep blogs (Paul Gram, Tim Ferris, and Joel Spolsky to name a few) there must be some measurable benefit.   
							      </p>
							      <p>
							        So, as I struggle with some difficult life choices and an impending feeling <strike>of doom</strike> that I am at a major cross-roads, I figured there is no better time to start. I'm beginning this blog for a few reasons.
							        <ol>
							          <li>Get proficient at web design</li>
							          <li>Improve my writing</li>
							          <li>Note important ideas I come across</li>
							          <li>Highlight projects I undertake</li>
							          <li>Record my life</li>
							        </ol>
							        I hope that, by the end of this blog I will have experimented with Angular, React, and learned about the wonderfully intimidating world of front end web-development. Hopefully, I won't be copy-pasting W3schools templates one year from now. I hope that when I finish this blog, beautiful prose will flow from the tips of my fingers (as the late President George H. W. Busch was affectionately known, Mangler of the English language. Read Jon Meacham's beautiful eulogy <a href="https://www.msn.com/en-us/news/us/in-funeral-of-pomp-and-pageantry-nation-bids-farewell-to-george-bush/ar-BBQxMBP">here</a>) I hope by the end of this blog, I will have shared some truly novel and insightful ideas, that you the reader, will have become a more well rounded person. Most of all, I hope that I will have highlighted the honest struggles of an average asian-american from a large state school attempting to change the world.
							      </p>
							      <p>
								        It would be remiss of me not to describe my incredibly pretentious title. The Baader-Meinhof Phenomenon is, in plain english, the phenomenon for a mundane, uncommon, or otherwise unnoteworthy thing to pop up over and over once you have noticed it. Over the past few months, I have encountered many small, personable, inspiring, and impressive blogs that have inspired me to start my own.

							        <ul>
							          <li> Zachry Blanco http://blanco.io/ </li>
							          <li> Matthew Wei https://www.matthewwei.com/ </li>
							          <li> Arun Nanduri https://ananduri.github.io/ </li>
							          <li> Anand Nanduri https://ananduri9.github.io/ </li>
							          <li> A shoutout to my friend Gaurav Thakur for lending me books (the best kind of friend) and for recommending that incoming Seniors start one to remember college by </li>
							        </ul>
							      </p>
							    </div>
						  	</div>

						</div>

						<div class="w3-col l4">
						  	<div class="w3-card w3-margin">
							    <div class="w3-container w3-padding">
							      <h4>Posts</h4>
							    </div>
							    <ul class="w3-ul w3-hoverable w3-white">

							    	<li class="w3-padding-16" onclick = "location.href = '#blogThree'">
								        <img src={require("./images/aidan.jpg")} alt="newYear" class="w3-left w3-margin-right smolImgStyle"></img>
								        <span class="w3-large">Independent Activities Period</span><br></br>
								        <span>Winter Breaks</span>
							      	</li>

							      	<li class="w3-padding-16" onclick = "location.href = '#blogTwo'">
								        <img src={require("./images/newYear.jpg")} alt="newYear" class="w3-left w3-margin-right smolImgStyle"></img>
								        <span class="w3-large">New Years Resolutions and on the Subject of Learning</span><br></br>
								        <span>Theme of the Year: "Grit"</span>
							      	</li>

							      	<li class="w3-padding-16" onclick = "location.href = '#groundZero'">
								        <img src={require("./images/tracks.jpg")} alt="tracks" class="w3-left w3-margin-right smolImgStyle"></img>
								        <span class="w3-large">The Baader-Meinhof Phenomenon</span><br></br>
								        <span>The First Entry</span>
							      	</li>  
							    </ul>
							</div>
						  <hr></hr> 
						</div>
					</div><br></br>
				</body>
			</div>
		)
	}
}

export default Blog;