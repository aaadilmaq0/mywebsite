import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  right: string = "";
  left: string = "";
  up: string = "";
  down: string = "";

  personalData:any = {
    chart: {
      labelDisplay: "Auto",
      useEllipsesWhenOverflow:"0",
      baseFont: "Verdana",
      baseFontSize: "11",
      baseFontColor: "#000000",
      bgImage: "http://sfwallpaper.com/images/computers-wallpapers-hd-6.jpg",
      bgImageApha: "100",
      bgImageDisplayMode: "fill",
      containerBackgroundOpacity :"0",
      showplotborder: "1",
      plotfillalpha: "80",
      hoverfillcolor: "#CCCCCC",
      numberprefix: "$",
      theme: "fusion"
    },
    category: [
      {
        label: "My Life",
        tooltext: "Please hover over a sub-category to see details",
        color: "#ffffff",
        category: [
          {
            label: "Places",
            tooltext: "Places I am linked to",
            color: "#f7cd80",
            value: "50",
            category: [
              {
                label: "Lucknow",
                tooltext: "I was born here, In the city of Nawabs!",
                color: "#f7cd80",
                value: "5"
              },
              {
                label: "Gorakhpur",
                tooltext: "My native place. I have lived here for majority of my life",
                color: "#f7cd80",
                value: "20"
              },
              {
                label: "Saudi Arab",
                tooltext: "Well,well. I have lived here for 6 years & I did not go to school :P",
                color: "#f7cd80",
                value: "10"
              },
              {
                label: "Manipal",
                tooltext: "Most amazing fews years of my life. The College life!",
                color: "#f7cd80",
                value: "10"
              },
              {
                label: "Bengaluru",
                tooltext: "Namma Bengaluru! Currently doing a job here in CDFI",
                value: "5",
                color: "#f7cd80"
              }
            ]
          },
          {
            label: "Interests/Hobbies",
            color: "#ffcccc",
            value: "25",
            category: [
              {
                label: "Coding",
                tooltext: "Of Course!",
                color: "#ffcccc",
                value: "6.25"
              },
              {
                label: "Piano",
                tooltext: "I love playing the keyboard. Especially the GoT music <3",
                color: "#ffcccc",
                value: "6.25"
              },
              {
                label: "Football",
                tooltext: "A big fan of Manchester United & FIFA. If stamina allows, I play, too :P",
                color: "#ffcccc",
                value: "6.75"
              }
            ]
          },
          {
            label: "Contact me",
            color: "#ccff66",
            value: "25",
            category: [
              {
                label: "+917204511650",
                tooltext: "My phone number!",
                color: "#ccff66",
                value: "8.3"
              },
              {
                label: "EMAIL",
                tooltext: "adil.maqusood@gmail.com/aaadilmaq0@gmail.com",
                color: "#ccff66",
                value: "8.4"
              },
              {
                label: "Social Media",
                tooltext: "Links are in the bottom left corner ",
                color: "#ccff66",
                value: "8.33"
              }
            ]
          }
        ]
      }
    ]
  };

  educationData:any = {
    chart: {
      labelDisplay: "Auto",
      useEllipsesWhenOverflow:"0",
      baseFont: "Verdana",
      baseFontSize: "11",
      baseFontColor: "#000000",
      bgImage: "http://sfwallpaper.com/images/computers-wallpapers-hd-6.jpg",
      bgImageApha: "100",
      bgImageDisplayMode: "fill",
      containerBackgroundOpacity :"0",
      showplotborder: "1",
      plotfillalpha: "80",
      hoverfillcolor: "#CCCCCC",
      numberprefix: "$",
      theme: "fusion"
    },
    category: [
      {
        label: "Education",
        tooltext: "Please hover over a sub-category to see details",
        color: "#ffffff",
        category: [
          {
            label: "High School",
            tooltext: "From St. Joseph's School, Gorakhpur. 84%",
            color: "#f7cd80",
            value: "30",
            category: [
              {
                label: "St. Joseph's",
                tooltext: "From St. Joseph's High School",
                color: "#f7cd80",
                value: "10"
              },
              {
                label: "Gorakhpur",
                tooltext: "My Hometown!",
                color: "#f7cd80",
                value: "10"
              },
              {
                label: "I.C.S.E.",
                tooltext: "From the toughest board :D",
                color: "#f7cd80",
                value: "10"
              }
            ]
          },
          {
            label: "Senior School",
            tooltext: "Senior Secondary School from St. Joseph's School, Gorakhpur. 88%",
            color: "#63f9ff",
            value: "40",
            category: [
              {
                label: "St. Joseph's",
                color: "#63f9ff",
                tooltext: "From St. Joseph's High School",
                value: "10"
              },
              {
                label: "Gorakhpur",
                color: "#63f9ff",
                tooltext: 'My Hometown!',
                value: "10"
              },
              {
                label: "I.S.C",
                tooltext: "Toughest board!",
                color: "#63f9ff",
                value: "10"
              },
              {
                label: "PCM+CSE",
                tooltext: "Stream was Science with Computer science",
                color: "#63f9ff",
                value: "10"
              },
            ]
          },
          {
            label: "UnderGraduation",
            tooltext: "B.Tech in Information Technology from MIT, Manipal. CGPA:6.28",
            color: "#ffcccc",
            value: "40",
            category: [
              {
                label: "Manipal University",
                tooltext: "From Manipal Institute of Technology",
                color: "#ffcccc",
                value: "10"
              },
              {
                label: "Manipal",
                tooltext: "Manipal, Karnataka",
                color: "#ffcccc",
                value: "10"
              },
              {
                label: "B.Tech/B.E",
                tooltext: "Bachelor of Technology",
                color: "#ffcccc",
                value: "10"
              },
              {
                label: "Information Technology",
                tooltext: "My stream was IT",
                color: "#ffcccc",
                value: "10"
              }
            ]
          }
        ]
      }
    ]
  };

  experienceData:any = {
    chart: {
      labelDisplay: "Auto",
      useEllipsesWhenOverflow:"0",
      baseFont: "Verdana",
      baseFontSize: "11",
      baseFontColor: "#000000",
      bgImage: "http://sfwallpaper.com/images/computers-wallpapers-hd-6.jpg",
      bgImageApha: "100",
      bgImageDisplayMode: "fill",
      containerBackgroundOpacity :"0",
      showplotborder: "1",
      plotfillalpha: "80",
      hoverfillcolor: "#CCCCCC",
      numberprefix: "$",
      theme: "fusion"
    },
    category: [
      {
        label: "Work Experience",
        tooltext: "Please hover over a sub-category to see details",
        color: "#ffffff",
        category: [
          {
            label: "Yellowpin",
            tooltext: "Worked in Yellowpin startup as an Intern",
            color: "#ffff00",
            value: "2",
            category: [
              {
                label: "2 Months",
                tooltext: "Worked from Dec 2017-Jan 2018",
                color: "#ffff00",
                value: ".5"
              },
              {
                label: "Athens,Greece",
                tooltext: "I used to work in Nikea, Athens, Greece",
                color: "#ffff00",
                value: ".5"
              },
              {
                label: "Front End",
                tooltext: "I worked as a front end developer, to make their website responsive",
                color: "#ffff00",
                value: ".5"
              },
              {
                label: "Tech",
                tooltext: "I coded in HTML, CSS & JS and used Bootstrap for responsiveness",
                color: "#ffff00",
                value: ".5"
              },
            ]
          },
          {
            label: "QwickAppAB",
            tooltext: "Worked in this startup as a remote Intern",
            color: "#63f9ff",
            value: "2",
            category: [
              {
                label: "2 Months",
                tooltext: "Worked from Feb 2018-March 2018",
                color: "#63f9ff",
                value: ".5"
              },
              {
                label: "Remotely",
                tooltext: "I worked from home in this Swedish startup",
                color: "#63f9ff",
                value: ".5"
              },
              {
                label: "Front End",
                tooltext: "I worked as a front end developer",
                color: "#63f9ff",
                value: ".5"
              },
              {
                label: "Tech",
                tooltext: "I used to Angular web development framework",
                color: "#63f9ff",
                value: ".5"
              },
            ]
          },
          {
            label: "CDFI",
            tooltext: "Currently working in this company as a Sofware Developer Intern",
            color: "#ff2ddc",
            value: "6",
            category: [
              {
                label: "6 Months",
                tooltext: "January 2019 - June 2019",
                color: "#ff2ddc",
                value: "1.5"
              },
              {
                label: "Bengaluru",
                tooltext: "The company is located in JP Nagar, Bengaluru, Karnataka",
                color: "#ff2ddc",
                value: "1.5"
              },
              {
                label: "Software Developer",
                tooltext: "Working as a sofware developer and trying out new technologies",
                color: "#ff2ddc",
                value: "1.5"
              },
              {
                label: "Tech",
                tooltext: "Currently I am working in a Full Stack project which uses MongoDB,Angular, Express & Nodejs (MEAN stack)",
                color: "#ff2ddc",
                value: "1.5"
              },
            ]
          },
        ]
      }
    ]
  };

  skillsData:any = {
    chart: {
      labelDisplay: "Auto",
      useEllipsesWhenOverflow:"0",
      baseFont: "Verdana",
      baseFontSize: "11",
      baseFontColor: "#000000",
      bgImage: "http://sfwallpaper.com/images/computers-wallpapers-hd-6.jpg",
      bgImageApha: "100",
      bgImageDisplayMode: "fill",
      containerBackgroundOpacity :"0",
      showplotborder: "1",
      plotfillalpha: "80",
      hoverfillcolor: "#CCCCCC",
      numberprefix: "$",
      theme: "fusion"
    },
    category: [
      {
        label: "Skills",
        tooltext: "Please hover over a sub-category to see details",
        color: "#ffffff",
        category: [
          {
            label: "Languages",
            tooltext: "Languages known",
            color: "#f7cd80",
            value: "25",
            category: [
              {
                label: "Javascript",
                color: "#f7cd80",
                value: "6"
              },
              {
                label: "Java",
                color: "#f7cd80",
                value: "6"
              },
              {
                label: "HTML5,CSS",
                color: "#f7cd80",
                value: "6"
              },
              {
                label: "C/C++",
                color: "#f7cd80",
                value: "3"
              },
              {
                label: "Typescript",
                value: "4",
                color: "#f7cd80",
              },
            ]
          },
          {
            label: "Frameworks",
            tooltext: "Frameworks/Environments I have used",
            color: "#63f9ff",
            value: "25",
            category: [
              {
                label: "Angular",
                color: "#63f9ff",
                tooltext: "Frontend framework which uses HTML,CSS & Typescript",
                value: "6"
              },
              {
                label: "Ionic",
                color: "#63f9ff",
                tooltext: 'Frontend framework for developing Hybrid apps in Angular environment',
                value: "6"
              },
              {
                label: "Nodejs",
                tooltext: "Javascript framework for backend",
                color: "#63f9ff",
                value: "5"
              },
              {
                label: "Flutter",
                tooltext: "Cross-platform native app development using Dart",
                color: "#63f9ff",
                value: "5"
              },
              {
                label: "Bootstrap",
                tooltext: "CSS for responsive webpages",
                color: "#63f9ff",
                value: "3"
              },
            ]
          },
          {
            label: "App Development",
            tooltext: "These are the applications I can develop",
            color: "#ffcccc",
            value: "25 ",
            category: [
              {
                label: "PWA",
                tooltext: "Progressive web apps using Ionic+Angular",
                color: "#ffcccc",
                value: "10"
              },
              {
                label: "Web Apps",
                tooltext: "Full stack Web application using the MEAN stack",
                color: "#ffcccc",
                value: "10"
              },
              {
                label: "Mobile",
                tooltext: "Cross-platform native app development using Flutter+Dart",
                color: "#ffcccc",
                value: "5"
              }
            ]
          },
          {
            label: "Database Systems",
            tooltext: "I am familiar with these database systems",
            color: "#ff0000",
            value: "15",
            category: [
              {
                label: "mongoDb",
                tooltext: "MongoDb - NoSQL database",
                color: "#ff0000",
                value: "10"
              },
              {
                label: "SQL",
                tooltext: "MySQL,SQLite - SQL databases",
                color: "#ff0000",
                value: "5"
              },
            ]
          },
          {
            label: "Operating Systems",
            tooltext: "I am familiar with these operating systems",
            color: "#3d5aff",
            value: "15",
            category: [
              {
                label: "macOS",
                tooltext: "Primary OS",
                color: "#3d5aff",
                value: "8"
              },
              {
                label: "Windows",
                tooltext: "Secondary",
                color: "#3d5aff",
                value: "4"
              },
              {
                label: "Linux",
                tooltext: "Familar, but not used much",
                color: "#3d5aff",
                value: "3"
              }
            ]
          },
          {
            label: "Others",
            tooltext: "Other technologies I know",
            color: "#57bf65",
            value: "15",
            category: [
              {
                label: "GIT",
                tooltext: "Git Version Control System",
                color: "#57bf65",
                value: "15"
              },
            ]
          }
        ]
      }
    ]
  };

  selectedLink:string = "";
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.right = this.activatedRoute.snapshot.data['right'];
    this.left = this.activatedRoute.snapshot.data['left'];
    this.up = this.activatedRoute.snapshot.data['up'];
    this.down = this.activatedRoute.snapshot.data['down'];

    this.selectedLink="personal";
  }

}
