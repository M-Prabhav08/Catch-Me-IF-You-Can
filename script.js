document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "Did You know ? : It’s based on Abagnale’s autobiography :> With the help of author Stan Redding, Abagnale wrote an autobiography called Catch Me If You Can. In promotion of the book, Abagnale was on The Tonight Show Starring Johnny Carson, and Abagnale says that Norman Lear and Bud Yorkin bought the film rights after that in 1980. However, as we will get into, basically anything Abagnale has ever said is to be taken with a grain of salt. Probably a handful of salt, to be honest.",
        "Did You know ? : The project passed through a lot of hands  :> OK, we think we have this straight. Lear and Yorkin bought the rights in 1980. Two years later, they sold the rights to Columbia. Columbia sold the rights to producer Hall Bartlett, who went as far as to hire a screenwriter before Bartlett died. Then, the rights were sold to a subsidiary of Disney, where the project went into turnaround. A subsidiary of TriStar ended up with the rights, and then in 1990, Michael Shane bought the rights for Paramount. Shane sold the rights to TV impresario Barry Kemp (creator of Newhart and Coach) in 1997, who then sold the rights to DreamWorks, who would produce and distribute the film.",
        "Did You know ? : Steven Spielberg was attached…as a producer :> Spielberg was one of the heads of DreamWorks, and he got himself involved on Catch Me If You Can early in the project. Originally, though, he was only signed on as a producer, as he had other projects lined up to direct. Spoiler alert: Things are going to change.   ",
        "Did You know ? :  The first director dropped out  :> Once DreamWorks had the project, a script from screenwriter Jeff Nathanson was in place, and he is the sole credited screenwriter on the film. They also had a director, and that director was David Fincher. However, after being attached for a few months, Fincher dropped out so he could make Panic Room. ",
        "Did You know ? :  The star was attached to a different director ;>   After Fincher moved on, Gore Verbinski signed on to direct. At the same time, Leonardo DiCaprio would also get attached to the project to star as Abagnale. The project was in motion.",
        "Did You know ? :  Verbinski did some other casting  ;>  Verbinski was deep enough into the project he did more than sign on to direct DiCaprio, a major star at the time. He cast other key roles in the film. Chloe Sevigny was to play Brenda Strong, Ed Harris was going to play Frank’s father, and James Gandolfini was cast in the key role of Frank’s foil Carl Hanratty.",
        "Did You know ? :  A DiCaprio delay was too much for Gore :>  Verbinski was ready to go, but then a hurdle got in the way. DiCaprio was off to star in Martin Scorsese’s Gangs of New York. Because of this commitment, DiCaprio wasn’t on Verbinski’s time frame, so the director left the project.",
        "Did You know ? :  One more director came and went  :>  After Verbinski, the next director in line for Catch Me If You Can was Lasse Hallstrom. He lasted in the role all of two months. Perhaps sensing a disaster looming, Sevigny and Harris dropped out at this point. Gandolfini stayed attached. ",
        "Did You know ? :  Finally, Spielberg said, “Screw it, I’ll just direct”  :> With a third director having come and gone, Spielberg considered offering the role to Cameron Crowe, and even placed an offer into Milos Forman. Then, it occurred to Spielberg maybe he should just direct the movie himself. He dropped Big Fish and Memoirs of a Geisha from his docket and officially signed on to direct the movie in August 2001.",
        "Did You know ? :  Another casting change turned out just fine  :< After all these delays, one cast member that had endured through it all was lost. Scheduling conflicts with The Sopranos led to Gandolfini having to bow out. Of course, with Spielberg now directing, replacing Gandolfini didn’t prove too tough. Soon after he took over as director, Spielberg had Tom Hanks signed on in the Hanratty role. ",
        "Did You know ? :  A future star landed the role of Brenda :) It took months for Spielberg to replace Sevigny as Brenda. Then, the director saw an actress’s audition tape that he “loved.” That was Amy Adams. Now, Adams is an esteemed star with several Oscar nominations. When she was cast, though, her resume consisted of films like Psycho Beach Party and the direct-to-video Cruel Intentions 2. ",
        "Did You know ? :  Spielberg turned to a friend for one casting choice  :&  Abagnale’s mom was French. To stay true to that, Spielberg wanted a French actress. Fortunately, a friend of Spielberg’s was an expatriate in France at the time. Also, that friend was legendary director Brian De Palma. With the help of De Palma, Spielberg landed on Nathalie Baye.",
        "Did You know ? :  Spielberg apparently has some time to watch TV  :>  Jennifer Garner has a small role in Catch Me If You Can as Cheryl Ann. Evidently Spielberg saw her on her TV show Alias and offered her the role as a result.",
        "Did You know ? :  Carl Hanratty isn’t a real person :( There are some deviations from the known history in Catch Me If You Can, including one character not being a real person. Now, Carl Hanratty is based on Joseph Shea, the FBI agent that tracked down Abagnale, but Shea did not want his name used in the movie. Thus, they changed the name to Carl Hanratty, the last name apparently taken from former NFL quarterback Terrence Hanratty.",
        "Did You know ? :  Abagnale did not work on the movie  : Though his life story, and his autobiography, were the basis of Catch Me If You Can, that’s as far as Abagnale’s role in the film went. Before the film began shooting, Abagnale was quick to note, “I am not a consultant on the film. I've never met nor spoken to Steven Spielberg and I have not read the script. I prefer not to.”",
        "Did You know ? :  They filmed all over the place :} Some films hunker down in a studio, or have basically one setting. Catch Me If You Can is not that kind of movie. Spielberg and company filmed the movie in 147 locations, and they did that in only 52 days.",
        "Did You know ? :  It came up big at the box office :)  Catch Me If You Can was released on Christmas Day in 2002. Though it was competing with The Two Towers, it still brought in plenty of money. Making $352.1 million off of a $52 million budget, Catch Me If You Can was the 11th-highest-grossing movie worldwide in 2002. By the way, in 10th place was Minority Report, also directed by Spielberg.",
        "Did You know ? :  The film received two Academy Award nominations  :} John Williams, the legendary composer, was unsurprisingly nominated for Best Original Score. On top of that, Christopher Walken was nominated for Best Supporting Actor for his turn as Frank Abagnale Sr.",
        "Did You know ? :  It was adapted into a musical  :{000}  In putting together these “20 facts” pieces, we have come to the realization that a lot of movies get turned into stage musicals. Catch Me If You Can debuted on Broadway in 2011. It would be nominated for four Tonys, including Best Musical.",
        "Did You know ? :  So…a lot of the story might be made up ;) Catch Me If You Can is a biopic of a conman, one that openly plays fast and loose with the facts. However, some of what was thought of as facts may have not been true at all either. Abagnale’s conning may have gone further than he claimed, in a way. In 2020, the journalist Alan Logan was working on a book about Abagnale. In doing his research, he found that a lot of Abagnale’s claims are dubious, and some of them seem outright false. Particularly, Abagnale was evidently in prison in New York from the age of 17 until the age of 20, a time when he claimed to pull off many of his scams. There is also no actual proof that Abagnale every worked alongside the FBI after being caught. However, if you treat the story of the movie as, well, a story, it remains a lot of fun"
    ];

    const chaseImage = document.getElementById('chaseImage');
    const container = document.getElementById('container');
    const factBox = document.getElementById('factBox');
    let attempts = 0;

    container.addEventListener('mousemove', (event) => {
        const containerRect = container.getBoundingClientRect();
        const imageRect = chaseImage.getBoundingClientRect();

        const mouseX = event.clientX - containerRect.left;
        const mouseY = event.clientY - containerRect.top;

        const imageCenterX = imageRect.left + imageRect.width / 2 - containerRect.left;
        const imageCenterY = imageRect.top + imageRect.height / 2 - containerRect.top;

        const distanceX = mouseX - imageCenterX;
        const distanceY = mouseY - imageCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 100) { 
            const moveX = distanceX > 0 ? -50 : 50;
            const moveY = distanceY > 0 ? -50 : 50;

            let newLeft = imageRect.left + moveX;
            let newTop = imageRect.top + moveY;

            newLeft = Math.max(containerRect.left, Math.min(newLeft, containerRect.right - imageRect.width));
            newTop = Math.max(containerRect.top, Math.min(newTop, containerRect.bottom - imageRect.height));

            chaseImage.style.left = `${newLeft - containerRect.left}px`;
            chaseImage.style.top = `${newTop - containerRect.top}px`;

            attempts++;

            if (attempts >= 5) {
                showRandomFact();
                attempts = 0;
            }
        }
    });

    function showRandomFact() {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factBox.textContent = randomFact;
        factBox.style.display = 'block';

        setTimeout(() => {
            factBox.style.display = 'none';
        }, 50000);
    }
});
