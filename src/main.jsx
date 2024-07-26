import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
// import Header from './Components/Header/Header.jsx'
import Blog from './Components/Blog/Blog.jsx'
import Contact from './Components/Contact/Contact.jsx'
// import { BrowserRouter, Routes, Route } from "react-router-dom";


// ----------------first method to make router--------------
const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    
  },
  {
    path: '/',
    element: <Home />,
    
  },
    {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/Contact",
    element: <Contact/>
  },
  
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
    
//     <Route path='/' element={<Layout /} >
//       </Route>

//   )
// )
// const router = createBrowserRouter(
// <BrowserRouter>
// <Header />
//        <Routes>
//          <Route path="/" element={<Layout />}>
//                <Route index element={<Home />} />
//          <Route path="blog" element={<Blog />} />
//            <Route path="contact" element={<Contact />} />
//          </Route>
//        </Routes>
//      </BrowserRouter>
//  )
//  <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blog" element={<Blog />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter> 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
