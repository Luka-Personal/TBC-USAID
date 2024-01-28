export const state = {
  coursesDatabase: [],
  educationalProgramOverview: {
    programTitle: "",
    programDescription: "",
    programDetails: "",
  },
  carouselImages: [],
  accordionDatabase: [],
};

function generateCoursesData() {
  const courseData = [
    {
      photoURL: "src/img/course-images/iosDevelopment.webp",
      title: "iOS Development",
      status: "რეგისტრაცია დასრულებულია",
      courseLink: "https://www.tbcacademy.ge/usaid/ios-development",
    },

    {
      photoURL: "/src/img/course-images/react.webp",
      title: "React",
      status: "რეგისტრაცია დასრულებულია",
      courseLink: "https://www.tbcacademy.ge/usaid/react",
    },

    {
      photoURL: "/src/img/course-images/introToPython.webp",
      title: "Intro to Python",
      status: "რეგისტრაცია დასრულებულია",
      courseLink: "https://www.tbcacademy.ge/usaid/python-basic",
    },

    {
      photoURL: "/src/img/course-images/advancedPython.webp",
      title: "Advanced Python",
      status: "რეგისტრაცია დასრულებულია",
      courseLink: "https://www.tbcacademy.ge/usaid/python-advance",
    },

    {
      photoURL: "/src/img/course-images/advancedCybersecurity.webp",
      title: "Advanced Cybersecurity Course",
      status: "რეგისტრაცია დასრულებულია",
      courseLink:
        "https://www.tbcacademy.ge/usaid/information-security-advance",
    },

    {
      photoURL: "/src/img/course-images/tot.webp",
      title: "ToT - Training of Trainers",
      status: "რეგისტრაცია დასრულებულია",
      courseLink: "https://www.tbcacademy.ge/usaid/training-of-trainers",
    },

    {
      photoURL: "/src/img/course-images/blockchain.webp",
      title: "Blockchain",
      status: "რეგისტრაცია დასრულებულია",
      courseLink: "https://www.tbcacademy.ge/usaid/blockchain",
    },

    {
      photoURL: "/src/img/course-images/devops.webp",
      title: "DevOps",
      status: "რეგისტრაცია დასრულებულია",
      courseLink: "https://www.tbcacademy.ge/usaid/devops",
    },

    {
      photoURL: "/src/img/course-images/informationSecurity.webp",
      title: "Information Security Governance",
      status: "რეგისტრაცია დასრულებულია",
      courseLink: "https://www.tbcacademy.ge/usaid/information-security-basic",
    },
  ];
  courseData.forEach((courseData) => {
    state.coursesDatabase.push(courseData);
  });
}
function generateProgramData() {
  state.educationalProgramOverview.programTitle = `„ TBC x USAID - ტექნოლოგიური განათლებისთვის “`;
  state.educationalProgramOverview.programDescription =
    " პროგრამა  საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს  სხვადასხვა ICT მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.";
  state.educationalProgramOverview.programDetails = "გაიგე მეტი";
}
function generateCarouselData() {
  const carouselData = [
    {
      photoURLs: [
        "/src/img/partners-images/usaid.webp",
        "/src/img/partners-images/spaceint.webp",
        "/src/img/partners-images/tineti.webp",
      ],
    },
    {
      photoURLs: [
        "/src/img/partners-images/tegeta.webp",
        "/src/img/partners-images/spectrie.webp",
        "/src/img/partners-images/lisingTBC.webp",
      ],
    },
    {
      photoURLs: ["/src/img/partners-images/ufc.webp"],
    },
  ];
  carouselData.forEach((carouselData) => {
    state.carouselImages.push(carouselData);
  });
}
function generateAccordionData() {
  const accordionData = [
    {
      question: "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
      intro: ["კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:"],
      answer:
        "* სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა.",
      stages: [
        "<strong>I ეტაპი</strong> - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა.",
        "<strong>II ეტაპი</strong> - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.",
        "<strong>III ეტაპი</strong> - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.",
        "<strong>IV ეტაპი</strong> - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.",
      ],
    },
    {
      question: "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
      answer:
        "TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.",
    },
    {
      question: "რა ღირს სწავლა პროგრამის ფარგლებში?",
      answer:
        "პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.",
    },
  ];
  accordionData.forEach((accordionData) => {
    state.accordionDatabase.push(accordionData);
  });
}
generateProgramData();
generateCoursesData();
generateCarouselData();
generateAccordionData();
