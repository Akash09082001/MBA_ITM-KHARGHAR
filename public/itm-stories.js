const itmStories = [
    {
      sId: 1,
      sHeading: "Vineeta Sharma ",
      sName: "Alumni",
      sImg: "assets/video/AIrc0ky8HTA-SD.webp",
      sYTLink: "AIrc0ky8HTA",
    },
    {
      sId: 2,
      sHeading: "Students'",
      sName: "Safety is a Commitment",
      sImg: "assets/video/6i-Z10rhSF8-SD.webp",
      sYTLink: "6i-Z10rhSF8",
    },
    {
      sId: 3,
      sHeading: "Kharghar campus",
      sName: "A Walkthrough",
      sImg: "assets/video/7wMVj47lg_A-SD.webp",
      sYTLink: "7wMVj47lg_A",
    },
    {
      sId: 4,
      sHeading: "NGO internship",
      sName: "at Old age home Matoshree",
      sImg: "assets/video/_xUHvKYQ7O8-SD.webp",
      sYTLink: "_xUHvKYQ7O8",
    },
    {
      sId: 5,
      sHeading: "ITM Group",
      sName: "ITM Group of Institutions",
      sImg: "assets/video/6i-Z10rhSF8-SD.webp",
      sYTLink: "FvvsgKopWSo",
    },
    {
      sId: 6,
      sHeading: "Harini Sreenivasan",
      sName: "Talk on Design thinking in HR",
      sImg: "assets/video/hqY46sUhi4E-SD.webp",
      sYTLink: "hqY46sUhi4E",
    },
    {
      sId: 7,
      sHeading: "Divya Sahal",
      sName: "Student | Financial Markets",
      sImg: "assets/video/Mua-fRUyUnE-SD.webp",
      sYTLink: "Mua-fRUyUnE",
    },
    {
      sId: 8,
      sHeading: "Siddhi Saxena",
      sName: "Student | Financial Markets",
      sImg: "assets/video/LlszPXnp6oc-SD.webp",
      sYTLink: "LlszPXnp6oc",
    },
    {
      sId: 9,
      sHeading: "Richa Bharti",
      sName: "Student | Financial Markets",
      sImg: "/public/assets/video/NQ1oLmX-peU-SD.webp",
      sYTLink: "NQ1oLmX-peU",
    },
    {
      sId: 10,
      sHeading: "Ruchika",
      sName: "Student | Financial Markets",
      sImg: "assets/video/WSlL69tNRw0-SD.webp",
      sYTLink: "WSlL69tNRw0",
    },
    {
      sId: 11,
      sHeading: "Rutuja Nair",
      sName: "Student | Financial Markets",
      sImg: "assets/video/Ot79YdPD_7I-SD.webp",
      sYTLink: "Ot79YdPD_7I",
    },
    {
      sId: 12,
      sHeading: "Vaishali Shrivastwa",
      sName: "Student | Financial Markets",
      sImg: "assets/video/1lojPtzjNWI-SD.webp",
      sYTLink: "1lojPtzjNWI",
    },
    {
      sId: 13,
      sHeading: "Juphimia Ryntathiang",
      sName: "Student | Financial Markets",
      sImg: "assets/video/Q4MPvkdOD1Q-SD.webp",
      sYTLink: "Q4MPvkdOD1Q",
    },
    {
      sId: 14,
      sHeading: "Soumya Goyal",
      sName: "Received 50% Scholarship",
      sImg: "assets/video/4pwmKPcg4Mc-SD.webp",
      sYTLink: "4pwmKPcg4Mc",
    },
    {
      sId: 15,
      sHeading: "Sneha Chatterjee ",
      sName: "",
      sImg: "assets/video/QIHSuMnEMPc-SD.webp",
      sYTLink: "QIHSuMnEMPc",
    },
    {
      sId: 16,
      sHeading: "Mankaran Singh",
      sName: "Marketing 2018-20",
      sImg: "assets/video/IFwlc8PJwp0-SD.webp",
      sYTLink: "IFwlc8PJwp0",
    },
    {
      sId: 17,
      sHeading: "Our Experience. Your Glory.",
      sName: "ITM Business School",
      sImg: "assets/video/6qZ8lt54Xrc-SD.webp",
      sYTLink: "6qZ8lt54Xrc",
    },
  ];
  
  let output = itmStories.map(showData).join("");
  let list = document.getElementById("stories-list");
  list.innerHTML = output;
  
  function showData(itmStories) {
    let listItems = `
      <div class="flex flex-col max-w-xs w-80 border border-gray-300 rounded-md">
        <div class="flex cursor-pointer relative items-center justify-center flex-col w-full rounded-md"
            onclick="openPopup('${itmStories.sYTLink}')">
            <div class="absolute flex w-10 items-center justify-center h-fit z-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-32 h-32 text-white">
                    <path fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex w-full">
            <img class="object-contain aspect-4/3 rounded-md w-full grayscale hover:grayscale-0"
            src=${itmStories.sImg} alt="" />
            </div>
            <div class="flex flex-col px-3 py-2 gap-1 w-full">
              <h3 class="flex text-brand-red w-fit text-base font-bold px-2 py-1 rounded-md ">${itmStories.sHeading}</h3>
                <span
                    class="w-fit px-2 py-1 rounded-md font-bold text-xs">${itmStories.sName}</span>
            </div>
        </div>
      </div>
    `;
    return listItems;
  }
  
  //  Video popup  code
  var player;
  
  function openPopup(videoId) {
    var modal = document.getElementById("popup");
    var videoFrame = document.getElementById("videoFrame");
    videoFrame.src = "https://www.youtube.com/embed/" + videoId;
    modal.style.display = "block";
  }
  
  function closePopup() {
    var modal = document.getElementById("popup");
    var videoFrame = document.getElementById("videoFrame");
    videoFrame.src = "";
    modal.style.display = "none";
  }
  