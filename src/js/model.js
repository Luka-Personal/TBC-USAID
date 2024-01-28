export const state = {
  coursesDatabase: [],
  educationalProgramOverview: {
    programTitle: "",
    programDescription: "",
    programDetails: "",
  },
  carouselImages: [],
  accordionDatabase: [],
  lawsData: [],
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
function generateLawsData() {
  const permissionConfig = [
    {
      title: "წესები და პირობები",
      description: [
        {
          paragraph:
            "წინამდებარე ვებ-გვერდის გამოყენება რეგულირდება სს „თიბისი ბანკის“ (საიდენტიფიკაციო ნომერი: 204854595, მისამართი: თბილისი, კ. მარჯანიშვილის ქ. #7) მიერ დადგენილი წესებითა და პირობებით.",
        },
        {
          paragraph:
            "ტერმინები „ბანკი“, „ჩვენ“ გულისხმობს სს „თიბისი ბანკს“ (ასევე მისი ჯგუფის წევრ მონათესავე, შვილობილ, აფილირებულ კომპანიებს), ხოლო ტერმინი „თქვენ“, „მომხმარებელი“ გულისხმობს ინდივიდს, კომპანიას, ორგანიზაციულ წარმონაქმნს, რომელიც იყენებს ბანკის წინამდებარე ვებ-გვერდს.",
        },
        {
          paragraph:
            "გთხოვთ, ყურადღებით გაეცნოთ წინამდებარე წესებსა და პირობებს, რომელიც არეგულირებს თქვენ მიერ ვებ-გვერდის გამოყენების პირობებს. იმ შემთხვევაში, თუ არ ეთანხმებით წინამდებარე წესებსა და პირობებს, გთხოვთ, დატოვოთ ბანკის ვებ-გვერდი.",
        },
        {
          paragraph:
            "ვებ-გვერდზე სტუმრობით, ან მასზე გამოქვეყნებული ინფორმაციის გამოყენებით, ადასტურებთ და სრულად ეთანხმებით მითითებულ ყველა დანაწესს, რომელიც შესაძლოა ცალმხრივად შეიცვალოს სს „თიბისი ბანკის“ მიერ გარკვეული პერიოდულობით, რაც დაფიქსირდება მოცემულ ვებ-გვერდზე და მასზე თქვენი სტუმრობა ნიშნავს  შესაბამის პირობებზე დათანხმებას.",
        },
        {
          paragraph:
            "ბანკის ვებ-გვერდზე მითითებული ინფორმაცია, უმეტეს შემთხვევაში, განკუთვნილია იმ პირებისთვის, რომლებიც დაინტერესებულნი არიან საქართველოს ფინანსურ ბაზარზე მომსახურების მიღებით. შესაძლოა, ვებ-გვერდზე მითითებული ინფორმაცია არ იყოს ხელმისაწვდომი მსოფლიოს ყველა გეოგრაფიულ არეალში, ბანკის გადაწყვეტილების შესაბამისად. ",
        },
        {
          paragraph:
            "ბანკის ვებ-გვერდზე მითითებული გარკვეული ინფორმაციის გასაანალიზებლად, შესაძლოა დაგჭირდეთ შესაბამისი სფეროს სპეციალისტის კონსულტაცია.",
        },
        {
          paragraph:
            "ბანკის ვებ-გვერდზე მითითებული კონკრეტული პროდუქტები/მომსახურება რეგულირდება სპეციალური საბანკო მომსახურების ხელშეკრულებით.",
        },
      ],
    },
    {
      title: "ინფორმაციის სიზუსტე",
      description: [
        {
          paragraph:
            "ბანკი არ არის პასუხისმგებელი ვებ-გვერდზე მითითებული ინფორმაციის შინაარსის სიზუსტეზე, მიუხედავად ჩვენი დიდი ძალისხმევისა მოგაწოდოთ უტყუარი ინფორმაცია. აღნიშნული არ წარმოადგენს დადასტურებას და გარანტიას, რომ ვებ-გვერდზე მითითებული ინფორმაცია არის ზუსტი, უტყუარი და შესაფერისი მისი ნებისმიერი გამოყენებისთვის. ბანკის ვებ-გვერდზე არსებული ნებისმიერი ინფორმაცია მითითებულია  „როგორც არის“ (<a style='color:#8c8c8c' href='https://www.tbcbank.ge'>www.tbcbank.ge</a>) საწყისზე. შესაბამისად, ვებ-გვერდზე არსებული ნებისმიერი ინფორმაციის გამოყენება სრულად წარმოადგენს მომხმარებლის პირად რისკს და ბანკი არ არის პასუხისმგებელი ვებ-გვერდზე გამოქვეყნებული ინფორმაციის გამოყენებით დამდგარ ზიანზე. წინამდებარე დათქმა არ ეხება სს თიბისი ბანკის ვებ-გვერდზე <a style='color:#8c8c8c' href='https://www.tbcbank.ge'>www.tbcbank.ge</a> განთავსებული ხელშეკრულების შემადგენელ ნაწილებს.",
        },
        {
          paragraph:
            "ვებ-გვერდზე არსებული ინფორმაცია არ წარმოადგენს დაპირებას მომსახურებაზე/პროდუქტზე ან რაიმე სახის სახელშეკრულებო ურთიერთობით ბანკის შებოჭვის საფუძველს.",
        },
      ],
    },
    {
      title: "პასუხისმგებლობის შეზღუდვა",
      description: [
        {
          paragraph:
            "ბანკი და მისი შესაბამისი თანამშრომლები არ არიან პასუხისმგებელნი დამდგარი შედეგისათვის, რომელიც მოიცავს პირდაპირ, არაპირდაპირ, სპეციალურ, შემთხვევით, მიზეზ-შედეგობრივ, არასახელშეკრულებო ზიანს, რაც გამოწვეულია ვებ-გვერდზე მითითებული ინფორმაციის გამოყენებით. ",
        },
        {
          paragraph:
            "ბანკი არ აგებს პასუხს ვებ-გვერდის გამოყენებით გამოწვეულ რაიმე სახის ზიანზე, დანაკარგზე, თუნდაც  ტექნიკური შეფერხების, დეფექტის, ოპერაციის გაუქმება/შეჩერების, კომპიუტერული ვირუსის, ან სისტემის გაუმართაობის შემთხვევაში.",
        },
        {
          paragraph:
            "ვებ-გვერდზე წარმოდგენილი შინაარსის ხელმისაწვდომობა შესაძლოა დამოკიდებული იყოს საძიებო სისტემის ფუნქციებსა და შეზღუდვებზე. ბანკი არ იღებს პასუხისმგებლობას იმ შემთხვევებზე, თუ ვებ-გვერდის შემადგენელი გარკვეული კომპონენტები ხელმიუწვდომელია თქვენთვის.",
        },
      ],
    },
    {
      title: "ვებ-გვერდის გამოყენება",
      description: [
        {
          paragraph:
            "ვებ-გვერდზე მითითებული ინფორმაცია განკუთვნილია მხოლოდ მომხმარებლების პირადი გამოყენებისთვის. თქვენ ვალდებული ხართ, ვებ-გვერდზე განთავსებული ინფორმაცია, ასევე ვებ-გვერდის სტრუქტურა, გამოსახულება და დიაზინი არ გაავრცელოთ, არ გადასცეთ, არ მოახდინოთ მისი ასლების დამზადება ან/და რეპროდუცირება (მათ შორის სოციალურ მედიაში) კომერციული მიზნებისთვის, ბანკის წინასწარი წერილობითი თანხმობის გარეშე, რაც ჩვენს ერთპიროვნულ დისკრეციას წარმოადგენს. ბანკის წინასწარი წერილობითი თანხმობა არ არის საჭირო, თუ ვებ-გვერდზე მითითებული ინფორმაციის/შინაარსის გამოყენება ხდება ბანკის წინასწარ განცხადებული თანხმობის შესაბამისად, ან ასეთი ინფორმაცია გამოიყენება პირადი მოხმარებისთვის, საგანმანათლებლო ან ინფორმაციული მიზნებისთვის.",
        },
        {
          paragraph:
            "ვებ-გვერდისა და სისტემის არაავტორიზებული გამოყენება (მათ შორის არარსებული დასახელებით და კოდით) სასტიკად აკრძალულია. იქ, სადაც მოითხოვება რეგისტრაცია და პაროლის გამოყენება, თქვენ ვალდებული ხართ, კონფიდენციალურად შეინახოთ და არ დაუშვათ მესამე პირის მიერ ვებ-გვერდზე წვდომის შესაძლებლობა თქვენ მაგივრად. რეგისტრაციისა და პაროლის გამოყენების დროს, თქვენ აცნობიერებთ და ეთანხმებით, რომ ბანკმა შესაძლოა მოახდინოს რეგისტრაციისა და პაროლის დეაქტივაცია და აღნიშნული ქმედებით შეზღუდოს ვებ-გვერდზე წვდომა იმ შემთხვევაში, თუ თქვენი მხრიდან ადგილი აქვს წესებისა და პირობების დარღვევას. ",
        },
        {
          paragraph:
            "შესაძლებელია, რომ ვებ-გვერდის რომელიმე კონკრეტული გვერდი შეიცავდეს წინამდებარე წესებისაგან და პირობებისაგან განსხვავებულ დანაწესებს. მათ შორის კოლიზიის არსებობის შემთხვევაში, უპირატესობა ენიჭება წინამდებარე დანაწესებს.",
        },
        {
          paragraph:
            "ბანკის ვებ-გვერდის (მათ შორის ფორუმების) გამოყენებისას, აკრძალული გაქვთ უკანონო/თაღლითური ქმედება, ცილისმწამებლური, სიძულვილის ენით საუბარი, ან სხვა არასასურველი ინფორმაციის განთავსება, გავრცელება/ტრანსმისია, რაც შესაძლოა არღვევდეს მოქმედ კანონმდებლობას და რეგულაციას, ან ზიანს აყენებდეს ბანკის საქმიან რეპუტაციას. ასევე გეკრძალებათ ვებ-გვერდისთვის ზიანის მიყენება ნებისმიერი სახის მავნე პროგრამის მეშვეობით („ტროას ცხენი,“ „ლოგიკური ბომბი“ ან სხვა მსგავსი ქმედებების განხორციელება).",
        },
        {
          paragraph:
            "თქვენს ერთპიროვნულ რისკს წარმოადგენს ვებ-გვერდზე მოსახვედრად გამოყენებული ნებისმიერი პროგრამული მოდულის (სატელეფონო, კომპიუტერული და სხვა) გაუმართაობა.",
        },
        {
          paragraph:
            "იმ შემთხვევაში, თუ ვებ-გვერდზე წვდომა შეუძლებელი გახდება ბანკის ტექნიკური შეფერხების, ან ბანკისაგან დამოუკიდებელი სხვა ნებისმიერი მიზეზით, ბანკი არ არის პასუხისმგებელი დამდგარ შედეგზე. ",
        },
      ],
    },
    {
      title: "ინტელექტუალური საკუთრება",
      description: [
        {
          paragraph:
            "ვებ-გვერდზე, მის შინაარსზე, სტრუქტურასა და დიზაინზე სრულად ვრცელდება სს „თიბისი ბანკის“ საავტორო უფლება.  სს „თიბისი ბანკის“ ექსკლუზიური უფლებები ვრცელდება ასევე ბანკის მიერ შექმნილ და რეგისტრირებულ ინტელექტუალური საკუთრების ნებისმიერ ობიექტზე, მათ შორის მის კუთვნილ სასაქონლო ნიშნებზე.",
        },
        {
          paragraph:
            "ბანკის საავტორო (©) და სხვა ინტელექტუალური საკუთრების უფლებები ვრცელდება წინამდებარე ვებ-გვერდსა და მასზე არსებულ მთელ შინაარსზე (პროდუქტებისა და მომსახურების ჩათვლით).",
        },
        {
          paragraph:
            "აკრძალულია წინამდებარე ვებ-გვერდზე მითითებული ნებისმიერი ინფორმაციის/შინაარსის, მათ შორის ლოგო, პიქტოგრამა, გრაფიკა, სურათი, გამოსახულება, პატენტი, მომსახურების/სასაქონლო ნიშნები, დიზაინი,  ბანკის მიერ შექმნილი ვიზუალური მედია და სხვა ინტელექტუალური საკუთრების (რეგისტრირებული, ან არარეგისტრირებული) უნებართვო გამოყენება, დამუშავება და გამოქვეყნება (მათ შორის სოციალურ მედიაში)  ბანკის წინასწარი წერილობითი თანხმობის გარეშე. ბანკის თანხმობა არ არის საჭირო, თუ წინამდებარე მონაცემების გამოყენება ხორციელდება არაკომერციული, პირადი მიზნებისთვის და იმ შემთხვევებში, როცა წინასწარ თანხმობას არ ითვალიწინებს საქართველოს კანონმდებლობა, ან შესაბამისი საერთაშორისო რეგულაცია. ",
        },
        {
          paragraph:
            "ინტელექტუალური საკუთრების ვებ-გვერდზე მითითება არ ნიშნავს  მომხმარებლისათვის მის გამოყენებაზე ლიცენზიის მინიჭებას. ვებ-გვერდიდან მომხმარებლის მიერ ნებისმიერი ინფორმაციის კომერციული მიზნებისთვის გადმოწერა,ან ასლის დამზადება ჩაითვლება საქართველოს კანონმდებლობის დარღვევად.",
        },
        {
          paragraph:
            "წესებსა და პირობებში მითითებული არცერთი დანაწესი არ განიჭებთ უფლებას, ან ლიცენზიას წინამდებარე მუხლში ჩამოთვლილი ბანკის ინტელექტუალური საკუთრების გამოყენებაზე.",
        },
        {
          paragraph:
            "იმ შემთხვევაში, თუ ვებ-გვერდი მომხმარებლებს ანიჭებს ჩატის, ინტერაქციისა, თუ დიალოგის/დისკუსიის გამართვის შესაძლებლობას, ვალდებულნი ხართ, წინამდებარე არხებში დააფიქსიროთ მხოლოდ ის ინფორმაცია, რომელზეც ფლობთ ინტელექტუალურ საკუთრებას, ან გაქვთ შესაბამისი პირის თანხმობა. ამასთან ერთად, ბანკს ანიჭებთ უფლებას დაამუშაოს (მათ შორის, გამოაქვეყნოს) თქვენ მიერ დაფიქსირებული ინფორმაცია კანონიერი, საკომუნიკაციო/საინფორმაციო მიზნებისათვის.",
        },
        {
          paragraph:
            "ბანკის ჯგუფის წევრი კომპანიები შესაძლოა იყენებდნენ ბანკის სასაქონლო ნიშანს, დასახელებას და ლოგოტიპს, რომელიც წარმოადგენს ბანკის საკუთრებას. ლაჟვარდის ფერი არის ბანკის კუთვნილი სასაქონლო ნიშნის შემადგენელი ნაწილი, რომელიც რეგისტრირებულია დადგენილი წესით. ",
        },
        {
          paragraph:
            "ბანკის ვებ-გვერდზე მითითებული კომპანიების სახელები, სასაქონლო ნიშნები, ლოგოები ეკუთვნის შესაბამის პირებს.  ",
        },
      ],
    },
    {
      title: "კონფიდენციალურობის დაცვა",
      description: [
        {
          paragraph:
            "სს „თიბისი ბანკი“ უზრუნველყოფს მისთვის მიწოდებულ კონფიდენციალური ინფორმაციის მაქსიმალურ დაცულობას კანონმდებლობით დადგენილი წესით.",
        },
        {
          paragraph:
            "ბანკი მომხმარებლის პერსონალურ ინფორმაციას ითხოვს საჭიროებიდან გამომდინარე, იმ მოცულობით, რაც საჭიროა ეფექტური მომსახურების  გასაწევად საქართველოს კანონმდებლობით დადგენილი წესით. მომხმარებელს ნებისმიერ დროს შეუძლია მოითხოვოს ინფორმაცია ბანკისგან მისი პერსონალური ინფორმაციის დამუშავების თაობაზე.",
        },
        {
          paragraph:
            "ვებ-გვერდზე თქვენი პერსონალური ინფორმაციის მითითებით, ბანკს ანიჭებთ უფლებას, დაამუშავოს და მარკეტინგული მიზნებისთვის გამოიყენოს თქვენ მიერ დაფიქსირებული ინფორმაცია.",
        },
        {
          paragraph:
            "ბანკის მხრიდან კონფიდენციალური ინფორმაციის გადაცემა ხორციელდება თქვენი წინასწარი თანხმობით, ან კანონით გათვალისწინებულ სხვა შემთხვევებში.",
        },
        {
          paragraph:
            "ბანკი მაქსიმალურად ზრუნავს თქვენი პირადი კონფიდენციალური ინფორმაციის უსაფრთხოებასა და გაუმჟღავნებლობაზე, მაგრამ იმ ფაქტის გათვალისწინებით, რომ თქვენი მონაცემების დისტანციურად მოწოდების პროცესი არ არის დაშიფრული, ბანკი იხსნის პასუხისმგებლობას მესამე პირების მიერ თქვენი მონაცემების არასანქცირებულ წვდომაზე ამ მონაცემების ბანკისთვის მიწოდების დროს.",
        },
        {
          paragraph:
            "ბანკი მაქსიმალურად ზრუნავს თქვენი პირადი ინფორმაციის უსაფრთხოებასა და კონფიდენციალურობაზე, თუმცა იხსნის პასუხისმგებლობას მესამე პირების მიერ აღნიშნული ინფორმაციის არასანქცირებულ წვდომაზე ამ მონაცემების ბანკისთვის მიწოდების დროს (მათ შორის დისტანციური მიწოდებისას გამოყენებულ პლატფორმებზე?)",
        },
        {
          paragraph:
            "კონფიდენციალური ინფორმაციის ბანკისთვის მიწოდების დროს, მომხმარებელი ვალდებულია, არ მოახდინოს ისეთი ავტომატური საშუალებების გამოყენება, რამაც შესაძლოა საფრთხე შეუქმნას ბანკის უსაფრთხოებასა და დაცულობას.",
        },
        {
          paragraph:
            "ვებ-გვერდის სტუმრობისას, თქვენ მიერ დატოვებული ნებისმიერი „ელექტრონული ნაკვალევი“, შესაძლოა გამოყენებულ იქნას ბანკისთვის დამახასიათებელი ტექნიკური ოპერაციების განსახორციელებლად, სტატისტიკის საწარმოებლად, ან საიტის ხარისხის გასაუმჯობესებლად.",
        },
        {
          paragraph:
            "ბანკის მიერ ადმინისტრაციული ფუნქციების ეფექტურად შესასრულებლად, შესაძლოა თქვენ მიერ გამოგზავნილ იქნას პერსონალური მონაცემები ბანკის ელექტრონულ ფოსტაზე. გაცნობებთ, რომ ბანკი არ არის პასუხისმგებელი, გადაცემის პროცესში, მესამე პირის არასანქცირებული ჩარევის შედეგად, აღნიშნული ინფორმაციის უკანონო მოპოვებაზე, ან იმ ინფორმაციაზე, რომელიც მომხმარებელმა თავადვე გახადა საჯარო, ან გაავრცელა ნაკლებად უსაფრთხო ელექტრონული საშუალებებით.",
        },
        {
          paragraph:
            "წინამდებარე წესებსა და პირობებზე დათანხმებით, მომხმარებელი ადასტურებს ბანკისთვის მინიჭებულ უფლებას, ბანკი დაუკავშირდეს ან/და გაუგზავნოს მომხმარებელს შეტყობინება (მათ შორის, ელექტრონული ფორმით: მოკლე ტექსტური შეტყობინება, ელექტრონული ფოსტა) ვებ-გვერდზე მითითებული პროდუქტისა, თუ მომსახურების თაობაზე.",
        },
      ],
    },
    {
      title: "ვებ-გვერდზე მითითებული ბმულები",
      description: [
        {
          paragraph:
            "ბანკი უფლებამოსილია ვებ-გვერდზე მიუთითოს ჰიპერბმულები, მესამე პირის მფლობელობაში არსებული ვებ-გვერდების ბმულები, თქვენივე ინფორმირებულობის უზრუნველსაყოფად.",
        },
        {
          paragraph:
            "მესამე პირის მფლობელობაში არსებული ბმულები და მათზე მითითებული ინფორმაცია, არ ექვემდებარება ბანკის კონტროლს, ხოლო მათზე მოცემული პროდუქტებისა და შინაარსის სიზუსტე არ წარმოადგენს ბანკის პასუხისმგებლობის საგანს. შესაბამისად, თქვენ ხართ პასუხისმგებელი მესამე პირების რესურსებზე/ვებ-გვერდზე არსებული წესებისა და პირობების გაცნობაზე. ",
        },
      ],
    },
    {
      title: "ცვლილების განხორციელება",
      description: [
        {
          paragraph:
            "ბანკი უფლებამოსილია ცვლილება შეიტანოს წინამდებარე წესებსა და პირობებში მომხმარებელთათვის წინასწარი შეტყობინების გარეშე.",
        },
        {
          paragraph:
            "მომხმარებელი პასუხისმგებელია რეგულარულად გაეცნოს წინამდებარე წესებსა და პირობებს. თქვენ მიერ ვებ-გვერდზე სტუმრობა/მითითებული ინფორმაციის გამოყენება ავტომატურად ნიშნავს თქვენს დათანხმებას წინამდებარე წესებისა და პირობების მოთხოვნებზე. ",
        },
      ],
    },
    {
      title: "მარეგულირებელი სამართალი და იურისდიქცია",
      description: [
        {
          paragraph:
            "წინამდებარე წესები და პირობები რეგულირდება საქართველოს კანონმდებლობით. ",
        },
        {
          paragraph:
            "დავის წარმოშობის შემთხვევაში, საქმეს განიხილავს საქართველოს საერთო სასამართლოების სისტემა კანონმდებლობით დადგენილი წესით. ",
        },
        {
          paragraph:
            "წინამდებარე დანაწესების კონკრეტული ჩანაწერის ბათილობა არ იწვევს წესებისა და პირობების სხვა დათქმების ბათილობას.  ",
        },
      ],
    },
    {
      title: "საკონტაქტო ინფორმაცია",
      description: [
        {
          paragraph:
            "ნებისმიერი კითხვის არსებობის შემთხვევაში, რაც უკავშირდება წინამდებარე წესებსა და პირობებს და ვებ-გვერდზე მითითებულ ინფორმაციას,  გთხოვთ, მოგვმართოთ წერილობითი სახით მისამართზე: თბილისიი, ატენის ქ. 2 ან მოგვწეროთ ელექტრონული ფოსტის საშუალებით: <strong>itacademy@tbcbank.com.ge</strong>",
        },
        {
          paragraph:
            "“სს „თიბისი ბანკის“ მომსახურებით სარგებლობისას მომხმარებელთა დაცვის, კიბერუსაფრთოებისა და კონფიდენციალურობის დაცვის პრინციპები ხელმისაწვდომია ვებ-გვერდზე <strong><a style='color:#8c8c8c' href='https://www.tbcbank.ge'>www.tbcbank.ge</a></strong>.",
        },
      ],
    },
  ];
  permissionConfig.forEach((law) => {
    state.lawsData.unshift(law);
  });
}
generateProgramData();
generateCoursesData();
generateCarouselData();
generateAccordionData();
generateLawsData();
