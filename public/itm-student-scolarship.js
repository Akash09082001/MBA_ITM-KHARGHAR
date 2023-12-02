const itmScolarship = [
    {
      sId: 1,
      sHeading: "Varsha Suman",
      sName: "Received 100% Scholarship",
      sImg: "assets/video/itm-student-scolarship/LNYdTraSzbE-SD.webp",
      sYTLink: "LNYdTraSzbE",
    },
    {
      sId: 2,
      sHeading: "Siddhant Kundu",
      sName: "Received 100% Scholarship",
      sImg: "assets/video/itm-student-scolarship/BmRPBXGBRo0-SD.webp",
      sYTLink: "BmRPBXGBRo0",
    },
    {
      sId: 3,
      sHeading: "Rupali Patil",
      sName: "Received 50% Scholarship",
      sImg: "assets/video/itm-student-scolarship/q0Yjo1Wu3DE-SD.webp",
      sYTLink: "q0Yjo1Wu3DE",
    },
    {
      sId: 4,
      sHeading: "Gaurav Pathak",
      sName: "Received 100% Scholarship",
      sImg: "assets/video/itm-student-scolarship/yEPCUXF0uyA-SD.webp",
      sYTLink: "yEPCUXF0uyA",
    },
    {
      sId: 5,
      sHeading: "Karan Varshney",
      sName: "on Achieving a 100% Scholarship",
      sImg: "assets/video/itm-student-scolarship/vdm5K2lSxpk-SD.webp",
      sYTLink: "vdm5K2lSxpk",
    },
    {
      sId: 6,
      sHeading: "Manik Mittal",
      sName: "on Achieving a 100% Scholarship",
      sImg: "assets/video/itm-student-scolarship/Zgr7pUnMC5M-SD.webp",
      sYTLink: "Zgr7pUnMC5M",
    },
    {
      sId: 7,
      sHeading: "Suprab Sen",
      sName: "on Achieving a 100% Scholarship",
      sImg: "assets/video/itm-student-scolarship/6pashfxPq0U-SD.webp",
      sYTLink: "6pashfxPq0U",
    },
    {
      sId: 8,
      sHeading: "Anam Sadiya Khan",
      sName: "Received 100% Scholarship",
      sImg: "assets/video/itm-student-scolarship/_qUBZMh6-2A-SD.webp",
      sYTLink: "_qUBZMh6-2A",
    },
    {
      sId: 9,
      sHeading: "Abhay Munjal",
      sName: "Received 100% Scholarship",
      sImg: "assets/video/itm-student-scolarship/5VetDCNegCs-SD.webp",
      sYTLink: "5VetDCNegCs",
    },
  ];
  
  let output2 = itmScolarship.map(showData).join("");
  let list2 = document.getElementById("student-scolarship-list");
  // list2.innerHTML = "hello";
  
  function showData(itmScolarship) {
    let listItems = `
      <div class="flex flex-col max-w-xs w-80 rounded-md">
          <div class="flex cursor-pointer relative items-center justify-center flex-col w-full rounded-md"
              onclick="openPopup('${itmScolarship.sYTLink}')">
              <div class="absolute flex w-10 items-center justify-center h-fit z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="w-32 h-32 text-white">
                      <path fill-rule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                          clip-rule="evenodd" />
                  </svg>
              </div>
              <div
                  class="flex flex-col w-full absolute z-10 bottom-2 right-0 px-5 py-3 items-end justify-center ">
                  <span
                      class="bg-white text-brand-red px-2 py-1 w-fit rounded-md font-bold text-sm">${itmScolarship.sHeading}</span>
                  <p class="bg-white text-brand-red rounded-md px-2 py-1 w-fit text-xs text-right">
                  ${itmScolarship.sName}</p>
              </div>
              <div class="flex  w-full">
                  <img class="object-cover   rounded-md w-full grayscale hover:grayscale-0"
                      src=${itmScolarship.sImg}
                      alt="" />
              </div>
          </div>
      </div>    
      `;
    return listItems;
  }
  