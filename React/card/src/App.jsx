import React from 'react'
import Cards from './components/Cards'

const App = () => {

  const users = [
  {
    id: 1,
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    profile: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Noah Thompson",
    description: "Product Designer who focusses on simplicity and usability.",
    likes: "72.5K",
    posts: "828",
    views: "345K"
  },
  {
    id: 2,
    cover: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    profile: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Emma Watson",
    description: "UI/UX Designer crafting meaningful digital experiences.",
    likes: "65.2K",
    posts: "540",
    views: "210K"
  },
  {
    id: 3,
    cover: "https://images.unsplash.com/photo-1517816428104-797678c7cf0c",
    profile: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Liam Carter",
    description: "Frontend Developer passionate about clean interfaces.",
    likes: "88.1K",
    posts: "920",
    views: "410K"
  },
  {
    id: 4,
    cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    profile: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Olivia Brown",
    description: "Creative Designer blending art with technology.",
    likes: "54.3K",
    posts: "300",
    views: "180K"
  },
  {
    id: 5,
    cover: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    profile: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "James Anderson",
    description: "Visual storyteller with a passion for minimal design.",
    likes: "91.4K",
    posts: "1100",
    views: "500K"
  },
  {
    id: 6,
    cover: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    profile: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Sophia Lee",
    description: "Designing intuitive products for everyday users.",
    likes: "47.9K",
    posts: "260",
    views: "150K"
  },
  {
    id: 7,
    cover: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    profile: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Ethan Clark",
    description: "Building modern web apps with great user experience.",
    likes: "73.6K",
    posts: "670",
    views: "290K"
  },
  {
    id: 8,
    cover: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    profile: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Ava Martinez",
    description: "Crafting elegant and functional UI systems.",
    likes: "60.8K",
    posts: "410",
    views: "230K"
  },
  {
    id: 9,
    cover: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
    profile: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Daniel Scott",
    description: "Passionate about design systems and scalability.",
    likes: "82.3K",
    posts: "780",
    views: "360K"
  },
  {
    id: 10,
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    profile: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Mia Wilson",
    description: "Creating delightful user-centered experiences.",
    likes: "69.7K",
    posts: "520",
    views: "275K"
  }
];

  return (
    <div className='flex flex-wrap'>
      {users.map(function(elem){     
        return <Cards user = {elem}/>
      })}
    </div>
  )
}

export default App