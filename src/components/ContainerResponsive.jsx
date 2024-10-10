import React from "react";
import { Heart, MessageCircle, Send, MoreHorizontal } from "lucide-react";
import logo from "../assets/logo.png";

const InstagramPost = ({ avatar, username, image, likes, caption, time }) => {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden w-full max-w-sm mx-2 bg-white">
      {/* Card Header */}
      <div className="flex items-center p-3 border-b">
        <span className="ml-2 font-semibold text-black">{username}</span>
        <button className="ml-auto p-1 text-gray-500 hover:text-gray-700">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Card Image */}
      <div>
        <img src={image} alt="" className="w-full h-auto" />
      </div>

      {/* Card Actions */}
      <div className="flex items-center p-2">
        <div className="flex space-x-2">
          <button className="p-1 text-gray-500 hover:text-gray-700">
            <Heart size={20} />
          </button>
          <button className="p-1 text-gray-500 hover:text-gray-700">
            <MessageCircle size={20} />
          </button>
          <button className="p-1 text-gray-500 hover:text-gray-700">
            <Send size={20} />
          </button>
        </div>
        <div className="flex-grow text-center">
          <div className="flex justify-center">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`rounded-full w-${6 - index}px h-${6 - index}px ${
                  index === 0 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3">
        <button className="text-sm font-semibold text-black">
          {likes} Likes
        </button>
        <div className="text-sm">
          <button className="font-semibold text-black">{username}</button>
          <span> {caption}</span>
        </div>
        <button className="text-xs text-gray-400">more</button>
        <div className="text-xs text-gray-400">{time}</div>
      </div>

      {/* Add a Comment Section */}
      <div className="flex items-center p-3 border-t">
        <button className="p-1 text-gray-500 hover:text-gray-700">
          <MessageCircle size={20} />
        </button>
        <input
          type="text"
          placeholder="Add a comment…"
          className="flex-grow border rounded-full p-2 mx-2"
        />
        <button className="text-xs text-blue-500">Post</button>
      </div>
    </div>
  );
};

export default function ContainerResponsive() {
  const posts = [
    {
      avatar: "https://via.placeholder.com/150",
      username: "Spaceify",
      image: "/p1.jpg",
      likes: "8.95M",
      caption: "Commercial advisory and transactions Office space interiors",
      time: "2 DAYS AGO",
    },
    {
      avatar: "/logo.png",
      username: "Spaceify",
      image: "/p2.jpg",
      likes: "10.2M",
      caption: "Managed office spaces",
      time: "5 DAYS AGO",
    },
    {
      avatar: "/logo.png",
      username: "Spaceify",
      image: "/p3.jpg",
      likes: "2.1M",
      caption: "Logistics and warehouses",
      time: "10 DAYS AGO",
    },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {posts.map((post, index) => (
        <InstagramPost
          key={index}
          avatar={post.avatar}
          username={post.username}
          image={post.image}
          likes={post.likes}
          caption={post.caption}
          time={post.time}
        />
      ))}
    </div>
  );
}
