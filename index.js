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
    const data="Artificial Intelligence (AI) represents the cutting-edge frontier of technology, revolutionizing industries and reshaping our world. At its core, AI mimics human cognitive functions such as learning, problem-solving, and decision-making through algorithms and data processing. From self-driving cars to personalized recommendations on streaming platforms, AI's applications are diverse and pervasive. It encompasses machine learning techniques like neural networks and deep learning, enabling systems to analyze vast datasets and derive meaningful insights autonomously. As AI continues to evolve, its potential to enhance efficiency, innovation, and everyday life grows exponentially, promising a future where intelligent machines collaborate seamlessly with human capabilities to solve complex challenges and drive unprecedented progress.";

    res.render("index.ejs",{
        data:data,
        image:image
    });

});

// app.post("/ai",(req,res)=>{
//     data:5
//     })

    // app.post("/web",(req,res)=>{
    //     data:5
    //     })

    //     app.post("/Java",(req,res)=>{
    //         data:5
    //         })


    //         app.post("/machine",(req,res)=>{
    //             data:5
    //             })


    //             app.post("/open",(req,res)=>{
    //                 data:5
    //                 })


    //                 app.post("/python",(req,res)=>{
    //                     data:5
    //                     })

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});