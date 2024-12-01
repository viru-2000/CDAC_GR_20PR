import React from 'react'
import "../css/all.css";

const Services = () => {
  return (
    <div>
      <div className="serviceline">
        <h1>Simplify life with services just a click away.</h1>
      </div>

      <section className="services-section">
        <h2>Your Task, Our Priority</h2>
        <div className="service-category">
          {serviceData.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.alt} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <hr />
              <ul>
                {service.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const serviceData = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyeGgD2ugWcrB0crzT9b1Q69yfEL0xQ7AJA&s",
    alt: "Furniture Tasks",
    title: "Featured Tasks",
    description: "Let Taskers help tackle your to-do list.",
    tasks: [
      "Furniture Assembly",
      "Home Repairs",
      "Help Moving",
      "Heavy Lifting",
      "Home Cleaning",
      "Hanging & Mounting",
      "Painting",
    ],
  },
  {
    image:
      "https://tse1.mm.bing.net/th?id=OIP.3l0lX853SZLBsG7xbhChFwHaD8&pid=Api&P=0&h=180",
    alt: "Handyman",
    title: "Handyman",
    description: "Hire a Tasker for help around the house.",
    tasks: [
      "Door, Cabinet, & Furniture Repair",
      "Appliance Installation & Repairs",
      "Furniture Assembly",
      "TV Mounting",
      "Drywall Repair Service",
      "Flooring & Tiling Help",
      "Electrical Help",
      "Sealing & Caulking",
      "Plumbing",
      "Window & Blinds Repair",
      "Ceiling Fan Installation",
      "Smart Home Installation",
      "Heavy Lifting",
      "Install Air Conditioner",
      "Painting",
      "Install Shelves, Rods & Hooks",
      "Home Maintenance",
      "Install Blinds & Window Treatments",
      "Home Repairs",
      "Baby Proofing",
      "Yard Work Services",
      "Light Installation",
      "Carpentry Services",
      "Hang Art, Mirror & Decor",
      "General Mounting",
      "Cabinet Installation",
      "Wallpapering Service",
      "Fence Installation & Repair Services",
      "Deck Restoration Services",
      "Doorbell Installation",
      "Home Theater Installing"

    ],
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOftdvaqyZgIkQMsU7D2TLwqjMaTQPyQq1kw&s",
    alt: "Moving Services",
    title: "Moving Services",
    description:
      "Let One-Click handle everything from lifting to unpacking and organizing your move!.",
    tasks: [
      "Help Moving",
      "Truck Assisted Help Moving",
      "Packing Services & Help",
      "Unpacking Services",
      "Heavy Lifting",
      "Local Movers",
      "Junk Pickup",
      "Furniture Movers",
      "One Item Movers",
      "Storage Unit Moving",
      "Couch Removal",
      "Mattress Pick-Up & Removal",
      "Furniture Removal",
      "Pool Table Movers",
      "Appliance Removal",
      "Heavy Furniture Moving",
      "Rearrange Furniture",
      "Full Service Help Moving",
      "In-Home Furniture Movers"

    ],
  },
  {
    image:
      "https://tse1.mm.bing.net/th?id=OIP.25zVLbefRolAj2DUFm-FeAHaDt&pid=Api&P=0&h=180",
    alt: "Furniture Tasks",
    title: "Furniture Assembly",
    description: "No more stress over furniture assembly.",
    tasks: [
      "Furniture Assembly",
      "Patio Furniture Assembly",
      "Desk Assembly",
      "Dresser Assembly",
      "Bed Assembly",
      "Bookshelf Assembly",
      "Couch Assembly",
      "Chair Assembly",
      "Wardrobe Assembly",
      "Table Assembly",
      "Disassemble Furniture"


    ],
  },
  {
    image:
      "https://www.dirtblastercleaningservices.com/wp-content/uploads/2021/05/Bungalow-Cleaning-Services-Pune.jpg",
    alt: "Cleaning",
    title: "Cleaning",
    description:
      "Get your home spotless with One-Click, from floor to ceiling cleaning!.",
    tasks: [
      "House Cleaning Services",
      "Deep Cleaning",
      "Disinfecting Services",
      "Move In Cleaning",
      "Move Out Cleaning",
      "Vacation Rental Cleaning",
      "Carpet Cleaning Service",
      "Garage Cleaning",
      "One Time Cleaning Services",
      "Car Washing",
      "Laundry Help",
      "Pressure Washing",
      "Spring Cleaning"

    ],
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdjrc6ODt7N_brAIc_LHemTb8qLHM6ZJFHxqUGNryO2hiKrapjZRlqI38xzR-Vrlpjvo&usqp=CAU",
    alt: "Holiday Help",
    title: "Holiday Help",
    description:
      "Make your holidays merry and bright with One-Click Holiday services at your help!",
    tasks: [
      "Gift Wrapping Services",
      "Hang Christmas Lights",
      "Christmas Tree Delivery",
      "Holiday Decorating",
      "Party Cleaning",
      "Toy Assembly Service",
      "Wait in Line",
      "Christmas Tree Removal"

    ],
  },
  {
    image:
      "https://studentprojectguide.com/wp-content/uploads/2017/12/Online-Personal-Assistant.png",
    alt: "Personal Assistant",
    title: "Personal Assistant",
    description:
      "Need a personal assistant? Hire a Tasker and get help whenever you need, hourly or ongoing.",
    tasks: [
      "Personal Assistant",
      "Running Your Errands",
      "Wait in Line",
      "Organization",
      "Organize Home",
      "Closet Organization Service",
      "Interior Design Service",
      "Virtual Assistant",
      "Dog Walking"

    ],
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtk1kW0kcxD2ahfmtF5dyzl48F517ukCZpYQ&s",
    alt: "Virtual Tasks",
    title: "Virtual Tasks",
    description: "Virtual assistance, organization, research, & more.",
    tasks: [
      "Virtual Assistant",
      "Organization",
      "Data Entry",
      "Computer Help"

    ],
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpWK2WhmJsLuKKefjv7YnjiCtsPOVOEGxbQ&s",
    alt: "Office Services",
    title: "Office Services",
    description:
      "Hire a Tasker to assist with office tasks and keep everything running smoothly!",
    tasks: [
      "Office Cleaning",
      "Office Tech Setup",
      "Office Movers",
      "Office Supply & Snack Delivery",
      "Office Furniture Assembly",
      "Office Setup & Organization",
      "Office Administration",
      "Office Interior Design",
      "Moving Office Furniture",
      "Office Mounting Service"

    ],
  },
];

export default Services;
