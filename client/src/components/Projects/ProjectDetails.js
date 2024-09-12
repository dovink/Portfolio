import Work1 from "../../assets/urvas.jpg";
import Work2 from "../../assets/Todo.png";
import Work3 from "../../assets/JWT.png";

export const category = {
    Full_Stack: "Full-Stack",
    Front_End: "Front-End",
    Back_End: "Back-End",
};

export const ProjectDetails = [
    {
        id: 1,
        image: Work1,
        title: "Betting website",
        category: category.Full_Stack,
        desc: "The project that was used to start learning the MERN stack. It was not finished fully:(",
        href: "https://github.com/dovink/Betting-Websitee",
    },
    {
        id: 2,
        image: Work2,
        title: "Todo",
        category: category.Front_End,
        desc: "Simple Todo aplication using only react",
        href: "https://github.com/dovink/Todo-with-React/tree/master/Todo"
    },
    {
        id: 3,
        image: Work3,
        title: "JWT-Authorization",
        category: category.Full_Stack,
        desc: "A simple project regarding user authentication",
        href: "https://github.com/dovink/TRAINING-JTW-AUTH",
    },
];
