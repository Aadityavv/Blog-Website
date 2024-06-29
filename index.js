import express from "express";
const app=express();
const port=3000;
var data;

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.get("/ai",(req,res)=>{
    const image="./images/ai-robot-wallpaper-8.jpg"
    const data=ai;
    const topic="Artificial Intelligence";
    res.render("index.ejs",{
        data:data,
        image:image,
        topic:topic
    });

});

app.get("/web",(req,res)=>{
        const image="./images/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg";
        const data=web;
        const topic="Web Development";
        res.render("index.ejs",{
            data:data,
            image:image,
            topic:topic
        })
        })

        app.get("/Java",(req,res)=>{
            const image="./images/java.webp";
            const data=Java;
            const topic="Java";
            res.render("index.ejs",{
                data:data,
                image:image,
                topic:topic
            })
            })


            app.get("/machine",(req,res)=>{
                const image="./images/machineLearning.jpg";
                const data=ml;
                const topic="Machine Learning";
            res.render("index.ejs",{
                data:data,
                image:image,
                topic:topic
            })
                })


                app.get("/open",(req,res)=>{
                    const image="./images/openAI.jpg";
                    const data=open;
                    const topic="Open AI";
                    res.render("index.ejs",{
                        data:data,
                        image:image,
                        topic:topic
                    })
                    })


                    app.get("/python",(req,res)=>{
                        const image="./images/python.jpg";
                        const data=python;
                        const topic="Python";
                        res.render("index.ejs",{
                            data:data,
                            image:image,
                            topic:topic
                        })
                        })

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});






var ai="Artificial Intelligence (AI) represents the cutting-edge frontier of technology, revolutionizing industries and reshaping our world. At its core, AI mimics human cognitive functions such as learning, problem-solving, and decision-making through algorithms and data processing. From self-driving cars to personalized recommendations on streaming platforms, AI's applications are diverse and pervasive. It encompasses machine learning techniques like neural networks and deep learning, enabling systems to analyze vast datasets and derive meaningful insights autonomously. As AI continues to evolve, its potential to enhance efficiency, innovation, and everyday life grows exponentially, promising a future where intelligent machines collaborate seamlessly with human capabilities to solve complex challenges and drive unprecedented progress.";


var python="Python is a versatile and widely-used programming language known for its simplicity and readability. It has become a cornerstone in various domains, from web development and data analysis to artificial intelligence and scientific computing. Python's extensive library support and straightforward syntax make it an ideal choice for beginners and seasoned developers alike. Its applications range from building web applications using frameworks like Django and Flask to powering complex data processing tasks and machine learning models. Python's community-driven development and continuous evolution ensure it remains at the forefront of innovation, supporting diverse projects globally.";

var Java="Java is a robust, platform-independent programming language that has been a cornerstone in enterprise-level software development for decades. Known for its \"write once, run anywhere\" philosophy, Java's bytecode execution enables applications to run seamlessly across different platforms. Java's object-oriented programming model provides a structured approach to building scalable and maintainable applications. It is widely used in backend development, enterprise systems, Android app development, and large-scale distributed systems. Java's emphasis on stability, security, and performance has solidified its position as a top choice for mission-critical applications in various industries.";

var open="OpenAI is a research organization dedicated to ensuring that artificial general intelligence (AGI) benefits all of humanity. Founded with the mission to develop safe and beneficial AGI, OpenAI conducts cutting-edge research in reinforcement learning, natural language processing, robotics, and more. OpenAI's initiatives include developing advanced AI technologies, promoting AI ethics and safety, and making impactful AI research accessible to the global community. Its projects and publications aim to push the boundaries of AI capabilities while addressing ethical concerns and promoting transparency in AI development and deployment.";

var web="Web development encompasses the creation and maintenance of websites and web applications. It involves various disciplines including front-end development, back-end development, and full-stack development. Front-end development focuses on designing and implementing the user interface and user experience using HTML, CSS, and JavaScript. Back-end development involves server-side programming and database management, often using languages like Node.js, Python, Ruby, or Java. Full-stack developers are proficient in both front-end and back-end technologies, enabling them to build fully functional web applications. Web development frameworks and tools continuously evolve to streamline development processes and enhance web application performance and security.";

var ml="Machine Learning (ML) is a subset of artificial intelligence that focuses on building algorithms and statistical models that enable computers to learn from and make predictions or decisions based on data. ML algorithms can detect patterns, learn from experience, and improve over time without explicit programming. Applications of machine learning span diverse fields such as predictive analytics, natural language processing, image recognition, and autonomous systems. Techniques like supervised learning, unsupervised learning, and reinforcement learning form the foundation of ML, driving innovations in personalized recommendations, medical diagnostics, financial forecasting, and more.";

