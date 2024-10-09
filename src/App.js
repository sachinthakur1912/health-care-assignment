// // App.js
// import React from "react";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import "./App.css";
// import logo from "./images/wsi.png";

// const App = () => {
//   // Whole Slide Image (WSI) data
//   const wsiImage = logo; // Replace with actual WSI image path
//   const thumbnailImage = logo; // Optional thumbnail image

//   return (
//     <div className="viewer-container">
//       {/* Left Panel - Finding Details */}
//       <div className="left-panel">
//         <h2>Finding Details</h2>
//         <p>
//           This is where you provide detailed information about the current
//           findings in the slide.
//         </p>
//         <p>Include relevant medical or diagnostic details.</p>
//       </div>

//       {/* Main Viewer */}
//       <div className="main-viewer">
//         <TransformWrapper initialScale={1} wheel={{ step: 0.1 }}>
//           {({ zoomIn, zoomOut, resetTransform }) => (
//             <>
//               <div className="zoom-controls">
//                 <button
//                   className="bg-slate-300 rounded-lg"
//                   onClick={() => zoomIn()}
//                 >
//                   Zoom In
//                 </button>
//                 <button
//                   className="bg-slate-300 rounded-lg"
//                   onClick={() => zoomOut()}
//                 >
//                   Zoom Out
//                 </button>
//                 <button
//                   className="bg-slate-300 rounded-lg"
//                   onClick={() => resetTransform()}
//                 >
//                   Reset
//                 </button>
//               </div>
//               <TransformComponent>
//                 <img
//                   src={wsiImage}
//                   alt="Whole Slide Image"
//                   className="wsi-image"
//                 />
//               </TransformComponent>
//             </>
//           )}
//         </TransformWrapper>
//       </div>

//       {/* Top-right Panel - Hub View */}
//       <div className="hub-view">
//         <h3>Hub View</h3>
//         <img src={thumbnailImage} alt="WSI Thumbnail" className="thumbnail" />
//         <p>This shows an overview of the Whole Slide Image.</p>
//       </div>
//     </div>
//   );
// };

// export default App;
// App.js
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import logo from "./images/wsi.png";
import "./App.css";

const App = () => {
  const wsiImage = logo; // Replace with your actual WSI image
  const thumbnailImage = logo; // Optional hub view thumbnail

  return (
    <div className="viewer-container">
      {/* Left Panel */}
      <div className="left-panel">
        <h2>Slide Details</h2>
        <p>
          <strong>Diagnosis:</strong> Example Diagnosis
        </p>
        <p>
          <strong>Description:</strong> This section provides relevant medical
          details about the slide.
        </p>
        <p>
          <strong>Recommendation:</strong> Recommended treatment or further
          analysis here.
        </p>
      </div>

      {/* Main Viewer */}
      <div className="main-viewer">
        <TransformWrapper
          initialScale={1}
          wheel={{ step: 0.1 }}
          options={{ centerContent: true }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <div className="zoom-controls">
                <button className="zoom-btn" onClick={() => zoomIn()}>
                  🔍 Zoom In
                </button>
                <button className="zoom-btn" onClick={() => zoomOut()}>
                  🔎 Zoom Out
                </button>
                <button className="zoom-btn" onClick={() => resetTransform()}>
                  🔄 Reset
                </button>
              </div>
              <TransformComponent>
                <img
                  src={wsiImage}
                  alt="Whole Slide Image"
                  className="wsi-image"
                />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>

      {/* Hub View (Top-right) */}
      <div className="hub-view">
        <h3>Overview</h3>
        <img src={thumbnailImage} alt="WSI Thumbnail" className="thumbnail" />
        <p>
          This thumbnail shows an overview of the slide, indicating your current
          zoom area.
        </p>
      </div>
    </div>
  );
};

export default App;
