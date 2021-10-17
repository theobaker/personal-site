const userData = {
  githubUsername: "theobaker",
  name: "Theo Baker",
  designation: "Student",
  // avatarUrl: "/avatar.png",
  avatarUrl: "/newavatar.png",
  email: "tabsterbaker@gmail.com",
  phone: "(202) 360-1086",
  address: "Washington, DC // Andover, MA",
  currentBook: "Livewired by David Eagleman",
  projects: [
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      imgUrl: "/tmk.jpg",
    },
    {
      title: "PlaceholderTech",
      link: "https://placeholdertech.in",
      imgUrl: "/placeholdertech.png",
    },
    {
      title: "Portfolio",
      link: "https://manuarora.in",
      imgUrl: "/portfolio.png",
    },
    {
      title: "CovidRescue",
      link: "https://covidrescue.co.in",
      imgUrl: "/covidrescue.png",
    },
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      imgUrl: "/algochurn.png",
    },
    {
      title: "Playground",
      link: "https://play.placeholdertech.in",
      imgUrl: "/playground.png",
    },
    {
      title: "Feedmeback",
      link: "https://feedmeback.vercel.app",
      imgUrl: "/feedmeback.png",
    },
    {
      title: "Devmedium",
      link: "https://devmedium.vercel.app",
      imgUrl: "/devmedium.png",
    },
  ],
  home:{
    description:[
      `Hi there! My name is Theo (he/they) and I'm currently a high school senior.`,
      `I love reading, writing, CS, and psychology! I'm a social science researcher with expertise in public opinions and current affairs and I believe in knowing more about the world, whether through anecdote or data (and ideally both).`
    ]
  },
  about: {
    title:
      "I'm a student with a burning curiosity about why we do what we do. Tackling this question has led me from humanities to CS to social science to somewhere in between, using the tools of many trades to answer universal questions.",
    description: [
      `I'm a sixteen year old who never quite grew out of Montessori school. If ever there were a way to describe me, it would be that. I began coding when I was 10, spending time in dank college libraries with a student who was willing to tutor me.`,
      `In High School, I've rekindled my love for coding, using it as an extension of my research skills. I've taken on high-level social science projects using Machine Learning. I've also helped foster a vibrant community of dedicated programmers and curious minds alike as Co-President of Andover's large Computer Science Club.`,
      `I've created novel research about the influence of QAnon rhetoric on the Tweets of mainstream Republican Congressmen over time. I've also designed research about college students which was published in Axios. I've also written extensively, writing two full-length books (and in the middle of a third), numerous short stories, and countless articles in school newspapers. All of that led me to publish an op-ed in the Chicago Tribune earlier this year about AI ethics.`,
      `Ultimately, I love learning about different things and using the tools I pick up along the way to take on important research.`
    ],
    currentProject: "Graduating High School",
    currentProjectUrl: "https://andover.edu",
  },
  experience: [
    {
      title: "Independent Researcher",
      company: "Phillips Academy Andover",
      year: "2022",
      companyLink: "https://andover.edu",
      desc: "In my last year at Andover, I'm undertaking an ambitious series of projects. Currently, I'm conducting an interdisciplinary Independent Project in History/English where I'm writing a counterfactual novel. I'm conducting another History/English project next term about post-Napoleonic European Literature, while simultaneously completing another Computer Science IP. And in the Spring, I've been accepted into Andover's hallowed school within a school – The Workshop. The Workshop is a multidisciplinary opportunity which requires me to take no classes other than The Workshop, instead spending all of my time on the projects we produce. I hope to begin a longitudinal study on pedagogy which will continue after my departure.",
    },
    {
      title: "College Intern",
      company: "The Generation Lab",
      year: "2021",
      companyLink: "https://generationlab.org",
      desc: "Because of my research with The Gen Z Project, I was accepted to the college internship program of the Generation Lab, a public opinions firm focused on 18-29 year olds. I generated my own poll, pitched it, fielded it, analyzed it, and had it published in Axios. I also worked on AI strategy for the firm and expanded their database of respondents by deploying webscrapers on college directories.",
    },
    {
      title: "Co-President",
      company: "Computer Science Club",
      year: "2021",
      companyLink: "https://andover.edu",
      desc: "Despite being a new Junior, I earned a number of board positions. I'm most proud of CS Club. Under my leadership, we've grown into the largest tech club on campus with more than 270 students on our canvas page and with an average of around 40 participants a session. We teach, discuss, host speakers, and compete.",
    },
    {
      title: "QAnon Twitter Research",
      company: "Computer Science Independent Project",
      year:"2020",
      companyLink: "https://csc600.wordpress.com",
      desc: "I undertook an independent project in computer science where I generated novel research about the influence of QAnon rhetoric on the Twitter messages of mainstream House Republicans over time using Machine Learning tools. I spent more than 600 hours on the project, while also taking 5 other courses."
    },
    {
      title: "New Junior",
      company: "Phillips Academy Andover",
      year: "2020",
      companyLink: "https://andover.edu",
      desc: "After 7 years at St. Albans, it was time to make a change. I left in the middle of a global pandemic to attend the world's best boarding school... virtually. I've maintained a 5.8/6.0 GPA with coursework intended for sophomores or juniors in college.",
    },
    {
      title: "The Gen Z Project",
      company: "Founder",
      year: "2020",
      companyLink: "https://genzproject.org",
      desc: "I was frustrated by the gaps in youth polling, so I decided to do it myself. I set up The Gen Z Project to provide quality qualitative research on teens.",
    },
    {
      title: "Summer Program",
      company: "Stanford Humanities Institute",
      year: "2020",
      companyLink: "https://stanford.edu",
      desc: "I attended the prestigious Stanford Humanities Institute, where I took an intensive course on Ancient Rome and its legacies. Under Stanford Professor Christopher Krebs, I read nearly two dozen texts and enjoyed every minute of my experience.",
    },
    {
      title: "Student Journalism",
      company: "St. Albans News, The Exchanged, The Phillipian, The Revere.",
      year: "2019",
      companyLink: "https://exchanged.org",
      desc: "I've edited and written for four student publications. In 2019, I was the only editor to serve at both of my school's newspapers and the youngest editor at both. I wrote articles which garnered as much as 15x the interaction of the next-most-interacted-with article from the publication. Read some of my writings above.",
    },
    {
      title: "Euro Challenge",
      company: "The Federal Reserve Bank, New York City.",
      year: "2018",
      companyLink: "https://eurochallenge.org",
      desc: "Euro Challenge is a national economics competition sponsorerd by the EU. My team and I taught ourselves economics and won our regional competition. We then received a paid trip to present at the Fed, where we placed 6th in the country.",
    },
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1xmE3BOmgM7TAOOgVp36xQIQvYDntDYoo/view?usp=sharing",
  socialLinks: {
    instagram: "https://instagram.com/tabsterbaker",
    twitter: "https://twitter.com/genzdata",
    linkedin: "https://linkedin.com/in/theo-baker-aa3803189/",
    github: "https://github.com/theobaker",
    facebook: "https://facebook.com/",
  },
};

export default userData;
