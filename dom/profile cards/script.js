let employees = [
    {
        fullName: "Aarav Sharma",
        profession: "Software Engineer",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        description: "Aarav specializes in full-stack web development and is passionate about building scalable applications."
    },
    {
        fullName: "Riya Mehta",
        profession: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        description: "Riya creates intuitive and visually appealing designs while improving the user experience on digital platforms."
    },
    {
        fullName: "Kabir Verma",
        profession: "Data Analyst",
        image: "https://randomuser.me/api/portraits/men/60.jpg",
        description: "Kabir analyzes complex datasets to find insights that help businesses make better decisions."
    },
    {
        fullName: "Diya Kapoor",
        profession: "Project Manager",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
        description: "Diya oversees project planning, coordination, and execution while ensuring timely delivery."
    }
];

let sum = ''


employees.forEach(function(elem){
    sum += `<div class="card">
            <div class="img">
                <img src="${elem.image}" alt="">
            </div>
            <div class="name">
                <h2>${elem.fullName}</h2>
            </div>
            <h3>${elem.profession}</h3>
            <p>${elem.description}</p>
        </div>`;
    
    let main = document.querySelector('main')
    main.innerHTML = sum

})