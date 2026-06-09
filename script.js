const memories = [
  {
    id: 1,
    label: "Viajecitos",
    title: "Nuestros viajecitos",
    description:
      "Primera parada: esos viajecitos que compartimos y que siempre me sacan una sonrisa.",
    note: "Puedes seguir sumando fotos de este momento y despues vamos ajustando textos si quieres.",
    gallery: [
      {
        type: "image",
        src: "assets/viajecitos-1.jpeg",
        alt: "Viajecitos con papa 1",
        caption: "Primer viajecito desbloqueado.",
      },
      {
        type: "image",
        src: "assets/viajecitos-2.jpeg",
        alt: "Viajecitos con papa 2",
        caption: "Segundo recuerdo de nuestros viajecitos.",
      },
      {
        type: "image",
        src: "assets/viajecitos-3.jpeg",
        alt: "Viajecitos con papa 3",
        caption: "Tercer recuerdo de ruta juntos.",
      },
      {
        type: "image",
        src: "assets/viajecitos-4.jpeg",
        alt: "Viajecitos con papa 4",
        caption: "Cuarto recuerdo de este momento.",
      },
      {
        type: "image",
        src: "assets/viajecitos-5.jpeg",
        alt: "Viajecitos con papa 5",
        caption: "Quinto recuerdo para cerrar la primera parada.",
      },
    ],
  },
  {
    id: 2,
    label: "Cancha",
    title: "Las veces que fuimos a la cancha juntos",
    description:
      "La tribuna, los cantos, los abrazos en los goles y esas salidas que siempre quedaron guardadas.",
    note: "Aca puedes usar una foto en la cancha o un video corto del ambiente de tribuna.",
    gallery: [
      {
        type: "image",
        src: "assets/fecha-1.jpg",
        alt: "Recuerdo en la cancha con papa",
        caption: "La previa, la tribuna y el abrazo en cada gol siguen intactos.",
      },
      {
        type: "image",
        src: "assets/fecha-2.jpg",
        alt: "Otro recuerdo de cancha con papa",
        caption: "Aca puedes meter una segunda foto de cancha para que se sienta mas vivo el momento.",
      },
    ],
  },
  {
    id: 3,
    label: "Asados",
    title: "Tus asados de domingo",
    description:
      "Hay cosas que tienen olor a casa, y para mi una de esas siempre va a ser un asado hecho por vos.",
    note: "Aca puede ir una foto de la parrilla, la mesa familiar o un video de las brasas.",
    gallery: [
      {
        type: "image",
        src: "assets/fecha-2.jpg",
        alt: "Asado familiar con papa",
        caption: "No era solo comer, era el ritual de verte en la parrilla y reunirnos todos.",
      },
      {
        type: "image",
        src: "assets/nosotros.jpg",
        alt: "Mesa familiar alrededor del asado",
        caption: "Aca puedes agregar una foto de la mesa, la parrilla o incluso un video del fuego.",
      },
    ],
  },
  {
    id: 4,
    label: "Viajes",
    title: "Los viajes que compartimos",
    description:
      "Cada viaje tuvo algo tuyo: la compania, el humor, las charlas y esa forma de hacer especial cualquier camino.",
    note: "Cuando me pases material, aca podemos poner una foto del auto, ruta o vacaciones.",
    gallery: [
      {
        type: "image",
        src: "assets/nosotros.jpg",
        alt: "Recuerdo de viajes con papa",
        caption: "Hay viajes que se recuerdan por el lugar y otros por quien iba al lado. Este es de esos.",
      },
      {
        type: "image",
        src: "assets/momento.jpg",
        alt: "Ruta compartida con papa",
        caption: "Aca puedes poner una foto de ruta, del auto o de alguna parada especial.",
      },
    ],
  },
  {
    id: 5,
    label: "Familia",
    title: "Los momentos simples que valen todo",
    description:
      "Estar en casa, compartir una comida o hablar un rato tambien son de esos recuerdos que quedan para siempre.",
    note: "Este punto sirve para una foto tranquila en familia o un video saludando.",
    gallery: [
      {
        type: "image",
        src: "assets/nosotros.jpg",
        alt: "Momento en familia con papa",
        caption: "Los ratos tranquilos tambien terminan siendo de los recuerdos mas grandes.",
      },
      {
        type: "image",
        src: "assets/fecha-1.jpg",
        alt: "Otro momento familiar con papa",
        caption: "Aca puedes sumar una foto simple en casa o un video saludando entre todos.",
      },
    ],
  },
  {
    id: 6,
    label: "Final",
    title: "Todo lo que me dejaste",
    description:
      "Gracias por acompanarme en cada etapa y por estar en tantos recuerdos que hoy forman mi vida.",
    note: "Este ultimo punto puede terminar en una foto muy especial o directamente en el video final.",
    gallery: [
      {
        type: "image",
        src: "assets/nosotros.jpg",
        alt: "Recuerdo final con papa",
        caption: "El cierre puede ser una foto muy especial antes de pasar al video final.",
      },
      {
        type: "image",
        src: "assets/momento.jpg",
        alt: "Cierre del recorrido con papa",
        caption: "Despues, desde aca, saltamos directo a la sorpresa final.",
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

  const iframe = document.createElement("iframe");
  iframe.title = mediaItem.alt;
  iframe.src = mediaItem.src;
  iframe.loading = "lazy";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;

  wrapper.appendChild(iframe);

  if (mediaItem.caption) {
    const caption = document.createElement("p");
    caption.className = "video-caption";
    caption.textContent = mediaItem.caption;
    wrapper.appendChild(caption);
  }

  return wrapper;
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

    thumbButton.innerHTML = `
      <span class="memory-thumb-type">${mediaItem.type === "video" ? "Video" : "Foto"}</span>
      <span class="memory-thumb-index">${index + 1}</span>
    `;
    thumbButton.addEventListener("click", () => {
      activeGalleryIndex = index;
      renderMemoryMedia(memory);
    });
    memoryThumbnails.appendChild(thumbButton);
  });
}

function updateGalleryControls(memory) {
  const total = memory.gallery.length;
  memoryGalleryStatus.textContent = `${activeGalleryIndex + 1} / ${total}`;
  prevMediaBtn.disabled = activeGalleryIndex === 0;
  nextMediaBtn.disabled = activeGalleryIndex === total - 1;
}

function renderMemoryMedia(memory) {
  memoryMedia.innerHTML = "";
  const mediaItem = memory.gallery[activeGalleryIndex];
  const mediaElement = mediaItem.type === "video" ? createVideoMedia(mediaItem) : createImageMedia(mediaItem);
  memoryMedia.appendChild(mediaElement);
  renderGalleryThumbnails(memory);
  updateGalleryControls(memory);
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
  renderMemoryMedia(selectedMemory);
  completeStopBtn.textContent = memoryId === memories.length ? "Desbloquear sorpresa" : "Seguir recorrido";

  timelineCard.classList.add("hidden");
  memoryCard.classList.remove("hidden");
  renderTimeline();
}

function stepGallery(direction) {
  const selectedMemory = getActiveMemory();
  if (!selectedMemory) return;

  const nextIndex = activeGalleryIndex + direction;
  if (nextIndex < 0 || nextIndex >= selectedMemory.gallery.length) return;

  activeGalleryIndex = nextIndex;
  renderMemoryMedia(selectedMemory);
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
