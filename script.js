const memories = [
  {
    id: 1,
    label: "Comienzo",
    title: "Donde todo empezo",
    description:
      "Estas fotos donde todo empezo, donde nos empezaste a demostrar lo mucho que nos queres y cuidas",
    note: "Primera parada de nuestro recorrido juntos.",
    showContinueButton: false,
    gallery: [
      {
        type: "image",
        src: "assets/bebes1.jpeg",
        alt: "Bebes 1",
        caption: "Donde todo comenzo.",
      },
      {
        type: "image",
        src: "assets/bebes2.jpeg",
        alt: "Bebes 2",
        caption: "Tus cuidados desde el principio.",
      },
      {
        type: "image",
        src: "assets/bebes3.jpeg",
        alt: "Bebes 3",
        caption: "Tu amor desde el primer momento.",
      },
      {
        type: "image",
        src: "assets/bebes4.jpeg",
        alt: "Bebes 4",
        caption: "Creciendo bajo tu cuidado.",
      },
      {
        type: "image",
        src: "assets/bebes5.jpeg",
        alt: "Bebes 5",
        caption: "El inicio de nuestras historias.",
      },
    ],
  },
  {
    id: 2,
    label: "Crecer",
    title: "Nuestro recorrido juntos",
    description:
      "Nuestro recorrido juntos fue creciendo y fuimos aprendiendo todo de vos",
    note: "Segunda parada de nuestro viaje.",
    showContinueButton: true,
    gallery: [
      {
        type: "image",
        src: "assets/crecer1.jpeg",
        alt: "Crecer 1",
        caption: "Aprendiendo de vos cada dia.",
      },
      {
        type: "image",
        src: "assets/crecer2.jpeg",
        alt: "Crecer 2",
        caption: "Tu ejemplo nos guio.",
      },
      {
        type: "image",
        src: "assets/crecer3.jpeg",
        alt: "Crecer 3",
        caption: "Creciendo bajo tu tutela.",
      },
      {
        type: "image",
        src: "assets/crecer4.jpeg",
        alt: "Crecer 4",
        caption: "Cada momento de crecimiento.",
      },
      {
        type: "image",
        src: "assets/crecer5.jpeg",
        alt: "Crecer 5",
        caption: "Gracias por enseñarnos a crecer.",
      },
    ],
  },
  {
    id: 3,
    label: "Futbol",
    title: "Pasion por el deporte",
    description:
      "Aprendimos de vos lo que es la pasion y el amor por el deporte",
    note: "Tercera parada: futbol.",
    showContinueButton: true,
    gallery: [
      {
        type: "image",
        src: "assets/futbol1.jpeg",
        alt: "Futbol 1",
        caption: "Tu pasion nos inspiro.",
      },
      {
        type: "image",
        src: "assets/futbol2.jpeg",
        alt: "Futbol 2",
        caption: "El deporte que nos unio.",
      },
      {
        type: "image",
        src: "assets/futbol3.jpeg",
        alt: "Futbol 3",
        caption: "Compartiendo emociones en la cancha.",
      },
      {
        type: "image",
        src: "assets/futbol4.jpeg",
        alt: "Futbol 4",
        caption: "Tu amor por el futbol.",
      },
      {
        type: "image",
        src: "assets/futbol5.jpeg",
        alt: "Futbol 5",
        caption: "Recuerdos de pasion y alegria.",
      },
    ],
  },
  {
    id: 4,
    label: "Viajes",
    title: "Recorriendo el mundo juntos",
    description:
      "Nos llevaste a recorrer una parte del mundo juntos, y todavia nos falta por recorrer.",
    note: "Cuarta parada: nuestros viajes.",
    showContinueButton: true,
    gallery: [
      {
        type: "image",
        src: "assets/viajecitos1.jpeg",
        alt: "Viajecitos 1",
        caption: "Primer viaje compartido.",
      },
      {
        type: "image",
        src: "assets/viajecitos2.jpeg",
        alt: "Viajecitos 2",
        caption: "En la ruta contigo.",
      },
      {
        type: "image",
        src: "assets/viajecitos3.jpeg",
        alt: "Viajecitos 3",
        caption: "Destinos que compartimos.",
      },
      {
        type: "image",
        src: "assets/viajecitos4.jpeg",
        alt: "Viajecitos 4",
        caption: "Viajes que quedaron en nuestro corazon.",
      },
      {
        type: "image",
        src: "assets/viajecitos5.jpeg",
        alt: "Viajecitos 5",
        caption: "Y todavia hay mas por conocer contigo.",
      },
    ],
  },
  {
    id: 5,
    label: "Roquito",
    title: "El amor que nos une a todos",
    description:
      "Despues de negarte mucho, lo dejaste entrar a tu vida y lo amaste desde ese momento",
    note: "Quinta parada: Roquito.",
    showContinueButton: true,
    gallery: [
      {
        type: "image",
        src: "assets/rocco1.jpeg",
        alt: "Rocco 1",
        caption: "Cuando lo aceptaste en tu vida.",
      },
      {
        type: "image",
        src: "assets/rocco2.jpeg",
        alt: "Rocco 2",
        caption: "Tu amor cambio tu corazon.",
      },
      {
        type: "image",
        src: "assets/rocco3.jpeg",
        alt: "Rocco 3",
        caption: "El que completa nuestra familia.",
      },
      {
        type: "image",
        src: "assets/rocco4.jpeg",
        alt: "Rocco 4",
        caption: "Roquito y vos, un amor especial.",
      },
      {
        type: "image",
        src: "assets/rocco5.jpeg",
        alt: "Rocco 5",
        caption: "Gracias por abrir tu corazon.",
      },
    ],
  },
  {
    id: 6,
    label: "Juntos",
    title: "Todos los que te amamos",
    description:
      "Este recorrido termina con todos los que te amamos, gracias por estar siempre. Feliz dia del padre ❤️",
    note: "Ultima parada: todos juntos.",
    showContinueButton: true,
    gallery: [
      {
        type: "image",
        src: "assets/juntos1.jpeg",
        alt: "Juntos 1",
        caption: "Todos somos porque vos sos.",
      },
      {
        type: "image",
        src: "assets/juntos2.jpeg",
        alt: "Juntos 2",
        caption: "Tu familia que te ama.",
      },
      {
        type: "image",
        src: "assets/juntos3.jpeg",
        alt: "Juntos 3",
        caption: "Gracias por cada momento.",
      },
      {
        type: "image",
        src: "assets/juntos4.jpeg",
        alt: "Juntos 4",
        caption: "Feliz dia del padre.",
      },
      {
        type: "image",
        src: "assets/juntos5.jpeg",
        alt: "Juntos 5",
        caption: "Te amamos ❤️",
      },
    ],
  },
];

const DATE_PHOTO_1_SRC = "assets/fecha-1.jpg";
const DATE_PHOTO_2_SRC = "assets/fecha-2.jpg";
const DATE_PHOTO_FALLBACK_SRC = "assets/nosotros.jpg";
const MEMORY_VIDEO_SRC = "https://www.youtube-nocookie.com/embed/JGwWNGJdvx8";
const MEMORY_FALLBACK_IMAGE = "assets/nosotros.jpg";

let unlockedStops = 1;
let activeMemoryId = 1;
let activeGalleryIndex = 0;

const timelineProgress = document.getElementById("timeline-progress");
const timelineBoard = document.getElementById("timeline-board");
const timelineCard = document.getElementById("timeline-card");
const memoryCard = document.getElementById("memory-card");
const memoryStep = document.getElementById("memory-step");
const memoryTitle = document.getElementById("memory-title");
const memoryDescription = document.getElementById("memory-description");
const memoryMedia = document.getElementById("memory-media");
const memoryThumbnails = document.getElementById("memory-thumbnails");
const prevMediaBtn = document.getElementById("prev-media-btn");
const nextMediaBtn = document.getElementById("next-media-btn");
const memoryGalleryStatus = document.getElementById("memory-gallery-status");
const memoryNote = document.getElementById("memory-note");
const completeStopBtn = document.getElementById("complete-stop-btn");
const specialDateCard = document.getElementById("special-date-card");
const videoCard = document.getElementById("video-card");
const datePhoto1 = document.getElementById("date-photo-1");
const datePhoto2 = document.getElementById("date-photo-2");
const continueToVideoBtn = document.getElementById("continue-to-video");
const memoryVideo = document.getElementById("memory-video");

function setupDatePhotos() {
  const datePhotos = [
    { element: datePhoto1, src: DATE_PHOTO_1_SRC },
    { element: datePhoto2, src: DATE_PHOTO_2_SRC },
  ];

  datePhotos.forEach(({ element, src }) => {
    if (!element) return;
    element.src = src;
    element.addEventListener("error", () => {
      if (element.src.includes(DATE_PHOTO_FALLBACK_SRC)) return;
      element.src = DATE_PHOTO_FALLBACK_SRC;
    });
  });
}

function setupMemoryVideo() {
  if (!memoryVideo) return;
  memoryVideo.src = MEMORY_VIDEO_SRC;
}

function createImageMedia(mediaItem) {
  const figure = document.createElement("figure");
  figure.className = "photo-frame";

  const image = document.createElement("img");
  image.src = mediaItem.src;
  image.alt = mediaItem.alt;
  image.addEventListener("error", () => {
    if (image.src.includes(MEMORY_FALLBACK_IMAGE)) return;
    image.src = MEMORY_FALLBACK_IMAGE;
  });

  figure.appendChild(image);

  if (mediaItem.caption) {
    const caption = document.createElement("figcaption");
    caption.textContent = mediaItem.caption;
    figure.appendChild(caption);
  }

  return figure;
}

function createVideoMedia(mediaItem) {
  const wrapper = document.createElement("div");
  wrapper.className = "video-wrapper";

  const isYouTubeUrl = mediaItem.src.includes("youtube") || mediaItem.src.includes("youtu.be");

  if (isYouTubeUrl) {
    const iframe = document.createElement("iframe");
    iframe.title = mediaItem.alt;
    iframe.src = mediaItem.src;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    wrapper.appendChild(iframe);
  } else {
    const video = document.createElement("video");
    video.controls = true;
    video.style.width = "100%";
    video.style.borderRadius = "14px";

    const source = document.createElement("source");
    source.src = mediaItem.src;
    source.type = "video/mp4";

    video.appendChild(source);
    video.textContent = "Tu navegador no soporta videos HTML5.";
    wrapper.appendChild(video);
  }

  if (mediaItem.caption) {
    const caption = document.createElement("p");
    caption.className = "video-caption";
    caption.textContent = mediaItem.caption;
    wrapper.appendChild(caption);
  }

  return wrapper;
}

function inferMediaType(mediaItem) {
  if (mediaItem.type === "video" || mediaItem.type === "image") {
    return mediaItem.type;
  }

  const normalizedSrc = (mediaItem.src || "").toLowerCase().split("?")[0].split("#")[0];
  const isYouTubeUrl = normalizedSrc.includes("youtube") || normalizedSrc.includes("youtu.be");
  const isVideoFile = /\.(mp4|webm|ogg|mov|m4v)$/.test(normalizedSrc);

  if (isYouTubeUrl || isVideoFile) {
    return "video";
  }

  return "image";
}

function getActiveMemory() {
  return memories.find((memory) => memory.id === activeMemoryId);
}

function renderGalleryThumbnails(memory) {
  memoryThumbnails.innerHTML = "";

  memory.gallery.forEach((mediaItem, index) => {
    const thumbButton = document.createElement("button");
    thumbButton.type = "button";
    thumbButton.className = "memory-thumb";

    if (index === activeGalleryIndex) {
      thumbButton.classList.add("active");
    }

    const inferredType = inferMediaType(mediaItem);

    thumbButton.innerHTML = `
      <span class="memory-thumb-type">${inferredType === "video" ? "Video" : "Foto"}</span>
      <span class="memory-thumb-index">${index + 1}</span>
    `;
    thumbButton.addEventListener("click", () => {
      activeGalleryIndex = index;
      renderMemoryMedia(memory);
    });
    memoryThumbnails.appendChild(thumbButton);
  });
}

function renderMemoryMedia(memory) {
  memoryMedia.innerHTML = "";
  const mediaItem = memory.gallery[activeGalleryIndex];
  const inferredType = inferMediaType(mediaItem);
  const mediaElement = inferredType === "video" ? createVideoMedia(mediaItem) : createImageMedia(mediaItem);
  memoryMedia.appendChild(mediaElement);
  renderGalleryThumbnails(memory);
  updateGalleryControls(memory);
}

function updateGalleryControls(memory) {
  const total = memory.gallery.length;
  memoryGalleryStatus.textContent = `${activeGalleryIndex + 1} / ${total}`;
  prevMediaBtn.disabled = activeGalleryIndex === 0;
  nextMediaBtn.disabled = false;

  const isLastPhoto = activeGalleryIndex === total - 1;
  if (isLastPhoto && !memory.showContinueButton) {
    completeStopBtn.classList.add("hidden");
  } else {
    completeStopBtn.classList.remove("hidden");
  }
}

function updateTimelineProgress() {
  timelineProgress.textContent = `Parada ${activeMemoryId} de ${memories.length}`;
}

function renderTimeline() {
  timelineBoard.innerHTML = "";
  updateTimelineProgress();

  memories.forEach((memory, index) => {
    const stopButton = document.createElement("button");
    stopButton.type = "button";
    stopButton.className = "timeline-stop";

    const isUnlocked = index < unlockedStops;
    const isCompleted = index + 1 < unlockedStops;
    const isActive = memory.id === activeMemoryId;

    if (isUnlocked) {
      stopButton.classList.add("unlocked");
    }

    if (isCompleted) {
      stopButton.classList.add("completed");
    }

    if (isActive) {
      stopButton.classList.add("active");
    }

    stopButton.disabled = !isUnlocked;
    stopButton.innerHTML = `
      <span class="timeline-dot">${memory.id}</span>
      <span class="timeline-label">${memory.label}</span>
    `;
    stopButton.addEventListener("click", () => openMemory(memory.id));
    timelineBoard.appendChild(stopButton);

    if (index < memories.length - 1) {
      const connector = document.createElement("div");
      connector.className = "timeline-connector";
      if (index + 1 < unlockedStops) {
        connector.classList.add("completed");
      }
      timelineBoard.appendChild(connector);
    }
  });
}

function openMemory(memoryId) {
  const selectedMemory = memories.find((memory) => memory.id === memoryId);
  if (!selectedMemory) return;

  activeMemoryId = memoryId;
  activeGalleryIndex = 0;
  memoryStep.textContent = `Recuerdo ${memoryId} de ${memories.length}`;
  memoryTitle.textContent = selectedMemory.title;
  memoryDescription.textContent = selectedMemory.description;
  memoryNote.textContent = selectedMemory.note;
  completeStopBtn.textContent = memoryId === memories.length ? "Desbloquear sorpresa" : "Seguir recorrido";

  if (!selectedMemory.showContinueButton) {
    completeStopBtn.classList.add("hidden");
  } else {
    completeStopBtn.classList.remove("hidden");
  }

  renderMemoryMedia(selectedMemory);

  timelineCard.classList.add("hidden");
  memoryCard.classList.remove("hidden");
  renderTimeline();
}

function continueJourney() {
  if (activeMemoryId === memories.length) {
    memoryCard.classList.add("hidden");
    specialDateCard.classList.remove("hidden");
    return;
  }

  unlockedStops = Math.max(unlockedStops, activeMemoryId + 1);
  activeMemoryId += 1;
  memoryCard.classList.add("hidden");
  timelineCard.classList.remove("hidden");
  renderTimeline();
}

function stepGallery(direction) {
  const selectedMemory = getActiveMemory();
  if (!selectedMemory) return;

  const nextIndex = activeGalleryIndex + direction;
  const total = selectedMemory.gallery.length;

  if (nextIndex < 0) return;

  if (nextIndex >= total) {
    if (!selectedMemory.showContinueButton) {
      continueJourney();
    }
    return;
  }

  activeGalleryIndex = nextIndex;
  renderMemoryMedia(selectedMemory);
}

completeStopBtn.addEventListener("click", continueJourney);
prevMediaBtn.addEventListener("click", () => stepGallery(-1));
nextMediaBtn.addEventListener("click", () => stepGallery(1));

if (continueToVideoBtn) {
  continueToVideoBtn.addEventListener("click", () => {
    specialDateCard.classList.add("hidden");
    videoCard.classList.remove("hidden");
  });
}

setupDatePhotos();
setupMemoryVideo();
renderTimeline();
