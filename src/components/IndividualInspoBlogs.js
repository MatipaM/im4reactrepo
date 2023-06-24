import React, { useState, useRef, Component } from "react";
import {  Link } from "react-router-dom";
import './IndivisualInspoBlogs.css'

export default class IndividualInspoBlogs extends Component {

  static defaultProps = {

    InspoBlogs:[],
    heading: "", 
    subheading: "",
    img:"",
    altText:"",
    link: "",
    p1: '',
    p2: "",
    p3:'',
    p4:'',
    p5:'',
    p6: '',
    p7: "",
    p8:'',
    p9:'',
    p10:'',
    p11:'',
    p12:'',
    citation: "",
    citation2: "",
    citation3: "",
    references: "References",

    prevLink:"",
    topLink:"",
    nextLink:"",
  }

  createInspoCards()
  {
    this.props.InspoBlogs= [];

    this.props.blogCards.push({ 
    "p1": "I really enjoyed the lecture videos as I felt it provided a very detailed insight into the fundamentals of JavaScript. The videos were long, which I loved as concepts were not rushed and multiple examples as well as variations were provided. The only technical questions I have are related to ordering the blog posts from the mostly recently viewed to latest (as I tried to code along to replicate it but it did not work for me).",
    "p2": `I love how broad web art is, I feel that it allows everyone to engage with a specific niche in a way that is both creative and specific to who they are. Areas, that most interest me, are those which include code art and software art as I think that is an area I would like to explore. I was interested by how the readings explore how the movement from desktop to mobile device as the primary means for accessing the internet, as well as Apple's disregard for flash as the reason behind flash's downfall. An interesting point made by McNara, was how she hoped that our web history won’t be erased" (2020). I found this interesting because the internet tends to be considered a place where nothing is erasable and everything you post is almost given an infinite lifespan. However, the demise of flash, has at the least shown people, that 'original' artworks may not always be supported on the internet. Instead we may only be able to rely on supported copies to get an essence of what the original was like.`, 
    "p3":`Another side to the way web history is recorded, is how files are organised and updated, Ann Armstrong, an architect battling with the upkeep and maintenance of architectural repositories suggests that records “should be organised with an archivist in mind” (Armstong, A., E., 2006). This implies that the ordinary user may not be able to find internet artworks as intuitively as they could before. However, the role of an archivist solely dedicated to the maintenance and safe online storage of internet artwork could be critical to ensuring that online equivalents to the ‘Mona Lisa’ are no longer damaged beyond repair due to bad upkeep.`,
    "references":'References',
    "citation":`Another side to the way web history is recorded, is how files are organised and updated, Ann Armstrong, an architect battling with the upkeep and maintenance of architectural repositories suggests that records “should be organised with an archivist in mind” (Armstong, A., E., 2006). This implies that the ordinary user may not be able to find internet artworks as intuitively as they could before. However, the role of an archivist solely dedicated to the maintenance and safe online storage of internet artwork could be critical to ensuring that online equivalents to the ‘Mona Lisa’ are no longer damaged beyond repair due to bad upkeep.`,
    })

    for(let i =3; i<=13; i++)
    {
        if(i!=6 && i!=7)
        {
        }

        switch(i)
        {
          case 0:
            this.props.blogCards.push({"topLink": "/im4reactrepo/W"+i, "prevLink": "/im4reactrepo/webArt", "nextLink": "/im4reactrepo/W"+i+1, "heading": "Week "+i+" Blog Post"})
            break;
          case 6:
            break;
          case 7:
            break;
          case 13:
            this.props.blogCards.push({"topLink": "/im4reactrepo/W"+i, "prevLink": "/im4reactrepo/W"+i-1, "nextLink": "/im4reactrepo/W3", "heading": "Week "+i+" Blog Post"})
          default:
            this.props.blogCards.push({"topLink": "/im4reactrepo/W"+i, "prevLink": "/im4reactrepo/W"+i-1, "nextLink": "/im4reactrepo/W"+i+1, "heading": "Week "+i+" Blog Post"})
            break;
        }

    }

    this.props.blogCards.push({"heading": "Neb/Web Art", 
    "p1":`In this essay, I will be examining the web artwork, ‘Ten Thousand Cents’ by Takashi Kawashima and Aaron Koblin. ‘Ten Thousand Cents’ (2008) is an internet artwork which made use of ten thousand individuals, each paid one cent to draw a small section (1/10 000) of a one-hundred-dollar bill. The total cost of production for this piece and the piece itself is a single one-hundred-dollar bill. Workers were sourced anonymously via Amazon's Mechanical Turk platform. The work is presented online via a static image placed on a website, alongside it is a short 2-minute collage of all ten thousand pieces, being drawn simultaneously. `,
    "p2":`Internet Art is art that is created for the internet and is distributed on the internet. “It can be described as art that uses computer network and its content to form the basis for the piece” (Colman, 2004). Internet art also known as web art or neb art can be displayed in the form of various media, a few examples are images, video, sounds, text messages etc. Web art differs from internet on the art, as the latter is a digital copy of art created in the physical form. Whereas internet art intentionally uses the affordances of the internet to facilitate a deeper level of engagement with the user.`,
    "p3":`Colman argues that “artists producing work on the internet, approach the internet not as a medium, but as a transmission system for data that potentially stimulates all reproductive media” (2004). Colman demonstrates how internet can be a medium for user interaction. ‘Ten Thousand Cents’ (2008) becomes a medium on which different people, in this case, are following instructions to produce an artwork. The online art collects a group of paid users who become willing participants and provides them a canvas on which to interact. This mode of interaction can be considered, what Colman calls a “transmission system for data” (Colman, 2004), as each worker is producing data which is them combined by Kawashima and Koblin to create a united piece. Essentially the data produced by each worker is processed into communal information. In the latter part of Colman’s statement, she speaks to ‘reproductive media’ which can be considered as the act of “collecting data on experiences” (2004). ‘Ten Thousand Cents’ (2008) is proof of the experience produced by each of the corresponding participants.`,
    "p4":`“Internet art tends to make its cultural waves outside of art-world enclaves” (Ippolito. 2002). ‘Ten Thousand Cents’ (2008) could have been physically reproduced and placed in a gallery. However, it’s online presence makes it more accessible for users all over the globe who would not have had the resources to attend one physical gallery’s location. The artwork being online makes it easier to imagine how it was possible for thousands of people who had never met to produce such an identical representation to the original American one-hundred-dollar bill. It also allows all the workers who participated in the painting all over the world, to view the work they were a part of creating.`,
    "p5":`Ten Thousand Cents’ (2008) combines ten thousand users from all over the world and instructs them to create one single project without telling a single worker, what the end goal is. Ippolito in his article, ‘Ten Myths of Internet Art’ (2002), points out that “[s]uccessful online works can […] create unique forms of communities consisting of people scattered across the globe” (Ippolito, 2002). This artwork makes use of the internet to gather a group of people in isolation. Even though the workers have laboured together to create a singular project. The work was produced in the worker’s individual spaces as opposed to in one shared space, in the same way a physical work would be produced in. The workers would and probably have never met, despite being linked together by their artwork. Thus, this group becomes a “unique form[] of community” (Ippolito, 2002) in the sense that, they worked together to achieve a common end goal, but the only allowed form of interaction was through the services (in this case Amazon's Mechanical Turk platform) facilitated by the two main artists Kawashima and Koblin. Furthermore, this also speaks to how the internet as medium has increased the potential for connecting with one another online. Although, at the same time can make physical spaces more isolating and therefore, connecting in real life more challenging. This isolation can be seen within ‘Ten Thousand Cents’ (2008), where the internet as a medium allowed the artists to draw boundaries for what is allowed within certain spaces and who is able to enter these spaces.`,
    "p6":`Alison Colman speaks to how internet art favours “technological experimentation [and] online interaction” (2004). ‘Ten Thousand Cents’ (2008) experiments with online collaboration. However, interaction is limited in the sense that the interaction comes from the fact that the workers who created the art, are not the ‘artists’ per se. The workers are interacting with what the artist has organized and planned for them, in order to create the final piece. After the piece is finished, the only interaction the viewer has with the piece, is a visual interaction with the finished artwork and a short video collection on how all the individual pieces were made.`,
    "p7":`‘Ten Thousand Cents’ (2008) is an art piece which can be considered non-conventional yet makes use of conventional techniques. The way the artwork is put together via user interaction is creatively unusual, however, at the core of the piece, is the artists’ asking users to fill in a small section of the canvas with a digital brush. What makes the piece unusual is that worker’s may not really know what they are painting, however this may be similar to working in any team, where one may not be sure how the overall product will end up, but they know what their role is in the team. `,
    "p8":`Another side to the ethical stance about the artwork, ‘Ten Thousand Cents’ (2008), is that the artists did not paint the one-hundred-dollar bill. They simply put together all the pieces. To add on to this, the workers who did put this piece together were not individually credited. Workers also worked together to produce a product they did not know that they were making. Painters were individually hired, meaning that very few workers produced more than one section. As a result, people signed up to create something, not knowing what they were contributing to, or how their work would be used. In fact, they may not have even known that their one section was a part of something bigger and may have thought that their one section was the final product. `,
    "p9":`‘Ten Thousand Cents’ (2008) also speaks to how widely spread internet access has affected the economy. We are now in a time, where work has become more accessible to different kinds of people all over the world. Most of the blocks painted were so small that not even a drawing tablet would have been a requirement to participate in this experience. A touchpad, though uncomfortable would have sufficed, especially if the worker was tasked with painting a non-detailed square. The artwork also brings into question, job scarcity and low wages, as it seems time consuming to accept a job which only pays one cent. Especially considering that no square was a solid color, each had some type of line detail, therefore it would have taken a couple of minutes to complete (including time to sign up for job, actual painting took around 10 seconds). Platform labor has encouraged an economy, in which workers feel personally responsible for themselves, more so than in the past. As working participants of platform labor are hired as contract workers and not employees. The onus is then placed on the worker to ensure that they are producing enough profits to have a living wage regardless of the number of hours they are working. As a result, workers are constantly competing with other workers who can produce the same quality of work they can at a lower wage. This becomes more of a challenge for workers living in countries with higher costs of living, as they may be competing with someone whose cost of living is far lower.`,
    "p10":`In terms of sustainability and long-term support, ‘Ten Thousand Cents’ (2008) is viewable on a website (http://www.tenthousandcents.com/top.html). The artwork itself is presented as an image composed of ten-thousand smaller images, and there is also an accompanying video which demonstrates a collage of the process behind the creation of the artwork. In terms of displaying the image, it does not rely on any hyperlinks or special technology. This makes it easier to safely store the web art, as it does not rely on any technology which is threatening to not be supported in the near future. However, the accompanying video relies on Adobe Flash which is already out of use. Digital artworks tend to be fragile as technology is ever-changing and innovation is happening at faster rates. New technology can make storing artworks which rely on older technology more difficult. The difficulty increases in cases where instead of trying to maintain an image, as in this case, one is trying to maintain a piece of software which may rely on specific hardware or another specific software. As to maintain a heavily dependent artwork, one may have to code new software, which runs on currently supported technology. Or if it is a hardware issue, an older device may need to be stored safely until the artist is able to figure out how to get the original artwork to function on newer devices. `,
    "p11":`This internet art stood out to me because the idea behind this artwork was similar to the prototype, I produced for Assignment 1. For assignment 1, I created an online canvas, where users could draw with different brush thickness and brush sizes. My plan for the final artwork, was to create a collaborative canvas, where users from all over the web could interact with the same canvas, adding and subtracting what they wanted. However, my issue with the interaction was that users could draw over another user’s work, thereby erasing it. ‘Ten Thousand Cents’ (2008) provided an interesting solution, on how to make an interactive piece with thousands of people that did not override anybody else’s work. As each person gets a designated section of the canvas, no-one else can work on another person’s section. Therefore, no-one’s work is privileged or validated over another person’s. In my case, this would mean limiting the number of users who could work on selected canvases and then instantiating a new, blank canvas when an older one was filled.`,
    "p12":`In conclusion, in this essay, I defined internet art and how it differs from art on the web. I explored internet art as a medium in relation to my case study ‘Ten Thousand Cents’ (2008). I discussed the ethics of the artwork itself as well as explored the effects platform capitalism has on the workers who participated in creating the artwork. I did this, in order to gain a deeper understanding of how ethical the piece itself it was. it is significant that the artwork is a one-hundred-dollar bill that costs one hundred dollars to make, despite involving over ten thousand people.`,
    "references":"References",
    "citation":`COLMAN, A. 2004. Net.art and Net.pedagogy: Introducing Internet Art to the Digital Art Curriculum. Studies in Art Education. 46 (1), Autumn: 61-75.`,
    "citation2":`IPPOLITO, J. 2002. Ten Myths of Internet Art. Leornardo. 35 (5), ppp. 485-489.`,
    "citation3":`KAWASHIMA, T. & KOBLIN, A. 2008. [Internet Art]. Available at: http://www.tenthousandcents.com/top.html (Accessed 30 April 2023)`,
    "prevLink":`/im4reactrepo/W13`,
    "topLink":`/im4reactrepo/webArt`,
    "nextLink":`/im4reactrepo/W3`,
    })

    console.log(this.props.blogCards);
  }

render()
{
  return (
    
      <article>

        <h1>
          
            <a href={this.props.link}>
          {this.props.heading}
          </a>
        </h1>
        <h2>{this.props.subheading}</h2>
        
       <img
          src={this.props.img}
          alt={this.props.altText}
        />


    {/*convert into for loop */}
        <p>{this.props.p1}</p>
        <p>{this.props.p2}</p>
        <p>{this.props.p3}</p>
        <p>{this.props.p4}</p>
        <p>{this.props.p5}</p>
        <p>{this.props.p6}</p>
        <p>{this.props.p7}</p>
        <p>{this.props.p8}</p>
        <p>{this.props.p9}</p>
        <p>{this.props.p10}</p>
        <p>{this.props.p11}</p>
        <p>{this.props.p12}</p>
  

        <h3>{this.props.references}</h3>
        <cite>{this.props.citation}</cite>
        <cite>{this.props.citation2}</cite>
        <cite>{this.props.citation3}</cite>

        <section className="btnGrid">
        <Link to={this.props.prevLink} className="purchase" >
            Previous
          </Link>
          <Link to={this.props.topLink} className="purchase" >
            Top
          </Link>
          <Link to={this.props.nextLink} className="purchase" >
            Next
          </Link>
          </section>
      </article>
  )
  }
}