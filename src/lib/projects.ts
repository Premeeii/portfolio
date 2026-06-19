export interface ProjectDetail {
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string[];
  tags: string[];
  imageSrc: string;
  href: string;
  highlights: string[];
  links: { label: string; url: string }[];
}

export const PROJECTS: ProjectDetail[] = [
  {
    id: "greenwin",
    slug: "greenwin",
    category: "Mobile Application",
    title: "GreenWin",
    subtitle:
      "Motorcycle Taxi Booking Mobile Application in Thammasat University",
    description:
      "Greenwin is a dedicated motorcycle taxi ride-hailing mobile application designed specifically for the Thammasat University campus. It was developed to solve common commuting challenges for students and staff, such as long wait times, high demand during rush hours, and limited driver availability during off-peak periods.",
    longDescription: [
      "GreenWin is a comprehensive Senior Project developed spanning my junior and senior years. The inspiration originally sparked during a Human-Computer Interaction (HCI) course, where the professor challenged us to design a solution that would enhance the quality of life at Thammasat University. Drawing from the shared personal experiences of my team members regarding campus transportation, we conceptualized a dedicated motorcycle taxi ride-hailing application.",
      "Our goal was to solve three primary pain points on campus: the struggle to find a ride during urgent rush hours, the scarcity of drivers during off-peak times (such as late at night), and the recurring financial burden of unregulated drivers overcharging students.",
      "What began as a simple UI prototype for an academic presentation quickly showed real-world potential. When it came time to select a Senior Project, we decided to bring this prototype to life. To ensure the application truly met the community's needs, we conducted extensive on-the-ground field research, surveying both Thammasat University students and local motorcycle taxi drivers. The feedback was overwhelmingly positive, with both groups agreeing that the platform would greatly improve campus logistics. Through this rigorous research and development process, our initial concept evolved into GreenWin, an application for calling motorcycle taxis within Thammasat University.",
    ],
    tags: ["REACT NATIVE", "SPRING BOOT", "MYSQL", "CLOUDINARY"],
    imageSrc: "/projectgreen.png",
    href: "/project/greenwin",
    highlights: [
      "Developed using React Native, Spring Boot, and MySQL.",
      "Microservices architecture with Spring Boot",
      "Real-time system between motorcycle taxis and customers using WebSocket.",
      "Implemented JWT for Authentication and Authorization.",
      "Utilized cloud systems for image storage via Cloudinary.",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/Premeeii/GreenWin-Mobile-Application" },
    ],
  },
  {
    id: "aquarium",
    slug: "aquarium",
    category: "Focus Web Application",
    title: "Aquarium",
    subtitle: "Immersive Focus Timer with Virtual Aquarium Experience",
    description:
      "The Aquarium web application is a focus-enhancement tool that combines gamified time management with a relaxing auditory experience. Users can set timers for specific tasks, which are visually simulated through the growth and care of fish in a virtual tank over the task's duration. Additionally, integrated background tracks are provided to foster a soothing environment, helping users reduce work-related stress and maintain higher levels of concentration.",
    longDescription: [
      "The Aquarium web application was inspired by times when we sit down to work or do tasks but lack concentration or lose focus. Therefore, the idea arose to create an application to help us stay focused on a particular thing. Thus, the Aquarium web application was created using a fish tank theme aimed at solving the mentioned problem.",
      "It uses a timer for specific work or tasks, where each task is represented as a fish in the tank. The number of fish in the tank depends on the number of tasks we have set.",
      "To provide more motivation and make it more appealing to use, other features were added. This includes a Co-Focusing-Room system, which allows us to join a room to work together with friends, simulating raising fish in the same tank. It also includes a Store system for buying different fish species or decorations for our tank. The currency used is based on the number of times the web application is used each day to motivate users to log in more. Because of all this, it was designed as the Aquarium web application for focusing on work."
    ],
    tags: ["VITE.JS", "SPRING BOOT", "MYSQL", "CLOUDINARY", "FIREBASE"],
    imageSrc: "/aquarium.png",
    href: "/project/aquarium",
    highlights: [
      "Developed using Vite.js, Spring Boot, and MySQ",
      "Implemented Firebase using Firestore for collaboration with friends through the Co-Focusing-Room.",
      "Created a music playback feature within the web application using YouTube(Lofi Girl).",
      "Utilized Framer Motion for animations within the web application.",
      "Responsive design across all device sizes"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/Premeeii/Aquarium-Web-Applicaiton" },
    ],
  },
  {
    id: "pokedex-1",
    slug: "pokedex",
    category: "Web Application",
    title: "Pokedex",
    subtitle: "Pokémon Encyclopedia Web Application",
    description:
      "A web application is a database dedicated to displaying detailed information about Pokémon from the beloved Japanese anime and franchise. Inspired by popular wiki-style platforms like Fandom, the app serves as a centralized hub that brings together in-depth facts, lore, and statistics collected from both official sources and the passionate fan community.",
    longDescription: [
      "The Pokedex web application was inspired by the developer's personal passion for the Japanese Pokémon anime, along with playing Pokémon-related games.",
      "During gameplay, it is necessary to browse the internet to find information about certain characters in the game, which makes finding some information quite time-consuming and complicated.",
      "Therefore, the idea arose to create a personal web application for finding Pokémon information. It was designed to be easy to understand and uncomplicated to search, allowing for quick access to the information. As a result, the Pokedex web application was designed to be used alongside searching for information to use, or alongside playing Pokémon games.",
      "Responsive design across all device sizes"
    ],
    tags: ["VITE.JS", "POKE.API"],
    imageSrc: "/pokedex.png",
    href: "/project/pokedex",
    highlights: [
      "Integrated an external API to fetch and display data using PokeAPI.",
      "Developed a filtering system to process and sort Pokémon data from the JSON provided by PokeAPI.",
    ],
    links: [
      { label: "Github", url: "https://github.com/Premeeii/Pokedex-PokemonWorld" },
      {label: "Live Demo", url: "https://pokedex-pokemon-world.vercel.app/"}
    ],
  },
  {
    id: "aespa",
    slug: "aespa",
    category: "Static Web Application",
    title: "Aespa",
    subtitle: "",
    description:
      "A static web application developed to display comprehensive information about the K-pop music group Aespa. Driven by personal interest in the group, the project focuses on delivering content through user interface. The design system and visual elements are directly inspired by Aespa's official conceptual themes, creating a cohesive and engaging user experience.",
    longDescription: [
      "The Aespa Static Web Application was created out of a personal passion for the Korean music group, aespa. It displays information about the group's history, members, and various music albums, and is designed based on the group's themes.",
      "Users can view details about their songs and play music videos directly through the web application. Although the design and development might not be highly complex, developing it from a personal interest brought a sense of personal pride, which served as the foundation for building this static web application.",
    ],
    tags: ["ANGULAR"],
    imageSrc: "/aespa.png",
    href: "/project/aespa",
    highlights: [
      "Embedded iFrame data using URLs from YouTube.",
      "Utilized Framer Motion for animations within the web application.",
      "Developed using Angular.",
      "Responsive design across all device sizes"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/Premeeii/aespa-profile-web" },
      {label: "Live Demo", url: "https://aespa-profile-lglgimfel-premeeiis-projects.vercel.app/"}
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
