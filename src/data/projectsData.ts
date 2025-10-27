export const projectsData = [
  {
    title: "Rummikub Optimal Play Solver",
    id: "rummikub",
    subtitle: "Find your best move, every time",
    content: {
      overview:
        "Last New Years Eve, I took a devastating loss in the tile-based board game Rummikub. I was determined to never face such embarrassment again and immediately got to work on the Rummikub Optimal Play Solver (ROPS). ROPS allows you to crush your friends and family with ease. Given any legitimate board and some tiles to play with, ROPS will return the most optimal play in an instant. ROPS uses linear programming to produce a solution efficiently and correctly, prioritizing moves that reduce tile disruption on the board. The paper it is based off of can found in the README in the project's repo on Github. ",
      technologies: [],
      images: ["homescreen.jpg", "solution.jpg", "no_solution.jpg"],
      github_link: "https://github.com/chakrupka/rummikub",
      website_link: "https://rops.onrender.com",
      image_type: "mobile",
    },
  },
  {
    title: "Steal a Meal",
    id: "stealameal",
    subtitle: "Never eat alone again",
    content: {
      overview:
        "With terms at Dartmouth being just ten weeks long, they were often jam-packed and only seemed to get busier as the weeks progressed. Grabbing meals with friends quickly goes from an easy task to a difficult balancing act. To try and ease this struggle faced by many Dartmouth students, Steal A Meal was created. The app allows users to easily ping friends (or groups of friends) for meals. Location-based services let in-app friends see where other friends are currently eating, and the ability to enter schedules makes planning meals easier than ever.",
      technologies: [],
      images: [
        "splash.jpg",
        "homescreen.jpg",
        "meals.jpg",
        "schedule_meal.jpg",
        "map.jpg",
        "build_squad.jpg",
        "ping_friends.jpg",
        "ping_squads.jpg",
        "friend_schedule.jpg",
        "add_friends.jpg",
        "location.jpg",
      ],
      github_link: "https://github.com/chakrupka/stealameal-local",
      website_link: "",
      image_type: "mobile",
    },
  },
  {
    title: "TripTies",
    id: "tripties",
    subtitle: "Plan trips together, effortlessly",
    content: {
      overview:
        "Planning a trip with multiple people can be difficult — keeping track of flights and hotels and dates across different group chats or email chains is a mess. TripTies centralizes everything in one place, and encourages user interaction with a roadmap. Begin by entering your availability, and TripTies makes it easy to see what time is the best for everyone. Track flights, search hotels, and then visualize everything on a map. Share the trip link with friends to let them view and join your trip with ease. Not currently optimized for mobile.",
      technologies: [],
      images: [],
      github_link: "https://github.com/chakrupka/tripcoordinator-frontend",
      website_link: "https://project-trip-coordinator.onrender.com",
      image_type: "video",
    },
  },
  {
    title: "Indigenous Language Spell Corrector",
    id: "spellcorrector",
    subtitle: "Preserving language through AI",
    content: {
      overview:
        "Cook Islands Māori (CIM) is the indigenous Polynesian language spoken in the Cook Islands by roughly 17,000-18,000 fluent speakers. Considered an endangered language, significant revitalization efforts have been made to preserve it, especially in regard to digitization. Making the language digitally accessible is almost necessary in today's world, and one such facet is the implementation of a viable spell corrector. By parsing scripts of cleaned spoken dialogue, a dictionary of CIM words was able to be created. Noise was introduced into the dataset through random and directed errors, and then a T5 text-to-text transformer was fine-tuned on the datasets. The result was a spell corrector that offered significantly better error detection and resolve than previous tools. Our model's word error rate was 7.43%, down from 22.14% in the only commercially available corrector. ",
      technologies: [],
      images: [],
      github_link:
        "https://drive.google.com/drive/folders/18U0Zm4rvlGcpc5cas4PtUWi-CFiZQJhf?usp=sharing",
      website_link: "",
      image_type: "none",
    },
  },
  {
    title: "Stats For The Times",
    id: "statsforthetimes",
    subtitle: "Track your Connections",
    content: {
      overview:
        "My family loves Connections, the New York Time's daily word-based puzzle game. We even have a group chat where we share how well we did. A while back, an article was posted in this group chat in which the author attempted to create a scoring system (this was prior to NYT implementing their own stats within the app). I realized I could turn my family's daily fun into a little competition, so I created a website that could calculate your score based off your results. I slowly expanded the site to allow friends and family to save their results, view stats, and compete on a much larger scale. ",
      technologies: [],
      images: ["home.jpg", "leaderboard.jpg", "games.jpg", "stats.jpg"],
      github_link: "https://github.com/chakrupka/connectionstats-frontend",
      website_link: "https://statsforthetimes.com",
      image_type: "mobile",
    },
  },
  {
    title: "Five v Five",
    id: "fivevfive",
    subtitle: "Stack up the best lineups",
    content: {
      overview:
        "I am an avid basketball fan (go Celtics!), and forever curious about the game. When I was first getting into web development, I decided to create a website that lets you choose your own starting five and compare it to any other. The website uses various APIs to let you search for players and bring up their season stats. Results are compiled and show with a neat graphic at the end, highlighting which category a team excels at. ",
      technologies: [],
      images: ["player_search.jpg", "players.jpg", "results.jpg"],
      github_link: "https://github.com/chakrupka/fivevfive",
      website_link: "https://fivevfive.com",
      image_type: "landscape",
    },
  },
  // {
  //   title: "Energy Kiosk",
  //   id: "energykiosk", // https://irving-energy-kiosk.onrender.com/
  //   subtitle: "Visualize energy around Dartmouth",
  //   content: {
  //     overview: "This project does amazing things",
  //     technologies: [],
  //     images: ["detail1.jpg", "detail2.jpg"],
  //     link: "https://github.com/",
  //     image_type: "landscape",
  //   },
  // },
];
