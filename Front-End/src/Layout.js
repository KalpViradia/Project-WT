// import React, { useState } from "react";

// const Header = () => {
//     return (
//       <div className="text-center d-flex justify-content-center align-items-center mb-3">
//         <img
//           src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
//           style={{ height: '40px', width: 'auto' }} // Adjust the height as needed
//           className="me-2"
//           alt="Bootstrap Logo"
//         />
//         <h1 style={{ fontSize: '40px', margin: 0 }}>My News Website</h1> {/* Match font size with image height */}
//       </div>
//     );
//   };

// const NavBar = ({ onSelectCategory }) => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           Navbar
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div
//           className="collapse navbar-collapse justify-content-center"
//           id="navbarNav"
//         >
//           <ul className="navbar-nav">
//             {["home", "world", "local", "weather", "sports", "politics"].map(
//               (category) => (
//                 <li className="nav-item" key={category}>
//                   <a
//                     className="nav-link active"
//                     onClick={() => onSelectCategory(category)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     {category.charAt(0).toUpperCase() + category.slice(1)}
//                   </a>
//                 </li>
//               )
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // News data structure
// const newsData = {
//   home: [
//     {
//       title: "Breaking: Major Event Happens",
//       details: "Details about the major event that just happened.",
//     },
//     {
//       title: "Local Heroes Save the Day",
//       details: "Story of local heroes who helped in a crisis.",
//     },
//     {
//       title: "In-Depth Analysis of Current Events",
//       details: "An in-depth analysis of what’s happening in the world today.",
//     },
//     {
//       title: "Top Trends in Tech Today",
//       details: "Discussion about the latest trends in technology.",
//     },
//   ],
//   world: [
//     {
//       title: "World News 1",
//       details: "Details about World News 1.",
//     },
//     {
//       title: "World News 2",
//       details: "Details about World News 2.",
//     },
//   ],
//   local: [
//     {
//       title: "Local News 1",
//       details: "Details about Local News 1.",
//     },
//     {
//       title: "Local News 2",
//       details: "Details about Local News 2.",
//     },
//   ],
//   weather: [
//     {
//       title: "Weather News 1",
//       details: "Details about Weather News 1.",
//     },
//     {
//       title: "Weather News 2",
//       details: "Details about Weather News 2.",
//     },
//   ],
//   sports: [
//     {
//       title: "Sports News 1",
//       details: "Details about Sports News 1.",
//     },
//     {
//       title: "Sports News 2",
//       details: "Details about Sports News 2.",
//     },
//   ],
//   politics: [
//     {
//       title: "Politics News 1",
//       details: "Details about Politics News 1.",
//     },
//     {
//       title: "Politics News 2",
//       details: "Details about Politics News 2.",
//     },
//   ],
// };

// const LatestNews = ({ category, onSelectNews }) => {
//   return (
//     <div className="mx-3">
//       <h1 className="mt-2 mb-2">
//         {category.charAt(0).toUpperCase() + category.slice(1)} News
//       </h1>
//       {newsData[category].map((news, index) => (
//         <div className="pt-1" key={index} onClick={() => onSelectNews(news)}>
//           <p style={{ cursor: "pointer" }}>{news.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// const NewsDetail = ({ news }) => {
//   if (!news) return null;

//   return (
//     <div className="mx-3">
//       <h2 className="mt-2 mb-2">{news.title}</h2>
//       <p>{news.details}</p>
//     </div>
//   );
// };

// const Comments = () => {
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([]);

//   const handleCommentChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (comment.trim()) {
//       setComments([...comments, comment]);
//       setComment("");
//     }
//   };

//   return (
//     <div className="mx-3">
//       <h2 className="mt-2 mb-2">Add Comment</h2>
//       <form onSubmit={handleCommentSubmit}>
//         <textarea
//           value={comment}
//           onChange={handleCommentChange}
//           placeholder="Write your comment here..."
//           rows="4"
//           className="form-control mb-2"
//         />
//         <button className="btn btn-outline-primary" type="submit">
//           Submit
//         </button>
//       </form>
//       <div className="mt-2">
//         <h3>All Comments:</h3>
//         <ul>
//           {comments.map((c, index) => (
//             <li key={index}>{c}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// const MainContent = ({ activeCategory, selectedNews, onSelectNews }) => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-8 d-flex justify-content-center">
//           <div className="w-100">
//             {selectedNews ? (
//               <NewsDetail news={selectedNews} />
//             ) : (
//               <LatestNews
//                 category={activeCategory}
//                 onSelectNews={onSelectNews}
//               />
//             )}
//           </div>
//         </div>
//         <div className="col-md-4">
//           <Comments />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Footer = () => {
//   return (
//     <>
//       <div className="bg-dark row d-flex align-items-center">
//         <p className="text-white col-10 mb-0">My News Website</p>
//         <div className="col-2 d-flex justify-content-end">
//           <a className="text-white" href="#">
//             About Us
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// const App = () => {
//   const [activeCategory, setActiveCategory] = useState("home"); // Default to home
//   const [selectedNews, setSelectedNews] = useState(null); // For storing selected news details

//   const handleSelectCategory = (category) => {
//     setActiveCategory(category);
//     setSelectedNews(null); // Reset selected news when category changes
//   };

//   const handleSelectNews = (news) => {
//     setSelectedNews(news);
//   };

//   return (
//     <>
//       <Header />
//       <NavBar onSelectCategory={handleSelectCategory} />
//       <MainContent
//         activeCategory={activeCategory}
//         selectedNews={selectedNews}
//         onSelectNews={handleSelectNews}
//       />
//       <Footer />
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";

const Header = () => {
  return (
    <div className="text-center d-flex justify-content-center align-items-center mb-3">
      <img
        src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
        style={{ height: "40px", width: "auto" }} // Adjust the height as needed
        className="me-2"
        alt="Bootstrap Logo"
      />
      <h1 style={{ fontSize: "40px", margin: 0 }}>My News Website</h1>{" "}
      {/* Match font size with image height */}
    </div>
  );
};

const NavBar = ({ onSelectCategory, onLogin }) => {
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     <div
    //       className="collapse navbar-collapse justify-content-center"
    //       id="navbarNav"
    //     >
    //       <ul className="navbar-nav">
    //         {["home", "world", "local", "weather", "sports", "politics"].map(
    //           (category) => (
    //             <li className="nav-item" key={category}>
    //               <a
    //                 className="nav-link active"
    //                 onClick={() => onSelectCategory(category)}
    //                 style={{ cursor: "pointer" }}
    //               >
    //                 {category.charAt(0).toUpperCase() + category.slice(1)}
    //               </a>
    //             </li>
    //           )
    //         )}
    //       </ul>
    //     </div>
    //     <button className="btn btn-outline-success" onClick={onLogin}>
    //       Login
    //     </button>
    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {["home", "world", "local", "weather", "sports", "politics"].map(
              (category) => (
                <li className="nav-item mx-2" key={category}>
                  {" "}
                  {/* Add mx-2 for horizontal spacing */}
                  <a
                    className="nav-link active"
                    onClick={() => onSelectCategory(category)}
                    style={{ cursor: "pointer" }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <button className="btn btn-outline-success" onClick={onLogin}>
          Login
        </button>
      </div>
    </nav>
  );
};

const Login = ({ onLoginSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a login success
    onLoginSuccess();
  };

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input type="text" className="form-control" id="username" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

// News data structure
const newsData = {
  home: [
    {
      title: "Breaking: Major Event Happens",
      details: "Details about the major event that just happened.",
    },
    {
      title: "Local Heroes Save the Day",
      details: "Story of local heroes who helped in a crisis.",
    },
    {
      title: "In-Depth Analysis of Current Events",
      details: "An in-depth analysis of what’s happening in the world today.",
    },
    {
      title: "Top Trends in Tech Today",
      details: "Discussion about the latest trends in technology.",
    },
  ],
  world: [
    {
      title: "World News 1",
      details: "Details about World News 1.",
    },
    {
      title: "World News 2",
      details: "Details about World News 2.",
    },
  ],
  local: [
    {
      title: "Local News 1",
      details: "Details about Local News 1.",
    },
    {
      title: "Local News 2",
      details: "Details about Local News 2.",
    },
  ],
  weather: [
    {
      title: "Weather News 1",
      details: "Details about Weather News 1.",
    },
    {
      title: "Weather News 2",
      details: "Details about Weather News 2.",
    },
  ],
  sports: [
    {
      title: "Sports News 1",
      details: "Details about Sports News 1.",
    },
    {
      title: "Sports News 2",
      details: "Details about Sports News 2.",
    },
  ],
  politics: [
    {
      title: "Politics News 1",
      details: "Details about Politics News 1.",
    },
    {
      title: "Politics News 2",
      details: "Details about Politics News 2.",
    },
  ],
};

const LatestNews = ({ category, onSelectNews }) => {
  return (
    <div className="mx-3">
      <h1 className="mt-2 mb-2">
        {category.charAt(0).toUpperCase() + category.slice(1)} News
      </h1>
      {newsData[category].map((news, index) => (
        <div className="pt-1" key={index} onClick={() => onSelectNews(news)}>
          <p style={{ cursor: "pointer" }}>{news.title}</p>
        </div>
      ))}
    </div>
  );
};

const NewsDetail = ({ news }) => {
  if (!news) return null;

  return (
    <div className="mx-3">
      <h2 className="mt-2 mb-2">{news.title}</h2>
      <p>{news.details}</p>
    </div>
  );
};

const Comments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="mx-3">
      <h2 className="mt-2 mb-2">Add Comment</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write your comment here..."
          rows="4"
          className="form-control mb-2"
        />
        <button className="btn btn-outline-primary" type="submit">
          Submit
        </button>
      </form>
      <div className="mt-2">
        <h3>All Comments:</h3>
        <ul>
          {comments.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MainContent = ({ activeCategory, selectedNews, onSelectNews }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 d-flex justify-content-center">
          <div className="w-100">
            {selectedNews ? (
              <NewsDetail news={selectedNews} />
            ) : (
              <LatestNews
                category={activeCategory}
                onSelectNews={onSelectNews}
              />
            )}
          </div>
        </div>
        <div className="col-md-4">
          <Comments />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <div className="bg-dark row d-flex align-items-center">
        <p className="text-white col-10 mb-0 ">My News Website</p>
        <div className="col-2 d-flex justify-content-end">
          <a className="text-white" href="#">
            About Us
          </a>
        </div>
      </div>
    </>
  );
};

const App = () => {
  const [activeCategory, setActiveCategory] = useState("home");
  const [selectedNews, setSelectedNews] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleSelectCategory = (category) => {
    setActiveCategory(category);
    setSelectedNews(null);
  };

  const handleSelectNews = (news) => {
    setSelectedNews(news);
  };

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <div className="">
      <Header />
      <NavBar onSelectCategory={handleSelectCategory} onLogin={handleLogin} />
      {showLogin ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <MainContent
          activeCategory={activeCategory}
          selectedNews={selectedNews}
          onSelectNews={handleSelectNews}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;