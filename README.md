# 🎨 BlockForge Studio

## The Voxel Manufacturing Suite

**Turn digital concepts into physical brick masterpieces.**

A high-performance, browser-based visualization suite built with **Three.js**.

</div>

---

## 🔮 Overview

**BlockForge Studio** is the public-facing interface for the BlockForge ecosystem. It is a suite of six specialized web tools that allow users to visualize, customize, and configure complex brick-based products in real-time.

While the heavy lifting (voxelization algorithms, greedy meshing, and STL parsing) is handled by our proprietary Python backend, this repository houses the **lightweight, interaction-heavy frontend** that delivers a seamless user experience at 60FPS.

> **The Goal:** Bridge the gap between digital 3D models and physical brick manufacturing instructions.

---

## 🖼️ The Studio Suite

We have moved beyond simple model viewers. The platform creates specific manufacturing pipelines for six distinct product types:

| Product Engine | Function | Use Case |
| :--- | :--- | :--- |
| **1. 🧊 3D Studio** | **STL ➔ Bricks** | Complex geometry, mascots, and character models. |
| **2. 🖼️ Mosaic Studio** | **Image ➔ Pixel Art** | Wall art, portraits, and wedding gifts. |
| **3. 🏔️ Relief Studio** | **Heightmap ➔ Topography** | 3D bas-relief maps and textured landscapes. |
| **4. 📱 Connect Studio** | **Data ➔ Functional QR** | Scannable brick signage for hospitality. |
| **5. 🔠 Sign Studio** | **Text ➔ Structure** | Vertical, structurally sound desk nameplates. |
| **6. 🏠 Architect Studio** | **Photo ➔ Facade** | Detailed architectural replicas for real estate. |

---

## ✨ Interactive Features

This isn't just a viewer—it's a full configuration engine running in the browser.

### 🎨 The "Painter" Engine

* **Precision Raycasting:** Custom implementation for pixel-perfect brick selection on complex 3D meshes.
* **Smart Palettes:** Users can swap colors globally or paint individual voxels.
* **Real-Time Costing:** Logic instantly calculates price based on part count (1x1 vs 1x4 plates) as you modify the model.

### ⚙️ Client-Side Generation

* **Instant PDF Instructions:** The app generates step-by-step build guides (using `jspdf`) directly in the client—no server wait times.
* **Dynamic STL Export:** For models with irregular footprints, the app procedurally generates and exports a 3D-printable baseplate file on the fly.

---

## 🏗️ Architecture & Data Flow

BlockForge uses a decoupled architecture to protect IP while ensuring high frontend performance.

```mermaid
graph LR
    subgraph "Private Backend (Python)"
    A[Raw Input (STL/Img)] -->|Voxelization & Greedy Tiling| B(Optimization Engine)
    B -->|Export| C[Lightweight JSON]
    end
    
    subgraph "Public Frontend (This Repo)"
    C -->|Fetch| D[Three.js Parser]
    D -->|Hydrate| E[Interactive Mesh]
    E -->|User Config| F[PDF / Order Data]
    end
    
    style B fill:#f96,stroke:#333,stroke-width:2px
    style D fill:#61dafb,stroke:#333,stroke-width:2px
````

1. **The Backend:** Python/NumPy processes raw STLs, converting them into optimized brick coordinates.
2. **The Handoff:** Data is compressed into a custom JSON schema defining brick positions, types, and colors.
3. **The Frontend:** This repo consumes the JSON, instantiates geometry, and handles all user interaction, camera controls, and export logic.

---

## 🚀 Quick Start

This project is built with **Vanilla JS** and **Three.js** via CDN. It requires zero build steps, no Webpack, and no Node modules.

1. **Clone the repo**

    ```bash
    git clone [https://github.com/JamesTheGiblet/brickforge_demo.git](https://github.com/JamesTheGiblet/brickforge_demo.git)
    ```

2. **Run Locally**
    Since this uses ES6 modules and fetches JSON, you must run it on a local server (opening `file://` will block CORS).

    ```bash
    # Python 3
    python -m http.server

    # or VS Code "Live Server" extension
    ```

3. **Launch**
    Open `localhost:8000` to see the **Hub**, which links to all 6 tools.

---

## 🎮 Live Models to Try

The demo comes pre-loaded with assets to demonstrate specific engine capabilities:

* **🧸 The Bear (`3d.html`):** Tests the engine's ability to render complex curves and internal structural integrity.
* **🔠 BadAss Sign (`sign.html`):** Demonstrates vertical stacking logic and text kerning.
* **📱 WiFi QR (`qr.html`):** Shows off the functional contrast algorithm—this model is actually scannable\!

---

## 📞 Licensing & Contact

**BlockForge Studio** is a proprietary platform.

* **Frontend (Viewer):** MIT License (Open Source).
* **Backend (Voxel Engine):** Private Proprietary.

*Interested in licensing the engine for your e-commerce brand?*  

📩 **Contact:** <hello@blockforgestudio.com>

---

\<div align="center"\>
\<i\>Built with ❤️ by Giblets Creations\</i\>
\</div\>
