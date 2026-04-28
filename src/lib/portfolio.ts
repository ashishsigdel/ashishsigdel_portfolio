export type Project = {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  coverPhoto: string;
  githubLink: string | null;
  previewLink: string | null;
  isEnable: boolean;
  tags: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type ProjectsApiResponse = {
  status: number;
  message: string;
  data: {
    projects: Project[];
    total: number;
    currentPage: number;
    totalPages: number;
  };
};

const fallbackProjects: Project[] = [
  {
    id: 21,
    title: "Multimodal RAG Chat",
    shortDescription:
      "It is a multimodal AI tool that lets you upload PDFs, DOCX, and TXT files, index their content, and interact with them via a conversational interface. Supports text, tables, and images with real-time processing and vector search transparency.",
    description: "Multimodal RAG application for documents with chat.",
    coverPhoto:
      "https://res.cloudinary.com/dasbcsvma/image/upload/v1764513844/ashishsigdel-web/Screenshot%202025-11-30%20at%208.png",
    githubLink: "https://github.com/ashishsigdel/multimodal-rag-docs-chat",
    previewLink: null,
    isEnable: true,
    tags: "RAG,machine learning,web development,research",
    createdAt: "2025-11-30T14:44:04.000Z",
    updatedAt: "2025-11-30T14:44:04.000Z",
    deletedAt: null,
  },
  {
                "id": 20,
                "title": "PlantCare - Cauliflower Disease Detection",
                "shortDescription": "PlantCare Apps can help you detect cauliflower disease and provide guidance for your plant.",
                "description": "# 🌿 PlantCare: Cauliflower Disease Detection Using YOLOv8\r\n\r\n**PlantCare** is a mobile application that detects **cauliflower plant diseases** using **YOLOv8 deep learning models**.  \r\n\r\nThis project was developed as a **college minor project** at **Pashchimanchal Campus, Institute of Engineering, Tribhuvan University** by: \r\n- Ashish Sigdel (me)\r\n- Indra Prasad Sapkota  \r\n- Sijan Paudel  \r\n- Sneha Chhetri  \r\n\r\n## Key Functionalities\r\n\r\n- Real-time disease detection via YOLOv8 model  \r\n- Multi-language UI with audio output  \r\n- Secure authentication and user history  \r\n- Cloud-based inference and data storage  \r\n- Disease details with preventive measures and cure suggestions  \r\n\r\n**Results:**  \r\nYOLOv8s achieved **Precision 34.4%**, **Recall 31.9%**, and **mAP@50 28.1%**, proving effective for early-stage disease detection in local crops.\r\n\r\n**Tech Stack:** React Native, Node.js, Flask, YOLOv8, Cloudinary  \r\n\r\n## Preview\r\n\r\n![Plantcare-screenshot](https://i.postimg.cc/8PTkm7GC/plantcare-screenshot.png)\r\n\r\n",
                "coverPhoto": "https://res.cloudinary.com/dasbcsvma/image/upload/v1761325863/ashishsigdel-web/logo.png",
                "githubLink": "https://github.com/ashishsigdel/plantcare",
                "previewLink": "https://huggingface.co/spaces/ashishsigdel/plantcare_inference",
                "isEnable": true,
                "tags": "machine learning,app development,research",
                "createdAt": "2025-10-24T17:09:12.000Z",
                "updatedAt": "2025-10-25T02:39:10.000Z",
                "deletedAt": null
            },
  {
    id: 19,
    title: "Bibliook - AI Study Workspace",
    shortDescription:
      "A smarter, collaborative platform for learners to create, organize, and share notes and questions-exam-focused, habit-focused, and community-driven.",
    description: "AI powered study workspace platform.",
    coverPhoto:
      "https://res.cloudinary.com/dasbcsvma/image/upload/v1759812980/ashishsigdel-web/og.png",
    githubLink: "https://github.com/ashishsigdel/Bibliook-V1",
    previewLink: "https://bibliook.ashishsigdel.com.np/",
    isEnable: true,
    tags: "machine learning,app development,web development,research",
    createdAt: "2025-10-07T04:56:20.000Z",
    updatedAt: "2025-10-24T17:12:21.000Z",
    deletedAt: null,
  },
  {
    id: 18,
    title: "Weather App",
    shortDescription:
      "Create a Stunning Weather App in React Native with Live API.",
    description: "Sleek weather app UI in React Native.",
    coverPhoto:
      "https://res.cloudinary.com/dasbcsvma/image/upload/v1748349557/ashishsigdel-web/weather-app-ui.webp",
    githubLink: null,
    previewLink: null,
    isEnable: true,
    tags: "app development,react native,expo,nativewind",
    createdAt: "2025-05-27T12:39:17.000Z",
    updatedAt: "2025-10-07T05:35:23.000Z",
    deletedAt: null,
  },
  {
    id: 17,
    title: "My npm packages",
    shortDescription:
      "Open Source, Lightweight and tree-shakable, Built with TypeScript npm Packages for react and nextjs",
    description: "Collection of open source npm packages.",
    coverPhoto:
      "https://res.cloudinary.com/dasbcsvma/image/upload/v1747722391/ashishsigdel-web/1_PBI3ePouRVFB7_loeY9sQg.webp",
    githubLink: "",
    previewLink: "",
    isEnable: true,
    tags: "npm package,react,nextjs",
    createdAt: "2025-05-20T06:26:31.000Z",
    updatedAt: "2025-10-07T05:35:23.000Z",
    deletedAt: null,
  },
  {
    id: 16,
    title: "Music Player App",
    shortDescription:
      "Fully functional music player app that loads songs from a JSON file.",
    description: "React Native music app with dynamic list and controls.",
    coverPhoto:
      "https://res.cloudinary.com/dasbcsvma/image/upload/v1736272239/ashishsigdel-web/music-player-app.png",
    githubLink: "https://github.com/asprog-official/music_player",
    previewLink: "https://youtu.be/-wVO1kDIawc?si=o6iH1r72byy1ljij",
    isEnable: true,
    tags: "react native,expo,nativewind,music,app development",
    createdAt: "2025-05-05T16:34:06.000Z",
    updatedAt: "2025-10-07T05:35:23.000Z",
    deletedAt: null,
  },
];

export const hardcodedPortfolioProjects = fallbackProjects;

export async function getProjects(page = 1, limit = 6, search = "") {
  try {
    const params = new URLSearchParams({
      page: String(page),
      limit: String(limit),
      search,
    });

    const response = await fetch(
      `https://api.ashishsigdel.com.np/api/v1/project/get?${params.toString()}`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch portfolio projects");
    }

    const json = (await response.json()) as ProjectsApiResponse;
    return json.data;
  } catch {
    return {
      projects: fallbackProjects,
      total: 12,
      currentPage: 1,
      totalPages: 2,
    };
  }
}

export async function getProjectById(id: number) {
  const firstPage = await getProjects(1, 6, "");
  const fromFirstPage = firstPage.projects.find((project) => project.id === id);

  if (fromFirstPage) {
    return fromFirstPage;
  }

  for (let page = 2; page <= firstPage.totalPages; page++) {
    const nextPage = await getProjects(page, 6, "");
    const found = nextPage.projects.find((project) => project.id === id);

    if (found) {
      return found;
    }
  }

  return null;
}

export function getHardcodedProjectByRouteId(routeId: number) {
  if (!Number.isInteger(routeId) || routeId < 1) {
    return null;
  }

  const byExactId = hardcodedPortfolioProjects.find(
    (project) => project.id === routeId,
  );

  if (byExactId) {
    return byExactId;
  }

  // Also support /portfolio/1 style routes as 1-based index.
  const byIndex = hardcodedPortfolioProjects[routeId - 1];
  return byIndex ?? null;
}
